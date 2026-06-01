// ============================================
// App.js — Root Component
// Tic Tac Toe · Final International University
// Author: Saloua Ourich
// ============================================
// Platform integration note:
// To embed this game in the multi-game platform,
// import TicTacToe directly:
//   import TicTacToe from './components/TicTacToe';
// and render <TicTacToe onGameEnd={handler} />
// ============================================

import React from 'react';
import TicTacToe from './components/TicTacToe';

function App() {
  return <TicTacToe />;
}

export default App;
