const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const mealDetails = new Schema({
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: "RestaurantInfo",
    required: true,
  },
  mealName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = model("MealDetails", mealDetails);
