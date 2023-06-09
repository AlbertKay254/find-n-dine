import React from 'react'
import './restaurantcollection.css'
import Slider from 'react-slick'
import Restaurantitem from './restaurantitem/restaurantitem'

import Pizza from '../../../../assets/pizza.jpg'
import Burger from '../../../../assets/burger.jpg'
import Pasta from '../../../../assets/pasta.jpg'
import Cake from '../../../../assets/cake.jpg'
import Chicken from '../../../../assets/chicken.jpg'
import Milkshake from '../../../../assets/milkshake.jpg'
import Icecream from '../../../../assets/icecream.jpg'

import NextArrow from '../../../scroll/nextArrow'
import PrevArrow from '../../../scroll/prevArrow'

const restaurantItems = [
    {
        id:1,
        title:"Pizza",
        cover: Pizza,
    },
    {
        id:2,
        title:"Burger",
        cover: Burger,
    },
    {
        id:3,
        title:"Pasta",
        cover: Pasta,
    },
    {
        id:4,
        title:"Cake",
        cover: Cake,
    },
    {
        id:5,
        title:"Chicken",
        cover: Chicken,
    },
    {
        id:6,
        title:"Milkshakes",
        cover: Milkshake,
    },
    {
        id:7,
        title:"Ice Cream",
        cover: Icecream,
    },
]

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: < NextArrow/>,
    prevArrow: <PrevArrow />,
  };

const restaurantcollection = () => {
  return (
    <div className='restaurant-collection'>
        <div className="max-width">
            <div className='collection-title'>Enjoy your favourite meals</div>
            <Slider {...settings}>
                {restaurantItems.map((item)=> {
                    return <Restaurantitem item={item}/>
                })}
            </Slider>
        </div>
    </div>
  )
}

export default restaurantcollection
