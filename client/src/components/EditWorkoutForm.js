import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { NewInputForm, NewInput, EditBtn, DeleteBtn } from '../styles'

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
            headers: {
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
        <NewInputForm onSubmit={handleSubmit}>
            <FormText>Date</FormText>
            <NewInput name='date' type='date' onChange={handleChange} value={form.date} />
            <FormText>Weight</FormText>
            <NewInput name='weight' type='number' onChange={handleChange} value={form.weight} />
            <EditBtn type='submit' content='Add Changes' />
            <DeleteBtn onClick={() => setEditing(false)} content='Cancel' />
            <AddExercise onClick={() => history.push('/exercises')}>Add Exercise</AddExercise>
            <Separator />
        </NewInputForm>
    )
}

const FormText = styled.h5`
  margin: 0.2rem 0 1rem 0;
  text-shadow: 1px 1px 1px #7e7e9c;
  letter-spacing: 0.05rem;
  font-size: 0.8rem;
`;

const AddExercise = styled.button`
  background: linear-gradient(to right, #2b3099 20%, #73a8e6 100%);
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  width: 37%;
  height: 1.55rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  color: #ffe7d1;
  font-weight: 600;
  margin: 0.8em 0 0 0;
`;

const Separator = styled.hr`
  width: 70%;
  height: 0.1em;
  border: none;
  background-color: #73a8e6;
  margin: 1rem 0 0.1rem 0;
`;

export default EditWorkoutForm