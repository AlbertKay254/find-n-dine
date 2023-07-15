import React, { useState } from 'react'
import './restaurantList.css'

const RestaurantList = () => {
  const [name,setName] = useState("");

  const listRestaurants = (e) => {
    e.preventDefault();
    console.log(name);

      fetch("http://localhost:4444/restaurants", {
        method: "GET",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "restaurant has been recieved");
        }); 
  }

  return (
    <div className='restaurant-list-container max-width'>
      <h3>Restaurant List:</h3> 
        <ul>
            
        </ul>
    </div>
  )
}

export default RestaurantList
