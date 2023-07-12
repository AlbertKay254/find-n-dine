const express = require("express");
const router = express.Router();
const Review = require("../models/reviewDetails");
const { ObjectId } = require("mongodb");

router.post("/review", async (req, res) => {
  const { id, review: content, restaurant } = req.body;

  const review = new Review({
    user: id,
    restaurant,
    review: content,
    likes: 0,
    created: Date.now(),
    last_modified: Date.now(),
  });

  review.save().catch((err) => {
    console.log(err);
    res.send("Error creating review");
  });

  res.json(review);
});

router.get("/review/:restaurant", async (req, res) => {
  const { restaurant } = req.params;
  const reviews = await Review.find({ restaurant: ObjectId(restaurant) });
  res.json(reviews);
});

router.get("/review/:id", async (req, res) => {
  const { id } = req.params;
  const review = await Review.findOne({ _id: ObjectId(id) });
  res.json(review);
});

router.put("/review/:id", async (req, res) => {
  const { id } = req.params;
  const { review: content } = req.body;
  const review = await Review.findOne({ _id: ObjectId(id) });
  review.review = content;
  review.last_modified = Date.now();
  review.save().catch((err) => {
    console.log(err);
    res.send("Error updating review");
  });
  res.json(review);
});

router.delete("/review/:id", async (req, res) => {
  const { id } = req.params;
  const review = await Review.findOne({ _id: ObjectId(id) });
  review.delete().catch((err) => {
    console.log(err);
    res.send("Error deleting review");
  });
  res.send("Review deleted");
});

module.exports = router;
