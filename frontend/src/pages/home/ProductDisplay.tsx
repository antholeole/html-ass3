import React from "react";
import { Item } from "../../data/Item";
import { Badge, Button, ButtonGroup, Card, Row } from "react-bootstrap";
import { Shopping } from "../../contexts/Shopping";


export const ProductDisplay = ({ products }: { products: Item[] }) => {
    const shopping = Shopping.useContainer();

    return <Row xs={1} md={2} className="g-4 p-2">
        {products.map((product) => <Card
            style={{ width: '18rem' }}
            key={product.name}
            className="m-2 p-0"
        >
            <Card.Img
                variant="top"
                src={`/hats/${product.image}`}
                className={"p-2"}
            />
            <Card.Title>{product.name}</Card.Title>
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
                            product.name,
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

                    <Button variant="add-item"
                        style={{
                            width: "30px"
                        }}
                        onClick={() => shopping.updateQuanity(
                            product.name,
                            product.quantity + 1
                        )}>+</Button>
                </ButtonGroup>
            </Card.Footer>

        </Card >)
        }
    </Row>
}
