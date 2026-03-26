const jwt = require("jsonwebtoken");
const { blacklist } = require("../controller/logout");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
     console.log("❌ No token");
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  console.log("token authmiddleware", token);

  if (blacklist.includes(token)) {
     console.log("❌ Token is blacklisted");
    return res.status(401).json({ message: "Token invalid" });
  }

  jwt.verify(token, "SECRET_KEY", (err, user) => {
    if (err) {
      console.log("❌ JWT ERROR 👉", err.message);  // 🔥 IMPORTANT
      return res.status(403).json({ message: "Invalid token" });
    }
     console.log("✅ DECODED 👉", user);
    
    req.user = user; // ✅ VERY IMPORTANT
    next();
  });
};

module.exports = authMiddleware;
