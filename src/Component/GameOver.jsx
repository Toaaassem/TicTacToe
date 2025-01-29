import React from "react";
import GameState from "./GameState";
export default function GameOver({ gameState }) {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerXWin:
      return <div className="game-over">X Wins</div>;
    case GameState.playerOWin:
      return <div className="game-over">O Wins</div>;
    case GameState.Draw:
      return <div className="game-over">Draw</div>;
    default:
      return <></>;
  }
}
