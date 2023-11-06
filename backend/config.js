const mongoose = require("mongoose");
const multer = require("multer");

module.exports.storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

module.exports.intializeDatabase = async () => {
  const url = "mongodb://0.0.0.0:27017/findNdine";
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};
