const farmerService = require("../service/farmer-service.js");

const create = async (req, res, next) => {
  try {
    const request = req.body;
    const result = await farmerService.create(request);
    res.status(201).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const user = req.user;
    const name = req.body.name;
    const request = { uid: user.uid, name: name };
    const result = await farmerService.update(request);
    res.status(201).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = { create, update };
