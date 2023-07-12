const express = require("express");
const User = require("../models/userDetails");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { email, name, pass } = req.body;
  const user = new User({
    email,
    name,
    pass,
  });
  user.save().catch((err) => {
    console.log(err);
    res.send("Error creating user");
  });
});

router.get("/register", async (req, res) => {
  return res.send("Invalid");
});

module.exports = router;
