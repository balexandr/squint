import styles from './HowToPlay.module.css';

export default function HowToPlay({ onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>
        <h2 className={styles.title}>How to Play</h2>

        <p className={styles.intro}>
          Each day there's one rebus puzzle. The arrangement, size, and position of the words
          spell out a phrase — you have to figure out what it means.
        </p>

        <div className={styles.examples}>
          <div className={styles.example}>
            <div className={styles.examplePuzzle}>
              <span className={styles.exWord}>STAND</span>
              <span className={styles.exWordSm}>I</span>
            </div>
            <p className={styles.exAnswer}>= <em>I understand</em></p>
            <p className={styles.exNote}>I is positioned under STAND</p>
          </div>

          <div className={styles.example}>
            <div className={styles.examplePuzzle}>
              <span className={styles.exWordXl}>HEAD</span>
              <span className={styles.exWordXs}>heels</span>
            </div>
            <p className={styles.exAnswer}>= <em>Head over heels</em></p>
            <p className={styles.exNote}>HEAD appears over heels</p>
          </div>
        </div>

        <ul className={styles.rules}>
          <li>You have <strong>3 guesses</strong></li>
          <li>Each wrong guess reveals a hint</li>
          <li>A new puzzle every day</li>
        </ul>

        <button className={styles.playBtn} onClick={onClose}>Got it — let's play</button>
      </div>
    </div>
  );
}
