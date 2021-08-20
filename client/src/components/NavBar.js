import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '../styles'

const NavBar = ({ user, setUser }) => {

    const handleLogout = () => {
        fetch('/logout', { method: 'DELETE' })
            .then((resp) => {
                if (resp.ok) {
                    setUser(null)
                }
            })
    }

    return (
        <Wrapper>
            <Logo>
                <Link to='/'>Workout Tracker</Link>
            </Logo>
            <Nav>
                <Button as={Link} to='/signup'>
                    Sign Up
                </Button>
                <Button variant='outline' onClick={handleLogout}>
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