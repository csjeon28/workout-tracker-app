import { useState } from 'react'
// import styled from 'styled-components'
import { MainContainer, Input, InputForm, HorizontalLine } from '../styles'
// import Errors from './Errors'

const Signup = ({ handleUserLoginAndSignup }) => {

    const [state, setState] = useState({})

    const onChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
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
    }

    return (
        <MainContainer>
            <HorizontalLine />
            {/* <Errors errors={errors} /> */}
            <InputForm handleSubmit={handleSubmit}>
                <label>Username:</label>
                <Input onChange={onChange} name="username" type="text" />
                <br />
                <label>Password:</label>
                <Input onChange={onChange} name="password" type="password" />
                <br />
                <label>Password Confirmation:</label>
                <Input onChange={onChange} name="password_confirmation" type="password" />
                <br />
                <Input type="submit" value="Signup" />
            </InputForm>
        </MainContainer>
    )
}

export default Signup