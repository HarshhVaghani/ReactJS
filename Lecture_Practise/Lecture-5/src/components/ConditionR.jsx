import React from 'react'

const ConditionR = () => {

  const isLoggedIn = false;

  if(isLoggedIn){
    return <h2>Welcome User</h2>
  }else{
    return <h2>Please Login</h2>
  }
}

export default ConditionR