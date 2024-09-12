import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './signup.css'
const Login = ({setIsAuthenticated}) => {
  const[username,setUsername] =useState('')
  const[password,setPassword] =useState('')
  const[errMessage,setErrMessage] =useState('')
  const navigate =useNavigate()

  const handleUsername=(e)=>{
    setUsername(e.target.value)
  }

  const handlePassword=(e)=>{
    setPassword(e.target.value)
  }

  const handleSubmit= async (e)=>{
    e.preventDefault()
    // try{
    //   const response = await axios.post('http://localhost:5000/login',{
    //     username,
    //     password,
    //   })

    //   localStorage.setItem('token',response.data.token)
    //   setIsAuthenticated(true)
    //   navigate('/home')
    //   console.log(response.data)

    // }catch(err){
    //   setErrMessage(err.response.data.message)
    //   console.log(err.response.data.message)
    // }
    if(username==='user@gmail.com' && password==='password'){
      setIsAuthenticated(true)
      navigate('/home')
    }else{
      alert('username or password is not correct')
    }
  }

  return (
    <div>
        <div>
            <div className='mt-5'>
            <h3 className=' mb-4 text-center' style={{color:'#4b006e',fontFamily:'roboto'}}>Let's Login !</h3>
            <form className='d-flex flex-column justify-content-center align-items-center ' onSubmit={handleSubmit} >
                <div className='mb-3 w-25 login-inputs'>
                    <label htmlFor='email' className='form-label'>Email:</label>
                    <input className='form-control' type='email' id='email' value={username} placeholder='Please Enter Email' required onChange={handleUsername} />
                </div>

                <div className='mb-3 w-25 login-inputs'>
                    <label htmlFor='password' className='form-label'>password:</label>
                    <input className='form-control' type='password' id='password' value={password} placeholder='Enter Password' required onChange={handlePassword} />
                </div>

                <div className='mb-3 w-25 login-inputs'>
                  <p>forgot Password </p>
                  <button type='submit' className='btn btn-secondary' >Sign In/Login !</button>
                </div>
            </form>
            <p style={{color:'yellowgreen',textAlign:'center'}}> use username as : user@gmail.com ,password as : password </p>
            </div>
        </div>
    </div>
  )
}

export default Login