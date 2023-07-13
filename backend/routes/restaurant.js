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

  location
    .save()
    .then(() => {
      const restaurant = new Restaurant({
        name,
        location: location._id,
        contact,
        website,
        time_open,
        category,
      });
      restaurant
        .save()
        .then(() => {
          res.json(restaurant);
        })
        .catch((err) => {
          console.log(err);
          res.send("Error creating restaurant");
        });
    })
    .catch((err) => {
      console.log(err);
      res.send("Error creating location");
    });
});

router.get("/restaurants", async (req, res) => {
  const restaurant = await Restaurant.find();
  res.json(restaurant);
});

router.get("/restaurant/:id", async (req, res) => {
  const restaurants = await Restaurant.findById(req.params.id);
  res.json(restaurants);
});

router.post("/restaurant/:id/meal", async (req, res) => {
  const { menu } = req.body;
  const restaurant = await Restaurant.findById(req.params.id);

  if (!restaurant || !menu) {
    res.sendStatus(400);
    return;
  }

  for (let i = 0; i < menu.length; i++) {
    const meal = Meal({ mealName: menu[i].mealName, price: menu[i].price });
    meal
      .save()
      .then(() => {
        restaurant.menu.push(meal);
      })
      .catch((err) => {
        console.log(e);
      });
  }

  restaurant
    .save()
    .then(() => {
      res.json(restaurant.menu);
    })
    .catch((err) => {
      console.log(err);
      res.send("Error creating meal");
    });
});

module.exports = router;
