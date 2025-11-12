import React, { useEffect, useRef, useState } from 'react'

function Timer() {
    const[counter,serCounter] = useState(0)
    const intervalRef = useRef(null);
    
    useEffect (() => {
        intervalRef.current = setInterval (() => {
            serCounter (p => p+1)
        },1000)

        return () => clearInterval(intervalRef.current)
    },[])
    return (
    <div>
        <h1>timer :{counter} seconds</h1>
        <button onClick={()=> clearInterval(intervalRef.current)}> stoptimer</button>
    </div>
  )
}

export default Timer