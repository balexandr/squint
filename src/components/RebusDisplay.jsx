import styles from './RebusDisplay.module.css';
import * as SvgPuzzles from './SvgPuzzles';

const SIZE_CLASS = {
  xs: styles.sizeXs,
  sm: styles.sizeSm,
  md: styles.sizeMd,
  lg: styles.sizeLg,
  xl: styles.sizeXl,
};

const GAP_CLASS = {
  sm: styles.gapSm,
  md: styles.gapMd,
  lg: styles.gapLg,
  xl: styles.gapXl,
};

export default function RebusDisplay({ puzzle, shaking }) {
  const SvgComp = puzzle.svg ? SvgPuzzles[puzzle.svg] : null;

  return (
    <div className={`${styles.box} ${shaking ? styles.shaking : ''}`}>
      <div className={styles.inner}>
        {SvgComp ? (
          <div className={styles.svgWrapper}><SvgComp /></div>
        ) : puzzle.rows.map((row, ri) => (
          <div key={ri} className={styles.row}>
            {row.tokens.map((token, ti) => {
              const s = token.style || {};
              const isOp = token.type === 'op';
              const cls = [
                isOp ? styles.op : styles.token,
                !isOp && (SIZE_CLASS[s.size] || styles.sizeLg),
                s.gap && GAP_CLASS[s.gap],
                s.dim && styles.dim,
              ].filter(Boolean).join(' ');
              return (
                <span key={ti} className={cls}>
                  {token.text}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
