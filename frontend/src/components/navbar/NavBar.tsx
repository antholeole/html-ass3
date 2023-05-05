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
        <Navbar bg='dark'>
            <Container>
                <Navbar.Brand className='home-button' onClick={ pages.goToLanding }>
                    <img src="waifu.png" width='30' height='30'/>
                    IRL Fire Reaction Clothing Co.
                </Navbar.Brand>
                <Nav>
                    <Nav.Link className='page-link' onClick={ pages.goToProducts } >Products</Nav.Link>
                    <Nav.Link className='page-link' onClick={ pages.goToCart } >Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}