const express = require("express");
const authMiddleware = require("../middleware/auth-middleware.js");
const farmerController = require("../controller/farmer-controller.js");
const targetAlertController = require("../controller/target-alert-controller.js");
const processController = require("../controller/process.controller.js");

const protectedRouter = new express.Router();
protectedRouter.use(authMiddleware);

// Farmer API
protectedRouter.post("/api/farmers", farmerController.create);
protectedRouter.put("/api/farmers", farmerController.update);

// Target Alert API
protectedRouter.post("/api/target-alerts", targetAlertController.get);
protectedRouter.patch("/api/target-alerts", targetAlertController.update);

// Process API
protectedRouter.post("/api/process", processController.create);

module.exports = { protectedRouter };
