import React, {useContext} from "react";
import { Menucontext } from "../Menucontext";
import { Link } from "react-router-dom";
export default function PaymentModal() {

    const { clearCart } = useContext(Menucontext)
    return (
        <div className="payment--modal--wrapper">
        <h3>Enter card details</h3>
        <div className="payment--modal--container">
            <input type="text" className="card--input" placeholder="Enter your name" required/>
            <input type="password" className="card--input" placeholder="Enter card number" required/>
            <input type="password" className="card--input" placeholder="Enter CVV" required/>
            <Link 
               to='/services' 
               className="pay-button-cta"
               onClick={() => clearCart()}
            >Pay</Link>
        </div>
        <div className="appreciation--post">
            <h1>Thank you Kanze Dena! Your order is on the way.</h1>
        </div>
        </div>
    )
}