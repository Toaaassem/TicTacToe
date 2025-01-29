import React from 'react'
import Tiles from './Tiles'
import Strike from './Strike'

export default function Board({tiles,onTileClick,playerTurn,strikeClass}) {
  return (
    <div className='board'>

{tiles.map((tileValue, index) => (
    <Tiles
      key={index}
      playerTurn={playerTurn}
      onClick={() => onTileClick(index)}
      value={tileValue}
    />
    
))}
<Strike strikeClass={strikeClass}/>
    </div>
  )
}
