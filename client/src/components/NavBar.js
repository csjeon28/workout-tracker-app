import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../styles/Button'

const NavBar = () => {

    return (
        <Wrapper>
            <Logo>
                <Link to='/'>Home</Link>
            </Logo>
            <Nav>
                <Button as={Link} to='/signup'>
                    Sign Up
                </Button>
                <Button as={Link} to='/login' variant='outline'>
                    Log In
                </Button>
                <Button as={Link} to='/logout' variant='outline'>
                    Logout
                </Button>
            </Nav>
        </Wrapper>
    )
}

const Wrapper = styled.header`
  display: flex
  justify-content: center
  align-items: center
  padding: 8px
`

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive
  font-size: 3rem
  color: deeppink
  margin: 0
  line-height: 1

  a {
    color: inherit
    text-decoration: none
  }
`

const Nav = styled.nav`
  display: flex
  gap: 4px
  position: absolute
  right: 8px
`

export default NavBar