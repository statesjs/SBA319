const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
      minLength: 5,
      maxLength: 30,
    },
    body: {
      required: true,
      type: String,
      minLength: 5,
      maxLength: 1000,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
