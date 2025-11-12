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
    <div style={{textAlign :'center' , position:'relative' 
        , top:'200px', backgroundColor:"#3333" , height:'300px'
    }}>
        <h1>Timer :{counter} seconds</h1>
        <button onClick={()=> clearInterval(intervalRef.current)}> stoptimer</button>
    </div>
  )
}

export default Timer