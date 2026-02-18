import React from 'react'
import { useState , useEffect } from 'react'

const Count = () => {


  const [count , setCount] = useState(0)

  useEffect(() => {
    console.log("useEffect run");
    () => {
      
    }
  } , [count])

  return (
    <div>
      <span>
        {count}
      </span>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </div>
  )
}

export default Count