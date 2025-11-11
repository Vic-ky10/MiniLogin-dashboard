import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import UserGreatings from '../Hooks/UserGreatings'

function Dashboard() {
  const {user, setUser} = useContext(UserContext)
  const Greetings = UserGreatings(user)
  const handleLogout = () => setUser(null)
  return (
    <div>
      <h3>{Greetings}</h3>
      <p>welcom to your Dashboard {user}</p>
      <button onClick={handleLogout}> Logout</button>
    </div>
  )
}

export default Dashboard