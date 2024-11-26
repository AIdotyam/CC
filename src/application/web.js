const express = require("express");
const { publicRouter } = require("../route/public-api.js");
const { protectedRouter } = require("../route/api.js");
const { errorMiddleware } = require("../middleware/error-middleware.js");
require("../firebase/firebase-admin.js");
require("dotenv").config();

const web = express();
web.use(express.json());
web.use(publicRouter);
web.use(protectedRouter);
web.use(errorMiddleware);

module.exports = { web };
