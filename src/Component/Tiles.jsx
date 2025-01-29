import React from 'react'

export default function Tiles({value,onClick,playerTurn}) {
    let hoverClass=null;
    if(value ==null && playerTurn !=null )
    hoverClass = `${playerTurn.toLowerCase()}-hover`
  return (
    <div onClick={onClick} className={`tile ${hoverClass}`}>{value}</div>
  )
}
