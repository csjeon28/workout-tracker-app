import React, { useState, useEffect } from 'react'
import ExerciseLink from './ExerciseLink'
import AddExerciseForm from './AddExerciseForm'

const ExerciseList = ({ setEditing }) => {

    const [exercises, setExercises] = useState([])

    useEffect(() => {
        fetch('/exercises')
            .then(resp => resp.json())
            // .then(data => console.log(data))
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
            .then(data => console.log(data))
        // .then(data => setExercises([...exercises, data]))
    }

    // const exercisesList = exercises.map((e, index) => <ExerciseLink key={index} exercise={e} />)
    //FIGURE OUT WHY THE EXERCISES IS NOT ITERABLE 
    return (
        <div>
            <AddExerciseForm addExercise={addExercise} setEditing={setEditing} />
            {exercises.map((exercise, index) => <ExerciseLink key={index} exercises={exercises} setExercises={setExercises} exercise={exercise} />)}
        </div>
    )
}

export default ExerciseList