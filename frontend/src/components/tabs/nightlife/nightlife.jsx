import React from 'react'
import './nightlife.css'
import NightlifeCollection from '../nightlife/nighlifeCollection/nightlifeCollection'
import TopbrandsNightlife from '../restaurant/restaurantcollection/topbrands/topbrandsNightlife'
import Explore from "../../explore/explore";

const nightlife = () => {
  return (
    <div>
      <NightlifeCollection />
      <TopbrandsNightlife />
      
    </div>
  );
}

export default nightlife
