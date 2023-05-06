import { useEffect, useState } from "react"
import { createContainer } from "unstated-next"
import { Item } from "../data/Item"
import { Toaster } from "./Toaster"
import { User } from "./User"


const useShoppingCart = () => {
    const toaster = Toaster.useContainer();
    const user = User.useContainer();


    let [shoppingCart, setShoppingCart] = useState<Item[]>([]);

    useEffect(() => {
        if (user.userIsLoggedIn) {
            fetchShoppingCart()
        }
    }, [user.userIsLoggedIn])

    const emptyCart = () => {};

    const updateQuanity = async (productId: number, quantity: number) => {
        const itemAlreadyInCart = shoppingCart.some((products) => products.id === productId);

        if (quantity == 0) {
            await execCartRequest("DELETE", undefined, productId)
        } if (itemAlreadyInCart) {
            await execCartRequest("PATCH", JSON.stringify({ "quantity": quantity }), productId)
        } else {
            await execCartRequest("POST", JSON.stringify({ "productId": productId }), undefined)
        }
    }

    const fetchShoppingCart = async () => {
        const apiKey = user.getApiKey();

        if (!apiKey) {
            toaster.addToast({
                body: "Please log in to check cart!",
                title: "Cannot Check Cart"
            });
            return;
        }      
        
        const items = await fetch("/cart", {
            method: "GET",
            headers: {
                "apikey": apiKey as string, 
            },
        });

        setShoppingCart(await items.json())
    }

    const execCartRequest = async (
        method: string, 
        body: string | undefined, 
        path: string | number | undefined,
    ) => {
        const apiKey = user.getApiKey();

        if (!apiKey) {
            toaster.addToast({
                body: "Please log in before editing cart!",
                title: "Cannot Edit Cart"
            });
            return;
        }

        await fetch(path ? `/cart/${path}` : `/cart`, {
            method: method,
            body: body,
            headers: {
                "apikey": apiKey as string, 
            },
        });
    }


    return {
        shoppingCart,
        emptyCart,
        updateQuanity
    }
}

export const Shopping = createContainer(useShoppingCart)