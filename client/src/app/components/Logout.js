import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Logout = ({ currentUser, setCurrentUser }) => {
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
        setTimeout(() => {
            history.push('/login')
        }, 3000)
    }

    return (
        <div>
            <h1>Logging Out</h1>
        </div>
    )
}

export default Logout