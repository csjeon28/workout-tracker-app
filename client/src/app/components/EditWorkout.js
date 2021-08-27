import { useState } from 'react'

const EditWorkout = ({ currentWorkout, workouts, setEditing, setWorkouts }) => {
    const [workout, setWorkout] = useState({ id: currentWorkout.id, date: currentWorkout.date, weight: currentWorkout.weight })

    const handleChange = (e) => {
        const { name, value } = e.target
        setWorkout({ ...workout, [name]: value })
    }

    // const handleEditWorkout = (e) => {
    //     e.preventDefault()
    //     if (!workout.date || !workout.weight) return;
    //     updateWorkout(workout)
    // }
    const handleEditWorkout = (e) => {
        e.preventDefault()
        setEditing(false)

        const config = {
            method: 'PATCH',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(workout)
        }
        fetch(`/workouts/${currentWorkout.id}`, config)
            .then(resp => resp.json())
            .then(data => setWorkouts(workouts.map(oneWorkout => (oneWorkout.id === currentWorkout.id ? data : oneWorkout))))
        // .then(() => editWorkout(workout.id))
        // .then(() => workouts.map(workout => (workout.id === updatedWorkout.id ? updatedWorkout : workout)))

        // setWorkouts(workouts.map(workout => (workout.id === updatedWorkout.id ? updatedWorkout : workout)))
    }




    return (
        <form onSubmit={handleEditWorkout}>
            <label>Edit Date</label>
            <input name='date' type='text' onChange={handleChange} value={workout.date} />
            <label>Edit Weight</label>
            <input name='weight' type='text' onChange={handleChange} value={workout.weight} />
            <button>Add Edit</button>
            <button onClick={() => setEditing(false)}>Cancel</button>
        </form>
    )
}

export default EditWorkout

// previous code as of 11pm. just checking if the new code works
// import { useState } from 'react'
// // import { useState, useEffect } from 'react'
// import { useHistory } from 'react-router-dom'
// import { useRouteMatch } from 'react-router-dom'

// const EditWorkout = ({ workouts }) => {
//     const history = useHistory()
//     const match = useRouteMatch()
//     let workoutId = match.params.id

//     const [workout, setWorkout] = useState({})

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setEditWorkout({ ...editWorkout, [name]: value })
//     }

//     const handleEditWorkout = (e) => {
//         e.preventDefault()
//         const config = {
//             method: 'PATCH',
//             header: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 date: editWorkout.date,
//                 weight: editWorkout.weight
//             })
//         }
//         fetch(`/workouts/${workoutId}`, config)
//             .then(resp => resp.json())
//             .then(data => console.log(data))
//             // .then(data => setEditWorkout(data))
//             .then(() => {
//                 history.push('/userhomepage')
//             })
//     }

//     return (
//         <form onSubmit={handleEditWorkout}>
//             <label>Date</label>
//             {/* <input name='date' type='text' onChange={handleChange} /> */}
//             <input name='date' type='text' onChange={handleChange} value={workout.date} />
//             <label>Weight</label>
//             {/* <input name='weight' type='text' onChange={handleChange} /> */}
//             <input name='weight' type='text' onChange={handleChange} value={workout.weight} />
//             <button>Edit Workout</button>
//         </form>
//     )

// }

// export default EditWorkout