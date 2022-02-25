import React, { useState } from 'react'


const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit realizado');
        if( inputValue.trim().length > 2){
            setCategories(cats =>[ inputValue, ...cats ]);
        }
       
    }

    return (

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search Gif"
                value={inputValue}
                onChange={handleInputChange}

            />
        </form>

    )
}


export default AddCategory