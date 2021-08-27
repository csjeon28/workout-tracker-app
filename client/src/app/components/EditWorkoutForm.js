import React, { useState, useEffect } from 'react'

const EditWorkoutForm = ({ work, setWork, editWorkout, workout, setEditing }) => {
    // const [date, setDate] = useState('')
    // const [weight, setWeight] = useState('')

    // const setDateAndWeight = () => {
    //     setDate(workout.date)
    //     setWeight(workout.weight)
    // }

    const handleChange = (e) => {
        const { name, value } = e.target
        setWork({ ...work, [name]: value })
    }

    // useEffect(setDateAndWeight)

    const handleSubmit = (e) => {
        e.preventDefault()
        editWorkout({
            date: work.date,
            weight: work.weight
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Date</label>
                <input name='date' id='date' type='text' onChange={handleChange} />
                {/* <input name='date' id='date' type='text' onChange={(e) => setDate(e.target.value)} /> */}
                <label>Weight</label>
                <input name='weight' id='weight' type='text' onChange={handleChange} />
                {/* <input name='weight' id='weight' type='text' onChange={(e) => setWeight(e.target.value)} /> */}
                <input type='submit' value='Add Edit' />
                <button onClick={() => setEditing(false)}>Cancel</button>
            </form>
        </div>
    )
}

export default EditWorkoutForm