const Joi = require("joi");

const getCaptureResultValidation = Joi.object({
  uid: Joi.string().required(),
});

module.exports = { getCaptureResultValidation };
