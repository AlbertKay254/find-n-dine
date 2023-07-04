import React from 'react'
import Slider from "react-slick";
import Restaurantitem from "../../restaurant/restaurantcollection/restaurantitem/restaurantitem";
import NextArrow from "../../../scroll/nextArrow";
import PrevArrow from "../../../scroll/prevArrow";

import Fruits from '../../../../assets/fruits.jpg'
import Vegetables from "../../../../assets/vegetables.jpg";
import Cereals from "../../../../assets/cereals.jpg";
import Dairy from "../../../../assets/dairy.jpg";

const groceriesItems = [
  {
    id: 1,
    title: "Fruits",
    cover: Fruits,
  },
  {
    id: 2,
    title: "Vegetables",
    cover: Vegetables,
  },
  {
    id: 3,
    title: "Cereals",
    cover: Cereals,
  },
  {
    id: 4,
    title: "Dairy",
    cover: Dairy,
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

const groceriescCollection = () => {
  return (
    <div>
      <div className="restaurant-collection">
        <div className="max-width">
          <div className="collection-title">Enjoy your favourite groceries</div>
          <Slider {...settings}>
            {groceriesItems.map((item) => {
              return <Restaurantitem item={item} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default groceriescCollection
