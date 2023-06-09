import React from 'react'
import './tabOptions.css'

import Rest from '../../assets/rest.png'
import Dine from '../../assets/dineout.png'
import Night from '../../assets/nightlife.png'
import Bake from '../../assets/bakery.png'
import Take from '../../assets/fastfood.png'
import Grocery from '../../assets/grocery.png'

import Rest2 from '../../assets/rest2b.png'
import Dine2 from '../../assets/dineout2.png'
import Night2 from '../../assets/nightlife2.png'
import Bake2 from '../../assets/bakery2.png'
import Take2 from '../../assets/fastfood2.png'
import Grocery2 from '../../assets/grocery2.png'


const tabs = [
    {
      id:1,
      name: "Restaurant",
      active_img: Rest,
      backdrop:" #FCEEC0",
      inactive_image: Rest2,
    },
    {
      id:2,
      name: "Dining Out",
      active_img: Dine,
      backdrop:" #FCEEC0",
      inactive_image: Dine2,
    },
    {
      id:3,
      name: "Night Life",
      active_img: Night,
      backdrop:" #FCEEC0",
      inactive_image: Night2,
    },
    {
      id:4,
      name: "Bakeries",
      active_img: Bake,
      backdrop:" #FCEEC0",
      inactive_image: Bake2,
    },
    {
      id:5,
      name: "Takeout",
      active_img: Take,
      backdrop:" #FCEEC0",
      inactive_image: Take2,
    },
    {
      id:6,
      name: "Groceries",
      active_img: Grocery,
      backdrop:" #FCEEC0",
      inactive_image: Grocery2,
    },
]


const tabOptions = ({activeTab, setActiveTab}) => {
  return (
    <div className="tab-options">
      <div className="max-width options-wrapper">
          {tabs.map((tab)=>{
            return (
            <div 
              onClick={() => setActiveTab(tab.name)}
              className={`tab-item absolute-center cursor-pointer
              ${activeTab === tab.name && "active-tab"}`}
            >

              <div 
                className="tab-image-container absolute-center"
                style={{backgroundColor:`${activeTab === tab.name ? tab.backdrop : ""}`
              }}
              >
                <img
                  className="tab-image" alt={tab.name}
                  src={activeTab===tab.name ? tab.active_img : tab.inactive_image}
                />
              </div>
              <div className="tab-name">{tab.name}</div>

            </div>
            )
          })}
      </div>
      
    </div>
  )
}

export default tabOptions
