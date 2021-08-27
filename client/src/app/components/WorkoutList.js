import { useState } from 'react'
import EditWorkout from './EditWorkout'
import WorkoutItem from './WorkoutItem'
import CreateWorkout from './CreateWorkout'

const WorkoutList = ({ errors, handleNewWorkout, setWorkouts, workouts, onDeleteWorkout }) => {
    // const WorkoutList = ({ errors, handleUserLoginAndSignup, currentUser, handleNewWorkout, setWorkouts, workouts, onDeleteWorkout }) => {

    const initialFormState = {
        date: '',
        weight: ''
    }

    const [editing, setEditing] = useState(false)
    const [currentWorkout, setCurrentWorkout] = useState(initialFormState)

    const editWorkout = (workout) => {
        setEditing(true)
        setCurrentWorkout({
            id: workout.id,
            date: workout.date,
            weight: workout.weight
        })
    }

    // const updateWorkout = (workout, updatedWorkout) => {
    //     setEditing(false)

    //     const config = {
    //         method: 'PATCH',
    //         header: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             date: updatedWorkout.date,
    //             weight: updatedWorkout.weight
    //         })
    //     }
    //     fetch(`/workouts/${workout.id}`, config)
    //         .then(resp => resp.json())
    //         // .then(() => editWorkout(workout.id))
    //         .then(() => workouts.map(workout => (workout.id === updatedWorkout.id ? updatedWorkout : workout)))

    //     // setWorkouts(workouts.map(workout => (workout.id === updatedWorkout.id ? updatedWorkout : workout)))
    // }
    return (
        <div className='workout-list'>
            <div>
                {editing ? (
                    <EditWorkout
                        setEditing={setEditing}
                        currentWorkout={currentWorkout}
                        workouts={workouts}
                        setWorkouts={setWorkouts}
                    // updateWorkout={updateWorkout}
                    />
                ) : (
                    // null)}
                    <CreateWorkout
                        // setWorkouts={setWorkouts}
                        // workouts={workouts}
                        handleNewWorkout={handleNewWorkout}
                        // currentUser={currentUser}
                        // handleUserLoginAndSignup={handleUserLoginAndSignup}
                        errors={errors}
                    />
                )}
            </div>
            <div>
                {workouts.map((workout, index) => {
                    return (
                        <WorkoutItem onDeleteWorkout={onDeleteWorkout} key={index} workout={workout} workouts={workouts} editWorkout={editWorkout} editing={editing} />
                    )
                })}
            </div>
        </div>
    )
}

export default WorkoutList

// code below works but testing out new code
// import WorkoutItem from './WorkoutItem'

// const WorkoutList = ({ workouts, onDeleteWorkout }) => {
//     return (
//         <div>
//             {workouts.map((workout, index) => (
//                 <WorkoutItem onDeleteWorkout={onDeleteWorkout} key={index} workout={workout} workouts={workouts} />
//             ))}
//         </div>
//     )
// }

// export default WorkoutList