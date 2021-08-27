import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div>
            <div className='app-navbar'>
                <Link to='/login'>Log In</Link> -
                <Link to='/signup'>Sign Up</Link>
            </div>
            <h1>Workout Tracker</h1>
        </div>
    )
}

export default Home