import React from "react";
import GameInfo from "./GameInfo";

const Description = (props) => {
    return(
        <div>
            <h2>{props.head}</h2>
            <p>{props.description}</p>
            <button className="btn btn-danger">Explore this game's official site</button>

            <GameInfo 
                info="Release date"
                detail= {props.date}
            />
            <GameInfo 
                info="Players"
                detail= {props.players}
            />
            <GameInfo 
                info="Genre"
                detail= {props.genre}
            />
            <GameInfo 
                info="Publisher"
                detail= {props.publisher}
            />
            <GameInfo 
                info="Developer"
                detail= {props.developer}
            />
            <GameInfo 
                info="Game file size"
                detail= {props.size}
            />
            <GameInfo 
                info="Supported Languages"
                detail= {props.languages}
            />
        </div>
    );
}

export default Description;