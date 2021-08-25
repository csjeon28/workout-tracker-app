import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Errors from './Errors'

const Signup = ({ errors, handleUserLoginAndSignup }) => {
    const history = useHistory()
    const [state, setState] = useState({})

    const onChange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(state)
        }
        fetch('/users', config)
            .then(res => res.json())
            .then(data => handleUserLoginAndSignup(data))
        !errors ? history.push('/login') : history.push('/signup')
    }

    return (
        <div className='signup-container'>
            <hr />
            <p>Sign up to track your workouts each day!</p>
            <form className='signup-form' onSubmit={onSubmit}>
                <label>Create Username:</label>
                <input onChange={onChange} name='username' type='text' />
                <br />
                <label>Create Password:</label>
                <input onChange={onChange} name='password' type='password' />
                <br />
                <label>Password Confirmation:</label>
                <input onChange={onChange} name='password_confirmation' type='password' />
                <br />
                <input type='submit' value='Signup' />
            </form>
            <Errors errors={errors} />
        </div>
    )
}

export default Signup