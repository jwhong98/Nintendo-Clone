import React from "react";
import { Icon, InlineIcon } from '@iconify/react';
import nintendoSwitch from '@iconify-icons/mdi/nintendo-switch';
import gamecursorIcon from '@iconify-icons/whh/gamecursor';
import priceTag from '@iconify-icons/icomoon-free/price-tag';
import calendarAltF from '@iconify-icons/jam/calendar-alt-f';
import mobileIcon from '@iconify-icons/vaadin/mobile';



const GamesToggle = () => {
    return (

        <div id="gamesDropdown" className="dropdown-content">
            <div className="wrapper">
                <a className="dropdownLink" href=""><Icon icon={gamecursorIcon} />Shop games</a>
                <a className="dropdownLink" href=""><Icon icon={priceTag} />Sales and deals</a>
                <a className="dropdownLink" href=""><Icon icon={calendarAltF} />Coming soon</a>
                <a className="dropdownLink" href=""><Icon icon={nintendoSwitch}/>Online service</a>
                <a className="dropdownLink" href=""><Icon icon={mobileIcon} />Mobile games</a>
            </div>
        </div>
    );
}

export default GamesToggle;