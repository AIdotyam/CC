const targetAlertService = require("../service/target-alert-service.js");

const get = async (req, res, next) => {
  try {
    const user = req.user;
    const request = { uid: user.uid };
    const result = await targetAlertService.get(request);
    res.status(200).json({
      data: result,
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
    if (req.body.phoneNumber) {
      dataRequest.phoneNumber = req.body.phoneNumber;
    }
    const request = { uid: user.uid, ...dataRequest };
    const result = await targetAlertService.update(request);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = { get, update };
