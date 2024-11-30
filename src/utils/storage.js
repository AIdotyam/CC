const { Storage } = require("@google-cloud/storage");
const storage = new Storage({
  keyFilename: "../../credentials/storage.json",
});

const bucket = storage.bucket(process.env.BUCKET_NAME);

module.exports = bucket;