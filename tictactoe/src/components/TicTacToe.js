// ============================================
// TicTacToe.js — Main Game Controller
// ============================================
// This is the top-level component that owns
// all game state and orchestrates child components.
//
// SRS Requirements covered:
//   REQ-1  → Board renders 3×3 grid
//   REQ-2  → Board starts empty
//   REQ-3  → Cells are clickable
//   REQ-4  → X always goes first (INITIAL_STATE)
//   REQ-5  → applyMove() switches players
//   REQ-6  → StatusBar shows current player
//   REQ-7  → applyMove() rejects taken cells
//   REQ-8  → WIN_COMBINATIONS in gameLogic.js
//   REQ-9  → checkWinner() in gameLogic.js
//   REQ-10 → checkDraw() in gameLogic.js
//   REQ-11 → gameOver flag locks the board
//   REQ-12 → Restart button always visible
//   REQ-13 → restartGame() clears board, X first
//
// Appendix C:
//   • Keyboard keys 1–9 for cell selection
//   • Key R for restart
//   • Blue for X, Red for O
//
// Platform integration:
//   Export this component and render it inside
//   the multi-game platform shell.
//   Optional prop: onGameEnd(winner | 'draw')
// ============================================

import React, { useState, useEffect, useCallback } from 'react';
import Board from './Board';
import StatusBar from './StatusBar';
import ScoreBoard from './ScoreBoard';
import { INITIAL_STATE, applyMove, restartGame } from './gameLogic';
import './TicTacToe.css';

// ============================================
// TicTacToe Component
// Props:
//   onGameEnd(result) — optional callback for
//   platform integration. Called with 'X', 'O',
//   or 'draw' when the game concludes.
// ============================================
function TicTacToe({ onGameEnd }) {
  const [gameState, setGameState] = useState(INITIAL_STATE);

  const {
    board,
    currentPlayer,
    winner,
    winCombo,
    isDraw,
    gameOver,
    scores,
  } = gameState;

  // ---- REQ-3, REQ-5, REQ-7, REQ-11 ----
  // Handle a cell click; applyMove enforces all rules
  const handleCellClick = useCallback(
    (index) => {
      setGameState((prev) => applyMove(prev, index));
    },
    []
  );

  // ---- REQ-12, REQ-13 ----
  // Restart: clear board, keep scores, X goes first
  const handleRestart = useCallback(() => {
    setGameState((prev) => restartGame(prev.scores));
  }, []);

  // ---- Appendix C: Keyboard shortcuts ----
  // Keys 1–9 map to board positions, R restarts
  useEffect(() => {
    function handleKeyDown(e) {
      // Ignore if user is typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= 9) {
        handleCellClick(num - 1);
      }
      if (e.key.toLowerCase() === 'r') {
        handleRestart();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleCellClick, handleRestart]);

  // ---- Platform integration: fire onGameEnd callback ----
  useEffect(() => {
    if (gameOver && onGameEnd) {
      onGameEnd(winner || 'draw');
    }
  }, [gameOver, winner, onGameEnd]);

  return (
    <div className="ttt-container">
      {/* Game header */}
      <header className="ttt-header">
        <p className="ttt-header__subtitle">Multi-Game Platform</p>
        <h1 className="ttt-header__title">Tic Tac Toe</h1>
        <p className="ttt-header__hint">Use keys 1–9 to play · R to restart</p>
      </header>

      {/* Score cards — persists across restarts */}
      <ScoreBoard
        scores={scores}
        currentPlayer={currentPlayer}
        gameOver={gameOver}
      />

      {/* REQ-6: Status bar — whose turn / win / draw */}
      <StatusBar
        currentPlayer={currentPlayer}
        winner={winner}
        isDraw={isDraw}
        gameOver={gameOver}
      />

      {/* REQ-1: The 3×3 game board */}
      <Board
        board={board}
        winCombo={winCombo}
        gameOver={gameOver}
        onCellClick={handleCellClick}
      />

      {/* REQ-12: Restart button always visible */}
      <button
        className="ttt-restart-btn"
        onClick={handleRestart}
        aria-label="Restart game"
      >
        ↺ Restart
      </button>

      {/* Brief how-to-play instructions (Section 2.6 of SRS) */}
      <footer className="ttt-footer">
        <p>Get 3 in a row — horizontally, vertically, or diagonally — to win.</p>
        <p>Player X always goes first. Cells cannot be changed once marked.</p>
      </footer>
    </div>
  );
}

export default TicTacToe;
