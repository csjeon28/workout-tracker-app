import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const EditWorkoutForm = ({ workout, setWorkouts, workouts, setEditing }) => {
    const { id } = workout
    const history = useHistory()
    const [form, setForm] = useState({ date: workout.date, weight: workout.weight })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const config = {
            method: 'PATCH',
            header: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(form)
        }
        fetch(`/workouts/${workout.id}`, config)
            .then(resp => resp.json())
            .then(() => {
                setWorkouts(workouts.map(w => w.id === id ? form : w))
            })
        setEditing(false)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Date</label>
                <input name='date' id='date' type='text' onChange={handleChange} value={form.date} />
                <label>Weight</label>
                <input name='weight' id='weight' type='text' onChange={handleChange} value={form.weight} />
                <input type='submit' value='Add Edit' />
                <button onClick={() => setEditing(false)}>Cancel</button>
                <button onClick={() => history.push('/exercises')}>Add Exercise</button>
            </form>
        </div>
    )
}

export default EditWorkoutForm