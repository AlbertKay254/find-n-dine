const mongoose = require("mongoose");

module.exports.intializeDatabase = async () => {
  const url = "mongodb://localhost:27017/findNdine";
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};
