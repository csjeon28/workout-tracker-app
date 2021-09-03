import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { MainContainer, HorizontalLine } from '../styles'

const Logout = ({ setCurrentUser }) => {
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
        }, 2000)
    }

    return (
        <MainContainer>
            <br />
            <br />
            <HorizontalLine />
            <LogoutText>Logging Out...</LogoutText>
            <HorizontalLine />
        </MainContainer>
    )
}

const LogoutText = styled.h1`
  font-size: 1.5rem;
  letter-spacing: 0.4rem;
  margin: 5rem 0 5rem 0;
  line-height: 1;
`;

export default Logout