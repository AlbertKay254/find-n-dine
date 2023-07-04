const express = require("express");
const router = express.Router();

router.post("/review", async (req, res) => {
  res.send("Review");
});

module.exports = router;
