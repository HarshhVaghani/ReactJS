import React from 'react'

const ObjectEvent = () => {

  function handleClick(event){
    console.log(event.type); 
  }

  return (
    <div>
      <button className='btn' onClick={handleClick}>click</button>
    </div>
  )
}

export default ObjectEvent