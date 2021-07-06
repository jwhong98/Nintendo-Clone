import React from "react";

const Description = (props) => {
    return(
        <div>
            <h2>{props.head}</h2>
            <p>{props.description}</p>
            <button className="btn btn-danger">Explore this game's official site</button>
        </div>
    );
}

export default Description;