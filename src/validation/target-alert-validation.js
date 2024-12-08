const Joi = require("joi");

const getTargetAlertValidation = Joi.object({
  uid: Joi.string().required(),
});

const createTargetAlertValidation = Joi.object({
  uid: Joi.string().required(),
  name: Joi.string().max(256).required(),
  fcm: Joi.string().max(512).required(),
});

const updateTargetAlertValidation = Joi.object({
  uid: Joi.string().required(),
  name: Joi.string().max(256).optional(),
  fcm: Joi.string().max(512).optional(),
});

module.exports = {
  getTargetAlertValidation,
  createTargetAlertValidation,
  updateTargetAlertValidation,
};
