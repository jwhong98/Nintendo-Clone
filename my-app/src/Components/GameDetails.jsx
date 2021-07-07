import React from "react";

const GameDetails = (props) => {
    return(
        <div id="details">
            <p>{props.device}</p>
            <h2>{props.title}</h2>
            <p>{props.availability}</p>
            <button>Add to Wish List</button>

            <div id="purchase">
                <h2>{props.price}</h2>
                <button className="btn btn-danger">Buy digital</button>
                <p>Eligible for up to {props.points} points</p>
            </div>
        </div>
    );
}

export default GameDetails;