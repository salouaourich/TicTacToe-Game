// ============================================
// StatusBar.js — Game Status Display
// ============================================
// REQ-6:  Shows whose turn it is
// REQ-9:  Shows win message
// REQ-10: Shows draw message
// ============================================

import React from 'react';
import './StatusBar.css';

function StatusBar({ currentPlayer, winner, isDraw, gameOver }) {
  // Build the status message based on game state
  let message = '';
  let modifier = '';

  if (winner) {
    // REQ-9: Win announcement
    message = `Player ${winner} wins!`;
    modifier = winner === 'X' ? 'ttt-status--win-x' : 'ttt-status--win-o';
  } else if (isDraw) {
    // REQ-10: Draw announcement
    message = "It's a draw!";
    modifier = 'ttt-status--draw';
  } else {
    // REQ-6: Whose turn it is
    message = `Player ${currentPlayer}'s turn`;
    modifier = currentPlayer === 'X' ? 'ttt-status--turn-x' : 'ttt-status--turn-o';
  }

  return (
    <div className="ttt-status-bar" role="status" aria-live="polite">
      <span className={`ttt-status__text ${modifier}`}>
        {message}
      </span>
    </div>
  );
}

export default StatusBar;
