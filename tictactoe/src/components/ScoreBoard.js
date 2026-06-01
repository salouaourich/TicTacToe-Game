// ============================================
// ScoreBoard.js — Player Score Display
// ============================================
// Shows live scores for X and O across rounds.
// Highlights the active player's card.
// ============================================

import React from 'react';
import './ScoreBoard.css';

function ScoreBoard({ scores, currentPlayer, gameOver }) {
  return (
    <div className="ttt-scoreboard">
      {/* Player X score card */}
      <div
        className={`ttt-score-card ttt-score-card--x ${
          currentPlayer === 'X' && !gameOver ? 'ttt-score-card--active' : ''
        }`}
      >
        <span className="ttt-score-card__mark">X</span>
        <span className="ttt-score-card__value">{scores.X}</span>
        <span className="ttt-score-card__label">Player X</span>
      </div>

      <div className="ttt-scoreboard__divider">vs</div>

      {/* Player O score card */}
      <div
        className={`ttt-score-card ttt-score-card--o ${
          currentPlayer === 'O' && !gameOver ? 'ttt-score-card--active' : ''
        }`}
      >
        <span className="ttt-score-card__mark">O</span>
        <span className="ttt-score-card__value">{scores.O}</span>
        <span className="ttt-score-card__label">Player O</span>
      </div>
    </div>
  );
}

export default ScoreBoard;
