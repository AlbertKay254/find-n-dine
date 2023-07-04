const mongoose = require("mongoose");
const { Schema } = mongoose;

const locationDetails = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  location: {
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
});

module.exports = new Schema("LocationDetails", locationDetails);
