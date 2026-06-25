import { useState, useEffect, useRef } from 'react';
import { useGameState } from './hooks/useGameState';
import { useStats } from './hooks/useStats';
import RebusDisplay from './components/RebusDisplay';
import ResultScreen from './components/ResultScreen';
import HowToPlay from './components/HowToPlay';
import StatsScreen from './components/StatsScreen';
import styles from './App.module.css';
import { NoodleLogoIcon } from './components/NoodleLogo';
import { GameLogo } from './components/GameLogo';

const HOW_TO_PLAY_KEY = 'squint-how-to-play-seen';

export default function App() {
  const {
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
    maxGuesses,
  } = useGameState();

  const { stats, winPct, recordGame } = useStats();

  const [inputValue, setInputValue] = useState('');
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [resultDismissed, setResultDismissed] = useState(false);
  const inputRef = useRef(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    try {
      if (!localStorage.getItem(HOW_TO_PLAY_KEY)) setShowHowToPlay(true);
    } catch {}
  }, []);

  const dismissHowToPlay = () => {
    setShowHowToPlay(false);
    try { localStorage.setItem(HOW_TO_PLAY_KEY, '1'); } catch {}
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  useEffect(() => {
    if (gameStatus === 'won' || gameStatus === 'lost') {
      recordGame(dateKey, gameStatus === 'won', guesses.length);
    }
  }, [gameStatus]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const result = submitGuess(inputValue.trim());
    if (result.result !== 'invalid') {
      setInputValue('');
    }
  };

  const wrongGuesses = guesses.filter(g => !g.correct);
  const gameOver = gameStatus === 'won' || gameStatus === 'lost';
  const showResult = gameOver && !resultDismissed;

  const footer = (
    <footer className={styles.footer}>
      <a href="https://noodlegames.co" target="_blank" rel="noopener noreferrer" className={styles.footerLogo}>
        <NoodleLogoIcon size={18} /> NoodleGames
      </a>
      <span className={styles.footerCopy}>© {currentYear} NoodleGames.co</span>
    </footer>
  );

  const Logo = () => (
    <h1 className={styles.logo}>
      <GameLogo />
      <span className={styles.logoSquint}>Squint</span>
    </h1>
  );

  if (!initialized) return null;

  if (!puzzle) {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerLeft}><Logo /></div>
        </header>
        <div className={styles.noPuzzle}>
          <span className={styles.noPuzzleEmoji}>🔍</span>
          <p>No puzzle for today yet.</p>
          <p className={styles.muted}>Check back tomorrow!</p>
        </div>
        {footer}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Logo />
          {puzzleNumber > 0 && <span className={styles.puzzleNumber}>#{puzzleNumber}</span>}
        </div>
        <div className={styles.headerRight}>
          <button className={styles.iconButton} onClick={() => setShowStats(true)} aria-label="Statistics">
            <svg className={styles.statsIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4 20H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <rect x="6" y="11" width="2.8" height="7" rx="1" fill="currentColor" />
              <rect x="10.6" y="7" width="2.8" height="11" rx="1" fill="currentColor" opacity="0.9" />
              <rect x="15.2" y="4" width="2.8" height="14" rx="1" fill="currentColor" opacity="0.8" />
            </svg>
          </button>
          <button className={styles.iconButton} onClick={() => setShowHowToPlay(true)} aria-label="How to play">?</button>
        </div>
      </header>

      <main className={styles.main}>
        <RebusDisplay puzzle={puzzle} shaking={shaking} />

        {hints.length > 0 && (
          <div className={styles.hints}>
            {hints.map((h, i) => (
              <div key={i} className={styles.hint} style={{ animationDelay: `${i * 0.1}s` }}>
                {h}
              </div>
            ))}
          </div>
        )}

        {wrongGuesses.length > 0 && (
          <div className={styles.wrongGuesses}>
            {wrongGuesses.map((g, i) => (
              <div key={i} className={styles.wrongGuess}>
                <span className={styles.wrongX}>✕</span>
                <span className={styles.wrongText}>{g.text}</span>
              </div>
            ))}
          </div>
        )}

        {gameStatus === 'playing' && (
          <form className={styles.guessForm} onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              className={styles.guessInput}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="What does it say?"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
            <button
              type="submit"
              className={styles.guessBtn}
              disabled={!inputValue.trim()}
            >
              Guess {guesses.length + 1}/{maxGuesses}
            </button>
          </form>
        )}

        {gameOver && resultDismissed && (
          <div className={styles.gameOverReveal}>
            <p className={styles.revealLabel}>The answer</p>
            <p className={styles.revealAnswer}>{puzzle.answer}</p>
            <p className={styles.revealExplain}>{puzzle.explanation}</p>
            <button className={styles.showResultBtn} onClick={() => setResultDismissed(false)}>
              See results
            </button>
          </div>
        )}
      </main>

      {showResult && (
        <ResultScreen
          won={gameStatus === 'won'}
          puzzle={puzzle}
          guesses={guesses}
          puzzleNumber={puzzleNumber}
          generateShareText={generateShareText}
          stats={stats}
          winPct={winPct}
          onDismiss={() => setResultDismissed(true)}
        />
      )}

      {showHowToPlay && <HowToPlay onClose={dismissHowToPlay} />}
      {showStats && <StatsScreen stats={stats} winPct={winPct} onClose={() => setShowStats(false)} />}

      {footer}
    </div>
  );
}
