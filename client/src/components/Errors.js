import React from 'react'
import { ErrorStyle } from '../styles'

const Errors = ({ errors }) => {

    const renderErrors = () => {
        return errors.map((error, index) => { return (<li key={index}> {error} </li>) })
    }

    return (
        <ErrorStyle>
            {renderErrors()}
        </ErrorStyle>
    )
}

export default Errors