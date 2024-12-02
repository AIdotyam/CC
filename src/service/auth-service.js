const { prismaClient } = require("../application/database.js");
const { ResponseError } = require("../error/response-error.js");
const admin = require("../firebase/firebase-admin.js");

const googleAuth = async (token) => {
  if (!token) {
    throw new ResponseError(400, "Token is empty");
  }

  try {
    const firebaseUserData = await admin.auth().verifyIdToken(token);

    const farmer = {
      uid: firebaseUserData.user_id,
      email: firebaseUserData.email,
      name: firebaseUserData.name,
    };

    let responseStatus = 200;

    const farmerCount = await prismaClient.farmer.count({ uid: farmer.uid });

    if (farmerCount === 0) {
      await prismaClient.farmer.create({ data: farmer });
      responseStatus = 201;
    }
    farmer.status = responseStatus;

    return farmer;
  } catch (e) {
    throw new ResponseError(400, "Invalid token");
  }
};

module.exports = { googleAuth };
