import React from 'react'

// Passing Data From a List 

const List = () => {

  const items = [10 , 20 , 30]

  function handleItem(value){
    console.log(value);
  }

  return (
    <div>
      {
        items.map((item , index) => (
          <button className='btn' key={index} onClick={() => handleItem(item)}>click {item}</button>
        ))
      }
    </div>
  )
}

export default List