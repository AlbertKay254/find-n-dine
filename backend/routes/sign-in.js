const express = require("express");
const User = require("../models/userDetails");
const router = express.Router();

router.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email, pass: password });
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;
