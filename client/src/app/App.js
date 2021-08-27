import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import UserHomePage from './components/UserHomePage'
import Login from './components/Login'
import Signup from './components/Signup'
import Logout from './components/Logout'
import Home from './components/Home'
// import CreateWorkout from './components/CreateWorkout'
// import EditWorkout from './components/EditWorkout'
// import CreateExercise from './components/CreateExercise'
// import EditExercise from './components/EditExercise'

function App() {
    const history = useHistory()
    const [currentUser, setCurrentUser] = useState(null)
    const [errors, setErrors] = useState([])
    // const [workouts, setWorkouts] = useState([])
    // const [exercises, setExercises] = useState([])

    const handleUserLoginAndSignup = (data) => {
        // debugger;
        data.errors ? setErrors(data.errors) : setCurrentUser(data.user)
        if (!data.errors) {
            history.push('/userhomepage')
            setErrors([])
        }
    }

    // const handleNewWorkout = (data) => {
    //     // debugger;
    //     data.errors ? setErrors(data.errors) : setWorkouts([...workouts, data.workout])
    //     if (!data.errors) {
    //         history.push('/userhomepage')
    //         setErrors([])
    //     }
    // }

    // const handleNewExercise = (data) => {
    //     data.errors ? setErrors(data.errors) : setExercises([...exercises, data])
    //     if (!data.errors) {
    //         history.push('/userhomepage')
    //         setErrors([])
    //     }
    // }

    const stateInit = () => {
        // fetchWorkouts()
        checkSessionId()
    }

    // const fetchWorkouts = () => {
    //     fetch('/workouts')
    //         .then(resp => resp.json())
    //         // .then(data => console.log(data))
    //         .then(data => setWorkouts(data))
    // }

    // const fetchExercises = () => {
    //     fetch('/exercises')
    //         .then(resp => resp.json())
    //         // .then(data => console.log(data))
    //         .then(data => setExercises(data.exercises))
    // }

    const checkSessionId = () => {
        fetch('/me')
            .then(resp => resp.json())
            // .then(data => console.log(data))
            .then(data => {
                setCurrentUser(data.user)
                // setWorkouts(data.workouts)
            })
    }

    useEffect(stateInit, [])

    return (
        <div className='App'>
            {/* <NavBar currentUser={currentUser} /> */}
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/userhomepage'>
                    {/* <UserHomePage currentUser={currentUser} setCurrentUser={setCurrentUser} workouts={workouts} setWorkouts={setWorkouts} /> */}
                    {/* <UserHomePage
                        errors={errors}
                        // handleUserLoginAndSignup={handleUserLoginAndSignup}
                        handleNewWorkout={handleNewWorkout}
                        currentUser={currentUser}
                        setCurrentUser={setCurrentUser}
                        workouts={workouts}
                        setWorkouts={setWorkouts} /> */}
                    <UserHomePage currentUser={currentUser} setCurrentUser={setCurrentUser} />
                </Route>
                <Route exact path='/signup'>
                    {/* <Signup setCurrentUser={setCurrentUser} /> */}
                    <Signup handleUserLoginAndSignup={handleUserLoginAndSignup} errors={errors} />
                </Route>
                <Route exact path='/login'>
                    {/* <Login /> */}
                    <Login handleUserLoginAndSignup={handleUserLoginAndSignup} errors={errors} />
                </Route>
                <Route exact path='/logout' >
                    <Logout setCurrentUser={setCurrentUser} />
                </Route>
                <Route exact path='/workouts/new'>
                    {/* <CreateWorkout currentUser={currentUser} workouts={workouts} setWorkouts={setWorkouts} /> */}
                    {/* <CreateWorkout currentUser={currentUser} handleNewWorkout={handleNewWorkout} workouts={workouts} setWorkouts={setWorkouts} /> */}
                </Route>
                <Route exact path='/workouts/:id'>
                    {/* <EditWorkout setWorkouts={setWorkouts} /> */}
                </Route>
                {/* <Route exact path='/exercises/new'>
                    <CreateExercise handleNewExercise={handleNewExercise} />
                </Route>
                <Route exact path='/exercises/:id/edit'>
                    <EditExercise />
                </Route> */}

            </Switch>
        </div>
    )
}

export default App
