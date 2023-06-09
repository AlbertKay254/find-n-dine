import React from 'react'
import './location.css'

const location = () => {
  return (
    <div className='location-container'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d513.2306206949282!2d36.93194672157298!3d-1.1887913221371558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f8d447b59db%3A0x81e5e6a298978962!2sCold%20stone!5e0!3m2!1sen!2ske!4v1684418434760!5m2!1sen!2ske" 
        width="1000" 
        height="450" 
        style={{border: "0"}}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default location
