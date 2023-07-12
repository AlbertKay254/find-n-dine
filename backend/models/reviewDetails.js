const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const reviewSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      unique: true,
      required: true,
    },
    review: {
      type: String,
      unique: true,
      required: true,
    },
    restaurant: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "ReviewInfo",
  }
);

module.exports = model("ReviewInfo", reviewSchema);
