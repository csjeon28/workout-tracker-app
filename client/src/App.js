import './App.css'
import { Switch, Route, useHistory } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import { useState, useEffect } from 'react'

const App = () => {
  const history = useHistory()
  const [currentUser, setCurrentUser] = useState(null)
  const [errors, setErrors] = useState([])

  const handleUserLoginAndSignup = (data) => {
    data.errors ? setErrors(data.errors) : setCurrentUser(data.user)
    if (!data.errors) {
      history.push('/')
      setErrors([])
    }
  }

  const checkSessionId = () => {
    fetch('/me')
      .then(resp => resp.json())
      .then(data => setCurrentUser(data.user))
  }

  // const fetchWorkouts = () => {
  //   fetch('/workouts')
  //   .then(resp => resp.json())
  //   .then(data => setWorkouts(data.workouts))
  // }

  useEffect(() => {
    // fetchWorkouts()
    checkSessionId()
  }, [])

  return (
    <div className='App'>
      {/* <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} /> */}
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/home'>
          <Home currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path='/signup'>
          <Signup handleUserLoginAndSignup={handleUserLoginAndSignup} errors={errors} />
        </Route>
        <Route exact path='/login'>
          <Login handleUserLoginAndSignup={handleUserLoginAndSignup} errors={errors} />
        </Route>
        <Route exact path='/logout' />
        {/* <Route path='/workout'>
          <NewWorkout user={user} />
        </Route> */}
      </Switch>
    </div>
  )
}

export default App
