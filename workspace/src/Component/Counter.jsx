import React, { useReducer, useState } from 'react'
import { counterReducer, initialState } from './CounterReducer'

function Counter() {
    const [state,dispatch] = useReducer(counterReducer ,initialState)
    const [input ,setInput] = useState(0)


    const handleIncrement =() => dispatch ({type :"increment"})
     const handleDecrement =() => dispatch ({type :"decrement"})

     const handleIncrease =() =>  {
        dispatch ({type :"incrementByAmount" , payload : + input}) 
     setInput(0) }
     const handleDecrease = () =>  {
        dispatch ({type :"decrementByAmount" , payload : + input }) 
    setInput(0)}

  return (
    <div>
        <h2>count :{state.count}</h2>
        <button onClick ={handleIncrement}>increament</button>
        <button onClick ={handleDecrement}>decreament</button>
         <br />
          <br />
        <input type="number" value={input} onChange={ (event) => {
                 console.log(event.target.value)
            setInput(event.target.value)} 
       
        }/>
        <button onClick={handleIncrease}>add</button>
        <button onClick={handleDecrease}>remove</button>
        </div>
  )
}

export default Counter