import { useState, useCallback, useEffect } from 'react';
import puzzles from '../data/puzzles.json';

const STORAGE_KEY = 'squint-game-state';
const EPOCH = '2026-06-09';
const MAX_GUESSES = 3;

function getTodayKey() {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York' }).format(new Date());
}

function normalize(str) {
  return str.toLowerCase().trim()
    .replace(/['’\-]/g, ' ')
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function getFirstLetterHint(answer) {
  return answer.split(' ').map(w => w[0].toUpperCase()).join(' · ');
}

function loadState(dateKey) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw);
    if (saved.dateKey !== dateKey) return null;
    return saved;
  } catch { return null; }
}

function saveState(state) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
}

export function useGameState() {
  const dateKey = getTodayKey();
  const puzzle = puzzles[dateKey] || null;
  const puzzleNumber = Math.floor((new Date(dateKey) - new Date(EPOCH)) / 86400000) + 1;

  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState('playing');
  const [initialized, setInitialized] = useState(false);
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    if (!puzzle) { setInitialized(true); return; }
    const saved = loadState(dateKey);
    if (saved) {
      setGuesses(saved.guesses || []);
      setGameStatus(saved.gameStatus || 'playing');
    }
    setInitialized(true);
  }, [dateKey]);

  useEffect(() => {
    if (!initialized || !puzzle) return;
    saveState({ dateKey, guesses, gameStatus });
  }, [guesses, gameStatus, initialized]);

  const submitGuess = useCallback((text) => {
    if (!puzzle || gameStatus !== 'playing') return { result: 'invalid' };
    if (guesses.length >= MAX_GUESSES) return { result: 'invalid' };

    const isCorrect = normalize(text) === normalize(puzzle.answer);
    const newGuess = { text, correct: isCorrect };
    const newGuesses = [...guesses, newGuess];

    setGuesses(newGuesses);

    if (isCorrect) {
      setGameStatus('won');
      return { result: 'correct' };
    }

    if (newGuesses.length >= MAX_GUESSES) {
      setGameStatus('lost');
      return { result: 'lost' };
    }

    setShaking(true);
    setTimeout(() => setShaking(false), 500);
    return { result: 'wrong' };
  }, [puzzle, gameStatus, guesses]);

  const hintsVisible = guesses.filter(g => !g.correct).length;

  const hints = [];
  if (hintsVisible >= 1 && puzzle) hints.push(`💡 ${puzzle.hint}`);
  if (hintsVisible >= 2 && puzzle) hints.push(`💡 ${getFirstLetterHint(puzzle.answer)}`);

  const generateShareText = useCallback(() => {
    if (!puzzle) return '';
    const wrongCount = guesses.filter(g => !g.correct).length;
    const won = gameStatus === 'won';
    const guessDisplay = won ? `${guesses.length}/${MAX_GUESSES}` : 'X/3';
    const squares = guesses.map(g => g.correct ? '🟩' : '🟥').join('');
    return `Squint #${puzzleNumber} 🔍 ${guessDisplay}\n${squares}\nnoodlegames.co`;
  }, [puzzle, guesses, gameStatus, puzzleNumber]);

  return {
    puzzle,
    puzzleNumber,
    dateKey,
    guesses,
    gameStatus,
    initialized,
    shaking,
    hints,
    submitGuess,
    generateShareText,
    maxGuesses: MAX_GUESSES,
  };
}
