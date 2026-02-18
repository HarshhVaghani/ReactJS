import React from 'react'
import { useReducer } from 'react'

const Reducer = () => {

  // const[state , dispatch] = useReducer(reducer)

  const countReducer = (state , action) => {
    switch(action.type){
      case "INCREMENT":return state + 1
      case "DECEREMENT": return state <= 0 ? 0 : state - 1
      case "RESET":return 0
      default: return state
    }
  }

  const [state , dispatch] = useReducer(countReducer , 0)
  
  // const [state , dispatch] = useReducer(countReducer , {count : 0})

  // {count : 0}
  // [{count : 0}]
  // [{count1:0} , {count2:0}]
  // [{count1:0 , count2:0}]

  return (
    <div>
      <h1 className='heading'>useReducer in Reactjs</h1>
      <span>{state}</span>
      <button onClick={() => dispatch({type:"INCREMENT"})}>Increment</button>
      <button onClick={() => dispatch({type:"DECEREMENT"})}>Decrement</button>
       <button onClick={() => dispatch({type:"RESET"})}>Reset</button>
    </div>
  )
}

export default Reducer