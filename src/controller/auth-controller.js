const authService = require("../service/alert-service.js");

const authGoogle = async (req, res, next) => {
  try {
    const token = req.body.token;
    const result = await authService.get(token);
    const responseData = { name: result.name, email: result.email };
    res.status(result.status).json({
      data: responseData,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = { authGoogle };
