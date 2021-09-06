import React, { useState } from 'react'
import styled from 'styled-components'
import { NewInput, AddExerciseBtn } from '../styles'

const AddExerciseForm = ({ addExercise }) => {

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
        <NewExerciseForm onSubmit={handleSubmit}>
            <FormText>Name</FormText>
            <NewInput name='name' type='text' onChange={handleChange} />
            <FormText>Active Calories</FormText>
            <NewInput name='calories' type='number' onChange={handleChange} />
            <FormText>Duration(in minutes)</FormText>
            <NewInput name='duration' type='number' onChange={handleChange} />
            <AddExerciseBtn type='submit' content='Add Exercise' />
        </NewExerciseForm>
    )
}

const FormText = styled.h5`
  margin: 0.1rem 0 0.5rem 1rem;  
  text-shadow: 1px 1px 1px #7e7e9c;
  letter-spacing: 0.05rem;
  font-size: 0.8rem;
`;

const NewExerciseForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 28%;
  margin: 0.1rem 6rem 0 2rem;
`;


export default AddExerciseForm