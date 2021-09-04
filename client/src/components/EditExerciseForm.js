import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const EditExerciseForm = ({ exercise, setExercises, exercises, setEditing }) => {
    const { id } = exercise
    const history = useHistory()
    const [form, setForm] = useState({ name: exercise.name, calories: exercise.calories, duration: exercise.duration })

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
        fetch(`/exercises/${exercise.id}`, config)
            .then(resp => resp.json())
            .then(() => {
                setExercises(exercises.map(e => e.id === id ? form : e))
            })
        setEditing(false)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input name='name' id='name' type='text' onChange={handleChange} value={form.name} />
                <label>Active Calories</label>
                <input name='calories' id='calories' type='text' onChange={handleChange} value={form.calories} />
                <label>Duration(in minutes)</label>
                <input name='duration' id='duration' type='text' onChange={handleChange} value={form.duration} />
                <input type='submit' value='Add Edit' />
                <button onClick={() => setEditing(false)}>Cancel</button>
                <button onClick={() => history.push('/userhomepage')}>Go back to Workouts</button>
            </form>
        </div>
    )
}

export default EditExerciseForm