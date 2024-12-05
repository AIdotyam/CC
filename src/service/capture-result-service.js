const { validate } = require("../validation/validation.js");
const { prismaClient } = require("../application/database.js");
const { ResponseError } = require("../error/response-error.js");
const {
  getCaptureResultValidation,
} = require("../validation/capture-result-validation.js");

const get = async (request) => {
  const getRequest = validate(getCaptureResultValidation, request);

  const farmerCount = await prismaClient.farmer.count({
    where: { uid: getRequest.uid },
  });

  if (farmerCount === 0) {
    throw new ResponseError(404, "Farmer not found");
  }

  const result = await prismaClient.captureResult.findMany({
    where: { farmerUid: getRequest.uid },
    select: {
      id: true,
      mediaUrl: true,
      createdAt: true,
      deadChicken: true,
    },
  });

  return result;
};

module.exports = { get };
