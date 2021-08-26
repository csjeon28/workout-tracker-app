import { NavLink } from 'react-router-dom'

const NavBar = ({ currentUser }) => {

    return (
        <nav>
            <h2>{currentUser ? `Signed in as: ${currentUser.username}` : null}</h2>
            <br />
            <NavLink to='/login' activeClassName='active-style'>Switch User?</NavLink>
            <NavLink to='/logout' activeClassName='active-style'>Log Out</NavLink>
        </nav>
    )
}

export default NavBar