const express = require("express");
const User = require("../models/restaurantDetails");
const router = express.Router();

router.post("/upload", async (req, res) => {
  const { name, location, category, menuItem } = req.body;
  const user = new User({
    name,
    location,
    category,
    menuItem
  });
  user.save().catch((err) => {});
});

router.get("/upload", async (req, res) => {
  return res.send("Invalid");
});

module.exports = router;
