import React, { useState } from 'react'
// import ExerciseList from './ExerciseList'
import EditWorkoutForm from './EditWorkoutForm'

const Workout = ({ workout, workouts, setWorkouts }) => {
    const [editing, setEditing] = useState(false)

    const deleteWorkout = (id) => {
        debugger
        fetch(`/workouts/${workout.id}`, {
            method: 'DELETE'
        })
            .then(() => {
                setWorkouts(workouts.filter(w => w.id !== id))
            })
    }

    return (
        <div>
            <div>
                <div key={workout.id}>
                    <h3>Date:{workout.date}</h3>
                    <h4>Weight:{workout.weight}</h4>
                </div>
                {editing ? <EditWorkoutForm workouts={workouts} setWorkouts={setWorkouts} workout={workout} setEditing={setEditing} />
                    : <button onClick={() => setEditing(true)}>Edit</button>}
                <button onClick={() => deleteWorkout(workout.id)}>Delete</button>
            </div>
        </div>
    )

}

export default Workout