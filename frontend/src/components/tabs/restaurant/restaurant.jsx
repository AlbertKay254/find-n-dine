import React from 'react'
import './restaurant.css'
import Filters from '../../filters/filters'
import Restaurantcollections from '../restaurant/restaurantcollection/restaurantcollection'
import Topbrands from './restaurantcollection/topbrands/topbrands'
import Explore from './explore/explore'

const restaurantFilters = [
    {
        id: 1,
        title: 'Filters'
    },
    {
        id: 2,
        title: 'Rating: 4.0'
    },
    {
        id: 3,
        title: 'Healthy and hygenic'
    },
    {
        id: 4,
        title: 'Great Offers'
    },
]

const restaurant = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={restaurantFilters}/>
      </div>
      < Restaurantcollections />
      < Topbrands />
      < Explore />

    </div>
  )
}

export default restaurant
