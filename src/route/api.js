const express = require("express");
const authMiddleware = require("../middleware/auth-middleware.js");
const farmerController = require("../controller/farmer-controller.js");
const targetAlertController = require("../controller/target-alert-controller.js");
const processController = require("../controller/process.controller.js");
const alertController = require("../controller/alert-controller.js");
const { upload } = require("../utils/storage.js");

const protectedRouter = new express.Router();
protectedRouter.use(authMiddleware);

// Farmer API
protectedRouter.post("/api/farmers", farmerController.create);
protectedRouter.put("/api/farmers", farmerController.update);

// Target Alert API
protectedRouter.post("/api/target-alerts", targetAlertController.get);
protectedRouter.patch("/api/target-alerts", targetAlertController.update);

// Process API
protectedRouter.post(
  "/api/process",
  upload.single("file"),
  processController.create
);

// Alert API
protectedRouter.get("/api/alerts", alertController.get);
protectedRouter.patch("/api/alerts/:id", alertController.update);

module.exports = { protectedRouter };
