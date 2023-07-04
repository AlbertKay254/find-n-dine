import React from 'react'
import Slider from "react-slick";
import "./topbrands.css";

import NextArrow from "../../../../scroll/nextArrow";
import PrevArrow from "../../../../scroll/prevArrow";

import Kempinsky from '../../../../../assets/kempinsky.jpg'
import CJs from '../../../../../assets/cjs.jpg'
import Honeydough from '../../../../../assets/honeydough.jpg'
import Artcaffe from '../../../../../assets/artcafe.jpg'

const topBrandsListDiningOut = [
    {
        id:1,
        title: "Kempinsky",
        cover: Kempinsky,
    },
     {
        id:2,
        title: "Cj's",
        cover: CJs,
    },
     {
        id:3,
        title: "Honey & Dough",
        cover: Honeydough,
    },
     {
        id:4,
        title: "Artcaffe",
        cover: Artcaffe,
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

const topbrandsDiningOut = () => {
  return (
    <div>
      <div>
        <div className="top-brands max-width">
          <div className="collection-title">Top Dining Out spots for you</div>
          <Slider {...settings}>
            {topBrandsListDiningOut.map((brand) => {
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
    </div>
  );
}

export default topbrandsDiningOut
