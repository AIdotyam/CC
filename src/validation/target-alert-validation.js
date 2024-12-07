const Joi = require("joi");

const getTargetAlertValidation = Joi.object({
  uid: Joi.string().required(),
});

const createTargetAlertValidation = Joi.object({
  uid: Joi.string().required(),
  name: Joi.string().max(256).required(),
  email: Joi.string().max(256).required().email(),
  fcm: Joi.string().max(512).required(),
});

const updateTargetAlertValidation = Joi.object({
  uid: Joi.string().required(),
  name: Joi.string().max(256).optional(),
  email: Joi.string().max(256).optional().email(),
  fcm: Joi.string().max(512).optional(),
});

module.exports = {
  getTargetAlertValidation,
  createTargetAlertValidation,
  updateTargetAlertValidation,
};
