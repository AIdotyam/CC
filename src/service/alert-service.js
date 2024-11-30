const { validate } = require("../validation/validation.js");
const { prismaClient } = require("../application/database.js");
const { ResponseError } = require("../error/response-error.js");
const { updateAlertValidation } = require("../validation/alert-validation.js");

const get = async (uid) => {
  const farmerCount = await prismaClient.farmer.count({ where: { uid: uid } });

  if (farmerCount === 0) {
    throw new ResponseError(404, "Farmer not found");
  }
  const result = await prismaClient.historyAlert.findMany({
    where: { farmerUid: uid },
    include: {
      captureResult: true,
    },
  });

  return result;
};

const update = async (request) => {
  const updateRequest = validate(updateAlertValidation, request);

  const farmerCount = await prismaClient.farmer.count({
    where: { uid: updateRequest.uid },
  });

  if (farmerCount === 0) {
    throw new ResponseError(404, "Farmer not found");
  }

  const alert = await prismaClient.historyAlert.findFirst({
    where: { id: updateRequest.id },
  });

  if (!alert) {
    throw new ResponseError(404, "Alert not found");
  }

  await prismaClient.historyAlert.update({
    where: { id: updateRequest.id },
    data: {
      isRead: updateRequest.isRead,
    },
  });

  return await prismaClient.historyAlert.findFirst({
    where: { id: updateRequest.id },
    include: { captureResult: true },
  });
};

module.exports = { get, update };
