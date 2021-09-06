import React, { useState } from 'react'
import EditExerciseForm from './EditExerciseForm'
import styled from 'styled-components'
import { EditBtn, DeleteBtn } from '../styles'

const Exercise = ({ exercises, setExercises, exercise }) => {
    const [editing, setEditing] = useState(false)

    const deleteExercise = (id) => {
        fetch(`/exercises/${exercise.id}`, {
            method: 'DELETE'
        })
            .then(() => {
                setExercises(exercises.filter(exercise => exercise.id !== id))
            })
    }

    return (
        <div>
            <ExerciseList key={exercise.id}>
                <ExerciseText>Name:&nbsp;{exercise.name}</ExerciseText>
                <ExerciseText>Active Calories:&nbsp;{exercise.calories}</ExerciseText>
                <ExerciseText>Duration(in minutes):&nbsp;{exercise.duration}</ExerciseText>
            </ExerciseList>
            {editing ? <EditExerciseForm exercises={exercises} setExercises={setExercises} exercise={exercise} editing={editing} setEditing={setEditing} />
                : <EditBtn onClick={() => setEditing(true)} content='Edit' />}
            <DeleteBtn onClick={() => deleteExercise(exercise.id)} content='Delete' />
        </div>
    )
}

const ExerciseText = styled.h3`
  letter-spacing: 0.2rem;
  text-transform: none;
`;

const ExerciseList = styled.div`
display: flex;
align-items: flex-end;
flex-direction: column;
height: 10vh;
width: 32vw;
background: rgba(255, 255, 255, 0.15);
box-shadow: 0 4px 4px 0 rgba(31, 38, 135, 0.37);
backdrop-filter: blur(12px);
border-radius: 8px;
color: #8a8294;
font-size: 14px;
text-shadow: 1px 1px 1px #ffffff;
text-transform: uppercase;
letter-spacing: 0.3rem;
`;

export default Exercise