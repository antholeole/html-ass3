import React from "react";
import { SearchBar } from "./SearchBar";
import { ProductDisplay } from "./ProductDisplay";
import { Shopping } from "../../contexts/Shopping";

export const HomePage = () => {
    const [filter, setFilter] = React.useState("");

    return <>
        <SearchBar onFilter={setFilter} />
        <ProductDisplay />
        </>;
}
