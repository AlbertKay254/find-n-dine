import React from 'react'
import './header.css'
import logo from '../../assets/logo1.png'
import profile from '../../assets/profile2.jpg'

import { MdLocationPin, MdOutlineLocationOn, MdOutlineSearch, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import {AiFillCaretDown} from 'react-icons/ai'

function header() {
  return (
    <div className="max-width header">
      <div className='header-left'>
        <img src={logo} alt="Find n' Dine" className='header-logo' />
      </div>

      <div className='header-right'>
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name ">
                <MdOutlineLocationOn className="location-icon absolute-center"/>
                <div>Nairobi</div>
            </div>
            <AiFillCaretDown className="absolute-center" />
          </div>

          <div className='location-separator'></div>

          <div className="header-searchbar">
              <MdOutlineSearch className="absolute-center search-icon"/>
              <input 
                placeholder='Search for restaurant, caffe or fast food' 
                className="search-input"
              />
          </div>
        </div>

        <div className="profile-wrapper">
            <img src={profile} alt="profile" className="profile-image" />
            <span className='header-username'>Albert</span>
            <MdOutlineKeyboardArrowDown className="absolute-center profile-icon"/>
        </div>
      </div>

    </div>
    
  )
}

export default header
