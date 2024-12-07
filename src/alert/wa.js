const axios = require("axios");

async function sendWA(phoneNumber) {
  const data = {
    target: phoneNumber,
    message:
      "ALERT! Chicken Death Detected. Please take immediate action to address the issue!",
  };

  const url = "https://api.fonnte.com/send";

  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.FONNTE_WA_TOKEN,
      },
    });
    console.log("response WA: " + response);
    console.log("Successfully sent alert WA.");
  } catch (error) {
    console.error("Error sending alert WA.");
    console.error(error.response?.data || error.message);
  }
}

module.exports = { sendWA };
