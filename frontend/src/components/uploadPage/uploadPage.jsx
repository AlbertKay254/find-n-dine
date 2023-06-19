import React , { useState } from 'react'
import './uploadPage.css'

const UploadPage = (props) => {

  const [name,setName] = useState("");
  const [location,setLocation] = useState("")
  const [category,setCategory] = useState("")
  const [menuItem, setMenuItem] = useState("")

  const displayinfo = (e) => {
    e.preventDefault()
    console.log(name + location + category + menuItem)

    fetch("http://localhost:4444/upload", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        location,
        category,
        menuItem,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "restaurantUpload");
    });

  }

  return (
    <form className='upload-form' onSubmit={displayinfo}>
    <div className='form-container '>
      <label >Restaurant Name:</label>
      <input 
        value={name}
        type="text"  
        placeholder='enter name here'
        onChange={(event) => {
          setName(event.target.value)
        }}
      />
      <label >Restaurant Location:</label>
      <input 
      value={location}
        type="text"  
        placeholder='enter location here'
        onChange={(event) => {
          setLocation(event.target.value)
      }}
      />
      <label >Category:</label>
      <input 
      value={category}
        type="text"  
        placeholder='fast food, restaurant, bakery, nightlife'
        onChange={(event) => {
          setCategory(event.target.value)
      }}
      />
      <label >Menu Item(s):</label>
      <textarea 
        value={menuItem}
        type="text"  
        placeholder='enter menu items and price here'
        onChange={(event) => {
          setMenuItem(event.target.value)
      }}
      />
      <button className='btn' type='submit'>Upload</button>
    </div>
    </form>
  )
}

export default UploadPage
