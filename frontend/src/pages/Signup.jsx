import React, { useState } from 'react'
import "../components/login.css"
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {signup,isLoading,error}  = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(email,password)
        signup({email,password})
     
    }

  return (
    <div className="signup-container">
        <form className='signup-form' onSubmit={handleSubmit}>
        <h3>SignUp</h3>

         <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email...' />

      
         <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password...' />

        <button type='submit' disabled = {isLoading} >Signup</button>
        
    </form>
    {error && <div className='error' >{error}</div>}
    </div>
    
  )
}

export default Signup