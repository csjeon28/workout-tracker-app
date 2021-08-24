import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const CreateWorkout = () => {
    const history = useHistory()

    const [workout, setWorkout] = useState({
        date: '',
        weight: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setWorkout({ ...workout, [name]: value })
    }

    const handleCreateWorkout = (e) => {
        e.preventDefault()
        const newWorkout = {
            date: workout.date,
            weight: workout.weight
        }
        fetch('/workouts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newWorkout)
        })
            .then(() => {
                history.push('/userhomepage')
            })
            .catch((error) => console.log(error))
    }

    return (
        <form onSubmit={handleCreateWorkout}>
            <label>Date</label>
            <input name='date' type='text' onChange={handleChange} value={workout.date} />
            <label>Weight</label>
            <input name='weight' type='text' onChange={handleChange} value={workout.weight} />
            <button>Add Workout</button>
        </form>
    )

}

export default CreateWorkout