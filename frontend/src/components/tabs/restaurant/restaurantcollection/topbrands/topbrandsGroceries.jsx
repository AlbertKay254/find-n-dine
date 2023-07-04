import React from 'react'
import Slider from "react-slick";
import "./topbrands.css";

import NextArrow from "../../../../scroll/nextArrow";
import PrevArrow from "../../../../scroll/prevArrow";

import Foodplus from '../../../../../assets/foodplus.jpg'
import Zuchini from '../../../../../assets/zuchini.jpg'
import Carrefour from '../../../../../assets/carrefour.jpg'

const topBrandsGroceries = [
    {
        id: 1,
        title: "Foodplus",
        cover: Foodplus
    },
    {
        id: 2,
        title: "Zuchini",
        cover: Zuchini
    },
    {
        id: 3,
        title: "Carrefour",
        cover: Carrefour
    },
]

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 3,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const topbrandsGroceries = () => {
  return (
    <div>
      <div className="top-brands max-width">
        <div className="collection-title">Top brands for you</div>
        <Slider {...settings}>
          {topBrandsGroceries.map((brand) => {
            return (
              <div>
                <div className="top-brands-cover">
                  <img
                    src={brand.cover}
                    className="top-brands-cover"
                    alt={brand.title}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  )
}

export default topbrandsGroceries
