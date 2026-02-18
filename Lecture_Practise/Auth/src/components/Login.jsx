import React from 'react'

const Login = ({setIsLoggedIn}) => {
  return (
    <>
    <div>Login</div>
    <button className='btn' onClick={() => setIsLoggedIn(true)}>Login</button>
    </>
  )
}

export default Login