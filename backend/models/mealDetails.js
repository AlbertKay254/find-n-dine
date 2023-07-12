const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const mealDetails = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = model("MealDetails", mealDetails);
