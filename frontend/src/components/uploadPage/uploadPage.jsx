import React from 'react'
import './uploadPage.css'

const uploadPage = () => {
  return (
    <div className='form-container max-width'>
        <form action="">
            <label >Restaurant Name:</label>
            <input type="text"  placeholder='enter name here'/>
            <label >Restaurant Location:</label>
            <input type="text"  placeholder='enter location here'/>
            <label >Category:</label>
            <input type="text"  placeholder='fast food, restaurant, bakery, nightlife'/>
            <label >Menu Item(s):</label>
            <textarea type="text"  placeholder='enter menu items and price here'/>
            <button className='btn'>Upload</button>
       </form>
    </div>
  )
}

export default uploadPage
