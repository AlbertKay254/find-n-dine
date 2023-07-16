const express = require("express");
const router = express.Router();
const multer = require("multer");

const { storage } = require("../config");
const upload = multer().single("avatar");

router.post("/upload", upload, async (req, res) => {
  if (req.file) {
    res.send(`/${req.file.path}`);
  }
  res.status(500).send("No file");
});

module.exports = router;
