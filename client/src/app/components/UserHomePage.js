import NavBar from './NavBar'
import WorkoutsList from './WorkoutsList'

const UserHomePage = ({ currentUser, setCurrentUser }) => {

    return (
        <div>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
            <h1>Your Workout Tracker</h1>
            <WorkoutsList />
        </div>
    )
}

export default UserHomePage