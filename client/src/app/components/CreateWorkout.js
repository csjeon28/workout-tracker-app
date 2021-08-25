import { useState } from 'react'
import Errors from './Errors'

const CreateWorkout = ({ errors, setWorkouts, handleUserLoginAndSignup, workouts }) => {
    const [workout, setWorkout] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setWorkout({ ...workout, [name]: value })
    }

    const handleCreateWorkout = (e) => {
        e.preventDefault()
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(workout)
        }
        fetch('/workouts', config)
            .then(resp => resp.json())
            .then(data => {
                if (!data.error) {
                    handleUserLoginAndSignup(data)
                    console.log(data)
                    setWorkouts([...workouts, data.workout])
                }
            })
    }

    return (
        <div>
            <Errors errors={errors} />
            <form onSubmit={handleCreateWorkout}>
                <label>Date</label>
                <input name='date' id='date' type='text' onChange={handleChange} />
                {/* <input name='date' type='text' onChange={handleChange} value={workout.date} /> */}
                <label>Weight</label>
                <input name='weight' id='weight' type='text' onChange={handleChange} />
                {/* <input name='weight' type='text' onChange={handleChange} value={workout.weight} /> */}
                <button>Add Workout</button>
            </form>
        </div>
    )

}

export default CreateWorkout


// const config = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body: JSON.stringify(workout)
// }
// fetch('/workouts', config)
//     .then(res => res.json())
//     .then(data => handleNewWorkout(data))
// !errors ? history.push('/userhomepage') : history.push('/workouts')