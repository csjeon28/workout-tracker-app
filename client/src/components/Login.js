import styled from 'styled-components'
import { MainContainer, Input, InputForm, HorizontalLine, LoginButton, SignupButton } from '../styles'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Login = ({ handleUserLoginAndSignup }) => {
    const { push } = useHistory()
    const [state, setState] = useState({})

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(state)
        }

        fetch('/login', config)
            .then(res => res.json())
            .then(data => handleUserLoginAndSignup(data))
    }

    return (
        <MainContainer>
            <LogoText>Workout Tracker</LogoText>
            <InputForm onSubmit={handleSubmit}>
                <Input onChange={handleChange} type='text' placeholder='Username' />
                <Input onChange={handleChange} type='password' placeholder='Password' />
                <LoginButton type='submit' content='Log In' onClick={() => push('/login')}></LoginButton>
            </InputForm>
            <HorizontalLine />
            <SignUpText>New User?</SignUpText>
            <SignupButton type='submit' content='Sign Up' onClick={() => push('/signup')}></SignupButton>
        </MainContainer>
    )
}

const LogoText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const SignUpText = styled.h4`
  margin: 2rem 0 2rem 0;
`;

export default Login
