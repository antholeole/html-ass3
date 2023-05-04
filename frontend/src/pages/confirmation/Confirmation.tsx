import React from "react";
import { PaymentFormInputs } from "../../data/orderForm";
import { Button } from "react-bootstrap";
import { Pages } from "../../contexts/Page";
import { Shopping } from "../../contexts/Shopping";
import { ShoppingCartTable } from "../../components/ShoppingCartTable";

export const ConfirmationPage = ({ form }: { form: PaymentFormInputs }) => {
    const page = Pages.useContainer();
    const shopping = Shopping.useContainer();

    const returnHome = () => {
        shopping.emptyCart();
        page.goHome();
    }

    return <>
    <ShoppingCartTable />
        {Object.entries(form).map(([key, value]) => {
            return <p key={key}><b>{key}</b>: {
                key == "card" ? value.replace(/.(?=.{4})/g, "*") : value 
            }</p>
        })}
        <Button onClick={returnHome}>Return Home</Button>
    </>;
}