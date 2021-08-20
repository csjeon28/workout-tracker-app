import './App.css'
import Navigation from './components/Navigation'
import { useState, useEffect } from 'react'


const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = () => {
      fetch('/me')
        .then(resp => resp.json())
        .then(data => setUser(data.user))
    }
    fetchUser()
  }, [user])

  return (
    <div className='App'>
      <Navigation user={user} />
      <h1>Workout Tracker</h1>
      {/* <h2>
        {user ? `${user.username} is logged in.` : null}
      </h2> */}
    </div>
  )
}

export default App
