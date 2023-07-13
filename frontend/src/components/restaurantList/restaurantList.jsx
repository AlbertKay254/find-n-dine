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
      <h2>Restaurant List:</h2> 
      <List>
        <ul>
            
        </ul>
      </List>
    </div>
  )
}

export default RestaurantList
