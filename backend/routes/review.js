const express = require("express");
const router = express.Router();
const Review = require("../models/reviewDetails");
const User = require("../models/userDetails");
const { ObjectId } = require("mongodb");

router.post("/review", async (req, res) => {
  const { user, review: content, restaurant, name } = req.body;

  const review = new Review({
    userId: user,
    restaurantId: restaurant,
    review: content,
    name: name,
  });

  review
    .save()
    .then(() => {
      res.json(review);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error from our side");
    });
});

router.get("/reviews/:restaurant", async (req, res) => {
  const restaurant = req.params.restaurant;
  if (!restaurant) {
    res.status(400).send("Invalid ID");
  } else {
    const reviews = await Review.find({
      restaurantId: new ObjectId(restaurant),
    }).limit(10);
    res.json(reviews);
  }
});

router.get("/reviews", async (req, res) => {
  const reviews = await Review.find().limit(10);
  const results = [];
  for (var [i, review] of reviews.entries()) {
    const user = await User.findById(review.userId);
    results.push({ ...review.toJSON(), user: user });
  }
  res.json(results);
});

module.exports = router;
