import React from 'react'
import { Item } from '../../data/Item'
import { NavBar } from '../../components/navbar/NavBar';
import './SingleProduct.css';

export const SingleProductPage = ({ item }: { item: Item }) => {
    return <>
        <NavBar />
        <div className='product-container'>
            <img src={item.image} width='512' height='512' />
            <div className='product-info'>
                <h2>{item.title}</h2>
                <h3>${item.price.toFixed(2)}</h3>
                <p>{item.description}</p>
            </div>
        </div>
    </>
}