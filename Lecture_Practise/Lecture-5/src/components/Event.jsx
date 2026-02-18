import React from 'react'

const Event = () => {

  function handleClick(){
    console.log("Button Clicked!!");
  }

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <button className='btn' onClick={() => console.log("Button Clicked!")
      }>Click</button>
    </div>
  )
}

export default Event