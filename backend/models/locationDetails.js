const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const locationDetails = new Schema({
  address: {
    type: String,
    required: true,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
});

module.exports = model("LocationDetails", locationDetails);
