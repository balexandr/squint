import { useState, useEffect } from 'react';
import styles from './ResultScreen.module.css';

export default function ResultScreen({ won, puzzle, guesses, puzzleNumber, generateShareText, stats, winPct, onDismiss }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const t = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(t);
    }
  }, [copied]);

  const handleShare = () => {
    const text = generateShareText();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => setCopied(true));
    } else {
      setCopied(true);
    }
  };

  return (
    <div className={styles.overlay} onClick={onDismiss}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onDismiss} aria-label="Close">✕</button>
        <div className={styles.topSection}>
          <div className={styles.emoji}>{won ? '🎉' : '💭'}</div>
          <h2 className={styles.headline}>
            {won ? 'Nice one!' : 'Better luck tomorrow'}
          </h2>
          <p className={styles.puzzleNum}>Squint #{puzzleNumber}</p>
        </div>

        <div className={styles.answerSection}>
          <p className={styles.answerLabel}>The answer was</p>
          <p className={styles.answer}>{puzzle.answer}</p>
          <p className={styles.explanation}>{puzzle.explanation}</p>
        </div>

        <div className={styles.guessRow}>
          {guesses.map((g, i) => (
            <span key={i} className={`${styles.square} ${g.correct ? styles.correct : styles.wrong}`}>
              {g.correct ? '🟩' : '🟥'}
            </span>
          ))}
        </div>

        <div className={styles.statsRow}>
          <div className={styles.stat}>
            <span className={styles.statValue}>{stats.gamesPlayed}</span>
            <span className={styles.statLabel}>Played</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{winPct}%</span>
            <span className={styles.statLabel}>Win %</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{stats.currentStreak}</span>
            <span className={styles.statLabel}>Streak</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{stats.maxStreak}</span>
            <span className={styles.statLabel}>Best</span>
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.shareBtn} onClick={handleShare}>
            {copied ? '✓ Copied!' : '⬆ Share'}
          </button>
        </div>
      </div>
    </div>
  );
}
