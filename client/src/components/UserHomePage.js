import NavBar from './NavBar'
import WorkoutsList from './WorkoutsList'
import styled from 'styled-components'
import { MainContainer, HorizontalLine } from '../styles'

const UserHomePage = ({ currentUser, setCurrentUser }) => {

    return (
        <MainContainer>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
            <LogoText>Your Workout Tracker</LogoText>
            <HorizontalLine />
            <WorkoutsList />
        </MainContainer>
    )
}

const LogoText = styled.h2`
  margin: 0.4rem 0 0 0;
  color: #14163c;
`;

export default UserHomePage