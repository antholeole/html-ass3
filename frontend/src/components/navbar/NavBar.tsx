import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './NavBar.css';
import { User } from '../../contexts/User';
import { useNavigate } from "react-router";
import { Modal } from '../../contexts/Modal';

export const NavBar = () => {
    const modal = Modal.useContainer();
    const user = User.useContainer();
    const navigate = useNavigate();

    return (
        <Navbar className='navbar' bg='dark'>
            <Container>
                <Navbar.Brand className='home-button' onClick={() => navigate('/')}>
                    <img src="waifu.png" width='30' height='30' />
                    IRL Fire Reaction Clothing Co.
                </Navbar.Brand>
                <Nav>
                    <Nav.Link className='page-link' onClick={() => navigate('/about')} >About</Nav.Link>
                    <Nav.Link className='page-link' onClick={() => navigate('/products',)} >Products</Nav.Link>
                    <Nav.Link className='page-link' onClick={() => navigate('/cart')} >Cart</Nav.Link>
                    <Nav.Item className='page-link' onClick={user.userIsLoggedIn ? user.logOutUser : () => modal.toggleLoginModalTo(true)}>
                        {user.userIsLoggedIn ? "Log Out" : "Log In"}
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}