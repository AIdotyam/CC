const summaryService = require("../service/summary-service.js");

const get = async (req, res, next) => {
  try {
    const user = req.user;
    const result = await summaryService.get(user.uid);
    res.status(200).json({
      data: { alerts_summary: result },
    });
  } catch (e) {
    next(e);
  }
};

module.exports = { get };
