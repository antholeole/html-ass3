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
                <Navbar.Brand onClick={ pages.goToLanding }>IRL Fire Reaction Clothing Co.</Navbar.Brand>
                <Nav>
                    <Nav.Link onClick={ pages.goToProducts } >Products</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );

    // return <>
    //     <nav className='navigation'>
    //         <div className='navigation-menu'>
    //             <ul>
    //                 <li>
    //                     <Button className='page-link' onClick={ pages.goToLanding } >Home</Button>
    //                 </li>
    //                 <li>
    //                     <Button className='page-link' onClick={ pages.goToProducts } >Products</Button>
    //                 </li>
    //                 <li>
    //                     <Button className='page-link' onClick={ pages.goToCart } >Cart</Button>
    //                 </li>
    //             </ul>
    //         </div>
    //     </nav>
    // </>
}