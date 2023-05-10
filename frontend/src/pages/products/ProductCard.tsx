import React, { useEffect, useState } from 'react'
import { Shopping } from "../../contexts/Shopping";
import { Item } from "../../data/Item";
import { Badge, Button, ButtonGroup, Card } from "react-bootstrap";
import { useNavigate } from "react-router";

const ProductCard = ({ product }: { product: Item }) => {
    const shopping = Shopping.useContainer();
    const navigate = useNavigate();
    const [displayQuantity, setDisplayQuantity] = useState(0);

    useEffect(() => {
        const itemFromCart = shopping.shoppingCart.find((p) => p.id === product.id);

        if (!itemFromCart) {
            setDisplayQuantity(0);
        } else {
            setDisplayQuantity(itemFromCart.quantity);
        }
    }, [shopping])

    return (
        <Card style={{ width: '18rem', display: 'flex', flexDirection: 'column'}} key={product.title} className="m-2 p-0">
            <div className='product-card' onClick={() => navigate('/products/' + product.id)}>
                <Card.Img
                    variant="top"
                    src={product.image}
                    className={"p-2"}
                    style={{height: '256px'}}
                />
                <Card.Title>{product.title}</Card.Title>
                <Card.Body>
                    <div className="d-block">
                        <Badge>
                            ${product.price.toFixed(2)}
                        </Badge>
                    </div>
                    {product.description}
                </Card.Body>
            </div>
            <Card.Footer style={{flex: '1', justifyContent: 'flex-end', maxHeight: '54px'}}>
                <ButtonGroup>
                    <Button
                        variant="primary"
                        className="subtract-item"
                        style={{
                            width: "30px"
                        }}
                        onClick={() => shopping.updateQuanity(
                            product.id,
                            displayQuantity - 1
                        )}>-</Button>
                    <div className="item-quantity"
                        style={{
                            width: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "white"
                        }}>
                        <p
                            style={{
                                margin: "0"
                            }}
                        >{displayQuantity}</p>
                    </div>

                    <Button variant="primary"
                        style={{
                            width: "30px"
                        }}
                        onClick={() => shopping.updateQuanity(
                            product.id,
                            displayQuantity + 1
                        )}>+</Button>
                </ButtonGroup>
            </Card.Footer>

        </Card >
    );
}

export default ProductCard;
