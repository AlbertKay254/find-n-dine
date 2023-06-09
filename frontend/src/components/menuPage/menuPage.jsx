import React from 'react'
import './menuPage.css'
import Menu from './menu/menu'
import Logo from '../../assets/dominos.jpg'
import {MdLocationPin} from 'react-icons/md'
import Header from '../header/header'
import Review from './review/review'
import Location from './location/location'

const menuPage = () => {
  return (
    <div>
         <Header />
      <div className="menupage-container max-width">
       
        <div className="menupage-header">
            <img src={Logo} alt="logo" />
            <div className='brand-description'>
                <h3>Dominos pizza</h3>
                <p>Open between 8:00am to 10:00pm</p>
                <p>Contact: +254 7000000</p>
                <div className='category'>category: Fast Food</div>
                <div className='location'>
                    < MdLocationPin className='pin-icon' />
                    <div>Kahawa Sukari, Nairobi</div>
                </div>
                
            </div>
        </div>

        <div className="menu-container">
            <div className="menu-items">
            <Menu />
            </div>
        </div>
        < Location />
        < Review />
      </div>
     
    </div>
  )
}

export default menuPage
