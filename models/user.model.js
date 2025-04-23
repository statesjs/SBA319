const { required } = require("joi");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
      minLength: 5,
      maxLength: 20,
    },
    password: {
      required: true,
      type: String,
      minLength: 5,
      maxLength: 20,
    },
    email: {
      required: true,
      type: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
