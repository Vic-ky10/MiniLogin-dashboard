import React, { useRef } from 'react'

function Hookes() {
    const inputRef = useRef(null)
    const handle = () => {
        if(inputRef.current){
            inputRef.current.focus()
        }
    }
  return (
    <div>
        <input type="text" ref={inputRef} placeholder='enter name' />
        <button onClick={handle}>focus</button>
    </div>
  )
}

export default Hookes