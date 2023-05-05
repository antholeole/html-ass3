import React from "react";
import { Table } from "react-bootstrap"
import { Shopping } from "../contexts/Shopping";
import { calcTotal } from "../data/calcTotal";

export const ShoppingCartTable = () => {
    const shopping = Shopping.useContainer();

    const items = shopping.shoppingCart.filter((item) => item.quantity > 0);
    const totals = calcTotal(shopping.shoppingCart);


    return <Table>
        <thead>
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {items.length == 0 && <tr>
                <td colSpan={3}>
                    <p className="text-center">
                        Your cart is empty!
                    </p>
                </td>
            </tr>}
            {items.map((item) => <tr>
                <td>
                    <p>
                        {item.title}
                    </p>
                    <img style={{
                        width: "100px",
                    }}
                        src={`/hats/${item.image}`}
                    />
                </td>
                <td>
                    {item.quantity}
                </td>
                <td>
                    ${
                        item.quantity == 0
                            ? item.price
                            : `${item.price} * ${item.quantity} = $${item.price * item.quantity}`}
                </td>
            </tr>)}
            {items.length > 0 && <tr>
                <td />
                <td />
                <td>
                    Total: ${totals.totalNoTax.toFixed(2)} + ${totals.tax.toFixed(2)} (13% tax) = ${(totals.totalNoTax + totals.tax).toFixed(2)}
                </td>
            </tr>}
        </tbody>
    </Table>
}