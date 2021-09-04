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
            .then(resp => resp.json())
            .then(data => handleUserLoginAndSignup(data))
    }

    return (
        <div className='signup-container'>
            <hr />
            <h2>Sign up to track your workouts each day!</h2>
            <hr />
            <br />
            <ol>Sign-In Requirements:
                <li>Username must be at least 5 characters</li>
                <li>Password must contain:
                    <ul>
                        <li>at least 1 number</li>
                        <li>at least 1 lowercase letter</li>
                        <li>at least 1 uppercase letter</li>
                        <li>at least 1 symbol</li>
                        <li>Minimum 8 characters</li>
                    </ul>
                </li>
            </ol>
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
                <br />
                <hr />
                <label>Already have an account?</label>
                <input type='submit' value='Log In' onClick={() => history.push('/login')} />
            </form>
            <Errors errors={errors} />
        </div>
    )
}

export default Signup