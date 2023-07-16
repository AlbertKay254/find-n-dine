const express = require("express");
const Restaurant = require("../models/restaurantDetails");
const Meal = require("../models/mealDetails");

const router = express.Router();

router.post("/restaurant", async (req, res) => {
  const { name, address, contact, website, time_open } = req.body;

  const restaurant = new Restaurant({
    name,
    address,
    contact,
    website,
    time_open,
  });

  restaurant
    .save()
    .then(() => {
      res.json(restaurant);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
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
  const _id = req.params.id;
  const { menu } = req.body;
  const items = [];

  for (let i = 0; i < menu.length; i++) {
    const meal = Meal({
      mealName: menu[i].name,
      price: menu[i].price,
      restaurantId: _id,
      category: menu[i].category,
    });
    await meal
      .save()
      .then((data) => {
        items.push(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  res.json({ items: items });
});

module.exports = router;
