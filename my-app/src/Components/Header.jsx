import React from "react";
import Navbar from "./Navbar";
import GamesToggle from "./GamesToggle";
import HardwareToggle from "./HardwareToggle";
import { Icon, InlineIcon } from '@iconify/react';
import supportIcon from '@iconify-icons/whh/support';
import heartFill from '@iconify-icons/ci/heart-fill';
import bxsUser from '@iconify-icons/bx/bxs-user';
 
const Header = () => {
    return (
        <React.Fragment>
        <header>
        <div className="head">
            {/* <img alt="Nintendo Logo" src="https://1000logos.net/wp-content/uploads/2021/04/Nintendo-logo.png" id="logo"></img> */}
            <button id="search">Search games, systems, support, etc.</button>
            <div id="headerButton">
                <button className="navButton"><Icon icon={supportIcon} />Support</button>
                <button className="navButton"><Icon icon={heartFill} />Wish List</button>
                <button className="navButton"><Icon icon={bxsUser} />Log in / Sign up</button>
            </div>
        </div>
        
            <Navbar/>
        </header>
        <GamesToggle />
        <HardwareToggle />
        </React.Fragment>
        
    );
}

export default Header;