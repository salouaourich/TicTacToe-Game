const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.3" x 7.5"
pres.author = "Saloua Ourich";
pres.title = "Tic Tac Toe - Multi-Game Platform";

// Palette
const NAVY = "1E2761";
const NAVY_DARK = "151B47";
const BLUE_X = "4F8EF7";
const CORAL_O = "F75F7A";
const BG_LIGHT = "F8FAFC";
const TEXT_DARK = "1E293B";
const MUTED = "64748B";
const CARD_BG = "FFFFFF";
const GRID_LINE = "E2E8F0";

const W = 13.333;
const H = 7.5;

const HEADER_FONT = "Georgia";
const BODY_FONT = "Calibri";

// Small tic-tac-toe motif drawn in the top-right corner of content slides
function addCornerMotif(slide) {
  const ox = W - 1.1, oy = 0.35;
  const size = 0.7;
  const cell = size / 3;
  // Grid lines
  slide.addShape(pres.shapes.LINE, { x: ox + cell, y: oy, w: 0, h: size, line: { color: NAVY, width: 1.2 } });
  slide.addShape(pres.shapes.LINE, { x: ox + 2 * cell, y: oy, w: 0, h: size, line: { color: NAVY, width: 1.2 } });
  slide.addShape(pres.shapes.LINE, { x: ox, y: oy + cell, w: size, h: 0, line: { color: NAVY, width: 1.2 } });
  slide.addShape(pres.shapes.LINE, { x: ox, y: oy + 2 * cell, w: size, h: 0, line: { color: NAVY, width: 1.2 } });
  // Mini X (top-left)
  slide.addText("X", { x: ox, y: oy, w: cell, h: cell, fontSize: 11, bold: true, color: BLUE_X, align: "center", valign: "middle", fontFace: HEADER_FONT, margin: 0 });
  // Mini O (bottom-right)
  slide.addText("O", { x: ox + 2 * cell, y: oy + 2 * cell, w: cell, h: cell, fontSize: 11, bold: true, color: CORAL_O, align: "center", valign: "middle", fontFace: HEADER_FONT, margin: 0 });
}

function addSlideHeader(slide, title, sectionLabel) {
  // Left navy accent strip
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.25, h: H, fill: { color: NAVY }, line: { color: NAVY } });
  // Section label
  slide.addText(sectionLabel.toUpperCase(), {
    x: 0.7, y: 0.4, w: 8, h: 0.35,
    fontSize: 11, bold: true, color: CORAL_O, fontFace: BODY_FONT, charSpacing: 4, margin: 0
  });
  // Title
  slide.addText(title, {
    x: 0.7, y: 0.75, w: 11, h: 0.8,
    fontSize: 32, bold: true, color: NAVY, fontFace: HEADER_FONT, margin: 0
  });
  addCornerMotif(slide);
}

// ============= SLIDE 1: TITLE =============
{
  const s = pres.addSlide();
  s.background = { color: NAVY };

  // Decorative big X and O behind title
  s.addText("X", { x: 0.2, y: -0.5, w: 4, h: 4, fontSize: 320, bold: true, color: BLUE_X, fontFace: HEADER_FONT, align: "center", valign: "middle", transparency: 70 });
  s.addText("O", { x: 9.1, y: 3.8, w: 4, h: 4, fontSize: 320, bold: true, color: CORAL_O, fontFace: HEADER_FONT, align: "center", valign: "middle", transparency: 70 });

  // Top label
  s.addText("TERM PROJECT  ·  SOFTWARE PROJECT MANAGEMENT", {
    x: 1, y: 0.8, w: 11.3, h: 0.4,
    fontSize: 13, bold: true, color: BLUE_X, fontFace: BODY_FONT, charSpacing: 6, align: "center", margin: 0
  });

  // Main title
  s.addText("Tic Tac Toe", {
    x: 1, y: 2.4, w: 11.3, h: 1.4,
    fontSize: 84, bold: true, color: "FFFFFF", fontFace: HEADER_FONT, align: "center", margin: 0
  });
  s.addText("Multi-Game Platform", {
    x: 1, y: 3.8, w: 11.3, h: 0.7,
    fontSize: 28, italic: true, color: "CADCFC", fontFace: HEADER_FONT, align: "center", margin: 0
  });

  // Divider
  s.addShape(pres.shapes.LINE, { x: 5.65, y: 4.85, w: 2, h: 0, line: { color: CORAL_O, width: 2 } });

  // Footer info
  s.addText([
    { text: "Saloua Ourich", options: { bold: true, color: "FFFFFF", fontSize: 18, breakLine: true } },
    { text: "Final International University  ·  Faculty of Engineering", options: { color: "CADCFC", fontSize: 14, breakLine: true } },
    { text: "March 2026", options: { color: "CADCFC", fontSize: 14, italic: true } }
  ], {
    x: 1, y: 5.2, w: 11.3, h: 1.8,
    align: "center", fontFace: BODY_FONT, margin: 0, paraSpaceAfter: 6
  });
}

// ============= SLIDE 2: OVERVIEW =============
{
  const s = pres.addSlide();
  s.background = { color: BG_LIGHT };
  addSlideHeader(s, "Project Overview", "01 · Introduction");

  // Left big text
  s.addText([
    { text: "A fully functional ", options: { color: TEXT_DARK, fontSize: 18, breakLine: false } },
    { text: "Tic Tac Toe", options: { color: NAVY, fontSize: 18, bold: true, breakLine: false } },
    { text: " web application built with ", options: { color: TEXT_DARK, fontSize: 18, breakLine: false } },
    { text: "React", options: { color: BLUE_X, fontSize: 18, bold: true, breakLine: false } },
    { text: ", developed as part of the Multi-Game Platform term project.", options: { color: TEXT_DARK, fontSize: 18 } }
  ], {
    x: 0.7, y: 2.1, w: 7, h: 1.8, fontFace: BODY_FONT, margin: 0, paraSpaceAfter: 4
  });

  // Three stat cards
  const stats = [
    { num: "13/13", lbl: "SRS requirements met", color: CORAL_O },
    { num: "React 18", lbl: "Built on modern stack", color: BLUE_X },
    { num: "0", lbl: "Global state · no leakage", color: NAVY }
  ];
  stats.forEach((s2, i) => {
    const x = 0.7 + i * 2.4;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 4.5, w: 2.2, h: 1.8, fill: { color: CARD_BG }, line: { color: GRID_LINE, width: 1 }, shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 90, opacity: 0.06 } });
    s.addShape(pres.shapes.RECTANGLE, { x, y: 4.5, w: 2.2, h: 0.08, fill: { color: s2.color }, line: { color: s2.color } });
    s.addText(s2.num, { x, y: 4.75, w: 2.2, h: 0.7, fontSize: 30, bold: true, color: s2.color, align: "center", fontFace: HEADER_FONT, margin: 0 });
    s.addText(s2.lbl, { x: x + 0.15, y: 5.5, w: 1.9, h: 0.7, fontSize: 11, color: MUTED, align: "center", fontFace: BODY_FONT, margin: 0 });
  });

  // Right side: feature box
  s.addShape(pres.shapes.RECTANGLE, { x: 8.2, y: 2.1, w: 4.4, h: 4.2, fill: { color: NAVY }, line: { color: NAVY } });
  s.addText("KEY FEATURES", { x: 8.4, y: 2.3, w: 4, h: 0.4, fontSize: 12, bold: true, color: CORAL_O, fontFace: BODY_FONT, charSpacing: 4, margin: 0 });
  s.addText([
    { text: "Mouse & keyboard input", options: { bullet: true, breakLine: true } },
    { text: "Real-time turn indicator", options: { bullet: true, breakLine: true } },
    { text: "Score tracking", options: { bullet: true, breakLine: true } },
    { text: "Win / draw detection", options: { bullet: true, breakLine: true } },
    { text: "Instant restart (R key)", options: { bullet: true, breakLine: true } },
    { text: "Accessible (ARIA labels)", options: { bullet: true, breakLine: true } },
    { text: "Works offline", options: { bullet: true } }
  ], {
    x: 8.4, y: 2.85, w: 4, h: 3.5, fontSize: 14, color: "FFFFFF", fontFace: BODY_FONT, paraSpaceAfter: 6, margin: 0
  });

  // Footer
  s.addText("Course: Software Project Management  ·  Final International University", {
    x: 0.7, y: 6.85, w: 12, h: 0.3, fontSize: 10, color: MUTED, italic: true, fontFace: BODY_FONT, margin: 0
  });
}

// ============= SLIDE 3: HOW TO RUN =============
{
  const s = pres.addSlide();
  s.background = { color: BG_LIGHT };
  addSlideHeader(s, "How to Run", "02 · Setup");

  // Prerequisites box (left)
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 2.1, w: 5.5, h: 1.6, fill: { color: CARD_BG }, line: { color: GRID_LINE, width: 1 } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 2.1, w: 0.1, h: 1.6, fill: { color: BLUE_X }, line: { color: BLUE_X } });
  s.addText("PREREQUISITES", { x: 1, y: 2.25, w: 5, h: 0.3, fontSize: 11, bold: true, color: BLUE_X, fontFace: BODY_FONT, charSpacing: 3, margin: 0 });
  s.addText([
    { text: "Node.js v16 or higher", options: { bullet: true, breakLine: true } },
    { text: "npm v7 or higher", options: { bullet: true } }
  ], { x: 1, y: 2.65, w: 5, h: 1, fontSize: 14, color: TEXT_DARK, fontFace: BODY_FONT, paraSpaceAfter: 4, margin: 0 });

  // Three steps (right)
  const steps = [
    { num: "1", title: "Install", cmd: "npm install", desc: "Install all dependencies" },
    { num: "2", title: "Start", cmd: "npm start", desc: "Launch development server" },
    { num: "3", title: "Open", cmd: "localhost:3000", desc: "View in your browser" }
  ];
  steps.forEach((st, i) => {
    const y = 4.0 + i * 1.0;
    // Number circle
    s.addShape(pres.shapes.OVAL, { x: 0.7, y, w: 0.7, h: 0.7, fill: { color: NAVY }, line: { color: NAVY } });
    s.addText(st.num, { x: 0.7, y, w: 0.7, h: 0.7, fontSize: 22, bold: true, color: "FFFFFF", align: "center", valign: "middle", fontFace: HEADER_FONT, margin: 0 });
    // Title + desc
    s.addText(st.title, { x: 1.6, y: y - 0.05, w: 2, h: 0.4, fontSize: 16, bold: true, color: NAVY, fontFace: HEADER_FONT, margin: 0 });
    s.addText(st.desc, { x: 1.6, y: y + 0.32, w: 4, h: 0.4, fontSize: 11, color: MUTED, fontFace: BODY_FONT, margin: 0 });
    // Code chip
    s.addShape(pres.shapes.RECTANGLE, { x: 6.0, y: y + 0.1, w: 3.5, h: 0.5, fill: { color: NAVY_DARK }, line: { color: NAVY_DARK } });
    s.addText(st.cmd, { x: 6.1, y: y + 0.1, w: 3.4, h: 0.5, fontSize: 14, color: "FFFFFF", fontFace: "Consolas", valign: "middle", margin: 0 });
  });

  // Right side production build callout
  s.addShape(pres.shapes.RECTANGLE, { x: 10.0, y: 2.1, w: 2.6, h: 1.6, fill: { color: NAVY }, line: { color: NAVY } });
  s.addText("PRODUCTION", { x: 10.15, y: 2.25, w: 2.4, h: 0.3, fontSize: 10, bold: true, color: CORAL_O, fontFace: BODY_FONT, charSpacing: 3, margin: 0 });
  s.addText("npm run build", { x: 10.15, y: 2.65, w: 2.4, h: 0.4, fontSize: 14, color: "FFFFFF", fontFace: "Consolas", bold: true, margin: 0 });
  s.addText("Outputs optimized files to /build folder", { x: 10.15, y: 3.05, w: 2.4, h: 0.6, fontSize: 10, color: "CADCFC", fontFace: BODY_FONT, italic: true, margin: 0 });
}

// ============= SLIDE 4: HOW TO PLAY =============
{
  const s = pres.addSlide();
  s.background = { color: BG_LIGHT };
  addSlideHeader(s, "How to Play", "03 · Gameplay");

  // Left: rules
  s.addText("RULES", { x: 0.7, y: 2.1, w: 6, h: 0.35, fontSize: 12, bold: true, color: CORAL_O, fontFace: BODY_FONT, charSpacing: 4, margin: 0 });
  s.addText([
    { text: "Player ", options: { color: TEXT_DARK } },
    { text: "X", options: { bold: true, color: BLUE_X } },
    { text: " always goes first", options: { color: TEXT_DARK, breakLine: true } },
    { text: "First to get ", options: { color: TEXT_DARK } },
    { text: "3 in a row", options: { bold: true, color: NAVY } },
    { text: " wins (row, column, diagonal)", options: { color: TEXT_DARK, breakLine: true } },
    { text: "If the board fills with no winner: ", options: { color: TEXT_DARK } },
    { text: "draw", options: { bold: true, color: CORAL_O } }
  ], { x: 0.7, y: 2.5, w: 6, h: 1.8, fontSize: 15, fontFace: BODY_FONT, paraSpaceAfter: 8, margin: 0 });

  // Controls
  s.addText("CONTROLS", { x: 0.7, y: 4.4, w: 6, h: 0.35, fontSize: 12, bold: true, color: CORAL_O, fontFace: BODY_FONT, charSpacing: 4, margin: 0 });

  const controls = [
    { key: "Click", desc: "Place mark on empty cell" },
    { key: "1 - 9", desc: "Keyboard play (positions)" },
    { key: "R", desc: "Restart the game" }
  ];
  controls.forEach((c, i) => {
    const y = 4.85 + i * 0.55;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y, w: 1.4, h: 0.45, fill: { color: NAVY_DARK }, line: { color: NAVY_DARK } });
    s.addText(c.key, { x: 0.7, y, w: 1.4, h: 0.45, fontSize: 13, bold: true, color: "FFFFFF", align: "center", valign: "middle", fontFace: "Consolas", margin: 0 });
    s.addText(c.desc, { x: 2.3, y, w: 4.5, h: 0.45, fontSize: 13, color: TEXT_DARK, valign: "middle", fontFace: BODY_FONT, margin: 0 });
  });

  // Right: visual 3x3 keyboard layout grid
  const gx = 8.0, gy = 2.4;
  const gsize = 4.0;
  const cell = gsize / 3;
  // Outer box
  s.addShape(pres.shapes.RECTANGLE, { x: gx - 0.2, y: gy - 0.5, w: gsize + 0.4, h: gsize + 0.9, fill: { color: CARD_BG }, line: { color: GRID_LINE, width: 1 } });
  s.addText("KEYBOARD LAYOUT", { x: gx - 0.2, y: gy - 0.45, w: gsize + 0.4, h: 0.35, fontSize: 11, bold: true, color: NAVY, align: "center", fontFace: BODY_FONT, charSpacing: 3, margin: 0 });

  // Grid lines
  s.addShape(pres.shapes.LINE, { x: gx + cell, y: gy, w: 0, h: gsize, line: { color: NAVY, width: 2 } });
  s.addShape(pres.shapes.LINE, { x: gx + 2 * cell, y: gy, w: 0, h: gsize, line: { color: NAVY, width: 2 } });
  s.addShape(pres.shapes.LINE, { x: gx, y: gy + cell, w: gsize, h: 0, line: { color: NAVY, width: 2 } });
  s.addShape(pres.shapes.LINE, { x: gx, y: gy + 2 * cell, w: gsize, h: 0, line: { color: NAVY, width: 2 } });

  // Numbers
  for (let i = 0; i < 9; i++) {
    const r = Math.floor(i / 3), c = i % 3;
    s.addText(String(i + 1), {
      x: gx + c * cell, y: gy + r * cell, w: cell, h: cell,
      fontSize: 44, bold: true, color: NAVY, align: "center", valign: "middle", fontFace: HEADER_FONT, margin: 0
    });
  }
}

// ============= SLIDE 5: SRS REQUIREMENTS =============
{
  const s = pres.addSlide();
  s.background = { color: BG_LIGHT };
  addSlideHeader(s, "SRS Requirements", "04 · Traceability");

  // Big stat
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 2.1, w: 3.2, h: 2.0, fill: { color: NAVY }, line: { color: NAVY } });
  s.addText("13 / 13", { x: 0.7, y: 2.25, w: 3.2, h: 1.1, fontSize: 60, bold: true, color: "FFFFFF", align: "center", fontFace: HEADER_FONT, margin: 0 });
  s.addText("ALL REQUIREMENTS MET", { x: 0.7, y: 3.4, w: 3.2, h: 0.5, fontSize: 12, bold: true, color: CORAL_O, align: "center", fontFace: BODY_FONT, charSpacing: 3, margin: 0 });

  s.addText("Every functional requirement from the SRS is implemented and traceable to a specific source file.", {
    x: 0.7, y: 4.3, w: 3.2, h: 1.5, fontSize: 12, color: TEXT_DARK, fontFace: BODY_FONT, italic: true, margin: 0
  });

  // Right side: requirements table
  const reqs = [
    ["REQ-1", "Display 3x3 grid", "Board.js"],
    ["REQ-2", "Cells empty at start", "gameLogic.js"],
    ["REQ-3", "Cells are clickable", "Cell.js"],
    ["REQ-4", "X goes first", "gameLogic.js"],
    ["REQ-5", "Turns alternate", "gameLogic.js"],
    ["REQ-6", "Show whose turn", "StatusBar.js"],
    ["REQ-7", "No re-clicking taken cells", "gameLogic.js"],
    ["REQ-8", "Check 8 win combos", "gameLogic.js"],
    ["REQ-9", "Win message", "StatusBar.js"],
    ["REQ-10", "Draw message", "StatusBar.js"],
    ["REQ-11", "Lock board on game end", "gameLogic.js"],
    ["REQ-12", "Restart button visible", "TicTacToe.js"],
    ["REQ-13", "Restart resets board", "gameLogic.js"]
  ];

  const headerCell = (txt) => ({ text: txt, options: { bold: true, color: "FFFFFF", fill: { color: NAVY }, fontSize: 11, fontFace: BODY_FONT, valign: "middle" } });
  const tableRows = [[headerCell("ID"), headerCell("Requirement"), headerCell("Implemented in")]];
  reqs.forEach((r, i) => {
    const bg = i % 2 === 0 ? "FFFFFF" : "F1F5F9";
    tableRows.push([
      { text: r[0], options: { fill: { color: bg }, color: CORAL_O, bold: true, fontSize: 10, fontFace: BODY_FONT, valign: "middle" } },
      { text: r[1], options: { fill: { color: bg }, color: TEXT_DARK, fontSize: 10, fontFace: BODY_FONT, valign: "middle" } },
      { text: r[2], options: { fill: { color: bg }, color: NAVY, fontSize: 10, fontFace: "Consolas", valign: "middle", italic: true } }
    ]);
  });

  s.addTable(tableRows, {
    x: 4.3, y: 2.1, w: 8.3, h: 4.7,
    colW: [1.1, 4.5, 2.7],
    rowH: 0.34,
    border: { type: "solid", pt: 0.5, color: GRID_LINE },
    fontSize: 10
  });
}

// ============= SLIDE 6: FILE STRUCTURE =============
{
  const s = pres.addSlide();
  s.background = { color: BG_LIGHT };
  addSlideHeader(s, "Architecture & Structure", "05 · Code Organization");

  // Left: file tree
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 2.1, w: 5.5, h: 4.8, fill: { color: NAVY_DARK }, line: { color: NAVY_DARK } });
  s.addText("FILE STRUCTURE", { x: 0.95, y: 2.25, w: 5, h: 0.35, fontSize: 11, bold: true, color: CORAL_O, fontFace: BODY_FONT, charSpacing: 3, margin: 0 });
  s.addText([
    { text: "tic-tac-toe/", options: { bold: true, color: "FFFFFF", breakLine: true } },
    { text: "├── public/", options: { color: "CADCFC", breakLine: true } },
    { text: "│   └── index.html", options: { color: "94A3B8", breakLine: true } },
    { text: "├── src/", options: { color: "CADCFC", breakLine: true } },
    { text: "│   ├── index.js", options: { color: "94A3B8", breakLine: true } },
    { text: "│   ├── App.js", options: { color: "94A3B8", breakLine: true } },
    { text: "│   └── components/", options: { color: "CADCFC", breakLine: true } },
    { text: "│       ├── TicTacToe.js", options: { color: "FFFFFF", bold: true, breakLine: true } },
    { text: "│       ├── Board.js", options: { color: "FFFFFF", breakLine: true } },
    { text: "│       ├── Cell.js", options: { color: "FFFFFF", breakLine: true } },
    { text: "│       ├── StatusBar.js", options: { color: "FFFFFF", breakLine: true } },
    { text: "│       ├── ScoreBoard.js", options: { color: "FFFFFF", breakLine: true } },
    { text: "│       └── gameLogic.js", options: { color: BLUE_X, bold: true, breakLine: true } },
    { text: "├── package.json", options: { color: "94A3B8", breakLine: true } },
    { text: "└── README.md", options: { color: "94A3B8" } }
  ], {
    x: 0.95, y: 2.65, w: 5.2, h: 4.1, fontSize: 12, fontFace: "Consolas", paraSpaceAfter: 2, margin: 0
  });

  // Right: architecture explanation cards
  const cards = [
    { color: NAVY, title: "TicTacToe.js", desc: "Main controller — owns all game state" },
    { color: BLUE_X, title: "Board · Cell · StatusBar", desc: "Pure UI components — render only" },
    { color: CORAL_O, title: "gameLogic.js", desc: "Pure logic — win detection, moves, restart. Fully separated from UI." }
  ];
  cards.forEach((c, i) => {
    const y = 2.1 + i * 1.6;
    s.addShape(pres.shapes.RECTANGLE, { x: 6.7, y, w: 5.9, h: 1.4, fill: { color: CARD_BG }, line: { color: GRID_LINE, width: 1 }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 90, opacity: 0.06 } });
    s.addShape(pres.shapes.RECTANGLE, { x: 6.7, y, w: 0.1, h: 1.4, fill: { color: c.color }, line: { color: c.color } });
    s.addText(c.title, { x: 6.95, y: y + 0.15, w: 5.5, h: 0.4, fontSize: 16, bold: true, color: NAVY, fontFace: HEADER_FONT, margin: 0 });
    s.addText(c.desc, { x: 6.95, y: y + 0.6, w: 5.5, h: 0.7, fontSize: 12, color: MUTED, fontFace: BODY_FONT, margin: 0 });
  });

  s.addText("KEY DESIGN PRINCIPLE  ·  Separation of logic and UI", {
    x: 0.7, y: 6.95, w: 12, h: 0.35, fontSize: 11, italic: true, color: MUTED, fontFace: BODY_FONT, charSpacing: 2, margin: 0
  });
}

// ============= SLIDE 7: PLATFORM INTEGRATION =============
{
  const s = pres.addSlide();
  s.background = { color: BG_LIGHT };
  addSlideHeader(s, "Platform Integration", "06 · Deployment");

  s.addText("Designed to plug directly into the shared Multi-Game Platform with a single component import.", {
    x: 0.7, y: 2.0, w: 11.5, h: 0.6, fontSize: 14, color: TEXT_DARK, italic: true, fontFace: BODY_FONT, margin: 0
  });

  // Code block
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 2.75, w: 7.2, h: 3.3, fill: { color: NAVY_DARK }, line: { color: NAVY_DARK } });
  s.addText("INTEGRATION EXAMPLE", { x: 0.95, y: 2.9, w: 6, h: 0.3, fontSize: 10, bold: true, color: CORAL_O, fontFace: BODY_FONT, charSpacing: 3, margin: 0 });
  s.addText([
    { text: "import TicTacToe from './games/tic-tac-toe';", options: { color: "FFFFFF", breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "function Platform() {", options: { color: "FFFFFF", breakLine: true } },
    { text: "  function handleGameEnd(result) {", options: { color: BLUE_X, breakLine: true } },
    { text: "    // result is 'X', 'O', or 'draw'", options: { color: "94A3B8", italic: true, breakLine: true } },
    { text: "    console.log('Game ended:', result);", options: { color: "FFFFFF", breakLine: true } },
    { text: "  }", options: { color: BLUE_X, breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "  return <TicTacToe onGameEnd={handleGameEnd} />;", options: { color: CORAL_O, breakLine: true } },
    { text: "}", options: { color: "FFFFFF" } }
  ], {
    x: 0.95, y: 3.3, w: 6.9, h: 2.7, fontSize: 12, fontFace: "Consolas", paraSpaceAfter: 1, margin: 0
  });

  // Right: compatibility checklist
  s.addText("COMPATIBILITY", { x: 8.3, y: 2.75, w: 4.5, h: 0.35, fontSize: 12, bold: true, color: CORAL_O, fontFace: BODY_FONT, charSpacing: 3, margin: 0 });
  const checks = [
    "CSS scoped with .ttt- prefix",
    "No global state pollution",
    "No localStorage dependency",
    "Single entry: <TicTacToe />",
    "Optional onGameEnd callback",
    "Works fully offline"
  ];
  checks.forEach((c, i) => {
    const y = 3.2 + i * 0.5;
    // Check mark in colored circle
    s.addShape(pres.shapes.OVAL, { x: 8.3, y, w: 0.32, h: 0.32, fill: { color: BLUE_X }, line: { color: BLUE_X } });
    s.addText("✓", { x: 8.3, y, w: 0.32, h: 0.32, fontSize: 14, bold: true, color: "FFFFFF", align: "center", valign: "middle", fontFace: BODY_FONT, margin: 0 });
    s.addText(c, { x: 8.75, y, w: 4.2, h: 0.32, fontSize: 13, color: TEXT_DARK, valign: "middle", fontFace: BODY_FONT, margin: 0 });
  });

  // Bottom: NFR strip
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 6.4, w: 12.0, h: 0.7, fill: { color: NAVY }, line: { color: NAVY } });
  s.addText([
    { text: "PERFORMANCE  ", options: { bold: true, color: CORAL_O, fontSize: 11 } },
    { text: "< 1s response   ", options: { color: "FFFFFF", fontSize: 11 } },
    { text: "·   ", options: { color: "CADCFC", fontSize: 11 } },
    { text: "RELIABILITY  ", options: { bold: true, color: CORAL_O, fontSize: 11 } },
    { text: "all 8 win combos   ", options: { color: "FFFFFF", fontSize: 11 } },
    { text: "·   ", options: { color: "CADCFC", fontSize: 11 } },
    { text: "ACCESSIBILITY  ", options: { bold: true, color: CORAL_O, fontSize: 11 } },
    { text: "ARIA + keyboard", options: { color: "FFFFFF", fontSize: 11 } }
  ], { x: 0.7, y: 6.4, w: 12.0, h: 0.7, align: "center", valign: "middle", fontFace: BODY_FONT, charSpacing: 2, margin: 0 });
}

// ============= SLIDE 8: THANK YOU =============
{
  const s = pres.addSlide();
  s.background = { color: NAVY };

  // Decorative big X and O
  s.addText("X", { x: -1, y: 4, w: 5, h: 5, fontSize: 360, bold: true, color: BLUE_X, fontFace: HEADER_FONT, align: "center", valign: "middle", transparency: 75 });
  s.addText("O", { x: 9.3, y: -1.5, w: 5, h: 5, fontSize: 360, bold: true, color: CORAL_O, fontFace: HEADER_FONT, align: "center", valign: "middle", transparency: 75 });

  s.addText("Thank You", {
    x: 1, y: 2.4, w: 11.3, h: 1.5,
    fontSize: 96, bold: true, color: "FFFFFF", align: "center", fontFace: HEADER_FONT, margin: 0
  });

  s.addShape(pres.shapes.LINE, { x: 5.65, y: 4.05, w: 2, h: 0, line: { color: CORAL_O, width: 2 } });

  s.addText("Questions & Discussion", {
    x: 1, y: 4.25, w: 11.3, h: 0.6,
    fontSize: 24, italic: true, color: "CADCFC", align: "center", fontFace: HEADER_FONT, margin: 0
  });

  s.addText([
    { text: "Saloua Ourich", options: { bold: true, color: "FFFFFF", fontSize: 16, breakLine: true } },
    { text: "Software Project Management  ·  March 2026", options: { color: "CADCFC", fontSize: 12 } }
  ], {
    x: 1, y: 5.5, w: 11.3, h: 1.2,
    align: "center", fontFace: BODY_FONT, paraSpaceAfter: 4, margin: 0
  });
}

pres.writeFile({ fileName: "C:/Users/User/OneDrive/Desktop/tictactoe-saloua-ourich/TicTacToe_Presentation.pptx" })
  .then(fn => console.log("Saved:", fn));
