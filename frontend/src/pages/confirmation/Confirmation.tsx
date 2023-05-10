import React from "react";
import type { PaymentFormInputs } from "../../data/orderForm";
import { Button } from "react-bootstrap";
import { Shopping } from "../../contexts/Shopping";
import { ShoppingCartTable } from "../../components/ShoppingCartTable";
import { useLocation } from "react-router";

export const ConfirmationPage = () => {
    const shopping = Shopping.useContainer();

    // This is not type safe. If you navigated here without setting the 
    // form values to location, you are dumb.
    const location = useLocation();

    const returnHome = () => {
        shopping.emptyCart();
    }

    return <>
    <ShoppingCartTable />
        {Object.entries(location.state as PaymentFormInputs).map(([key, value]) => {
            return <p key={key}><b>{key}</b>: {
                key == "card" ? value.replace(/.(?=.{4})/g, "*") : value 
            }</p>
        })}
        <Button onClick={returnHome}>Return Home</Button>
    </>;
}