import React from "react";
import { Button, Navbar, Table } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { Pages } from "../../contexts/Page";
import { Payment } from "./Payment";
import { ShoppingCartTable } from "../../components/ShoppingCartTable";
import { useNavigate } from "react-router";

export const CartPage = () => {
    const pages = Pages.useContainer();
    const navigate = useNavigate();

    return <>
        <Button
            className="m-3"
            onClick={() => navigate(-1)}
        ><ArrowLeft /> Return</Button>
        <ShoppingCartTable />
        <Payment/>
    </>
}