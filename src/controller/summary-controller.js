const summaryService = require("../service/summary-service.js");

const get = async (req, res, next) => {
  try {
    const user = req.user;
    const request = { uid: user.uid };
    const result = await summaryService.get(request);
    res.status(200).json({
      data: { alerts_summary: result },
    });
  } catch (e) {
    next(e);
  }
};

module.exports = { get };
