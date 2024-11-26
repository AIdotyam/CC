const admin = require("firebase-admin");
const serviceAccount = require("../../credentials/firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

console.log("Firebase Admin SDK Initialized");

module.exports = admin;
