import React from "react";
import { Link } from "react-router-dom";
export default function PaymentModal() {
    return (
        <div className="payment--modal--wrapper">
        <h3>Enter card details</h3>
        <div className="payment--modal--container">
            <input type="text" className="card--input" placeholder="Enter your name"/>
            <input type="text" className="card--input" placeholder="Enter card number"/>
            <input type="text" className="card--input" placeholder="Enter CVV"/>
            <Link to='/services' className="pay-button-cta">Pay</Link>
        </div>
        </div>
    )
}