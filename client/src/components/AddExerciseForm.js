import React, { useState } from 'react'
import styled from 'styled-components'
import { AddExerciseBtn } from '../styles'

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
      <ExerciseInput name='name' type='text' onChange={handleChange} />
      <FormText>Active Calories</FormText>
      <ExerciseInput name='calories' type='number' onChange={handleChange} />
      <FormText>Duration(in minutes)</FormText>
      <ExerciseInput name='duration' type='number' onChange={handleChange} />
      <AddExerciseBtn type='submit' content='Add Exercise' />
    </NewExerciseForm>
  )
}

const FormText = styled.h5`
  margin: 0.6rem 0 0.1rem 4.4rem;  
  text-shadow: 1px 1px 1px #7e7e9c;
  letter-spacing: 0.05rem;
  font-size: 0.8rem;
`;

const NewExerciseForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: row wrap;
  align-items: center;
  justify-content: space-between;
  height: 28%;
  width: 65%;
  margin: 0.1rem 6rem 0 2rem;
`;

const ExerciseInput = styled.input`
  background: rgba(255, 255, 255, 0.24);
  box-shadow: 0 2px 4px 0 rgba(31, 38, 135, 0.37);
  border-radius: 0.5rem;
  width: 60%;
  height: 1rem;
  margin: 0 0 0 4.4rem;
  padding: 0.7rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 0.8rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #8773bf;
    font-weight: 100;
    font-size: 1rem;
  }
`;


export default AddExerciseForm