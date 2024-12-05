const captureResultService = require("../service/capture-result-service.js");

const get = async (req, res, next) => {
  try {
    const request = { uid: req.user.uid };
    const result = await captureResultService.get(request);

    const captureResultResponse = result
      .map((captureResult) => {
        return {
          id: captureResult.id,
          media_url: captureResult.mediaUrl,
          created_at: captureResult.createdAt,
          dead_chicken: captureResult.deadChicken,
        };
      })
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    res.status(200).json({
      data: captureResultResponse,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = { get };
