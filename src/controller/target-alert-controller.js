const targetAlertService = require("../service/target-alert-service.js");

const get = async (req, res, next) => {
  try {
    const user = req.user;
    const request = { uid: user.uid };
    const result = await targetAlertService.get(request);

    responseData = {
      phone_number: result.phoneNumber ?? null,
      fcm: result.fcm ?? null,
    };

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
    if (req.body.phone_number && req.body.fcm) {
      dataRequest.fcm = req.body.fcm;
      dataRequest.phoneNumber = req.body.phone_number;
    }
    const request = { uid: user.uid, ...dataRequest };
    const result = await targetAlertService.create(request);
    res.status(201).json({
      data: {
        phone_number: result.phoneNumber,
        fcm: result.fcm,
      },
    });
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const user = req.user;
    const dataRequest = {};

    if (req.body.phone_number || req.body.phone_number === null) {
      dataRequest.phoneNumber = req.body.phone_number;
    }

    if (req.body.fcm || req.body.fcm === null) {
      dataRequest.fcm = req.body.fcm;
    }
    const request = { uid: user.uid, ...dataRequest };
    const result = await targetAlertService.update(request);
    res.status(200).json({
      data: {
        phone_number: result.phoneNumber,
        fcm: result.fcm,
      },
    });
  } catch (e) {
    next(e);
  }
};

module.exports = { get, create, update };
