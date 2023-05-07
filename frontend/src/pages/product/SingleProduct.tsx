import React from 'react'
import { Item } from '../../data/Item'
import { Navbar } from 'react-bootstrap'

export const SingleProductPage = ({ item }: { item: Item }) => {
    return <>
        <Navbar />

        <img src={item.image} />
        <p>{item.description}</p>
    </>
}