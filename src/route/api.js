const express = require("express");
const authMiddleware = require("../middleware/auth-middleware.js");

const protectedRouter = new express.Router();
protectedRouter.use(authMiddleware);

module.exports = { protectedRouter };
