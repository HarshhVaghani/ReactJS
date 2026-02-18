import React from 'react'
import { useEffect , useState } from 'react'

const TimeCount = () => {

  const [second  , setSecond] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSecond(prev => prev + 1)
    } , 1000)

    return () => clearInterval(timer)
  } , [])

  return (
    <>
      <span>Second : {second}</span>
    </>
  )
}

export default TimeCount