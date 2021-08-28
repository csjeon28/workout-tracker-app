import React, { useState } from 'react'

const EditWorkoutForm = ({ workout, workouts, setWorkouts, setEditing }) => {
    // const EditWorkoutForm = ({ workout, work, setWorkout, setWork, editWorkout, setEditing }) => {
    // const [date, setDate] = useState('')
    // const [weight, setWeight] = useState('')
    const { id } = workout
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
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        }
        fetch(`/workouts/${workout.id}`, config)
            .then(resp => resp.json())
            // .then(data => console.log(data))
            .then(() => {
                // setWork(data)
                setWorkouts(workouts.map(w => w.id === id ? workout : w))
            })
        setEditing(false)
    }
    // debugger

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Date</label>
                <input name='date' id='date' type='text' onChange={handleChange} value={form.date} />
                {/* <input name='date' id='date' type='text' onChange={(e) => setDate(e.target.value)} /> */}
                <label>Weight</label>
                <input name='weight' id='weight' type='text' onChange={handleChange} value={form.weight} />
                {/* <input name='weight' id='weight' type='text' onChange={(e) => setWeight(e.target.value)} /> */}
                <input type='submit' value='Add Edit' />
                <button onClick={() => setEditing(false)}>Cancel</button>
            </form>
        </div>
    )
}

export default EditWorkoutForm