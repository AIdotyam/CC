const Joi = require("joi");

const getTargetAlertValidation = Joi.object({
  uid: Joi.string().required(),
});

const updateTargetAlertValidation = Joi.object({
  uid: Joi.string().required(),
  name: Joi.string().max(256).optional(),
  email: Joi.string().max(256).optional().email(),
});

module.exports = { getTargetAlertValidation, updateTargetAlertValidation };
