const express = require("express");

const publicRouter = new express.Router();

publicRouter.get("/", (req, res, next) => {
  res.status(200).json({ test: "GET /" });
});

module.exports = { publicRouter };
