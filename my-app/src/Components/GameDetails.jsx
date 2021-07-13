import React from "react";
import { Icon, InlineIcon } from '@iconify/react';
import heartIcon from '@iconify-icons/mi/heart';

const GameDetails = (props) => {
    return(
        <div id="details">
            <p><span className="device">{props.device}</span></p>
            <h2>{props.title}</h2>
            <p>{props.availability}</p>
            <button id="wishlistButton"><Icon icon={heartIcon} />Add to Wish List</button>

            <div id="purchase">
                <h2>{props.price}</h2>
                <button id="buyButton" className="btn ">Buy digital</button>
                <p>Eligible for up to {props.points} points</p>
            </div>
        </div>
    );
}

export default GameDetails;