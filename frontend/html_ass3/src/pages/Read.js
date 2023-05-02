import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useState } from 'react';
import './styles/read.css';

const Read = () => {
    const [products, setProducts] = useState([]);

    const handleGet = async () => {
        const response = await fetch('/products/');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        console.log(body);
        setProducts(body);
    };

    return (
        <div className='read-page'>
            <h1>Read</h1>
            <Button onClick={handleGet}>Get All Products</Button>
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
                    {products.map((product) => {
                        return (
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
                        )
                    })}
                </tbody>
            </Table>
        </div>
    );
};
  
export default Read;