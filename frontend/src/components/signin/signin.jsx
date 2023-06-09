import React from 'react'
import './signin.css'
import logo from '../../assets/logo1.png'

const signin = () => {
  return (
    <div className="container">
        <div className="logo-container">
            <div className="bck"></div>
        </div>

        <div className="signin-container">
           <img src={logo} alt="" className='logo-img' />
            <form className='signin-form'>
                <div className="input-container">
                        <label>Email</label> 
                        <input type="email" />
                        <label>Password</label> 
                        <input type="text" />
                        <button className='login-btn' type='submit'>Sign In</button>
                </div>
                <button className='register-btn'>Don't have an account?</button>
            </form>
           
        </div>
    </div>
  )
}

export default signin
