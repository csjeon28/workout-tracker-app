import React, { useState } from 'react'

const AddExerciseForm = ({ addExercise, setEditing }) => {

    const [form, setForm] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addExercise(form)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input name='name' type='text' onChange={handleChange} />
                <label>Active Calories</label>
                <input name='calories' type='text' onChange={handleChange} />
                <label>Duration</label>
                <input name='duration' type='text' onChange={handleChange} />
                <input type='submit' value='Add Exercise' />
                <button onClick={() => setEditing(false)}>Cancel</button>
            </form>
        </div>
    )
}

export default AddExerciseForm