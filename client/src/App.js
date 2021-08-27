// import './App.css'
// import { Switch, Route, useHistory } from 'react-router-dom'
// import UserHome from './components/UserHome'
// import Login from './components/Login'
// import Signup from './components/Signup'
// import Logout from './components/Logout'
// import Workouts from './components/Workouts'
// // import CreateWorkout from './components/CreateWorkout'
// import { useState, useEffect } from 'react'

// function App() {
//   const history = useHistory()
//   const [currentUser, setCurrentUser] = useState(null)
//   const [errors, setErrors] = useState([])
//   const [workouts, setWorkouts] = useState([])

//   const handleUserLoginAndSignup = (data) => {
//     data.errors ? setErrors(data.errors) : setCurrentUser(data.user)
//     if (!data.errors) {
//       history.push('/userhome')
//       setErrors([])
//     }
//   }

//   const fetchWorkouts = () => {
//     fetch('/workouts')
//       .then(resp => resp.json())
//       .then(data => setWorkouts(data))
//   }

//   // const fetchUserWorkouts = () => {
//   //   fetch('/me')
//   //     .then(resp => resp.json())
//   //     .then(data => setUserWorkouts(data))
//   // }

//   // const setUserWorkouts = (data) => {
//   //   setCurrentUser(data)
//   //   setWorkouts(data.workouts)
//   // }

//   const handleCreateWorkout = (data) => {
//     data.errors ? setErrors(data.errors) : setWorkouts([...workouts, data])
//     if (!data.errors) {
//       history.push('/workouts')
//       setErrors([])
//     }
//   }

//   const checkSessionId = () => {
//     fetch('/me')
//       .then(resp => resp.json())
//       // .then(data => console.log(data.user))
//       .then(data => setCurrentUser(data.user))
//   }

//   useEffect(() => {
//     fetchWorkouts()
//     // fetchUserWorkouts()
//     checkSessionId()
//   }, [])

//   return (
//     <div className='App'>
//       <Switch>
//         <Route exact path='/' component={UserHome} />
//         <Route exact path='/userhome'>
//           <UserHome currentUser={currentUser} setCurrentUser={setCurrentUser} workouts={workouts} setWorkouts={setWorkouts} />
//         </Route>
//         <Route exact path='/signup'>
//           <Signup handleUserLoginAndSignup={handleUserLoginAndSignup} errors={errors} />
//         </Route>
//         <Route exact path='/login'>
//           <Login handleUserLoginAndSignup={handleUserLoginAndSignup} errors={errors} />
//         </Route>
//         <Route exact path='/logout' >
//           <Logout currentUser={currentUser} setCurrentUser={setCurrentUser} setWorkouts={setWorkouts} />
//         </Route>
//         <Route exact path='/workouts'>
//           <Workouts handleCreateWorkout={handleCreateWorkout} currentUser={currentUser} workouts={workouts} setWorkouts={setWorkouts} />
//         </Route>
//         {/* <Route exact path='/workouts/new'>
//           <CreateWorkout handleCreateWorkout={handleCreateWorkout} currentUser={currentUser} errors={errors} />
//         </Route> */}
//       </Switch>
//     </div>
//   )
// }

// export default App
