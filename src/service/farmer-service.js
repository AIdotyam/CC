const { validate } = require("../validation/validation.js");
const {
  createFarmerValidation,
  updateFarmerValidation,
} = require("../validation/farmer-validation.js");
const { prismaClient } = require("../application/database.js");
const { ResponseError } = require("../error/response-error.js");

const create = async (request) => {
  const createRequest = validate(createFarmerValidation, request);

  const farmerCount = await prismaClient.farmer.count({
    where: { uid: createRequest.uid },
  });

  if (farmerCount === 1) {
    throw new ResponseError(400, "Farmer already exists");
  }

  return await prismaClient.farmer.create({
    data: createRequest,
    select: { name: true, email: true },
  });
};

const update = async (request) => {
  const updateRequest = validate(updateFarmerValidation, request);

  const farmerCount = await prismaClient.farmer.count({
    where: { uid: updateRequest.uid },
  });

  if (farmerCount === 0) {
    throw new ResponseError(404, "Farmer not found");
  }

  return await prismaClient.farmer.update({
    where: { uid: updateRequest.uid },
    data: { name: updateRequest.name },
    select: { name: true, email: true },
  });
};

module.exports = { create, update };
