import React, { useState, useEffect } from 'react'
import Workout from './Workout'
import AddWorkoutForm from './AddWorkoutForm'
import Errors from './Errors'
import { SmallContainer, ScrollBar } from '../styles'
import { useHistory } from 'react-router-dom'

const WorkoutsList = ({ errors, setErrors }) => {
    const [workouts, setWorkouts] = useState([])
    const history = useHistory()

    useEffect(() => {
        fetch('/workouts')
            .then(resp => resp.json())
            .then(data => setWorkouts(data))
    }, [])

    const handleNewWorkout = (data) => {
        data.errors ? setErrors(data.errors) : setWorkouts([...workouts, data])
        if (!data.errors) {
            history.push('/workouts')
            setErrors([])
        }
    }

    const addWorkout = (data) => {
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch('/workouts', config)
            .then(resp => resp.json())
            // .then(() => setWorkouts([...workouts, data]))
            .then(data => handleNewWorkout(data))
    }

    const workoutList = workouts.map((workout, index) => <Workout key={index} workout={workout} workouts={workouts} setWorkouts={setWorkouts} />)

    return (
        <div>
            <SmallContainer>
                <AddWorkoutForm addWorkout={addWorkout} />
            </SmallContainer>
            <br />
            <Errors errors={errors} />
            <ScrollBar>
                {workoutList}
            </ScrollBar>
        </div>
    )
}

export default WorkoutsList