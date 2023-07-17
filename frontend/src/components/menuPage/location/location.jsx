import React from 'react'
import './location.css'



const location = () => {
  return (
    <div className="location-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31911.73818581881!2d36.90406184854104!3d-1.1834382235343033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f09067bad99%3A0xf16d95cc142da70a!2sKenyatta%20University%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1689563669695!5m2!1sen!2ske"
        width="1000"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      ;
    </div>
  );
}

export default location
