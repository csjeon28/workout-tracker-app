// import CreateWorkout from './CreateWorkout'
import NavBar from './NavBar'
import WorkoutsList from './WorkoutsList'

const UserHomePage = ({ currentUser, setCurrentUser }) => {
    // const UserHomePage = ({ handleNewWorkout, errors, workouts, setWorkouts, currentUser, setCurrentUser }) => {
    // const UserHomePage = ({ errors, handleUserLoginAndSignup, handleNewWorkout, workouts, setWorkouts, currentUser, setCurrentUser }) => {

    // const onDeleteWorkout = (id) => {
    //     const patchedWorkouts = workouts.filter(workout => workout.id !== id)
    //     setWorkouts(patchedWorkouts)
    // }

    return (
        <div>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
            <h1>Your Workout Tracker</h1>
            <WorkoutsList />
            {/* <WorkoutList
                errors={errors}
                handleNewWorkout={handleNewWorkout}
                currentUser={currentUser}
                onDeleteWorkout={onDeleteWorkout}
                setWorkouts={setWorkouts}
                workouts={workouts} /> */}
        </div>
    )
}

export default UserHomePage