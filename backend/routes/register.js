const express = require("express");
const User = require("../models/userDetails");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { email, name, pass } = req.body;
  const user = new User({
    email,
    name,
    password: pass,
  });
  user.save().catch((err) => {
    console.log(err);
  });
});

router.get("/register", async (req, res) => {
  return res.send("Invalid");
});

module.exports = router;
