const { required } = require("joi");
const mongoose = require("mongoose");

const resourceSchema = mongoose.Schema(
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
    link: {
      required: false,
      type: String,
      minLength: 5,
      maxLength: 1000,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Resource", resourceSchema);
