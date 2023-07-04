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
    created: {
      type: Date,
      required: function () {
        return Date.now();
      },
    },
    last_modified: {
      type: Date,
      required: function () {
        return Date.now();
      },
    },
  },
  {
    collection: "UserInfo",
  }
);

module.exports = mongoose.model("UserInfo", userDetailsSchema);
