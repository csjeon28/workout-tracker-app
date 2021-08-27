import React, { useState, useEffect } from 'react'
import EditWorkoutForm from './EditWorkoutForm'

const Workout = ({ workout, workouts, setWorkouts }) => {
    const [work, setWork] = useState([])
    const [editing, setEditing] = useState(false)

    const onDeleteWorkout = (id) => {
        const patchedWorkouts = workouts.filter(workout => workout.id !== id)
        setWorkouts(patchedWorkouts)
    }

    useEffect(() => {
        // debugger
        fetch(`/workouts`)
            .then(resp => resp.json())
            // .then(resp => console.log(resp))
            .then(data => setWork(data))
    }, [])

    const deleteWorkout = () => {
        fetch(`/workouts/${workout.id}`, {
            method: 'DELETE'
        })
            .then(() => {
                onDeleteWorkout(workout.id)
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
        // debugger
        fetch(`/workouts/${workout.id}`, config)
            .then(resp => resp.json())
            .then(data => {
                setWork(workouts.map(singleWorkout => singleWorkout.id === workout.id ? data : singleWorkout))
            })
        setEditing(false)
    }

    return (
        <div>
            <div>
                <h3>Date:{workout.date}</h3>
                <h4>Weight:{workout.weight}</h4>
                {editing ? <EditWorkoutForm work={work} setWork={setWork} editWorkout={editWorkout} workout={workout} setEditing={setEditing} />
                    : <button onClick={() => setEditing(true)}>Edit</button>}
                <button onClick={deleteWorkout}>Delete</button>
            </div>
        </div>
    )

}

export default Workout