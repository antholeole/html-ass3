import React from "react";
import { SearchBar } from "./SearchBar";
import { ProductDisplay } from "./ProductDisplay";

export const ProductsPage = () => {
    const [filter, setFilter] = React.useState("");

    return <>
        <SearchBar onFilter={setFilter} />
        <ProductDisplay />
    </>;
}
