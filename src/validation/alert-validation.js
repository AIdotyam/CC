const Joi = require("joi");

const updateAlertValidation = Joi.object({
  uid: Joi.string().required(),
  id: Joi.number().required(),
  isRead: Joi.boolean().required(),
});

module.exports = { updateAlertValidation };
