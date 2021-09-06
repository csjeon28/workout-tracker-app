import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import NavBar from './NavBar'
import Exercise from './Exercise'
import AddExerciseForm from './AddExerciseForm'
import styled from 'styled-components'
import { ExerciseContainer, ScrollBar } from '../styles'

const ExerciseList = ({ currentUser, setCurrentUser }) => {
    const history = useHistory()
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        fetch('/exercises')
            .then(resp => resp.json())
            .then(data => setExercises(data))
    }, [])

    const addExercise = (data) => {
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch('/exercises', config)
            .then(resp => resp.json())
            .then(() => setExercises([...exercises, data]))
    }

    const exercisesList = exercises.map((exercise, index) => <Exercise key={index} exercise={exercise} exercises={exercises} setExercises={setExercises} />)

    return (
        <div>
            <ExerciseContainer>
                <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
                <AddExerciseForm addExercise={addExercise} />
            </ExerciseContainer>
            <BackBtn onClick={() => history.push('/userhomepage')}>Go back to Workouts</BackBtn>
            <ScrollBar>
                {exercisesList}
            </ScrollBar>
        </div>
    )
}

const BackBtn = styled.button`
  background: linear-gradient(to right, #2b3099 20%, #73a8e6 100%);
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  width: 50%;
  height: 1.5rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  color: #ffe7d1;
  font-weight: 600;
  margin: 0.8em 0 0 8.5rem;
`;


export default ExerciseList