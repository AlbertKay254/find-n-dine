import React , { useState } from 'react'
import './uploadPage.css'

const UploadPage = () => {

  const [name,setName] = useState("");
  const [location,setLocation] = useState("")
  const [category,setCategory] = useState("")
  const [menuItem, setMenuItem] = useState("")

  const displayinfo = () => {
    console.log(name + location + category + menuItem)
  }

  return (
    <div className='form-container max-width'>
      <label >Restaurant Name:</label>
      <input 
        type="text"  
        placeholder='enter name here'
        onChange={(event) => {
          setName(event.target.value)
        }}
      />
      <label >Restaurant Location:</label>
      <input 
        type="text"  
        placeholder='enter location here'
        onChange={(event) => {
          setLocation(event.target.value)
      }}
      />
      <label >Category:</label>
      <input 
        type="text"  
        placeholder='fast food, restaurant, bakery, nightlife'
        onChange={(event) => {
          setCategory(event.target.value)
      }}
      />
      <label >Menu Item(s):</label>
      <textarea 
        type="text"  
        placeholder='enter menu items and price here'
        onChange={(event) => {
          setMenuItem(event.target.value)
      }}
      />
      <button className='btn'>Upload</button>
    </div>
  )
}

export default UploadPage
