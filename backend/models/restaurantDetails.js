const mongoose = require("mongoose");
const { Schema } = mongoose;

const restaurantDetailsSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    location: {
      type: String,
      unique: true,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    menuItem: {
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
    collection: "RestaurantInfo",
  }
);

module.exports = mongoose.model("RestaurantInfo", restaurantDetailsSchema);
