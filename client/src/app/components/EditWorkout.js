import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

const EditWorkout = () => {
    const history = useHistory()
    const params = useParams()
    const workoutId = params.id
    const [workout, setWorkout] = useState({
        date: '',
        weight: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setWorkout({ ...workout, [name]: value })
    }

    useEffect(() => {
        fetch(`/workouts/${workoutId}`)
            .then((resp) => {
                return resp.json()
            })
            .then(data => {
                setWorkout({
                    date: data.date,
                    weight: data.weight
                })
            })
            .catch(error => console.log(error))
    }, [workoutId])

    const handleEditWorkout = (e) => {
        e.preventDefault()
        fetch(`/workouts/${workoutId}`, {
            method: 'PATCH',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(workout)
        })
            .then(() => {
                history.push('/userhomepage')
            })
            .catch(error => console.log(error))
    }

    return (
        <form onSubmit={handleEditWorkout}>
            <label>Date</label>
            <input name='date' type='text' onChange={handleChange} />
            {/* <input name='date' type='text' onChange={handleChange} value={workout.date} /> */}
            <label>Weight</label>
            <input name='weight' type='text' onChange={handleChange} />
            {/* <input name='weight' type='text' onChange={handleChange} value={workout.weight} /> */}
            <button>Edit Workout</button>
        </form>
    )

}

export default EditWorkout