const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const restaurantDetailsSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },

    location: {
      type: Schema.Types.ObjectId,
      unique: true,
      required: true,
    },

    contact: {
      type: String,
      unique: true,
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

    category: {
      type: Array,
      required: true,
    },

    menu: {
      type: Array,
    },
  },
  {
    collection: "RestaurantInfo",
  }
);

module.exports = model("RestaurantInfo", restaurantDetailsSchema);
