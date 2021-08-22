import NavBar from './NavBar'

const Home = ({ currentUser, setCurrentUser }) => {
    return (
        <div>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
            <h1>Your Workout Tracker</h1>
        </div>
    )
}

export default Home