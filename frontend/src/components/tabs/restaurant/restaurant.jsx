import React from "react";
import "./restaurant.css";
import Restaurantcollections from "../restaurant/restaurantcollection/restaurantcollection";
import Topbrands from "./restaurantcollection/topbrands/topbrands";
import Explore from "./explore/explore";
import GpsSearch from "../../gpsSearch/gpsSearch";

const restaurantFilters = [
  {
    id: 1,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0",
  },
  {
    id: 3,
    title: "Healthy and hygenic",
  },
  {
    id: 4,
    title: "Great Offers",
  },
];

const restaurant = () => {
  return (
    <div>
      <Restaurantcollections />
      <Topbrands />
    </div>
  );
};

export default restaurant;
