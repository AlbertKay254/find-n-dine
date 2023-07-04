import React from 'react'
import './diningoutCollection.css'
import Slider from "react-slick";
import Restaurantitem from "../../restaurant/restaurantcollection/restaurantitem/restaurantitem";
import NextArrow from "../../../scroll/nextArrow";
import PrevArrow from "../../../scroll/prevArrow";

import Steak from '../../../../assets/diningout1.jpg'
import Lasagna from "../../../../assets/diningout2.jpg";
import Shrimp from "../../../../assets/diningout3.jpg";
import Chicken from "../../../../assets/diningout4.jpg";
import Curry from "../../../../assets/diningout5.jpg";

const diningoutItems = [
  {
    id: 1,
    title: "Steak",
    cover: Steak,
  },
  {
    id: 2,
    title: "Lasagna",
    cover: Lasagna,
  },
  {
    id: 3,
    title: "Shrimp",
    cover: Shrimp,
  },
  {
    id: 4,
    title: "Chicken",
    cover: Chicken,
  },
  {
    id: 5,
    title: "Curry",
    cover: Curry,
  },
];

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const diningoutCollection = () => {
  return (
    <div>
      <div className="restaurant-collection">
        <div className="max-width">
          <div className="collection-title">Enjoy your favourite pastries</div>
          <Slider {...settings}>
            {diningoutItems.map((item) => {
              return <Restaurantitem item={item} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default diningoutCollection
