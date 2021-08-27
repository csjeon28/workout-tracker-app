import React, { useState, useEffect } from 'react'
import EditWorkoutForm from './EditWorkoutForm'

const Workout = ({ workout, workouts, setWorkouts }) => {
    const [work, setWork] = useState([])
    const [editing, setEditing] = useState(false)

    useEffect(() => {
        fetch(`/workouts`)
            .then(resp => resp.json())
            .then(data => setWork(data))
    }, [])

    const deleteWorkout = (id) => {
        fetch(`/workouts/${workout.id}`, {
            method: 'DELETE'
        })
            .then(() => {
                setWorkouts(workouts.filter(workout => { return workout.id !== id }))
            })
    }

    const editWorkout = (content) => {
        const config = {
            method: 'PATCH',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(content)
        }
        fetch(`/workouts/${workout.id}`, config)
            .then(resp => resp.json())
            .then(data => {
                setWork(workouts.map(singleWorkout => singleWorkout.id === workouts.id ? data : singleWorkout))
            })
        setEditing(false)
    }

    // debugger
    return (
        <div>
            <div>
                <h3>Date:{workout.date}</h3>
                <h4>Weight:{workout.weight}</h4>
                {editing ? <EditWorkoutForm work={work} editWorkout={editWorkout} workouts={workouts} setEditing={setEditing} />
                    : <button onClick={() => setEditing(true)}>Edit</button>}
                <button onClick={() => deleteWorkout(workout.id)}>Delete</button>
            </div>
        </div>
    )

}

export default Workout