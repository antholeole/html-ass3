import React from "react";
import { Shopping } from "../../contexts/Shopping";
import { Button, Navbar, Table } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { Pages } from "../../contexts/Page";
import { Payment } from "./Payment";
import { ShoppingCartTable } from "../../components/ShoppingCartTable";
import { NavBar } from '../../components/navbar/NavBar';

export const CartPage = () => {
    const pages = Pages.useContainer();

    return <>
        <NavBar />
        <Button
            className="m-3"
            onClick={pages.goToLanding}
        ><ArrowLeft /> Return</Button>
        <ShoppingCartTable />
        <Payment/>
    </>
}