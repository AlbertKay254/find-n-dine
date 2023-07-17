import React from "react";
import "./groceries.css";
import GroceriesCollection from "../groceries/groceriesCollection/groceriescCollection";
import TopbrandsGroceries from "../restaurant/restaurantcollection/topbrands/topbrandsGroceries";
import Explore from "../../explore/explore";

const groceries = () => {
  return (
    <div>
      <TopbrandsGroceries />
    </div>
  );
};

export default groceries;
