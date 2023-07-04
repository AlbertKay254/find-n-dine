import React from 'react'
import './diningout.css'
import DiningoutCollections from '../diningout/diningoutCollection/diningoutCollection'
import TopbrandsDiningOut from '../restaurant/restaurantcollection/topbrands/topbrandsDiningOut'
import Explore from '../../explore/explore'

const diningout = () => {
  return (
    <div>
      < DiningoutCollections />
      < TopbrandsDiningOut />
      < Explore />
    </div>
  )
}

export default diningout
