import React, { Component } from "react";

import GameSlot from './capstone-games-container.js/game-slot';

export default class Homepage extends Component {
    render() {
        return (
            <div className="home">
                <h1>Project Capstone Mini-Games</h1>                
                <GameSlot />
            </div>
        );
    }
}