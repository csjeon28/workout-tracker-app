import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import UserHomePage from './components/UserHomePage'
import Login from './components/Login'
import Signup from './components/Signup'
import Logout from './components/Logout'
import Home from './components/Home'
import ExerciseList from './components/ExerciseList'

function App() {
    const history = useHistory()
    const [currentUser, setCurrentUser] = useState(null)
    const [errors, setErrors] = useState([])
    // const [exercises, setExercises] = useState([])

    const handleUserLoginAndSignup = (data) => {
        data.errors ? setErrors(data.errors) : setCurrentUser(data.username)
        if (!data.errors) {
            history.push('/userhomepage')
            setErrors([])
        }
    }

    // const handleNewExercise = (data) => {
    //     data.errors ? setErrors(data.errors) : setExercises([...exercises, data])
    //     if (!data.errors) {
    //         history.push('/exercises')
    //         setErrors([])
    //     }
    // }

    const stateInit = () => {
        checkSessionId()
    }

    const checkSessionId = () => {
        fetch('/me')
            .then(resp => resp.json())
            .then(data => {
                setCurrentUser(data)
            })
    }

    useEffect(stateInit, [])

    return (
        <div className='App'>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/userhomepage'>
                    <UserHomePage currentUser={currentUser} errors={errors} setErrors={setErrors} />
                </Route>
                <Route exact path='/signup'>
                    <Signup handleUserLoginAndSignup={handleUserLoginAndSignup} errors={errors} />
                </Route>
                <Route exact path='/login'>
                    <Login handleUserLoginAndSignup={handleUserLoginAndSignup} errors={errors} />
                </Route>
                <Route exact path='/logout' >
                    <Logout setCurrentUser={setCurrentUser} />
                </Route>
                <Route exact path='/exercises'>
                    <ExerciseList currentUser={currentUser} setCurrentUser={setCurrentUser} />
                </Route>
            </Switch>
        </div>
    )
}

export default App
