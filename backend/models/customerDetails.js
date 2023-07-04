const { UUID } = require("bson");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const customerDetails = Schema({
  review: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
  user: {
    type: UUID,
  },
});

module.exports = new Schema("CustomerDetails", customerDetails);
