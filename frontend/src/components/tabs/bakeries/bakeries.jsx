import React from "react";
import "./bakeries.css";
import BakeriesCollection from "../bakeries/bakeriesCollection/bakeriesCollection";
import TopbrandsBakeries from "../restaurant/restaurantcollection/topbrands/topbrandsBakeries";
import Explore from "../../explore/explore";

const bakeries = () => {
  return (
    <div>
      <TopbrandsBakeries />
    </div>
  );
};

export default bakeries;
