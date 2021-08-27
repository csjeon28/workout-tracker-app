import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const NewWorkoutForm = ({ addWorkout }) => {
    const history = useHistory()
    const [form, setForm] = useState({})
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addWorkout(form)
        history.push('/userhomepage')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Date</label>
                <input name='date' id='date' type='text' onChange={handleChange} />
                <label>Weight</label>
                <input name='weight' id='weight' type='text' onChange={handleChange} />
                <input type='submit' value='Add Workout' />
            </form>
        </div>
    )
}

export default NewWorkoutForm