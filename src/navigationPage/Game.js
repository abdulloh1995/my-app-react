import React from 'react';
import '../style/game.css'
import ItemsList from "../components/Game/ItemsList";
const Game = () => {
    return (
        <div className="game">
            <ItemsList/>
        </div>
    );
};

export default Game;