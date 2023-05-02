import React from 'react';
import './styles/delete.css';
import { useState } from 'react';

const Delete = () => {
    const [inputs, setInputs] = useState({});
    var input;
    const [products, setProducts] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        input = event.target.value;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        handleGet();
    }

    const handleGet = async () => {
        const response = await fetch('/products/' + {input});
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        console.log(body);
        setProducts(body);
    };

    return (
        <div className='delete-page'>
            <h1>Delete</h1>
            <form onSubmit={handleSubmit}>
                <label>Enter id:
                    <input type='number' name='id' value={inputs.id} onChange={handleChange} />
                </label>
                <input type='submit' />
            </form>
        </div>
    );
};
  
export default Delete;