const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "default_zerodha_jwt_secret";

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ error: "Access denied. Token missing." });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Access denied. Token invalid." });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified; // verified contains userId, username, email
    next();
  } catch (err) {
    return res.status(403).json({ error: "Invalid or expired token." });
  }
}

module.exports = { verifyToken, JWT_SECRET };
