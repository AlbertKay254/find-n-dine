import React from 'react'
import './review.css'
import NextArrow from '../../scroll/nextArrow'
import PrevArrow from '../../scroll/prevArrow'
import Slider from 'react-slick'
import { MdReviews } from 'react-icons/md'

import AVTR1 from '../../../assets/profile1.jpg'
import AVTR2 from '../../../assets/profile3.jpg'

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: < NextArrow/>,
  prevArrow: <PrevArrow />,
};

const reviewsList = [
  {
    id:1,
    name: "Kevin",
    review: "I really like the service and the variety in their menu",
    icon: AVTR1,
  },
  {
    id:2,
    name: "Leo",
    review : "Best Pizza ive had in a very long time, highly recommend",
    icon: AVTR2 ,
  },

]

const review = () => {
  return (
    <div className='review-form'>
       <div className="review-title">
        <h2 >Reviews</h2>
        </div> 

        <Slider {...settings}>
          {reviewsList.map((review) => {
            return <div>
              <div className="reviews">
                <div className="reviewer-icon absolute-center">
                  <img src={review.icon} alt={review.id} className='review.icon' />
                </div>
                <div className='reviewer'>{review.name}</div>
                <div className="review-post">{review.review}</div>
                
              </div>
            </div>
          })}
        </Slider>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="4" placeholder='Your Review' required/>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
    </div>
  )
}

export default review
