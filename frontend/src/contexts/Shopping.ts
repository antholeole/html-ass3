import { useState } from "react"
import { createContainer } from "unstated-next"
import { Item } from "../data/Item"

const useShoppingCart = () => {
    const products: Item[] = [];


    let [shoppingCart, setShoppingCart] = useState<Item[]>(products)

    const emptyCart = () => {
        setShoppingCart(products.map((product) => ({ ...product, quantity: 0 })))
    }

    const updateQuanity = (productName: String, quantity: number) => {
        if (quantity < 0) {
            return;
        }

        const newShoppingCart = shoppingCart.map((item) =>
            item.title === productName ? {
                ...item,
                quantity
            } : item
        );

        setShoppingCart(newShoppingCart)
    }


    return {
        shoppingCart,
        emptyCart,
        updateQuanity
    }
}

export const Shopping = createContainer(useShoppingCart)