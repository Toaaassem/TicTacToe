import { useState, useEffect } from "react";
import React from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import GameState from "./GameState";
import Reset from "./Reset";
const PlayerX = "X";
const Player0 = "O";

const winningCases = [
  //rows
  { combo: [0, 1, 2], strikeClass: "strike-row-1" },
  { combo: [3, 4, 5], strikeClass: "strike-row-2" },
  { combo: [6, 7, 8], strikeClass: "strike-row-3" },
  //columns
  { combo: [0, 3, 6], strikeClass: "strike-column-1" },
  { combo: [1, 4, 7], strikeClass: "strike-column-2" },
  { combo: [2, 5, 8], strikeClass: "strike-column-3" },
  //diagonals
  { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
  { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

function checkWinner(tiles, setStrikeClass, setGameState) {
  for(const {combo,strikeClass} of winningCases)
  {
    const value1 =tiles[combo[0]];
    const value2 =tiles[combo[1]];
    const value3 =tiles[combo[2]];

    if(value1!=null&&value1===value2&&value2===value3)
    {
      setStrikeClass(strikeClass)
      if(value1===PlayerX){
      setGameState(GameState.playerXWin)
      }
      else{
      setGameState(GameState.playerOWin)
      }
      return;
    }
  }

  const allTilesFill = tiles.every((tile)=>tile!==null);
  if(allTilesFill)
  {
    setGameState(GameState.Draw)
  }
}

export default function TicTacToe() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PlayerX);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState,setGameState]=useState(GameState.inProgress)
  
  const handleReset = ()=>{
   setGameState(GameState.inProgress);
   setTiles(Array(9).fill(null));
   setPlayerTurn(PlayerX)
   setStrikeClass(null)
  };
  const handleTileClick = (index) => {
    if(gameState!==GameState.inProgress)
    return;
    if (tiles[index] !== null) {
      return;
    }

  

    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);
    if (playerTurn === PlayerX) setPlayerTurn(Player0);
    else setPlayerTurn(PlayerX);
  };

  useEffect(() => {
    checkWinner(tiles, setStrikeClass,setGameState);
  }, [tiles]);

  return (
    <div>
      <h1 className="title mt-4 mb-4 ">Tic Tac Toe</h1>
      <Board
        tiles={tiles}
        playerTurn={playerTurn}
        onTileClick={handleTileClick}
        strikeClass={strikeClass}
      />
      <GameOver gameState={gameState}/>
      <Reset gameState={gameState} onReset={handleReset}  />
    </div>
  );
}
