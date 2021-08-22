// import styled from 'styled-components'
// import { MainContainer, Input, InputForm, HorizontalLine, LoginButton, SignupButton } from '../styles'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Login = ({ errors, handleUserLoginAndSignup }) => {
    const history = useHistory()
    const [state, setState] = useState({})

    const onChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
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

        fetch('/login', config)
            .then(resp => resp.json())
            .then(data => handleUserLoginAndSignup(data))
        errors ? history.push('/login') : history.push('/workouts')
    }

    return (
        <div className='login-container'>
            <form className='login-form' onSubmit={onSubmit}>
                <h2 className='login-text'>Workout Tracker</h2>
                <input className='login-input' placeholder='Username' onChange={onChange} name='username' type='text' />
                <br />
                <input className='login-input' placeholder='Password' onChange={onChange} name='password' type='password' />
                <br />
                <input className='login-button' type='submit' value='Login' />
                <br />
                <hr />
                <label className='signup-text'>New User?</label>
                <input className='signup-button' type='submit' value='Sign Up'></input>
            </form>
        </div>
    )
}

export default Login
