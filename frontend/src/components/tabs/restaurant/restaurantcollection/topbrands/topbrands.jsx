import React from 'react'
import Slider from 'react-slick'
import './topbrands.css'

import NextArrow from '../../../../scroll/nextArrow'
import PrevArrow from '../../../../scroll/prevArrow'

import Kfc from '../../../../../assets/kfc.png'
import Dominos from '../../../../../assets/dominos.jpg'
import Coldstone from '../../../../../assets/coldstone.png'
import Java from '../../../../../assets/Java.jpg'
import Kista from '../../../../../assets/kista.jpg'

const topBrandsList = [
    {
        id: 1,
        title: "KFC",
        cover: Kfc ,
    },
    {
        id: 2,
        title: "Dominos",
        cover: Dominos ,
    },
    {
        id: 3,
        title: "Coldstone",
        cover: Coldstone ,
    },
    {
        id: 4,
        title: "Java",
        cover: Java ,
    },
    {
        id: 5,
        title: "Kista",
        cover: Kista ,
    },
]

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    nextArrow: < NextArrow/>,
    prevArrow: <PrevArrow />,
  };

const topbrands = () => {
  return (
    <div className='top-brands max-width'>
       <div className='collection-title'>Top brands for you</div>
       <Slider {...settings}> 
            {topBrandsList.map((brand)=>{
                return <div>
                    <div className="top-brands-cover">
                        <img src={brand.cover} className="top-brands-cover" alt={brand.title}/>
                    </div>
                </div>
            })}
       </Slider>
    </div>
  )
}

export default topbrands
