import React, {useContext} from "react";
import { Menucontext } from "../Menucontext";
export default function CartItem({item}) {

    const {removeItemFromCart} = useContext(Menucontext)
    return (
        <div className="cart--item--container">
            <h1 className="image">{item.emoji}</h1>
            <div className="foodItem--details">
                <h3 className="food--name">{item.name}</h3>
                <p className="food--price">$:{item.price}</p>
            </div>
            <p className="remove--item--from--cart--cta" onClick={() => removeItemFromCart(item.id)}>Remove</p>
        </div>
    )
}