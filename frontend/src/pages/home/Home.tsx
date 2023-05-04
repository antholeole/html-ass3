import React from "react";
import Hats from "../../data/products.json";
import { Item } from "../../data/Item";
import { SearchBar } from "./SearchBar";
import { ProductDisplay } from "./ProductDisplay";
import { Shopping } from "../../contexts/Shopping";

export const HomePage = () => {
    const shopping = Shopping.useContainer();
    const [filter, setFilter] = React.useState("");

    return <>
        <p>created by anthony oleinik and tyler evans</p>
        <SearchBar onFilter={setFilter} />
        <ProductDisplay
            products={
                shopping.shoppingCart
                    .filter(
                        (product) =>
                            product
                                .name
                                .toLowerCase()
                                .includes(filter.toLowerCase())
                        )
            }
        />
        </>;
}
