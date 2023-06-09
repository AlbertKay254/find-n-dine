import React from 'react'
import './menu.css'

const menuList = [
    {
        id:1,
        item: "Peperoni Small",
        price:"1200",
    },
    {
        id:2,
        item: "Peperoni Medium",
        price:"1400",
    },
    {
        id:3,
        item: "Peperoni Large",
        price:"1800",
    },
    {
        id:4,
        item: "Chicken Stake Small",
        price:"1200",
    },
    {
        id:5,
        item: "Chicken Stake Medium",
        price:"1400",
    },
    {
        id:6,
        item: "Chicken Stake Large",
        price:"1800",
    },
]

const menu = () => {
  return (
    <div className='menu-container'>
      <div className="menu-items min-width">
        {menuList.map((items) => {
            return <div className='menu-item'>
                <div className="item">   
                    <div className='item-tag'>{items.item}</div>
                </div>
                <div className="price">
                    <div className='price-tag'>{items.price}</div>
                </div>

            </div>
        })}
      </div>
    </div>
  )
}

export default menu
