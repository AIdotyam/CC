const { ResponseError } = require("../error/response-error.js");

const errorMiddleware = async (err, req, res, next) => {
  if (!err) {
    next();
    return;
  }

  if (err instanceof ResponseError) {
    res.status(err.status).json({ errors: err.message }).end();
  }
  if (err instanceof ValidationError) {
  } else {
    res.status(500).json({ errors: err.message }).end();
  }
};

module.exports = { errorMiddleware };
