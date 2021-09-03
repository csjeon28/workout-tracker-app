import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Errors from './Errors'
import styled from 'styled-components'
import { MainContainer, Input, InputForm, HorizontalLine, LoginButton, SignupButton } from '../styles'

const Login = ({ errors, handleUserLoginAndSignup }) => {
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

        fetch('/login', config)
            .then(resp => resp.json())
            .then(data => handleUserLoginAndSignup(data))
    }

    return (
        <MainContainer>
            <InputForm onSubmit={onSubmit}>
                <LogoText>Workout Tracker</LogoText>
                <Input placeholder='Username' onChange={onChange} name='username' type='text' />
                <br />
                <Input placeholder='Password' onChange={onChange} name='password' type='password' />
                <br />
                <LoginButton type='submit' content='Log In' />
                <br />
                <HorizontalLine />
                <SignUpText>New User?</SignUpText>
                <SignupButton type='submit' content='Sign Up' onClick={() => history.push('/signup')} />
            </InputForm>
            <Errors errors={errors} />
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
