import React from 'react'
import Slider from "react-slick";
import Restaurantitem from "../../restaurant/restaurantcollection/restaurantitem/restaurantitem";
import NextArrow from "../../../scroll/nextArrow";
import PrevArrow from "../../../scroll/prevArrow";

import Cocktails from '../../../../assets/cocktails.jpg'
import Mocktails from "../../../../assets/mocktails.jpg";
import Wine from "../../../../assets/wine.jpg";

const nightlifeItems = [
  {
    i: 1,
    title: "Cocktails",
    cover: Cocktails,
  },
  {
    i: 2,
    title: "Mocktails",
    cover: Mocktails,
  },
  {
    i: 3,
    title: "Wine",
    cover: Wine,
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

const nightlifeCollection = () => {
  return (
    <div>
      <div className="restaurant-collection">
        <div className="max-width">
          <div className="collection-title">Enjoy your favourite Drinks and Bevarages</div>
          <Slider {...settings}>
            {nightlifeItems.map((item) => {
              return <Restaurantitem item={item} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default nightlifeCollection
