import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Errors from './Errors'
import styled from 'styled-components'
import { MainContainer, HorizontalLine, InputForm, LoginPageBtn, SignInput, SignupPageBtn } from '../styles'

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
    <MainContainer>
      <HorizontalLine />
      <LogoText>Sign up to track your workouts each day!</LogoText>
      <HorizontalLine />
      <br />
      <List>Sign-In Requirements:
        <ListItem>Username must be at least 5 characters</ListItem>
        <ListItem>Password must contain:
          <UnorderedList>
            <UnorderedItem>At least 1 number</UnorderedItem>
            <UnorderedItem>At least 1 lowercase letter</UnorderedItem>
            <UnorderedItem>At least 1 uppercase letter</UnorderedItem>
            <UnorderedItem>At least 1 symbol</UnorderedItem>
            <UnorderedItem>Minimum 8 characters</UnorderedItem>
          </UnorderedList>
        </ListItem>
      </List>
      <InputForm onSubmit={onSubmit}>
        <LabelText>Create Username:</LabelText>
        <SignInput onChange={onChange} name='username' type='text' />
        <LabelText>Create Password:</LabelText>
        <SignInput onChange={onChange} name='password' type='password' />
        <ConfirmText>Confirm Password:</ConfirmText>
        <SignInput onChange={onChange} name='password_confirmation' type='password' />
        <SignupPageBtn type='submit' content='Signup' onClick={() => history.push('/userhomepage')} />
        <HorizontalLine />
      </InputForm>
      <FooterText>Already have an account?</FooterText>
      <LoginPageBtn type='submit' content='Log In' onClick={() => history.push('/login')} />
      <ErrorStyle>
        <Errors errors={errors} />
      </ErrorStyle>
    </MainContainer>
  )
}

const LogoText = styled.h2`
  margin: 0.1rem 0 -0.8rem 0;
  color: navy;
  letter-spacing: 0.5rem;
  font-size: 1.1rem;
  padding: 1rem;
  text-shadow: 1px 1px 1.3px #062c9e;
  text-align: center;
`;

const List = styled.ol`
  margin: -0.3rem 0 0 1rem;
  text-shadow: 1px 1px 1px #062c9e;
  letter-spacing: 0.4rem;
  font-size: 1rem;
  text-align: left;
`;

const ListItem = styled.li`
  margin: 0.4rem 0 0.5rem 0.1rem;
  text-shadow: 1px 1px 1px #7e7e9c;
  font-weight: 600;
  letter-spacing: 0.1rem;
  font-size: 0.8rem;
  text-align: left;
`;

const UnorderedList = styled.ul`
  list-style: square;
`;

const UnorderedItem = styled.li`
  margin: 0.2rem 0 0.15rem 1rem;
  text-shadow: 1px 1px 1px #7e7e9c;
  text-transform: none;
  letter-spacing: 0.1rem;
  font-size: 0.8rem;
  text-align: left;
`;

const LabelText = styled.h5`
  margin: 0.4rem 0 0 0;
  color: navy;
`;

const ConfirmText = styled.h5`
  margin: 0.4rem 0 0 0;
  color: navy;
  font-style: italic;
`;

const FooterText = styled.h5`
  margin: -2rem 0 0 0;
  color: white;
  letter-spacing: 0.2rem;
  text-shadow: 1px 1px 1.3px #ffe7d1;
`;

const ErrorStyle = styled.div`
  margin: 0.4rem 0 0.5rem 3rem;
  text-shadow: 1px 1px 1px #7e7e9c;
  font-weight: 500;
  letter-spacing: 0.1rem;
  font-size: 0.8rem;
  text-align: left;
`;

export default Signup