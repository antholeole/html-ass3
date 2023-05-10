import { useState } from "react"
import { createContainer } from "unstated-next"
import { PaymentFormInputs } from "../data/orderForm"
import { Item } from "../data/Item"


const useModal = () => {
    let [loginModalIsShown, setLoginModalIsShown] = useState<boolean>(false)

    return { 
        loginModalIsShown,
        toggleLoginModalTo: setLoginModalIsShown,
    }
}

export const Modal = createContainer(useModal)