import React from 'react'
import Slider from "react-slick";
import "./topbrands.css";

import NextArrow from "../../../../scroll/nextArrow";
import PrevArrow from "../../../../scroll/prevArrow";

import Java from '../../../../../assets/Java.jpg'
import Artcafe from '../../../../../assets/artcafe.jpg'
import Cakelover from '../../../../../assets/cakelove.jpg'

const topBrandsListBakeries = [
    {
        id:1,
        title:"Java",
        cover: Java,
    },
     {
        id:2,
        title:"Art Cafe",
        cover: Artcafe,
    },
     {
        id:3,
        title:"Cake Lover",
        cover: Cakelover,
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

const topbrandsBakeries = () => {
  return (
    <div>
      <div className="top-brands max-width">
        <div className="collection-title">Top brands for you</div>
        <Slider {...settings}>
          {topBrandsListBakeries.map((brand) => {
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

export default topbrandsBakeries
