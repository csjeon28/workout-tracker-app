import { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import Errors from './Errors'

const CreateWorkout = ({ errors, handleNewWorkout }) => {
    // const history = useHistory()

    const [workout, setWorkout] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setWorkout({ ...workout, [name]: value })
    }

    const handleCreateWorkout = (e) => {
        e.preventDefault()
        // const newWorkout = {
        //     date: workout.date,
        //     weight: workout.weight
        // }
        //FIGURE OUT WHY FETCH WORKOUTS ISNT WORKING AND WHY I CANT
        //POST WORKOUTS TO /WORKOUTS (DEFINITELY A SYNTAX ERROR)
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(workout)
        }
        fetch('/workouts', config)
            .then(resp => resp.json())
            .then(data => console.log(data))
        // .then(data => handleNewWorkout(data.workout))
        // !errors ? history.push('/workouts/new') : history.push('/userhomepage')
    }

    return (
        <div>
            <Errors errors={errors} />
            <form onSubmit={handleCreateWorkout}>
                <label>Date</label>
                <input name='date' type='text' onChange={handleChange} />
                {/* <input name='date' type='text' onChange={handleChange} value={workout.date} /> */}
                <label>Weight</label>
                <input name='weight' type='text' onChange={handleChange} />
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