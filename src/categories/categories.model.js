const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Name is required",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("categories", CategorySchema);
