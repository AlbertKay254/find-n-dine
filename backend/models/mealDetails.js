const mongoose = require("mongoose");
const { Schema } = mongoose;

const mealDetails = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  allergens: {
    type: Array,
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
});

module.exports = mongoose.model("MealDetails", mealDetails);
