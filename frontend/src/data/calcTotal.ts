import { Item } from "./Item";

export const calcTotal = (items: Item[]) => {
    const totalNoTax = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    const tax = totalNoTax * 0.13;

    return {
        tax,
        totalNoTax,
        total: totalNoTax + tax
    }
}