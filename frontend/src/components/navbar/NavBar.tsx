import React from 'react';
import { Button, NavbarBrand } from 'react-bootstrap';
import { Pages } from "../../contexts/Page";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './NavBar.css';

export const NavBar = () => {
    const pages = Pages.useContainer();

    return (
        <Navbar bg='light'>
            <Container>
                <Navbar.Brand className='home-button' onClick={ pages.goToLanding }>
                    <img alt='' src='../../images/waifu.png' width='30' height='30' />
                    IRL Fire Reaction Clothing Co.
                </Navbar.Brand>
                <Nav>
                    <Nav.Link onClick={ pages.goToProducts } >Products</Nav.Link>
                    <Nav.Link onClick={ pages.goToCart } >Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}