import React from "react";
import { Icon, InlineIcon } from '@iconify/react';
import nintendoSwitch from '@iconify-icons/mdi/nintendo-switch';
import gamecursorIcon from '@iconify-icons/whh/gamecursor';
import bxsChat from '@iconify-icons/bx/bxs-chat';
import baselineStar from '@iconify-icons/ic/baseline-star';

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
        <button type="button" onClick={gameToggle} className="dropbtn"><Icon icon={gamecursorIcon} />Games</button>
        <button type="button" onClick={hardwareToggle} className="dropbtn"> <Icon icon={nintendoSwitch}/>Hardware</button>
        <button className="navButton"><Icon icon={bxsChat} />News & Events</button>
        <button className="navButton"><Icon icon={baselineStar} />Play Nintendo</button>
    </div>
    );
}

export default Navbar;