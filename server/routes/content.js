const express = require("express");
const router = express.Router();
const Section = require("../models/Section");
const requireAuth = require("../middleware/auth");

router.get("/", async (req, res) => {
  try {
    const sections = await Section.find().sort("sectionKey");
    res.json(sections);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch content" });
  }
});

router.get("/:sectionKey", async (req, res) => {
  try {
    const section = await Section.findOne({ sectionKey: req.params.sectionKey });
    if (!section) {
      return res.status(404).json({ error: "Section not found" });
    }
    res.json(section);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch section" });
  }
});

router.put("/:sectionKey", requireAuth, async (req, res) => {
  try {
    const { title, content } = req.body;

    const section = await Section.findOneAndUpdate(
      { sectionKey: req.params.sectionKey },
      { title, content },
      { new: true, runValidators: true }
    );

    if (!section) {
      return res.status(404).json({ error: "Section not found" });
    }

    res.json(section);
  } catch (err) {
    res.status(500).json({ error: "Failed to update section" });
  }
});

module.exports = router;
