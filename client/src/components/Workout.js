import React, { useState } from 'react'
import EditWorkoutForm from './EditWorkoutForm'
import styled from 'styled-components'
import { WorkoutContainer, EditBtn, DeleteBtn } from '../styles'

const Workout = ({ workout, workouts, setWorkouts }) => {
    const [editing, setEditing] = useState(false)

    const deleteWorkout = (id) => {
        fetch(`/workouts/${workout.id}`, {
            method: 'DELETE'
        })
            .then(() => {
                setWorkouts(workouts.filter(w => w.id !== id))
            })
    }

    return (
        <div>
            <WorkoutContainer key={workout.id}>
                <Date>{workout.date}</Date>
                <Weight>Weight:{workout.weight}lbs</Weight>
            </WorkoutContainer>
            {editing ? <EditWorkoutForm workouts={workouts} setWorkouts={setWorkouts} workout={workout} editing={editing} setEditing={setEditing} />
                : <EditBtn onClick={() => setEditing(true)} content='Edit' />}
            <DeleteBtn onClick={() => deleteWorkout(workout.id)} content='Delete' />
        </div>
    )

}

const Date = styled.h3`
  letter-spacing: 0.3rem;
`;

const Weight = styled.h4`
  text-transform: none;
`;

export default Workout