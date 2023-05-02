import React from 'react';
import './styles/create.css';
import { useState } from 'react';

const Create = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleCreate = async e => {
        e.preventDefault();
        try {
            const response = await fetch('/products/' + inputs.id);
            const body = await response.json();
            if (response.status !== 200) throw Error(body.message);

            console.log(body);
        } catch {
            const imgResponse = await fetch('http://fakestoreapi.com/products/' + inputs._id);
            const imgBody = await imgResponse.json();
            const response = await fetch('/products/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    "_id": parseInt(inputs._id),
                    "id": parseInt(inputs._id),
                    "title": inputs.title,
                    "price": inputs.price,
                    "description": inputs.description,
                    "category": inputs.category,
                    "image": imgBody.image,
                    "rating": {
                        "rate": inputs.rate,
                        "count": inputs.count
                    }
                 }),
            });
            const body = await response.text();
    
            console.log(body);
        }
    }

    return (
        <div className='create-page'>
            <h1>Create</h1>
            <form onSubmit={handleCreate}>
                <label>Enter id: 
                    <input type='id' name='_id' value={inputs._id} onChange={handleChange} />
                </label>
                <label>Enter title: 
                    <input type='text' name='title' value={inputs.title} onChange={handleChange} />
                </label>
                <label>Enter price: 
                    <input type='number' name='price' value={inputs.price} onChange={handleChange} />
                </label>
                <label>Enter description: 
                    <input type='text' name='description' value={inputs.description} onChange={handleChange} />
                </label>
                <label>Enter category: 
                    <input type='text' name='category' value={inputs.category} onChange={handleChange} />
                </label>
                <label>Enter rating rate: 
                    <input type='number' name='rate' value={inputs.rate} onChange={handleChange} />
                </label>
                <label>Enter rating count: 
                    <input type='number' name='count' value={inputs.count} onChange={handleChange} />
                </label>
                <input type='submit' />
            </form>
        </div>
    );
};
  
export default Create;