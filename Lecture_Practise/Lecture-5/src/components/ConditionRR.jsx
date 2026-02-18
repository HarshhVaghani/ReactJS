import React from 'react'

const ConditionRR = () => {

  const isLoggedIn = true;

  return (<h1>{isLoggedIn ? "Welcome User" : "Login First"}</h1>)
}

export default ConditionRR