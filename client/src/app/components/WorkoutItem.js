import React from 'react'

const WorkoutItem = ({ workout, onDeleteWorkout, editWorkout, editing }) => {

    const performDeleteWorkout = () => {
        fetch(`/workouts/${workout.id}`, {
            method: 'DELETE'
        })
            .then(() => {
                onDeleteWorkout(workout.id)
            })
    }

    return (
        <div>
            {/* <div key={workout.id}> */}
            <h3>Date:{workout.date}</h3>
            <h4>Weight:{workout.weight}</h4>

            {editing ? (null
            ) : (
                <button onClick={() => { editWorkout(workout) }}>Edit</button>
            )}
            <button onClick={performDeleteWorkout}>Remove</button>
        </div>
    )
}

export default WorkoutItem

// import { Link } from 'react-router-dom'
// // import EditWorkout from './EditWorkout'

// const WorkoutItem = ({ workout, onDeleteWorkout }) => {

    // const performDeleteWorkout = () => {
    //     fetch(`/workouts/${workout.id}`, {
    //         method: 'DELETE'
    //     })
    //         .then(() => {
    //             onDeleteWorkout(workout.id)
    //         })
    //         .catch((error) => console.log(error))
    // }

//     return (
//         <div>
//             <h3>Date:{workout.date}</h3>
//             <div className='workout-item-weight'>
//                 <h4>Weight:{workout.weight}</h4>
//             </div>
//             <div className='workout-item-buttons'>
//                 <button onClick={performDeleteWorkout}>Delete</button>
//                 {/* <button onClick={performEditWorkout}>Edit</button> */}
//                 {/* <EditWorkout workout={workout} /> */}
//                 <Link to={`/workouts/${workout.id}`}>Edit</Link>
//             </div>
//         </div>
//     )
// }

// export default WorkoutItem