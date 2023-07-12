import React from 'react'
import './footer.css'
import GpsSearch from '../gpsSearch/gpsSearch';

import {FiPhone} from 'react-icons/fi'
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const footer = () => {
  return (
    <div className="footer-container">
      <div className="about absolute-center">
        <h2>About Find n Dine</h2>
        <p>
          This application is web-based application that will allow users to log
          in and easily identify and locate restaurants as well as get all the
          relevant information on them as well as also allow restaurants to use
          the website to promote themselves.
        </p>
      </div>
      <div className="contact-info">
        <div className="contact-info-container absolute-center">
          <AiOutlinePhone className="contact-icon " />
          <div className='text'>contact:+254702519938</div>
        </div>
        <div className="contact-info-container absolute-center">
          <AiOutlineMail className="email-icon" />
          <div className='text'>@findndine254@gmail.com</div>
        </div>
        
      </div>
    </div>
  );
}

export default footer
