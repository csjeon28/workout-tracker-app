import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../styles'
import { useHistory } from 'react-router-dom'

const NavBar = ({ currentUser, setCurrentUser }) => {
    const history = useHistory()

    const handleLogoutClick = () => {
        let config = {
            method: 'DELETE'
        }
        fetch('/logout', config)
        setCurrentUser(null)
        history.push('/login')
    }

    return (
        <Wrapper>
            <Logo>
                {currentUser ? `${currentUser.username} is logged in.` : null}
            </Logo>
            <Nav>
                {/* <Button as={Link} to='/signup'>
                    Sign Up
                    </Button>
                    <Button as={Link} to='/login' variant='outline'>
                    Log In
                </Button> */}
                <Button as={Link} to='/logout' variant='outline' onClick={handleLogoutClick}>
                    Logout
                </Button>
            </Nav>
        </Wrapper>
    )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  color: white;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar