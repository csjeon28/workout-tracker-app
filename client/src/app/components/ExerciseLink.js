import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EditExerciseForm from './EditExerciseForm'

const ExerciseLink = ({ exercises, setExercises, exercise }) => {
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
            <div key={exercise.id}>
                <h3>Name:{exercise.name}</h3>
            </div>
            <Link to={`/exercises/${exercise.id}`}>
                <h3>{exercise.name}</h3>
            </Link>
            {editing ? <EditExerciseForm setEditing={setEditing} />
                // {editing ? <EditWorkoutForm workout={workout} workouts={workouts} setWorkouts={setWorkouts} setEditing={setEditing} />
                // {editing ? <EditWorkoutForm work={work} setWork={setWork} workout={workout} editWorkout={editWorkout} setEditing={setEditing} />
                : <button onClick={() => setEditing(true)}>Add Exercise</button>}
            <button onClick={() => deleteExercise(exercise.id)}>Delete</button>
        </div>
    )
}

export default ExerciseLink