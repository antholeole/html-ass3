import React from 'react';
import './styles/delete.css';
import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const Delete = () => {
    const [inputs, setInputs] = useState({});
    const [product, setProduct] = useState([]);
    const [isProduct, setIsProduct] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const [isSuccessful, setIsSuccessful] = useState(false);

    const handleChange = (event) => {
        setIsValid(true);
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        setIsSuccessful(false);
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

    const handleDelete = async e => {
        e.preventDefault();
        const response = await fetch('/products/' + inputs.id, {
            method: 'DELETE'
        });
        const body = await response.text();

        console.log(body);
        setIsProduct(false);
        setIsSuccessful(true);
    }

    return (
        <div className='delete-page'>
            <h1>Delete</h1>
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
                <div className='delete-prompt'>
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
                    <Button onClick={handleDelete}>Delete Product</Button>
                </div>
            }
            {isSuccessful &&
                <p>Successfully deleted item from database.</p>
            }
        </div>
    );
};
  
export default Delete;