import React, { useState, useEffect } from 'react'
import Workout from './Workout'
import NewWorkoutForm from './NewWorkoutForm'

const WorkoutsList = () => {
    const [workouts, setWorkouts] = useState([])

    useEffect(() => {
        fetch('/workouts')
            .then(resp => resp.json())
            .then(data => setWorkouts(data))
    }, [])

    const addWorkout = (workout) => {
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(workout)
        }
        fetch('/workouts', config)
            .then(resp => resp.json())
            .then(() => setWorkouts([...workouts, workout]))
    }
    // const workoutList = workouts.map((workout, index) => <WorkoutLink key={index} workout={workout} />)
    // const workoutList = workouts.map((workout, index) => <Workout key={index} workout={workout} workouts={workouts} setWorkouts={setWorkouts} />)
    // debugger
    return (
        <div>
            <NewWorkoutForm addWorkout={addWorkout} />
            {workouts.map((workout, index) => <Workout key={index} workout={workout} workouts={workouts} setWorkouts={setWorkouts} />)}
        </div>
    )
}

export default WorkoutsList