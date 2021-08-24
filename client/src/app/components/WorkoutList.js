import React from 'react'
import WorkoutItem from './WorkoutItem'

const WorkoutList = ({ workouts, onDeleteWorkout }) => {
    return (
        <div>
            {workouts.map((workout, index) => (
                <WorkoutItem onDeleteWorkout={onDeleteWorkout} key={index} workout={workout} />
            ))}
        </div>
    )
}

export default WorkoutList