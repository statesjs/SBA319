const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
      minLength: 5,
      maxLength: 20,
    },
    body: {
      required: true,
      type: String,
      minLength: 1,
      maxLength: 100,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema);
