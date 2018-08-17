import React from "react";
import './header.css' ;
import logo from "../../logo.svg";

const header = () => {
    return(
        <nav className="nav">
            <ul className="logo"><img src={logo} alt="React Logo"/></ul>
            <ul className="link-group">
                <li><a href="d">Burger Builder</a></li>
                <li><a href="d">Checkout</a></li>
            </ul>
        </nav>
    ); 
}   
 
export default header;