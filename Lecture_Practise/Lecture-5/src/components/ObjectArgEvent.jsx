import React from 'react'

const ObjectArgEvent = () => {

  function handleClick(name , e){
    console.log(name);
    console.log(e.type);
  }


  return (
    <div>
      <button className='btn' onClick={(e) => handleClick("Rahul" , e) }>click</button>
    </div>
  )
}

export default ObjectArgEvent