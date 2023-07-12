const express = require("express");
const Restaurant = require("../models/restaurantDetails");
const Location = require("../models/locationDetails");
const { Schema } = require("mongoose");
const Meal = require("../models/mealDetails");

const router = express.Router();

router.post("/restaurant", async (req, res) => {
  const {
    name,
    address,
    longitude,
    latitude,
    contact,
    website,
    time_open,
    category,
  } = req.body;

  const location = new Location({
    address,
    longitude,
    latitude,
  });

  location.save().catch((err) => {
    console.log(err);
    res.send("Error creating location");
  });

  const restaurant = new Restaurant({
    name,
    location: location._id,
    contact,
    website,
    time_open,
    category,
  });

  restaurant.save().catch((err) => {
    console.log(err);
    res.send("Error creating restaurant");
  });

  res.json(restaurant);
});

router.get("/restaurant/:id", async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id);
  res.json(restaurant);
});

router.post("/restaurant/:id/meal", async (req, res) => {
  const { name, price } = req.body;

  const { menu } = req.body;

  const restaurant = await Restaurant.findById(req.params.id);
  console.log(restaurant);

  for (let i = 0; i < menu.length; i++) {
    const meal = Meal({ name: menu[i].name, price: menu[i].price });

    meal.save().catch((err) => {
      console.log(err);
      res.send;
    });

    restaurant.menu.push(meal);
  }

  restaurant.save().catch((err) => {
    console.log(err);
    res.send("Error creating meal");
  });

  res.json(restaurant.menu);
});

module.exports = router;
