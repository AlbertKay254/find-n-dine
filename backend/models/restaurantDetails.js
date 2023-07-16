const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const restaurantDetailsSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    contact: {
      type: String,
      unique: true,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      unique: true,
    },
    time_open: {
      type: String,
      required: true,
    },
  },
  {
    collection: "RestaurantInfo",
  }
);

module.exports = model("RestaurantInfo", restaurantDetailsSchema);
