import React, {useContext} from "react";
import { Menucontext } from "../Menucontext";
import FoodItem from "../components/FoodItem";

export default function Services() {
    
    const { menuData } = React.useContext(Menucontext)

    let menuItemsJsx  
    if (menuData) {
        menuItemsJsx = menuData.map(item => (
            <FoodItem key={item.id} item={item}/>
        ))
    }
    
    return (
        <div className="serices--container">
            {menuData && menuItemsJsx}
        </div>
    )
}