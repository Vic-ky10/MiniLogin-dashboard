import React, { useId } from 'react'

function Useid() {
    const id = useId();

  return (
    <div>
   <label htmlFor={`${id}-email`}>Email</label>
  <input type="Email" id={`${id}-email`}  />
  <br />
  <label htmlFor={`${id}-pass`}>Password </label>
  <input type="password"  id={`${id}-pass`} />
    </div>
  )
}

export default Useid