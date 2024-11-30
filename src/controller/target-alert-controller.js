const targetAlertService = require("../service/target-alert-service.js");

const get = async (req, res, next) => {
  try {
    const user = req.user;
    const request = { uid: user.uid };
    const result = await targetAlertService.get(request);
    let responseData = {};
    if (!result) {
      responseData = {
        email: null,
        phone_number: null,
      };
    } else {
      responseData = {
        email: result.email,
        phone_number: result.phoneNumber,
      };
    }
    res.status(200).json({
      data: responseData,
    });
  } catch (e) {
    next(e);
  }
};

const create = async (req, res, next) => {
  try {
    const user = req.user;
    const dataRequest = {};
    if (req.body.email && req.body["phone_number"]) {
      dataRequest.email = req.body.email;
      dataRequest.phoneNumber = req.body["phone_number"];
    }
    const request = { uid: user.uid, ...dataRequest };
    const result = await targetAlertService.create(request);
    res.status(201).json({
      data: { email: result.email, phone_number: result.phoneNumber },
    });
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const user = req.user;
    const dataRequest = {};
    if (req.body.email) {
      dataRequest.email = req.body.email;
    }
    if (req.body["phone_number"]) {
      dataRequest.phoneNumber = req.body["phone_number"];
    }
    const request = { uid: user.uid, ...dataRequest };
    const result = await targetAlertService.update(request);
    res.status(200).json({
      data: { email: result.email, phone_number: result.phoneNumber },
    });
  } catch (e) {
    next(e);
  }
};

module.exports = { get, create, update };
