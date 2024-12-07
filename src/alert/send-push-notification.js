const admin = require("../firebase/firebase-admin.js");

const sendPushNotification = async (token) => {
  const message = {
    token,
    notification: {
      title: "ALERT! Chicken Death Detected.",
      body: "Please take immediate action to address the issue!",
    },
  };

  try {
    const response = await admin.messaging().send(message);
    console.log("Successfully sent alert:", response);
  } catch (error) {
    console.error("Error sending alert:", error);
  }
};

module.exports = { sendPushNotification };
