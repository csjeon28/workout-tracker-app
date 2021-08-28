import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import EditWorkoutForm from './EditWorkoutForm'

const Workout = ({ workout, workouts, setWorkouts }) => {
    // const [work, setWork] = useState([])
    // const history = useHistory()
    const [editing, setEditing] = useState(false)

    // useEffect(() => {
    //     fetch(`/workouts`)
    //         .then(resp => resp.json())
    //         .then(data => setWork(data))
    //     debugger
    // }, [])

    const deleteWorkout = (id) => {
        fetch(`/workouts/${workout.id}`, {
            method: 'DELETE'
        })
            .then(() => {
                setWorkouts(workouts.filter(workout => workout.id !== id))
            })
        // history.push('/userhomepage')
    }

    // const editWorkout = (edit) => {
    //     const config = {
    //         method: 'PATCH',
    //         header: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(edit)
    //     }
    //     // debugger
    //     fetch(`/workouts/${workout.id}`, config)
    //         .then(resp => resp.json())
    //         .then(data => {
    //             setWork(data)
    //             // setWork(workouts.map(editForm => editForm.id === workout.id ? workout : editForm))
    //         })
    //     setEditing(false)
    // }

    // debugger
    return (
        <div>
            <div>
                <div key={workout.id}>
                    <h3>Date:{workout.date}</h3>
                    <h4>Weight:{workout.weight}</h4>
                </div>
                {editing ? <EditWorkoutForm workout={workout} workouts={workouts} setWorkouts={setWorkouts} setEditing={setEditing} />
                    // {editing ? <EditWorkoutForm work={work} setWork={setWork} workout={workout} editWorkout={editWorkout} setEditing={setEditing} />
                    : <button onClick={() => setEditing(true)}>Edit</button>}
                <button onClick={() => deleteWorkout(workout.id)}>Delete</button>
            </div>
        </div>
    )

}

export default Workout