import PropTypes from 'prop-types'
import React, { useState } from 'react';

export const AddCategory = ({ setcategories }) => {

    const [inputValue, setinputValue] = useState('Hola Mundo');

    const handleInputChange = (e) => {

        console.log(e.target.value)
        setinputValue(e.target.value);

    }

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(setcategories);

        if (inputValue.trim().length > 2) {
            setcategories(cats => [inputValue, ...cats]);
            setinputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={inputValue} onChange={handleInputChange}></input>
        </form>
    )
}
