import React from 'react'

const FormEvent = () => {

  function handleSubmit(e){
    e.preventDefault()
    console.log("Form Submitted!!"); 
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <button className='btn' type='submit'>submit</button>
      </form>
    </div>
  )
}

export default FormEvent