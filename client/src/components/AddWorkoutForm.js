import React, { useState } from 'react'
import styled from 'styled-components'
import { AddBtn, NewInput, NewInputForm } from '../styles'

const AddWorkoutForm = ({ addWorkout }) => {

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
        <NewInputForm onSubmit={handleSubmit}>
            <FormText>Date:</FormText>
            <NewInput name='date' type='date' onChange={handleChange} />
            <FormText>Weight:</FormText>
            <NewInput name='weight' type='number' onChange={handleChange} />
            <AddBtn type='submit' content='Add Workout' />
        </NewInputForm>
    )
}

const FormText = styled.h5`
  margin: 0.2rem 0 1rem 0;
  text-shadow: 1px 1px 1px #7e7e9c;
  letter-spacing: 0.05rem;
  font-size: 0.8rem;
`;

export default AddWorkoutForm