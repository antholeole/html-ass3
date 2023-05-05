import React from 'react';
import { Button, NavbarBrand } from 'react-bootstrap';
import { Pages } from "../../contexts/Page";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './NavBar.css';
import { User } from '../../contexts/User';

export const NavBar = () => {
    const pages = Pages.useContainer();
    const user = User.useContainer();

    return (
        <Navbar bg='dark'>
            <Container>
                <Navbar.Brand className='home-button' onClick={pages.goToLanding}>
                    <img src="waifu.png" width='30' height='30' />
                    IRL Fire Reaction Clothing Co.
                </Navbar.Brand>
                <Nav>
                    <Nav.Link className='page-link' onClick={pages.goToProducts} >Products</Nav.Link>
                    <Nav.Link className='page-link' onClick={pages.goToCart} >Cart</Nav.Link>
                    <Button variant={user.userIsLoggedin() ? "secondary" : "primary"}
                        onClick={user.userIsLoggedin() ? user.logOutUser : () => pages.toggleLoginModalTo(true)}
                    >
                        {user.userIsLoggedin() ? "Log Out" : "Log In"}
                    </Button>
                </Nav>
            </Container>
        </Navbar>
    );
}