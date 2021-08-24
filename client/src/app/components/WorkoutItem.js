import React from 'react'
import { Link } from 'react-router-dom'

const WorkoutItem = ({ workout, onDeleteWorkout }) => {

    const performDeleteWorkout = () => {
        fetch(`/workouts/${workout.id}`, {
            method: 'DELETE'
        })
            .then(() => {
                onDeleteWorkout(workout.id)
            })
            .catch((error) => console.log(error))
    }

    return (
        <div>
            <h3>{workout.date}</h3>
            <div className='workout-item-buttons'>
                <button onClick={performDeleteWorkout}>Delete</button>
                <Link to={`/workouts/${workout.id}/edit`}>Edit</Link>
            </div>
            <div className='workout-item-weight'>
                <h4>{workout.weight}</h4>
            </div>
        </div>
    )
}

export default WorkoutItem