const alertService = require("../service/alert-service.js");

const get = async (req, res, next) => {
  try {
    const uid = req.user.uid;
    const result = await alertService.get(uid);
    const listAlerts = result.map((alert) => {
      return {
        id: alert.id,
        media_url: alert.captureResult.mediaUrl,
        created_at: alert.captureResult.createdAt,
        is_read: alert.isRead,
      };
    });

    listAlerts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    res.status(200).json({
      data: listAlerts,
    });
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const uid = req.user.uid;
    const isRead = req.body["is_read"];
    const result = await alertService.update({ id, uid, isRead });

    const alertResponse = {
      id: result.id,
      media_url: result.captureResult.mediaUrl,
      created_at: result.captureResult.createdAt,
      is_read: result.isRead,
    };
    res.status(200).json({
      data: alertResponse,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = { get, update };
