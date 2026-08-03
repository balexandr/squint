# Squint — Daily Rebus Puzzle

A daily brain-teaser where you decode a visual rebus into a word or phrase. Three guesses, hints unlock as you go.

Part of the [NoodleGames](https://noodlegames.co) family alongside **Knot** and **Zero In**.

---

## How to play

Each puzzle shows a small cluster of styled text — size, spacing, and position all carry meaning (think "small talk" written in a tiny font, or a word split apart to mean "broken"). Read it as a rebus and type what it represents.

- You get **3 guesses**.
- After your 1st wrong guess, a text hint appears.
- After your 2nd wrong guess, the first letter of every word in the answer appears.
- Resets daily at **midnight ET**.

---

## Sharing

After the puzzle ends you can share a result grid — green for right, red for wrong — showing how many guesses it took, no spoilers. Once you've finished at least one NoodleGame today, a **Share all completed** button appears in the footer, letting you share every game you've solved today in one message.

---

## Stack

React + Vite · CSS Modules · localStorage · GitHub Pages

---

## Puzzles

Puzzles run from **June 9, 2026** onward (273 puzzles, through March 2027), stored in `src/data/puzzles.json` keyed by date. Each entry is a set of styled text "rows" (size/dim/gap tokens), an answer, and a hint string.
