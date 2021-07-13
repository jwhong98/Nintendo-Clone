import React from "react";

const gameToggle = () => {
    document.getElementById("gamesDropdown").classList.toggle("show");
  }

  const hardwareToggle = () => {
    document.getElementById("hardwareDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

const Navbar = () => {
    return( 
    <div className = "navi">   
        <button type="button" onClick={gameToggle} className="dropbtn">Games</button>
        <button type="button" onClick={hardwareToggle} className="dropbtn" >Hardware</button>
        <button className="navButton">News & Events</button>
        <button className="navButton">Play Nintendo</button>
    </div>
    );
}

export default Navbar;