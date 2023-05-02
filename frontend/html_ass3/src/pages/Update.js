import React from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import './styles/update.css';

const Update = () => {
    const [inputs, setInputs] = useState({});
    const [product, setProduct] = useState([]);
    const [isProduct, setIsProduct] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const handleChange = (event) => {
        setIsValid(true);
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        handleGet();
    }

    const handleGet = async () => {
        try {
            const response = await fetch('/products/' + inputs.id);
            const body = await response.json();
            if (response.status !== 200) throw Error(body.message);

            console.log(body);
            setProduct(body);
            setIsProduct(true);
        } catch {
            setIsValid(false);
            setIsProduct(false);
        }
    };

    const handleUpdate = async e => {
        e.preventDefault();
        product.price = inputs.price;
        const response = await fetch('/products/' + inputs.id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                "_id": product._id,
                "id": product.id,
                "title": product.title,
                "price": inputs.price,
                "description": product.description,
                "category": product.category,
                "image": product.image,
                "rating": {
                    "rate": product.rating.rate,
                    "count": product.rating.count
                }
             }),
        });
        const body = await response.text();

        console.log(body);
        handleGet();
    }

    return (
        <div className='update-page'>
            <h1>Update</h1>
            <form onSubmit={handleSubmit}>
                <label>Enter id:
                    <input type='number' name='id' value={inputs.id} onChange={handleChange} />
                </label>
                <input type='submit' />
            </form>
            {!isValid &&
                <p>The given id is does not exist in the database.</p>
            }
            {isProduct &&
                <div className='update-prompt'>
                    <Table responsive bordered>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Image</th>
                                <th>Rating Rate</th>
                                <th>Rating Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>{product.category}</td>
                                <td><img src={product.image} alt={product.image} /></td>
                                <td>{product.rating.rate}</td>
                                <td>{product.rating.count}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className='update-input'>
                        <form onSubmit={handleUpdate}>
                            <label>Enter new price:
                                <input type='number' name='price' value={inputs.price} onChange={handleChange} />
                            </label>
                            <input type='submit' />
                        </form>
                    </div>
                </div>
            }
        </div>
    );
};
  
export default Update;