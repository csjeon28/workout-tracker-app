import React from 'react'
import { Link } from 'react-router-dom'

const WorkoutDate = ({ workout }) => {

    return (
        <div>
            <Link to={`/workouts/${workout.id}`} >
                <h3>{workout.date}</h3>
            </Link>
        </div>
    )
}

export default WorkoutDate