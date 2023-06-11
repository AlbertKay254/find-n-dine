import React, {useState} from 'react'
import './signin.css'
import logo from '../../assets/logo1.png'

const Signin = (props) => {

  const [email, setEmail]= useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
  }

  return (
    <div className="container">
        <div className="logo-container">
            <div className="bck"></div>
        </div>
        <div className="signin-container">
           <img src={logo} alt="" className='logo-img' />
            <form onSubmit={handleSubmit} className='signin-form'>
                <div className="input-container">
                      <label htmlFor="email">Email</label> 
                      <input 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" 
                        id='email' name='email' />
                      <label htmlFor="password">Password</label> 
                      <input 
                          value={pass} 
                          onChange={(e) => setPass(e.target.value)}
                          type="password"
                          placeholder='********' 
                          id='password' name='password'/>
                      <button className='login-btn' type='submit'>Sign In</button>
                </div>
                
            </form>
            <button onClick={() => props.onFormSwitch('Signup')} className='register-btn'>Don't have an account? Register here.</button>
           
        </div>
    </div>
  )
}

export default Signin;
