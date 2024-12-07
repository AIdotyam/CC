const axios = require("axios");

async function triggerAlarm(url) {
  try {
    const data = {
      "ALERT!":
        "Chicken Death Detected. Please take immediate action to address the issue!",
    };
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response IoT: " + response);
    console.log("Successfully trigger alarm.");
  } catch (e) {
    console.error("Error trigger alarm.");
    console.error(e.response?.data || e.message);
  }
}

module.exports = { triggerAlarm };
