const processService = require("../service/process-service.js");

const create = async (req, res, next) => {
  try {
    if (!req.file) {
      throw new ResponseError(400, "File is required");
    }
    const file = req.file;
    const user = req.user;
    const uid = user.uid;
    const result = await processService.create(uid, file);
    res.status(201).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = { create };
