import React from "react";

const Navbar = () => {
    return( 
    //     <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //         <div class="container-fluid">
    //             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //             <span class="navbar-toggler-icon"></span>
    //             </button>
    //             <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //             <li class="nav-item dropdown">
    //                     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //                         Games
    //                     </a>
    //                     <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
    //                         <li><a class="dropdown-item" href="#">Action</a></li>
    //                         <li><a class="dropdown-item" href="#">Another action</a></li>
    //                         <li><hr class="dropdown-divider" /> </li>
    //                         <li><a class="dropdown-item" href="#">Something else here</a></li>
    //                     </ul>
    //                 </li>
    //                 <li class="nav-item">
    //                 <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //                     Hardware
    //                 </a>
    //                 </li>
    //                 <li>
    //                 <a class="nav-link" href="#">News & Events</a>
    //                 </li>
    //                 <li>
    //                 <a class="nav-link" href="#">Play Nintendo</a>
    //                 </li>  
    //             </ul>
    //             </div>
    //         </div>
    //     </nav>
    // );
    <div className = "navi">
        <button className="navButton">Games</button>
        <button className="navButton">Hardware</button>
        <button className="navButton">News & Events</button>
        <button className="navButton">Play Nintendo</button>
    </div>);
}

export default Navbar;