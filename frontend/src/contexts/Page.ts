import { useState } from "react"
import { createContainer } from "unstated-next"
import { PaymentFormInputs } from "../data/orderForm"

export abstract class NavigationPage {}
export class Home extends NavigationPage {}
export class Cart extends NavigationPage {}
export class Confirmation extends NavigationPage {
    constructor(readonly form: PaymentFormInputs) {
        super()
    }
}

const usePages = () => {
    let [page, setPage] = useState<NavigationPage>(new Home())

    const goHome = () => {
        setPage(new Home())
    }

    const goToCart = () => {
        setPage(new Cart())
    }

    const goToConfirmation = (payment: PaymentFormInputs) => {
        setPage(new Confirmation(payment))
    }

    return { 
        goHome,
        goToCart,
        goToConfirmation,
        page
    }
}

export const Pages = createContainer(usePages)