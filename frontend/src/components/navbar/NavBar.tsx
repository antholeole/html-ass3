import React from 'react';
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
                    <Nav.Link className='page-link' onClick={user.userIsLoggedIn ? user.logOutUser : () => pages.toggleLoginModalTo(true)}>
                        {user.userIsLoggedIn ? "Log Out" : "Log In"}
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}