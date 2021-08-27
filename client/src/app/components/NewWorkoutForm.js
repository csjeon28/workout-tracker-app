import React, { useState } from 'react'

const NewWorkoutForm = ({ addWorkout }) => {
    const [date, setDate] = useState('')
    const [weight, setWeight] = useState('')

    // const [form, setForm] = useState({})
    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setForm({ ...form, [name]: value })
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        addWorkout({
            date: date,
            weight: weight
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Date</label>
                <input name='date' id='date' type='text' onChange={(e) => setDate(e.target.value)} />
                <label>Weight</label>
                <input name='weight' id='weight' type='text' onChange={(e) => setWeight(e.target.value)} />
                {/* <button>Add Workout</button> */}
                <input type='submit' value='Add Workout' />
            </form>
        </div>
    )
}

export default NewWorkoutForm