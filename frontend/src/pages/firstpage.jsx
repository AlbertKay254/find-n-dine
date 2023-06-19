import React, {useState} from 'react'

import Signup from '../components/signup/signup'
import SignIn from '../components/signin/signin'

const Firstpage = () => {

  const [currentForm, setCurrentForm] = useState('SignIn')

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }

  return (
    <div className='App'> 
      {
        currentForm === "SignIn" ? 
        <SignIn onFormSwitch={toggleForm}/> : <Signup onFormSwitch={toggleForm}/>
      }
    </div>
  )
}

export default Firstpage
