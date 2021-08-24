import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'

const NavBar = ({ currentUser, setCurrentUser }) => {
    const history = useHistory()

    const handleLogoutClick = () => {
        let config = {
            method: 'DELETE'
        }
        fetch('/logout', config)
        setCurrentUser(null)
        history.push('/login')
    }

    return (
        <nav>
            {currentUser ? `${currentUser} is logged in.` : null}
            <NavLink to='/userhomepage' activeClassName='active-style'>User Home</NavLink>
            <NavLink to='/workouts/new' activeClassName='active-style'>Create Workout</NavLink>
            <NavLink to='/logout' onClick={handleLogoutClick} activeClassName='active-style'>Log Out</NavLink>
        </nav>
    )
}

export default NavBar