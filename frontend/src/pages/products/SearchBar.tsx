import React from 'react';
import { Button } from 'react-bootstrap';
import { Pages } from '../../contexts/Page';

interface ISearchBarProps {
    onFilter: (filter: string) => void;
}

export const SearchBar = ({ onFilter }: ISearchBarProps) => {
    const page = Pages.useContainer();

    return <div className="my-3 mx-3 d-flex justify-content-between">
        <input
            placeholder='Search'
            type="text"
            onChange={(e) => onFilter(e.target.value)} 
        />
        <Button onClick={page.goToCart}>
            Checkout
        </Button>
    </div>
} 