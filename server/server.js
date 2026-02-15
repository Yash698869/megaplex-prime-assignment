require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");
const contentRoutes = require("./routes/content");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET || "fallback-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 2,
      httpOnly: true,
      sameSite: "lax",
    },
  })
);

app.use("/api", authRoutes);
app.use("/api/content", contentRoutes);

app.get("/", (req, res) => {
  res.json({ status: "Server is running" });
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });
