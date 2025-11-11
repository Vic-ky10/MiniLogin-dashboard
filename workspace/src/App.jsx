import React, { useState } from 'react'
import Login from './Component/Login'
import Dashboard from './Component/Dashboard'
import { UserContext } from './Context/UserContext'

function App() {
  const[user,setUser] = useState(null)
  return (

    <UserContext.Provider value={{ user, setUser}} >
    <div style={{textAlign:"center" , marginTop :" 50px",  }}>
              <h2>Login Dashboard</h2>
      {!user? <Login /> : <Dashboard />}
    </div>
    </UserContext.Provider>
    

  )
}

export default App