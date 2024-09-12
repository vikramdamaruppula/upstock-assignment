import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './signup.css'


const SignUp = () => {
    const navigate =useNavigate()

    const [formData,setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const[errors,setErrors] =useState('')

    const localData = JSON.parse(localStorage.getItem('user')) 
    console.log(localData,'localdata')

    const handleInputs=(e)=>{
        setFormData({
            ...formData,
            [e.target.name] :e.target.value
        })
    }

    const handleSubmit= async (e)=>{
        e.preventDefault()
        if(formData.password !== formData.confirmPassword){
            alert('passwords do not match')
        }else{
            try{
                const response = await axios.post('http://localhost:5000/signup',{
                    firstName:formData.firstName,
                    lastName:formData.lastName,
                    email:formData.email,
                    password:formData.password,
                });
                navigate('/login')
                alert(response.data.message)

            }catch(err){
                setErrors(err.response.data.message)
                console.log(err.response.data.message)
            }

            // console.log(formData,'form data')
        }
    }

  return (
    <div className='container mt-5'>
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <h3 className='text-center mb-4' style={{color:'#4b006e',fontFamily:'roboto'}}>Let's Sign Up!</h3>
                <div className='d-flex align-items-start'>
                  <div className="me-5 mt-3">
                    <img className='img-fluid custom-image-signup' src='https://www.investopedia.com/thmb/MbZeDTynBSqRVhD4EP4R1EELJKA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1503239849-0dc8617d35594774b51c998694997431.jpg' alt='stock' />
                  </div>
                <div className='flex-grow-1 text-start'>
                <form onSubmit={handleSubmit} >
                    <div className='mb-3 w-100'>
                        <label htmlFor='firstName' className=' form-label'>FirstName:</label>
                        <input className='form-control' type='text' id='firstName' name='firstname' placeholder='Enter First Name' required onChange={handleInputs} />
                    </div>

                    <div className='mb-3 w-100'>
                        <label htmlFor='lastName' className='form-label'>LastName:</label>
                        <input className='form-control' type='text' id='lastName' name='lastname' placeholder='Enter Last Name' required onChange={handleInputs} />
                    </div>

                    <div className='mb-3 w-100'>
                        <label htmlFor='email' className='form-label'>Email:</label>
                        <input className='form-control' type='email' id='email' name='email' placeholder='Enter Email' required onChange={handleInputs} />
                    </div>

                    <div className='mb-3 w-100'>
                        <label htmlFor='password' className='form-label'>password:</label>
                        <input className='form-control' type='password' id='password' name='firstname' placeholder='Enter Password' required onChange={handleInputs} />
                    </div>

                    <div className='mb-3 w-100'>
                        <label htmlFor='confirmpassword' className='form-label'>confirmpassword:</label>
                        <input className='form-control' type='password' id='confirmpassword' name='confirmpassword' placeholder='Confirm Password' required onChange={handleInputs} />
                    </div>
                    {errors && <p style={{color:'red'}}>{errors} </p> }
                    <div className='d-flex gap-3 mb-3 w-100 '>
                      <button type='submit' className='btn btn-primary ml-3'>Sign Up !</button>
                      <button type='submit' className='btn btn-secondary' onClick={()=>navigate('/login')} >Sign In/Login !</button>
                    </div>
                </form>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp