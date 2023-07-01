import React from "react";
import { Outlet } from "react-router-dom";
import NavLayout from "./NavLayout";

export default function Layout() {
    return (
        <div className="layout--container">
            <NavLayout/>
            <main className="main">
                <Outlet/>
            </main>
        </div>
    )
}