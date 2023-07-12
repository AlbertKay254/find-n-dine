const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userDetailsSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      unique: true,
      required: true,
    },
    pass: {
      type: String,
      required: true,
    },
  },
  {
    collection: "UserInfo",
  }
);

module.exports = model("UserInfo", userDetailsSchema);
