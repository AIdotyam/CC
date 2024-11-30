const { ResponseError } = require("../error/response-error.js");
const { ValidationError } = require("joi");

const errorMiddleware = async (err, req, res, next) => {
  if (!err) {
    next();
    return;
  }

  if (err instanceof ResponseError) {
    res.status(err.status).json({ errors: err.message }).end();
  } else if (err instanceof ValidationError) {
    res.status(400).json({ errors: err.message }).end();
  } else {
    res.status(500).json({ errors: err.message }).end();
  }
};

module.exports = { errorMiddleware };
