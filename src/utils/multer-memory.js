const multer = require("multer");

const multerStorage = multer.memoryStorage();
const upload = multer({ storage: multerStorage });

module.exports = upload;
