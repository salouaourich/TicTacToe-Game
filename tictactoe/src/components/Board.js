// ============================================
// Board.js — 3×3 Game Board Component
// ============================================
// REQ-1: Displays the 3×3 grid
// REQ-2: All cells start empty
// REQ-3: Cells are clickable
// ============================================

import React from 'react';
import Cell from './Cell';
import './Board.css';

function Board({ board, winCombo, gameOver, onCellClick }) {
  return (
    // REQ-1: 3×3 grid layout
    <div className="ttt-board" role="grid" aria-label="Tic Tac Toe board">
      {board.map((value, index) => (
        <Cell
          key={index}
          index={index}
          value={value}                          // REQ-2: null = empty
          isWinning={winCombo.includes(index)}   // REQ-9: highlight winners
          gameOver={gameOver}                    // REQ-11: lock board
          onClick={onCellClick}                  // REQ-3: click handler
        />
      ))}
    </div>
  );
}

export default Board;
