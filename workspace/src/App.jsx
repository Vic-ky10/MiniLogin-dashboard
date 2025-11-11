import React, { useState } from 'react'
import Login from './Component/Login'
import Dashboard from './Component/Dashboard'
import { UserContext } from './Context/UserContext'

function App() {
  const[user,setUser] = useState(null)
  return (

    <UserContext.Provider value={ setUser} >
    <div style={{textAlign:"center"   }}>
              <h2>Login Dashboard</h2>
      {!user? <Login /> : <Dashboard />}
    </div>
    </UserContext.Provider>
    

  )
}

export default App