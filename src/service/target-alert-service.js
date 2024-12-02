const { validate } = require("../validation/validation.js");
const {
  getTargetAlertValidation,
  createTargetAlertValidation,
  updateTargetAlertValidation,
} = require("../validation/target-alert-validation.js");
const { prismaClient } = require("../application/database.js");
const { ResponseError } = require("../error/response-error.js");

const get = async (request) => {
  const getRequest = validate(getTargetAlertValidation, request);

  const farmerCount = await prismaClient.farmer.count({
    where: { uid: getRequest.uid },
  });

  if (farmerCount === 0) {
    throw new ResponseError(404, "Farmer not found");
  }

  return await prismaClient.targetAlert.findFirst({
    where: { farmerUid: getRequest.uid },
    select: { email: true, phoneNumber: true },
  });
};

const create = async (request) => {
  const createRequest = validate(createTargetAlertValidation, request);

  const farmerCount = await prismaClient.farmer.count({
    where: { uid: createRequest.uid },
  });

  if (farmerCount === 0) {
    throw new ResponseError(404, "Farmer not found");
  }
  return await prismaClient.targetAlert.create({
    data: {
      email: createRequest.email,
      phoneNumber: createRequest.phoneNumber,
      farmerUid: createRequest.uid,
    },
    select: {
      phoneNumber: true,
      email: true,
    },
  });
};

const update = async (request) => {
  const updateRequest = validate(updateTargetAlertValidation, request);

  const farmerCount = await prismaClient.farmer.count({
    where: { uid: updateRequest.uid },
  });

  if (farmerCount === 0) {
    throw new ResponseError(404, "Farmer not found");
  }

  const updatedData = {};
  if (updateRequest.email) {
    updatedData.email = updateRequest.email;
  }
  if (updateRequest.phoneNumber) {
    updatedData.phoneNumber = updateRequest.phoneNumber;
  }

  return await prismaClient.targetAlert.update({
    where: { farmerUid: updateRequest.uid },
    data: updatedData,
    select: {
      phoneNumber: true,
      email: true,
    },
  });
};

module.exports = { get, create, update };
