import React from 'react'
import './signup.css'
import logo from '../../assets/logo1.png'

const signup = () => {
  return (
    <div className="container">
        <div className="signup-container">
           <img src={logo} alt="" className='logo-img' />
            <form className='signup-form'>
                <div className="input-container">
                        <label>Email</label> 
                        <input type="email" />
                        <label>Username</label> 
                        <input type="text" />
                        <label>Password</label> 
                        <input type="text" />
                        <button className='signup-btn' type='submit'>Sign Up</button>
                </div>

            </form>
           
        </div>

        <div className="logo-container">
            <div className="bck-2"></div>
        </div>

    </div>
  )
}

export default signup
