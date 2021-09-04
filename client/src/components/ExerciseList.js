import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Exercise from './Exercise'
import AddExerciseForm from './AddExerciseForm'

const ExerciseList = ({ currentUser, setCurrentUser }) => {
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        fetch('/exercises')
            .then(resp => resp.json())
            .then(data => setExercises(data))
    }, [])

    const addExercise = (data) => {
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch('/exercises', config)
            .then(resp => resp.json())
            .then(() => setExercises([...exercises, data]))
    }

    const exercisesList = exercises.map((exercise, index) => <Exercise key={index} exercise={exercise} exercises={exercises} setExercises={setExercises} />)

    return (
        <div>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
            <AddExerciseForm addExercise={addExercise} />
            {exercisesList}
        </div>
    )
}

export default ExerciseList