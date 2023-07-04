import React from 'react'
import Slider from "react-slick";
import "./topbrands.css";

import NextArrow from "../../../../scroll/nextArrow";
import PrevArrow from "../../../../scroll/prevArrow";

import Alchemist from '../../../../../assets/alchemist.jpg'
import Dejavu from "../../../../../assets/dejavu.jpg";

const topBrandsListNightlife = [
    {
        id:1,
        title: "Alchemist",
        cover: Alchemist
    },
    {
        id:2,
        title: "De Ja Vu",
        cover: Dejavu
    }
]

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 3,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const topbrandsNightlife = () => {
  return (
    <div>
      <div className="top-brands max-width">
        <div className="collection-title">Top NightLife locations for you</div>
        <Slider {...settings}>
          {topBrandsListNightlife.map((brand) => {
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
  );
}

export default topbrandsNightlife
