const Joi = require("joi");

const createFarmerValidation = Joi.object({
  uid: Joi.string().required(),
  name: Joi.string().max(256).required(),
  email: Joi.string().max(256).required().email(),
});

const updateFarmerValidation = Joi.object({
  uid: Joi.string().required(),
  name: Joi.string().max(256).required(),
});

module.exports = { createFarmerValidation, updateFarmerValidation };
