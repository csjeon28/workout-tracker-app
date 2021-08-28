import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseLink = ({ exercise }) => {

    return (
        <div>
            <Link to={`/exercises/${exercise.id}`}>
                <h3>{exercise.name}</h3>
            </Link>
        </div>
    )
}

export default ExerciseLink