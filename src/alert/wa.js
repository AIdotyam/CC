const axios = require("axios");

async function sendWA(phoneNumber) {
  const data = {
    target: phoneNumber,
    message:
      "ALERT!\n\nChicken Death Detected. Please take immediate action to address the issue!",
  };

  const url = "https://api.fonnte.com/send";

  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.FONNTE_WA_TOKEN,
      },
    });
    console.log("Response send fonnte");
    console.log(response.data);
  } catch (error) {
    console.error("Error sending alert WA.");
    console.error(error.response?.data || error.message);
  }
}

module.exports = { sendWA };
