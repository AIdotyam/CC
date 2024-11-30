const admin = require("../firebase/firebase-admin.js");

const authMiddleware = async (req, res, next) => {
  const idToken = req.get("Authorization");
  if (!idToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const user = await admin.auth().verifyIdToken(idToken);
    req.user = user;
    console.log(user);

    next();
  } catch (e) {
    return res.status(403).json({ message: "Forbidden" });
  }
};

module.exports = authMiddleware;
