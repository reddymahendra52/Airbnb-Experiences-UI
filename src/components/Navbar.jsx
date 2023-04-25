import React from "react";
import airbnbLogo from "../assets/airbnb-logo.png"

export default function Navbar(){
    return(
        <nav>
            <img src={airbnbLogo} alt="logo" className="nav--logo" />
        </nav>
    )
}