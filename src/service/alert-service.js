const { validate } = require("../validation/validation.js");
const { prismaClient } = require("../application/database.js");
const { ResponseError } = require("../error/response-error.js");
const { updateAlertValidation } = require("../validation/alert-validation.js");

const get = async (uid) => {
  const farmerCount = await prismaClient.farmer.count({ where: uid });

  if (farmerCount === 0) {
    throw new ResponseError(404, "Farmer not found");
  }

  return await prismaClient.historyAlert.findMany({
    where: { farmerUid: uid },
    select: { id: true, isRead: true },
    include: {
      captureResult: {
        select: {
          mediaUrl: true,
          createdAt: true,
        },
      },
    },
  });
};

const update = async (request) => {
  const updateRequest = validate(updateAlertValidation, request);
  const farmerCount = await prismaClient.farmer.count({
    where: updateRequest.uid,
  });
  if (farmerCount === 0) {
    throw new ResponseError(404, "Farmer not found");
  }

  return await prismaClient.historyAlert.update({
    where: { id: updateRequest.id },
    data: {
      isRead: updateRequest.isRead,
    },
    select: { id: true, isRead: true },
    include: { captureResult: { select: { mediaUrl: true, createdAt: true } } },
  });
};

module.exports = { get, update };
