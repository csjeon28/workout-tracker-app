import { useState } from 'react'
import Errors from './Errors'

const CreateWorkout = ({ errors, handleNewWorkout }) => {
    // const CreateWorkout = ({ setWorkouts, handleNewWorkout, workouts, initialFormState }) => {
    const [form, setForm] = useState({})
    // const [workout, setWorkout] = useState(initialFormState)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        }
        fetch('/workouts', config)
            .then(resp => resp.json())
            .then(data => handleNewWorkout(data))
    }
    // setWorkouts([...workouts, data])
    // .then(data => console.log(data))

    // fetch('/workouts', config)
    // .then(resp => resp.json())
    // .then(resp => console.log(resp))
    // .then(() => handleNewWorkout)
    // .then(data => setWorkouts([...workouts, data.workout]))
    // .catch(error => console.log(error))

    //WHY IS THIS NOT WORKING BUT IT WAS WORKING YESTERDAY. AND NOW I CAN ONLY GET DELETE TO WORK.

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Date</label>
                <input name='date' id='date' type='text' onChange={handleChange} />
                <label>Weight</label>
                <input name='weight' id='weight' type='text' onChange={handleChange} />
                <button>Add Workout</button>
            </form>
            <Errors errors={errors} />
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