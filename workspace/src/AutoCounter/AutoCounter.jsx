

import React, { useEffect, useState } from 'react'

function AutoCounter() {

    const[count ,setCount] = useState(0)
    const [running ,setRunning] = useState(false) ;
    const intervelRef = useRef(null);

    useEffect (() => {
        if(running){
  intervelRef.current = setInterval(() => {
            setCount (p => p +1 )
        },1000)
        }
      

        return ()=> clearInterval ( intervelRef.current)
    },[running])

    const start = () => setRunning(true)
    const stop = () => {
        setRunning(false);
        clearInterval(intervelRef.current);

    }
      const reset = () => {
        setRunning(false);
        clearInterval(intervelRef.current);
        setCount(0)
        
    }
  return (
    <div>
        
    </div>
  )
}

export default AutoCounter