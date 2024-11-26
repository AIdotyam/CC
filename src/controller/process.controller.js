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
    const dataResponse = {
      media_url: result.mediaUrl,
      dead_chicken: result.deadChicken,
      created_at: result.createdAt,
      is_alert: result.isAlert,
    };

    res.status(201).json({
      data: dataResponse,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = { create };
