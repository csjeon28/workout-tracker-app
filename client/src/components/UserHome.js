import React from 'react'
import NavBar from './NavBar'

const UserHome = ({ currentUser, setCurrentUser }) => {

    return (
        <div>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
            <h1>Your Workout Tracker</h1>

        </div>
    )
}

export default UserHome