import React, {useState} from 'react'
import './signup.css'
import logo from '../../assets/logo1.png'

const Signup = (props) => {

  const [email, setEmail]= useState('');
  const [name, setName]= useState('')
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="container">
        <div className="signup-container">
           <img src={logo} alt="" className='logo-img' />
            <form className='signup-form' onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor='email'>Email</label> 
                    <input 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                      type="email" 
                      id='email' name='email'
                    />
                    <label htmlFor='username'>Username</label> 
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder='enter full name'
                      id='name' name='name'  
                    />
                    <label htmlFor='password'>Password</label> 
                    <input 
                        value={pass} 
                        onChange={(e) => setPass(e.target.value)}
                        type="password"
                        placeholder='********' 
                        id='password' name='password'
                    />
                    <button className='signup-btn' type='submit'>Sign Up</button>
                </div>
            </form>
            <button onClick={() => props.onFormSwitch('SignIn')} className='register-btn'>Already Have an account? Sign In here.</button>
        </div>

        <div className="logo-container">
            <div className="bck-2"></div>
        </div>

    </div>
  )
}

export default Signup
