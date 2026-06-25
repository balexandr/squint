export function GameLogo() {
  const C = '#06b6d4'
  const dots = [
    // corners — dimmest
    { cx: 8,  cy: 8,  r: 5,   o: 0.2 },
    { cx: 40, cy: 8,  r: 5,   o: 0.2 },
    { cx: 8,  cy: 40, r: 5,   o: 0.2 },
    { cx: 40, cy: 40, r: 5,   o: 0.2 },
    // cardinals — mid
    { cx: 24, cy: 8,  r: 5.5, o: 0.5 },
    { cx: 8,  cy: 24, r: 5.5, o: 0.5 },
    { cx: 40, cy: 24, r: 5.5, o: 0.5 },
    { cx: 24, cy: 40, r: 5.5, o: 0.5 },
    // center — brightest
    { cx: 24, cy: 24, r: 6.5, o: 1.0 },
  ]
  return (
    <svg viewBox="0 0 48 48" width="26" height="26" aria-hidden="true" style={{ flexShrink: 0 }}>
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={C} opacity={d.o} />
      ))}
    </svg>
  )
}
