import React from 'react'
import { useReducer } from 'react'

const Reducer = () => {

  const countReducer = (state , action) => {
    switch(action.type){
      case "INCREMENT1": return [{...state[0] , count:state[0].count + 1}]
      case "INCREMENT2": return [{...state[0] , count2:state[0].count2 + 1}]
   
      // case "DECEREMENT": return state.map((item , index) => index === 0 ? {count:item.count - 1} : item)
      // case "RESET":return state.map((item , index) => index === 0 ? {count:0} : item)
      default: return state
    }
  }
  
  const [state , dispatch] = useReducer(countReducer , [{count : 0 , count2:0}])

  console.log(state);

  return (
    <div>
      <h1 className='heading'>useReducer in Reactjs</h1>
      <span className='btn'>{state[0].count}</span>
      <span className='btn'>{state[0].count2}</span>
      <button className='btn' onClick={() => dispatch({type:"INCREMENT1"})}>Increment1</button>
      <button className='btn' onClick={() => dispatch({type:"INCREMENT2"})}>Increment2</button>
      <button className='btn' onClick={() => dispatch({type:"DECEREMENT"})}>Decrement</button>
       <button className='btn' onClick={() => dispatch({type:"RESET"})}>Reset</button>
    </div>
  )
}

export default Reducer