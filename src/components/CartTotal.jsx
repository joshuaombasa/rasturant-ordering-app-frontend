import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Menucontext } from "../Menucontext";
export default function CartTotal() {

    const {costOfItemsInCart} = useContext(Menucontext)

    return (
        <div className="cart--total--wrapper">
        <div className="cartTotal--container">
            <h3>Total price</h3>
            <p>$ {costOfItemsInCart}</p>
        </div>
        <Link to='/payment' className="complete--order-cta">Complete order</Link>
        </div>
    )
}