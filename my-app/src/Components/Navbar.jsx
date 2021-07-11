import React from "react";

const Navbar = () => {
    return( 
    
    <div className = "navi">
        <button type="button" className="navButton dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Games</button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="#">Shop games</a></li>
            <li><a className="dropdown-item" href="#">Sales and deals</a></li>
            <li><a className="dropdown-item" href="#">Coming soon</a></li>
            <li><a className="dropdown-item" href="#">Online service</a></li>
            <li><a className="dropdown-item" href="#">Mobile games</a></li>
        </ul>
        <button type="button" className="navButton dropdown-toggle" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">Hardware</button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
            <li><a className="dropdown-item" href="#">Nintendo Switch Lineup</a></li>
            <li><a className="dropdown-item" href="#">Accessories</a></li>
            <li><a className="dropdown-item" href="#">amiibo</a></li>
        </ul>
        <button className="navButton">News & Events</button>
        <button className="navButton">Play Nintendo</button>
    </div>);
}

export default Navbar;