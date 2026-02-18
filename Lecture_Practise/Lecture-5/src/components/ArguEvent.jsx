import React from 'react'

const ArguEvent = () => {

  function showMessage(name){
    console.log("Hello" , name);
  }


  return (
    <div>
      <button className='btn' onClick={() => showMessage("Manthan")}>Click</button>
    </div>
  )
}

export default ArguEvent