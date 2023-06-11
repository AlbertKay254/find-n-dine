const mongoose = require("mongoose");
const { Schema } = mongoose;

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

module.exports = mongoose.model("UserInfo", userDetailsSchema);
