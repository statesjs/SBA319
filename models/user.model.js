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
      type: String,
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

const User = mongoose.model("User", userSchema);

module.exports = User;
