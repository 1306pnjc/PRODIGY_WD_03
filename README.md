# Tic Tac Toe 

> A classic game built two years ago to go deep on JavaScript logic and DOM fundamentals.

---

## Background

This was one of my earliest projects built **two years ago** with a clear goal: prove I understood JavaScript properly. Not just syntax, but actual programming thinking. Game state, event handling, win condition logic, turn management — all from scratch, no libraries, no tutorials copied line for line.

The aesthetic was intentional too for its time: neon green on black, a glowing grid, a terminal kind of energy. It was my first attempt at making something that *felt* like it had a design direction, not just functionality dumped on a page.

Looking at it now , the gap between this and the LandingPage and Stopwatch projects is visible and that's the point. This is where the journey started.

---

## What This Project Demonstrates

**JavaScript logic:**
- Complete game state management using an array (`boardState`) — clean, predictable, easy to reason about
- Win detection using `Array.some()` + `Array.every()` across all 8 winning combinations — functional programming patterns, not brute-force if/else
- Draw detection by checking if the board is fully occupied with no winner
- `{once: true}` on click event listeners to prevent cells from being overwritten — shows knowledge of the EventListener API beyond basic usage
- Turn switching with a ternary — concise, readable state logic
- Proper separation of concerns: `startGame`, `handleClick`, `checkForWin`, `checkForDraw`, `endGame`, `resetGame` — each function does one thing

**CSS & UI:**
- CSS Grid for the board layout — clean and semantic
- Selective border removal per cell using `[data-index]` attribute selectors to create the classic grid lines without drawing borders around the whole board
- Neon glow effects using `text-shadow` and `box-shadow`
- Hover/active micro-interactions with `transform: scale()` for tactile feedback

---

## How to Run

No dependencies, no build step.

**Option 1 — Open directly**
```bash
open index.html
```
Or double-click `index.html` in your file explorer.

**Option 2 — Local server**

VS Code Live Server: right-click `index.html` → *Open with Live Server*

Python:
```bash
python -m http.server 8000
# open http://localhost:8000
```

---

## Project Structure

```
tic-tac-toe/
├── index.html      # Game board markup, data-index attributes
├── script.js       # All game logic — state, win/draw detection, turns
├── style.css       # Neon grid styling, hover states, layout
└── README.md
```

---

## Game Logic Breakdown

**Win detection** — the most interesting part of the JS:
```js
return winningCombinations.some(combination => {
  return combination.every(index => boardState[index] === player);
});
```
Rather than writing 8 separate if-statements, this checks all winning combinations functionally. `some` stops as soon as one combination is satisfied. `every` confirms all three cells in a combination belong to the same player. Two lines, zero repetition.

**Why `{once: true}`?**
```js
block.addEventListener('click', handleClick, { once: true });
```
This removes the event listener automatically after the first click, preventing any cell from being clicked twice. Cleaner than checking `boardState[index] !== ''` alone — defence in depth.

---

## Context

This was the starting point of me building my portfolio. 

---

*Genesis.*
