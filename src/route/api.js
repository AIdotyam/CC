const express = require("express");
const authMiddleware = require("../middleware/auth-middleware.js");
const farmerController = require("../controller/farmer-controller.js");
const targetAlertController = require("../controller/target-alert-controller.js");
const processController = require("../controller/process.controller.js");
const alertController = require("../controller/alert-controller.js");
const captureResultController = require("../controller/capture-result-controller.js");
const upload = require("../utils/multer-memory.js");

const protectedRouter = new express.Router();
protectedRouter.use(authMiddleware);

// Farmer API
protectedRouter.post("/api/farmers", farmerController.create);
protectedRouter.put("/api/farmers", farmerController.update);

// Target Alert API
protectedRouter.get("/api/target-alerts", targetAlertController.get);
protectedRouter.post("/api/target-alerts", targetAlertController.create);
protectedRouter.patch("/api/target-alerts", targetAlertController.update);

// Process API
protectedRouter.post(
  "/api/processes",
  upload.single("file"),
  processController.create
);

// Alert API
protectedRouter.get("/api/alerts", alertController.get);
protectedRouter.patch("/api/alerts/:id", alertController.update);

// Capture Result API
protectedRouter.get("/api/capture-results", captureResultController.get);

module.exports = { protectedRouter };
