import React from 'react'

const Errors = ({ errors }) => {

    const renderErrors = () => {
        return errors.map(error => <p> {error} </p>)
    }
    return (
        <div className="errors">
            {renderErrors()}
        </div>
    )
}

export default Errors