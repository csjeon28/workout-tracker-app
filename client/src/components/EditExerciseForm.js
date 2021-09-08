import React, { useState } from 'react'
import styled from 'styled-components'
import { NewInput, EditBtn, DeleteBtn } from '../styles'

const EditExerciseForm = ({ exercise, setExercises, exercises, setEditing }) => {
    const { id } = exercise
    const [form, setForm] = useState({ name: exercise.name, calories: exercise.calories, duration: exercise.duration })

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
        fetch(`/exercises/${exercise.id}`, config)
            .then(resp => resp.json())
            .then(() => {
                setExercises(exercises.map(e => e.id === id ? form : e))
            })
        setEditing(false)
    }

    return (
        <EditForm onSubmit={handleSubmit}>
            <FormText>Name</FormText>
            <NewInput name='name' type='text' onChange={handleChange} value={form.name} />
            <FormText>Active Calories</FormText>
            <NewInput name='calories' type='text' onChange={handleChange} value={form.calories} />
            <FormText>Duration(in minutes)</FormText>
            <NewInput name='duration' type='text' onChange={handleChange} value={form.duration} />
            <EditBtn type='submit' content='Add Edit' />
            <DeleteBtn onClick={() => setEditing(false)} content='Cancel' />
        </EditForm>
    )
}

const FormText = styled.h5`
  margin: 1rem 0 0 0;
  text-shadow: 1px 1px 1px #7e7e9c;
  letter-spacing: 0.05rem;
  font-size: 0.8rem;
`;

const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 80%;
`;

export default EditExerciseForm