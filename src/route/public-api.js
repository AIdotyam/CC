const express = require("express");
const authController = require("../controller/auth-controller.js");

const publicRouter = new express.Router();

// Auth API
publicRouter.post("/api/auth/googles", authController.authGoogle);

module.exports = { publicRouter };
