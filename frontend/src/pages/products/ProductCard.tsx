import React, { useEffect, useState } from 'react'
import { Shopping } from "../../contexts/Shopping";
import { Item } from "../../data/Item";
import { Badge, Button, ButtonGroup, Card } from "react-bootstrap";
import { Pages } from "../../contexts/Page";
import { User } from '../../contexts/User';

const ProductCard = ({ product }: { product: Item }) => {
    const shopping = Shopping.useContainer();
    const pages = Pages.useContainer();

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
        <Card
            onClick={() => pages.goToProductPage(product)}
            style={{ width: '18rem' }}
            key={product.title}
            className="m-2 p-0"
        >
            <Card.Img
                variant="top"
                src={product.image}
                className={"p-2"}
            />
            <Card.Title>{product.title}</Card.Title>
            <Card.Body>
                <div className="d-block">
                    <Badge>
                        ${product.price.toFixed(2)}
                    </Badge>
                </div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto obcaecati a distinctio quae optio minima adipisci atque reprehenderit blanditiis rem est debitis voluptas asperiores fuga magni cumque, consequuntur nulla quod?
            </Card.Body>
            <Card.Footer>
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
