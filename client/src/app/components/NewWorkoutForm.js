import React, { useState } from 'react'

const NewWorkoutForm = ({ addWorkout }) => {

    const [form, setForm] = useState({})
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addWorkout(form)
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