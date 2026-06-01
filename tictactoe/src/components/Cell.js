// ============================================
// Cell.js — Individual Grid Cell Component
// ============================================
// REQ-3:  Each cell is clickable by the current player
// REQ-7:  Taken cells cannot be clicked again
// REQ-11: No clicks after game ends
// Appendix C: Keyboard shortcuts (number keys 1–9)
// ============================================

import React from 'react';
import './Cell.css';

function Cell({ value, index, isWinning, gameOver, onClick }) {
  // Determine CSS classes based on cell state
  const classes = [
    'ttt-cell',
    value === 'X' ? 'ttt-cell--x' : value === 'O' ? 'ttt-cell--o' : '',
    isWinning ? 'ttt-cell--winning' : '',
    value ? 'ttt-cell--taken' : '',
    gameOver && !value ? 'ttt-cell--disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  // REQ-7 & REQ-11: disable interaction when cell is taken or game is over
  const isInteractive = !value && !gameOver;

  return (
    <button
      className={classes}
      onClick={() => isInteractive && onClick(index)}
      aria-label={
        value
          ? `Cell ${index + 1}: marked ${value}`
          : `Cell ${index + 1}: empty`
      }
      aria-disabled={!isInteractive}
      tabIndex={isInteractive ? 0 : -1}
    >
      {/* Keyboard hint shown on empty cells (Appendix C) */}
      {!value && !gameOver && (
        <span className="ttt-cell__kbd" aria-hidden="true">
          {index + 1}
        </span>
      )}

      {/* The X or O mark, animated on placement */}
      {value && (
        <span className="ttt-cell__mark" aria-hidden="true">
          {value}
        </span>
      )}
    </button>
  );
}

export default Cell;
