import React, {useContext} from "react";
import { Menucontext } from "../Menucontext";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";

export default function Cart() {

    const { itemsInCart } = useContext(Menucontext)

    let cartItemsJsx 
    if (itemsInCart) {
        cartItemsJsx = itemsInCart.map(item => (
            <CartItem key={item.id} item={item}/>
        ))
    }

    return (
        <div className="cart--parent--container">
            <h1 style={{textAlign:  "center"}}>
                {itemsInCart.length > 0 ? "Ordered Items:" : "No items in cart!"}
            </h1>
            <div>{itemsInCart && cartItemsJsx}</div>
           {itemsInCart.length  > 0 &&  <CartTotal/>}
        </div>
    )
}