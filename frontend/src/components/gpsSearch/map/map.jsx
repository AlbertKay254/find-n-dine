import React from 'react'
import './map.css'

import { MdOutlineSearch} from 'react-icons/md'
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import Slider from '@mui/material/Slider';

import GoogleMapReact from 'google-map-react';

const map = () => {

  return (
    <div>
       <div className="map-header max-width">
          <div className="header-searchbar">
              <MdOutlineSearch className="absolute-center search-icon"/>
              <input 
                placeholder='Search for restaurant, caffe or fast food' 
                className="search-input"
              />
          </div>
        
        <div className='slider-container' style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
        }}>
            <p>Distance:</p>
            <Slider  style={{width: "55%"}}
                size="small" 
                defaultValue={50} 
                aria-label="Default" 
                valueLabelDisplay="auto"/>

            <div className="buttons">
                <button className='icon-container'> <SearchIcon/>Reset</button>
                <button className='icon-container'><RestartAltIcon/> Search</button>
             </div>
        </div>

       
       </div>

       <div className="map max-width" style={{height: "80vh"}}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyD0hGH8wcLaS6svyPZltaJHBR9Wf3njfSk" }}
            defaultCenter={{
                /* Nairobi City Cordinates */
                lat: -1.2769476811310503, 
                lng: 36.81720222954108
            }}
            defaultZoom={12}
        >
        < LocationSearchingIcon />
        </GoogleMapReact>
       </div>
    </div>
  )
}

export default map
