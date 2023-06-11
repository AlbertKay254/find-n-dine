const express = require("express");
const User = require("../models/userDetails");
const router = express.Router();

router.post("/sign-in", async (req, res) => {
  const { email, pass } = req.body;
  const user = await User.findOne({ email: email, pass: pass });
  if (user) {
    res.json(user);
  } else {
    res.send("User not found");
  }
});

module.exports = router;
