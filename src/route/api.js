const express = require("express");
const authMiddleware = require("../middleware/auth-middleware.js");
const farmerController = require("../controller/farmer-controller.js");
const targetAlertController = require("../controller/target-alert-controller.js");

const protectedRouter = new express.Router();
protectedRouter.use(authMiddleware);

// Farmer API
protectedRouter.post("/api/farmers", farmerController.create);
protectedRouter.put("/api/farmers", farmerController.update);

// Target Alert API
protectedRouter.post("/api/farmers", targetAlertController.get);
protectedRouter.patch("/api/target-alerts", targetAlertController.update);

module.exports = { protectedRouter };
