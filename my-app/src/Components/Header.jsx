import React from "react";
import Navbar from "./Navbar";
 
const Header = () => {
    return (
        <header>
        <img alt="Nintendo Logo" src="https://1000logos.net/wp-content/uploads/2021/04/Nintendo-logo.png" id="logo"></img>
        <button id="search">Search games, systems, support, etc.</button>
        <div id="headerButton">
            <button className="navButton">Support</button>
            <button className="navButton">Wish List</button>
            <button className="navButton">Log in / Sign up</button>
        </div>
        
            <Navbar/>
        </header>
        
    );
}

export default Header;