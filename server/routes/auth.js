const express = require("express");
const router = express.Router();

const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "1234";

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    req.session.isAdmin = true;
    return res.json({ message: "Login successful" });
  }

  return res.status(401).json({ error: "Invalid email or password" });
});

router.post("/logout", (req, res) => {
  req.session.destroy();
  res.json({ message: "Logged out" });
});

router.get("/me", (req, res) => {
  res.json({ isAdmin: !!(req.session && req.session.isAdmin) });
});

module.exports = router;
