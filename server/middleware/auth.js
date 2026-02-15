const tokens = require("../tokenStore");

module.exports = function requireAuth(req, res, next) {
  const token = (req.headers.authorization || "").replace("Bearer ", "");
  if ((req.session && req.session.isAdmin) || tokens.has(token)) {
    return next();
  }
  return res.status(401).json({ error: "Unauthorized. Please login first." });
};
