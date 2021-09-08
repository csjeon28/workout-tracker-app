import NavBar from './NavBar'
import WorkoutsList from './WorkoutsList'
import styled from 'styled-components'
import { MainContainer, HorizontalLine } from '../styles'

const UserHomePage = ({ errors, setErrors, currentUser }) => {

    return (
        <MainContainer>
            <NavBar currentUser={currentUser} />
            <LogoText>Your Workout Tracker</LogoText>
            <HorizontalLine />
            <WorkoutsList errors={errors} setErrors={setErrors} />
        </MainContainer>
    )
}

const LogoText = styled.h2`
  margin: 0.4rem 0 0 0;
  color: #062c9e;
`;

export default UserHomePage