const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema(
  {
    sectionKey: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Section", sectionSchema);
