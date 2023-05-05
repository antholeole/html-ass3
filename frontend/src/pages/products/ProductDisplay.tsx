import React, { useEffect, useState } from "react";
import { Item } from "../../data/Item";
import { Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { Spinner } from "../../components/Spinner";


export const ProductDisplay = () => {
    const [products, setProducts] = useState<Item[] | null>(null);


    useEffect(() => {
        const fetchProducts = async () => {
            const data = await fetch('/products/', {
                method: "GET"
            });
            const json = await data.json();

            setProducts(json.map((product: Omit<Item, "quantity">) => ({
                ...product,
                quantity: 0
            })));
        }

        fetchProducts();
    }, [])

    return <>
        {products == null ? <div
            style={{
                position: "absolute",
                top: "50vh",
                left: "50vw",
                transform: "translate(-50%, -50%)"
            }}
        >
            <Spinner />
        </div> : <Row xs={1} md={2} className="g-4 p-2">
            {products.map((product) => <ProductCard 
            key={product.id}    
            product={product} 
        />)}
        </Row>}
    </>
}
