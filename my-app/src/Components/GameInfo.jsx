import React from "react";

const GameInfo = (props) => {
    return (
        <div>
            <h3>{props.info}: </h3>
            <dd>{props.detail}</dd>
        </div>
    );
}

export default GameInfo;