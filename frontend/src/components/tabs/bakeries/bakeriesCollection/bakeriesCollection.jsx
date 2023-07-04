import React from 'react'
import './bakeriesCollection.css'
import Slider from "react-slick";
import Restaurantitem from '../../restaurant/restaurantcollection/restaurantitem/restaurantitem';
import NextArrow from '../../../scroll/nextArrow'
import PrevArrow from '../../../scroll/prevArrow'

import Crossiant from '../../../../assets/pastries1.jpg'
import Donut from '../../../../assets/pastries2.jpg'
import Cake1 from '../../../../assets/pastries4.jpg'
import Cake2 from '../../../../assets/pastries5.jpg'
import Muffin from '../../../../assets/pastries3.jpg'

const bakeriesItems = [
    {
        id:1,
        title:"crossiant",
        cover:Crossiant,
    },
    {
        id:2,
        title:"donuts",
        cover:Donut,
    },
    {
        id:3,
        title:"cake",
        cover:Cake1,
    },
    {
        id:4,
        title:"muffins",
        cover: Muffin,
    },
    {
        id:5,
        title:"fudge cake",
        cover: Cake2,
    },
]

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const bakeriesCollection = () => {
  return (
    <div>
      <div className="restaurant-collection">
        <div className="max-width">
          <div className="collection-title">Enjoy your favourite pastries</div>
          <Slider {...settings}>
            {bakeriesItems.map((item) => {
              return <Restaurantitem item={item} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default bakeriesCollection
