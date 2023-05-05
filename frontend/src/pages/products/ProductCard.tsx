import React from 'react'
import { Shopping } from "../../contexts/Shopping";
import { Item } from "../../data/Item";
import { Badge, Button, ButtonGroup, Card } from "react-bootstrap";
import { Pages } from "../../contexts/Page";

const ProductCard = ({ product }: { product: Item }) => {
    const shopping = Shopping.useContainer();
    const pages = Pages.useContainer();

    return (
        <div onClick={ pages.goToProducts }>
            <Card
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
                                product.title,
                                product.quantity - 1
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
                            >{product.quantity}</p>
                        </div>

                        <Button variant="primary"
                            style={{
                                width: "30px"
                            }}
                            onClick={() => shopping.updateQuanity(
                                product.title,
                                product.quantity + 1
                            )}>+</Button>
                    </ButtonGroup>
                </Card.Footer>

            </Card >
        </div>
    );
}

export default ProductCard;
