const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const mealDetails = new Schema({
  mealName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = model("MealDetails", mealDetails);
