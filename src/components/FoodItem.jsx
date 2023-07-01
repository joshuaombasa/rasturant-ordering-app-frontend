import React, {useContext} from "react";
import { Menucontext } from "../Menucontext";

export default function FoodItem({item}) {

    const { addItemToCart } = React.useContext(Menucontext)

    return (
        <div className="foodItem--container">
            <h1 className="image">{item.emoji}</h1>
            <div className="foodItem--details">
                <h3 className="food--name">{item.name}</h3>
                <small className="food-ingredients">{item.ingredients}</small>
                <p className="food--price">$:{item.price}</p>
            </div>
            <i 
               className="ri-add-circle-line add--icon"
               onClick={() => addItemToCart(item)}
            >
            </i>
        </div>
    )
}