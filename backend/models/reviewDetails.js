const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const reviewSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    review: {
      type: String,
      unique: true,
      required: true,
    },
    restaurantId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
    },
  },
  {
    collection: "ReviewInfo",
  }
);

module.exports = model("ReviewInfo", reviewSchema);
