import React from 'react';
import { Button } from 'react-bootstrap';
import { Pages } from "../../contexts/Page";
import './NavBar.css';

export const NavBar = () => {
    const pages = Pages.useContainer();

    return <>
        <nav className='navigation'>
            <div className='navigation-menu'>
                <ul>
                    <li>
                        <Button className='page-link' onClick={ pages.goToLanding } >Home</Button>
                    </li>
                    <li>
                        <Button className='page-link' onClick={ pages.goToProducts } >Products</Button>
                    </li>
                    <li>
                        <Button className='page-link' onClick={ pages.goToCart } >Cart</Button>
                    </li>
                </ul>
            </div>
        </nav>
    </>
}