import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Map from './map/map'
import RestLocation from './restLocation/restLocation'

const gpsSearch = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' exact element={<Map />}/>
            <Route path='/rest/:restID' element={<RestLocation />}/>
        </Routes>
    </Router>
  )
}

export default gpsSearch
