const express = require("express");
const crypto = require("crypto");
const router = express.Router();
const tokens = require("../tokenStore");

const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "1234";

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    req.session.isAdmin = true;
    const token = crypto.randomBytes(32).toString("hex");
    tokens.add(token);
    return res.json({ message: "Login successful", token });
  }

  return res.status(401).json({ error: "Invalid email or password" });
});

router.post("/logout", (req, res) => {
  const token = (req.headers.authorization || "").replace("Bearer ", "");
  if (token) tokens.delete(token);
  req.session.destroy();
  res.json({ message: "Logged out" });
});

router.get("/me", (req, res) => {
  const token = (req.headers.authorization || "").replace("Bearer ", "");
  const isAdmin = !!(req.session && req.session.isAdmin) || tokens.has(token);
  res.json({ isAdmin });
});

module.exports = router;
