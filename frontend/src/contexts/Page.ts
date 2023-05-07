import { useState } from "react"
import { createContainer } from "unstated-next"
import { PaymentFormInputs } from "../data/orderForm"
import { Item } from "../data/Item"

export abstract class NavigationPage {}
export class Home extends NavigationPage {}
export class Landing extends NavigationPage {}
export class Cart extends NavigationPage {}
export class Products extends NavigationPage {}
export class SingleProduct extends NavigationPage {
    public item: Item;

    constructor(item: Item) {
        super();
        this.item = item;
    }
}
export class Confirmation extends NavigationPage {
    constructor(readonly form: PaymentFormInputs) {
        super()
    }
}

const usePages = () => {
    let [page, setPage] = useState<NavigationPage>(new Landing())
    let [loginModalIsShown, setLoginModalIsShown] = useState<boolean>(false)


    const goHome = () => {
        setPage(new Home())
    }

    const goToLanding = () => {
        setPage(new Landing())
    }

    const goToProducts = () => {
        setPage(new Products())
    }

    const goToProductPage = (item: Item) => {
        setPage(new SingleProduct(item))
    }

    const goToCart = () => {
        setPage(new Cart())
    }

    const goToConfirmation = (payment: PaymentFormInputs) => {
        setPage(new Confirmation(payment))
    }

    return { 
        goHome,
        goToLanding,
        goToProducts,
        goToProductPage,
        goToCart,
        goToConfirmation,
        loginModalIsShown,
        toggleLoginModalTo: setLoginModalIsShown,
        page
    }
}

export const Pages = createContainer(usePages)