import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import EditExerciseForm from './EditExerciseForm'

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
            <div key={exercise.id}>
                <h3>Name:{exercise.name}</h3>
                <h3>Active Calories:{exercise.calories}</h3>
                <h3>Duration(in minutes):{exercise.duration}</h3>
            </div>
            {/* <Link to={`/exercises/${exercise.id}`}>
                <h3>{exercise.name}</h3>
            </Link> */}
            {editing ? <EditExerciseForm exercises={exercises} setExercises={setExercises} exercise={exercise} editing={editing} setEditing={setEditing} />
                : <button onClick={() => setEditing(true)}>Edit</button>}
            <button onClick={() => deleteExercise(exercise.id)}>Delete</button>
        </div>
    )
}

export default Exercise