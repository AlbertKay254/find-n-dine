import React from 'react'
import './map.css'
import { MdOutlineSearch} from 'react-icons/md'
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import Slider from '@mui/material/Slider';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import GoogleMapReact from 'google-map-react';

let restData = [
    {
        id:1,
        name: "moyo's restaurant",
        latitude: -1.1891109370970363, 
        longitude:36.932605978858284
    },
    {
        id:2,
        name: "KFC Kahawa Sukari",
        latitude: -1.1886271819006988, 
        longitude:36.932010187656616
    },
    {
        id:3,
        name: "Bamboo Cask Lounge",
        latitude: -1.2707625895025487,  
        longitude:36.817241297670805
    },
    {
        id:4,
        name: "Yolo Ice Cream",
        latitude: -1.2870923974532438,  
        longitude:36.82557706756905,
    },
]

export default class map extends React.Component {

    constructor(props) {
        super();
        this.state = {
            lat: -1.2769476811310503, 
            lng: 36.81720222954108,
            rests: [],
            selectedRestId: null,
            searchText: "",
            distance: 100,
        }
    }

    componentDidMount = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position.coords)
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    /*rests: position.coords.rests,*/
                    rests: restData,
                })
            },
            (error) => {
                console.log("Error getting location: " + error.message)
            }
        )
    }
    

    header = () => {

        const getDistanceInKm = (lat1, lon1, lat2, lon2) => {
            const deg2rad = (deg) => {return deg * (Math.PI / 180)}
            var R = 6371; //earth radius in km
            var dLat = deg2rad(lat2 - lat1); 
            var dLon = deg2rad(lon2 - lon1);
            var a = 
                Math.sin(dLat /2)* Math.sin(dLat /2) + 
                Math.cos(deg2rad(lat1))*Math.cos(deg2rad(lat2)) *
                Math.sin(dLon / 2)* Math.sqrt(dLon / 2)
                ;
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var d = R * c ;//distance in km
            return d;
        }

        const resetAll = () => {
            this.setState({
                rests: restData,
                distance: 100,
                searchText: "",
            })
        }

        const handleSearch = () => {
            let filteredRest = restData.filter(
                g => g.name.toLowerCase().includes(this.state.searchText.toLowerCase())
                && 
                (
                    getDistanceInKm(this.state.latitude, this.state.longitude, g.latitude, g.longitude)
                    <
                    this.state.distance
                )
            )
            this.setState({
                rests: filteredRest
            })
        }

        return (
            <div className="map-header max-width">
            <div className="header-searchbar">
                <MdOutlineSearch className="absolute-center search-icon"/>
                <input 
                  placeholder='Search for restaurant, caffe or fast food' 
                  className="search-input"
                  value={this.state.searchText}
                  onChange={(event) => {this.setState({ searchText: event.target.value})}}
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
                 value={this.setState.distance}
                 valueLabelDisplay="auto"
                 step={5}
                 marks
                 min={0}
                 max={20}
                 onChange={(event, value) => {this.setState({distance: value})}}/>
  
              <div className="buttons">
                  <button className='icon-container'
                    onClick={handleSearch}
                  > 
                    <SearchIcon/>
                    Search
                  </button>
                  <button className='icon-container'
                    onClick={resetAll}
                  ><RestartAltIcon/> Reset</button>
               </div>
          </div>
  
         
         </div>
        )
    }

    maps = () => {

        const handleRestClick = (rest) => {
            window.location.replace("/rest/" + rest.id)
        }

        return (
            <div className="map max-width"
            style={{height: "80vh", borderRadius: "22px"}}>
            <GoogleMapReact
                
                bootstrapURLKeys={{ key: "AIzaSyD0hGH8wcLaS6svyPZltaJHBR9Wf3njfSk" }}
                defaultCenter={{
                    /* Nairobi City Cordinates */
                    lat: -1.2769476811310503, 
                    lng: 36.81720222954108
                }}

                defaultZoom={12}
                center={{
                    lat: this.state.latitude,
                    lng: this.state.longitude
                }}
            >

            {
                this.state.rests.map((rest) => {
                    return (
                        <LocationOnIcon className='location-pin-2'
                            lat= {rest.latitude}
                            lng={rest.longitude}
                            onClick={() => {this.setState({ selectedRestId: rest.id})}}
                        />
                    )
                })
            }

            {
                this.state.rests.map((rest) => {
                   if (this.state.selectedRestId == rest.id) {
                    return (
                        <div className='name-container'
                            lat= {rest.latitude}
                            lng={rest.longitude}
                            style={
                                {textAlign: "center",  
                                width: 80, 
                                height: 40, 
                                borderRadius: 20, 
                                backgroundColor: "white", 
                                }
                            }
                            onClick={() => {handleRestClick(rest)}}
                            >
                            <p style={{textAlign: "center" , fontSize: 12, marginTop: 10}}>{rest.name}</p>
                        </div>
                    )
                   }
                   else {
                    return null
                   }
                })
            }
            
            < MyLocationIcon className='location-pin'
                lat= {this.state.latitude}
                lng={this.state.longitude} 
            />
            </GoogleMapReact>
           </div>
        )
    }

    render() {
        return (
            <div>
                {this.header()}
                {this.maps()}
            </div>
        )
    }



}