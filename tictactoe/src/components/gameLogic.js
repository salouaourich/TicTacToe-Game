// ============================================
// gameLogic.js — Pure Game Logic
// ============================================
// Maps directly to SRS Section 4:
//   REQ-8  → WIN_COMBINATIONS (all 8 win lines)
//   REQ-9  → checkWinner()
//   REQ-10 → checkDraw()
//   REQ-4  → INITIAL_STATE (X goes first)
// ============================================

// REQ-8: All 8 winning combinations (3 rows, 3 cols, 2 diagonals)
export const WIN_COMBINATIONS = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // center column
  [2, 5, 8], // right column
  [0, 4, 8], // diagonal top-left → bottom-right
  [2, 4, 6], // diagonal top-right → bottom-left
];

// REQ-9: Check if a player has three in a row
// Returns the winning combo [i,j,k] or null
export function checkWinner(board, player) {
  for (const combo of WIN_COMBINATIONS) {
    const [a, b, c] = combo;
    if (board[a] === player && board[b] === player && board[c] === player) {
      return combo;
    }
  }
  return null;
}

// REQ-10: Check if all 9 cells are filled with no winner
export function checkDraw(board) {
  return board.every((cell) => cell !== null);
}

// REQ-4: Initial game state — X always goes first
export const INITIAL_STATE = {
  board: Array(9).fill(null), // REQ-1, REQ-2: empty 3×3 grid
  currentPlayer: 'X',         // REQ-4: X starts
  winner: null,
  winCombo: [],
  isDraw: false,
  gameOver: false,
  scores: { X: 0, O: 0 },
};

// Core move handler — returns new state after a move
// REQ-5: Switches player after each move
// REQ-7: Ignores clicks on taken cells or finished game
// REQ-11: No moves allowed after game ends
export function applyMove(state, index) {
  const { board, currentPlayer, gameOver, scores } = state;

  // REQ-7 & REQ-11: Ignore invalid moves
  if (gameOver || board[index] !== null) return state;

  const newBoard = [...board];
  newBoard[index] = currentPlayer;

  const winCombo = checkWinner(newBoard, currentPlayer);

  // REQ-9: Winner detected
  if (winCombo) {
    return {
      ...state,
      board: newBoard,
      winner: currentPlayer,
      winCombo,
      gameOver: true,
      scores: { ...scores, [currentPlayer]: scores[currentPlayer] + 1 },
    };
  }

  // REQ-10: Draw detected
  if (checkDraw(newBoard)) {
    return {
      ...state,
      board: newBoard,
      isDraw: true,
      gameOver: true,
    };
  }

  // REQ-5: Switch player
  return {
    ...state,
    board: newBoard,
    currentPlayer: currentPlayer === 'X' ? 'O' : 'X',
  };
}

// REQ-12, REQ-13: Reset board, keep scores, X goes first
export function restartGame(scores) {
  return {
    ...INITIAL_STATE,
    scores,
  };
}
