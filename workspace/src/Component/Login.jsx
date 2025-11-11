import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/UserContext'


function Login() {
 const setUser = useContext(UserContext);
 const [name , setName] = useState('')
 
 const handleFunction = () =>{
    if(name.trim === ' ') {
        alert("please enter you name ")
    }
 }
  return (
    <div>Login</div>
  )
}

export default Login