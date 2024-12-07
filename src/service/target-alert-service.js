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
    select: { email: true, phoneNumber: true, fcm: true },
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
      fcm: true,
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
  if (updateRequest.email || updateRequest.email === null) {
    updatedData.email = updateRequest.email;
  }
  if (updateRequest.phoneNumber || updateRequest.phoneNumber === null) {
    updatedData.phoneNumber = updateRequest.phoneNumber;
  }

  if (updateRequest.fcm || updateRequest.fcm === null) {
    updatedData.fcm = updateRequest.fcm;
  }

  return await prismaClient.targetAlert.update({
    where: { farmerUid: updateRequest.uid },
    data: updatedData,
    select: {
      phoneNumber: true,
      email: true,
      fcm: true,
    },
  });
};

module.exports = { get, create, update };
