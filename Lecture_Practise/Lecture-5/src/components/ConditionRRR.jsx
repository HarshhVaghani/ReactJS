import React from 'react'

const ConditionRRR = () => {

  const isLoggedIn = false;

  return (
    <div>
        {isLoggedIn && <h2>Hello World</h2>}
    </div>
  )
}

export default ConditionRRR