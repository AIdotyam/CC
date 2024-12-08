const { prismaClient } = require("../application/database.js");
const { ResponseError } = require("../error/response-error.js");
const path = require("path");
const bucket = require("../utils/storage.js");
const axios = require("axios");
const FormData = require("form-data");
const { sendPushNotification } = require("../alert/send-push-notification.js");
const { sendWA } = require("../alert/wa.js");
const { triggerAlarm } = require("../alert/iot.js");

const create = async (uid, file) => {
  const farmerCount = await prismaClient.farmer.count({
    where: { uid: uid },
  });

  if (farmerCount === 0) {
    throw new ResponseError(404, "Farmer not found");
  }
  const formData = new FormData();
  formData.append("file", file.buffer, file.originalname);
  try {
    const response = await axios.post(process.env.MODEL_ENDPOINT, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const fileName = "media-" + Date.now() + path.extname(file.originalname);

    // Upload file ke Cloud Storage
    const fileUrl = await new Promise((resolve, reject) => {
      const blob = bucket.file(fileName);
      const blobStream = blob.createWriteStream({ resumable: false });

      blobStream.on("finish", () => {
        const url = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
        resolve(url);
      });

      blobStream.on("error", (err) => {
        reject(new ResponseError(500, "Error uploading file to cloud storage"));
      });

      blobStream.end(file.buffer);
    });

    let isAlert = false;

    // ALERTS
    if (response.data.dead_chicken) {
      isAlert = true;

      const targetAlert = await prismaClient.targetAlert.findFirst({
        where: { farmerUid: uid },
        select: { fcm: true, phoneNumber: true, iot: true },
      });

      if (targetAlert.fcm !== null) {
        sendPushNotification(targetAlert.fcm);
      }

      if (targetAlert.phoneNumber !== null) {
        sendWA(targetAlert.phoneNumber);
      }

      if (targetAlert.iot !== null) {
        triggerAlarm(targetAlert.iot);
      }
    }

    const captureResult = await prismaClient.captureResult.create({
      data: {
        deadChicken: response.data["dead_chicken"],
        createdAt: new Date(),
        mediaUrl: fileUrl,
        isAlert: isAlert,
        farmerUid: uid,
      },
      select: {
        id: true,
        mediaUrl: true,
        deadChicken: true,
        createdAt: true,
        isAlert: true,
      },
    });

    if (isAlert === true) {
      await prismaClient.historyAlert.create({
        data: {
          isRead: false,
          farmerUid: uid,
          captureResultId: captureResult.id,
        },
      });
    }
    return captureResult;
  } catch (e) {
    throw new ResponseError(500, e.message);
  }
};

module.exports = { create };
