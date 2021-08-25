import NavBar from './NavBar'
import WorkoutList from './WorkoutList'

const UserHomePage = ({ workouts, setWorkouts, currentUser, setCurrentUser }) => {

    const onDeleteWorkout = (id) => {
        const patchedWorkouts = workouts.filter(workout => workout.id !== id)
        setWorkouts(patchedWorkouts)
    }

    return (
        <div>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
            <h1>Your Workout Tracker</h1>
            <WorkoutList onDeleteWorkout={onDeleteWorkout} workouts={workouts} />
        </div>
    )
}

export default UserHomePage