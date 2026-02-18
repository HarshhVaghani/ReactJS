import React from 'react'
import { useState , useEffect } from 'react'
import { useNavigate , Link } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import { sessionStorageService } from '../utils/storage'


const Login = () => {

  const navigate = useNavigate()

  const [formData , setFormData] = useState({
    email:'',
    password:'',
    remembers:false
  })

  const [validationError , setValidationError] = useState(false)

  const [isSubmitting , setIsSubmitting] = useState(false)

  useEffect(() => {
    if(isAuthenticate){
      navigate('/')
    }
  })



  return (
    <>
    <div>Login</div>
    <button>Login</button>
    </>
  )
}

export default Login