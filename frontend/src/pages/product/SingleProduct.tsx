import React, { useEffect, useState } from 'react'
import { Item } from '../../data/Item'
import './SingleProduct.css';
import { useParams } from 'react-router-dom';

export const SingleProductPage = () => {
    const { itemId } = useParams();
    const [item, setProduct] = useState<Item>();

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await fetch('/products/' + itemId, {
                method: "GET"
            });
            const json = await data.json();

            setProduct(json);
        }

        fetchProduct();
    }, [])

    return <>
        <div className='product-container'>
            {item &&
                <>
                    <img src={item.image} width='512' height='512' />
                    <div className='product-info'>
                        <h2>{item.title}</h2>
                        <h3>${item.price.toFixed(2)}</h3>
                        <p>{item.description}</p>
                    </div>
                </>
            }
        </div>
    </>
}