import React from "react";
import Header from "./Header";
import GameImage from "./GameImage";
import GameDetails from "./GameDetails";
import ScreenShots from "./Screenshots";
import Description from "./Description";
import Games from "../Games";

const createGameDetail = (game) => {
    return (
        <GameDetails 
        key={game.id} 
        device={game.device} 
        title={game.title}
        availability={game.availability}
        price={game.price}
        points={game.points}    
        />
    )
}

const createDescription = (game) => {
    return (
        <Description 
            key={game.id}
            head={game.head}
            description={game.description}
        />
    )
}

const App = () => {
    return (
    <React.Fragment>
    <Header />
    <GameImage />
    {Games.map(createGameDetail)}
    <ScreenShots />
    {Games.map(createDescription)}
    </React.Fragment>
    );
}

export default App;
