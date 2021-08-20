import './App.css'
import { useState, useEffect } from 'react'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = () => {
      fetch('/me')
        .then(resp => resp.json())
        .then(data => setUser(data))
    }
    fetchUser()
  }, [user])

  return (
    <div className="App">
      <h1>Workout Tracker</h1>
      {/* <h2>
        {user ? `${user.username} is logged in.` : null}
      </h2> */}
    </div>
  )
}

export default App
