# Tic Tac Toe — Multi-Game Platform

**Course:** Software Project Management  
**Project:** Term Project — Multi-Game Platform  
**Student:** Saloua Ourich  
**Institution:** Final International University, Faculty of Engineering  
**Date:** March 2026

---

## Project Overview

A fully functional Tic Tac Toe web application built with **React**, developed as part of the Multi-Game Platform term project. All 13 functional requirements from the SRS are implemented.

---

## How to Run

### Prerequisites
- Node.js v16 or higher
- npm v7 or higher

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm start

# 3. Open in browser
# → http://localhost:3000
```

### Build for production (platform integration)
```bash
npm run build
```
The optimized output will be in the `/build` folder.

---

## How to Play

- **Mouse:** Click any empty cell to place your mark
- **Keyboard:** Press keys **1–9** (matching board positions) to play
- **Restart:** Click the Restart button or press **R**
- Player **X** always goes first
- First to get **3 in a row** (horizontal, vertical, or diagonal) wins
- If all 9 cells fill with no winner, it's a **draw**

### Keyboard Layout (matching board positions)
```
1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9
```

---

## SRS Requirements Traceability

| Requirement | Description | File |
|-------------|-------------|------|
| REQ-1 | Display 3×3 grid | `Board.js` |
| REQ-2 | Cells empty at start | `gameLogic.js` → `INITIAL_STATE` |
| REQ-3 | Cells are clickable | `Cell.js`, `Board.js` |
| REQ-4 | X goes first | `gameLogic.js` → `INITIAL_STATE` |
| REQ-5 | Turns alternate | `gameLogic.js` → `applyMove()` |
| REQ-6 | Show whose turn | `StatusBar.js` |
| REQ-7 | No re-clicking taken cells | `gameLogic.js` → `applyMove()` |
| REQ-8 | Check all 8 win combos | `gameLogic.js` → `WIN_COMBINATIONS` |
| REQ-9 | Display win message | `gameLogic.js` → `checkWinner()`, `StatusBar.js` |
| REQ-10 | Display draw message | `gameLogic.js` → `checkDraw()`, `StatusBar.js` |
| REQ-11 | No moves after game ends | `gameLogic.js` → `applyMove()` |
| REQ-12 | Restart button always visible | `TicTacToe.js`, `TicTacToe.css` |
| REQ-13 | Restart resets board, X first | `gameLogic.js` → `restartGame()` |

---

## File Structure

```
tic-tac-toe/
├── public/
│   └── index.html              # HTML shell
├── src/
│   ├── index.js                # React entry point
│   ├── index.css               # Global styles & CSS variables
│   ├── App.js                  # Root component
│   └── components/
│       ├── TicTacToe.js        # Main game controller (state owner)
│       ├── TicTacToe.css
│       ├── Board.js            # 3×3 grid renderer
│       ├── Board.css
│       ├── Cell.js             # Individual cell (REQ-3, REQ-7)
│       ├── Cell.css
│       ├── StatusBar.js        # Turn/win/draw messages (REQ-6,9,10)
│       ├── StatusBar.css
│       ├── ScoreBoard.js       # Player scores
│       ├── ScoreBoard.css
│       └── gameLogic.js        # Pure game logic (REQ-4 to REQ-13)
├── package.json
└── README.md
```

---

## Platform Integration Guide

To embed this game in the shared multi-game platform:

```jsx
// In your platform's router or game launcher:
import TicTacToe from './games/tic-tac-toe/src/components/TicTacToe';

function Platform() {
  function handleGameEnd(result) {
    // result is 'X', 'O', or 'draw'
    console.log('Game ended:', result);
    // Update platform score, show next game, etc.
  }

  return <TicTacToe onGameEnd={handleGameEnd} />;
}
```

**Compatibility notes for the class:**
- All CSS is scoped with `.ttt-` prefix — no style leakage
- No global state, no localStorage
- Single entry point: `<TicTacToe />` component
- Optional `onGameEnd(result)` prop for platform hooks
- Works offline after initial load (REQ: Section 2.4)

---

## Design Decisions (Appendix C)

- **Framework:** React 18 with Create React App
- **Colors:** Blue (`#4f8ef7`) for X · Red (`#f75f7a`) for O
- **Keyboard:** Keys 1–9 for cell selection · R for restart
- **Architecture:** Separation of concerns — pure logic in `gameLogic.js`, UI in components
- **Accessibility:** `aria-label` on all interactive elements, `role="status"` on status bar, `aria-live="polite"` for screen readers

---

## Non-Functional Requirements (Section 5)

| Requirement | How it's met |
|-------------|--------------|
| Performance (< 1s response) | React state updates are synchronous and instant |
| Reliability | All 8 win combos covered; exhaustive logic in `gameLogic.js` |
| Usability | On-screen instructions in footer; keyboard shortcuts shown in cells |
| Maintainability | Each component has a single responsibility; logic is separated from UI |
