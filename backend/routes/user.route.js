const express = require("express");
const User = require("../models/userDetails");
const router = express.Router();

router.post("/auth", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email, pass: password });
  if (user) {
    res.json(user);
  } else {
    res.status(400).send("Invalid credentials");
  }
});

router.put("/user");

router.delete("/user");

router.post("/user", async (req, res) => {
  const { email, name, pass } = req.body;
  const user = new User({
    email,
    name,
    pass,
  });
  user.save().catch((err) => {
    res.status(400).send(err.message);
  });
  res.json(user);
});

module.exports = router;
