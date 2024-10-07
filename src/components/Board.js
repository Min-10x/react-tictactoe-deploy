import React, { useState } from 'react';
import Square from './Square'
import "./Board.css";

const Board = ({squares, onClick}) => {

  const renderSquare = (i) => {
    return <Square value={squares[i]}
    onClick={() => onClick(i)}/>
  }

  return (
    <div className='board-wrapper'>
      <div className='board-row'></div>
        {renderSquare(2)}
        {renderSquare(0)}
        {renderSquare(1)}
      <div className='board-row'></div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      <div className='board-row'></div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
    </div>
  )
}

export default Board