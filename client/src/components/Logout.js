import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Logout = ({ setCurrentUser, setWorkouts }) => {
    const history = useHistory()

    useEffect(() => {
        const config = {
            method: 'DELETE'
        }
        fetch('/logout', config)
        handleLogout()
    })

    const handleLogout = () => {
        setCurrentUser(null)
        setWorkouts([])
        history.push('/login')
    }

    return (
        <div>
            <h1>Logged Out</h1>
        </div>
    )
}

export default Logout