import React from 'react'
import './restaurantitem.css'

const restaurantitem = ({item}) => {
  return (
    <div>
      <div className="restaurant-item-cover">
        <img src={item.cover} className='restaurant-item-image' alt={item.title} />
      </div>
      <div className='restaurant-item-title'>{item.title}</div>
    </div>
  )
}

export default restaurantitem
