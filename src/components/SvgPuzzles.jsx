// Inline SVG puzzle components — each is a self-contained rebus visual.
// Colors match the app theme (no CSS variable access inside SVG).
const T = '#ddeeff'; // text
const A = '#06b6d4'; // accent cyan
const D = '#3a5468'; // dim
const F = `Inter, -apple-system, BlinkMacSystemFont, sans-serif`;

// ─── I under STAND ──────────────────────────────────────────────────────────
export function IUnderStand() {
  return (
    <svg viewBox="0 0 240 170" style={{ width: '100%', maxWidth: '300px' }}>
      <text x="120" y="52" textAnchor="middle" fontSize="46" fontWeight="800"
        fontFamily={F} fill={T} letterSpacing="2">STAND</text>
      <line x1="20" y1="66" x2="220" y2="66" stroke={D} strokeWidth="1.5"/>
      {/* Stick figure = "I" standing below STAND */}
      <circle cx="120" cy="92" r="14" stroke={A} strokeWidth="3" fill="none"/>
      <line x1="120" y1="106" x2="120" y2="140" stroke={A} strokeWidth="3"/>
      <line x1="94"  y1="118" x2="146" y2="118" stroke={A} strokeWidth="3"/>
      <line x1="120" y1="140" x2="100" y2="164" stroke={A} strokeWidth="3"/>
      <line x1="120" y1="140" x2="140" y2="164" stroke={A} strokeWidth="3"/>
    </svg>
  );
}

// ─── Knee + ON = Neon ────────────────────────────────────────────────────────
export function KneeOn() {
  return (
    <svg viewBox="0 0 250 155" style={{ width: '100%', maxWidth: '300px' }}>
      {/* Side-on bent leg */}
      <line x1="55" y1="10" x2="92" y2="78" stroke={T} strokeWidth="15" strokeLinecap="round"/>
      <line x1="92" y1="78" x2="64" y2="145" stroke={T} strokeWidth="15" strokeLinecap="round"/>
      <circle cx="92" cy="78" r="13" fill={A}/>
      {/* Dashed separator */}
      <line x1="122" y1="8" x2="122" y2="148" stroke={D} strokeWidth="1" strokeDasharray="5,4"/>
      <text x="192" y="100" textAnchor="middle" fontSize="60" fontWeight="900"
        fontFamily={F} fill={T}>ON</text>
    </svg>
  );
}

// ─── T + rain = Train ────────────────────────────────────────────────────────
export function TRain() {
  const drops = [[150,25],[170,50],[145,80],[172,105],[152,130],[168,148]];
  return (
    <svg viewBox="0 0 225 165" style={{ width: '100%', maxWidth: '280px' }}>
      <text x="65" y="128" textAnchor="middle" fontSize="118" fontWeight="900"
        fontFamily={F} fill={T}>T</text>
      <line x1="118" y1="8" x2="118" y2="158" stroke={D} strokeWidth="1.5"/>
      {drops.map(([cx, cy], i) => (
        <ellipse key={i} cx={cx} cy={cy} rx="7" ry="13" fill={A} opacity={0.55 + i * 0.07}/>
      ))}
    </svg>
  );
}

// ─── S + PAIN = Spain ────────────────────────────────────────────────────────
export function SPain() {
  return (
    <svg viewBox="0 0 250 145" style={{ width: '100%', maxWidth: '300px' }}>
      <text x="58" y="108" textAnchor="middle" fontSize="108" fontWeight="900"
        fontFamily={F} fill={T}>S</text>
      <text x="115" y="84" textAnchor="middle" fontSize="30" fontWeight="300"
        fontFamily={F} fill={D}>+</text>
      <rect x="128" y="38" width="114" height="62" rx="10"
        stroke={A} strokeWidth="2.5" fill="none"/>
      <text x="185" y="84" textAnchor="middle" fontSize="36" fontWeight="800"
        fontFamily={F} fill={T}>PAIN</text>
    </svg>
  );
}

// ─── JA + frying pan = Japan ─────────────────────────────────────────────────
export function JaPan() {
  return (
    <svg viewBox="0 0 270 155" style={{ width: '100%', maxWidth: '320px' }}>
      <text x="68" y="105" textAnchor="middle" fontSize="92" fontWeight="900"
        fontFamily={F} fill={T}>JA</text>
      <text x="128" y="90" textAnchor="middle" fontSize="30" fontWeight="300"
        fontFamily={F} fill={D}>+</text>
      {/* Pan circle */}
      <circle cx="205" cy="90" r="45" stroke={T} strokeWidth="7" fill="none"/>
      {/* Handle */}
      <rect x="248" y="80" width="40" height="20" rx="10" fill={T}/>
      {/* Shine */}
      <circle cx="190" cy="75" r="8" fill={T} opacity="0.2"/>
    </svg>
  );
}

// ─── Pine tree + Apple = Pineapple ───────────────────────────────────────────
export function PineApple() {
  return (
    <svg viewBox="0 0 260 165" style={{ width: '100%', maxWidth: '310px' }}>
      {/* Pine tree */}
      <rect x="51" y="135" width="12" height="22" rx="3" fill={T}/>
      <polygon points="28,135 57,68 86,135" fill={T}/>
      <polygon points="36,92  57,38 78,92"  fill={T}/>
      <polygon points="43,60  57,22 71,60"  fill={T}/>
      {/* + */}
      <text x="112" y="98" textAnchor="middle" fontSize="32" fontWeight="300"
        fontFamily={F} fill={D}>+</text>
      {/* Apple */}
      <ellipse cx="192" cy="112" rx="40" ry="38" fill={T}/>
      {/* Dent top */}
      <ellipse cx="192" cy="78" rx="9" ry="9" fill="none" stroke="#101e2c" strokeWidth="7"/>
      {/* Stem */}
      <line x1="192" y1="76" x2="192" y2="60" stroke={T} strokeWidth="6" strokeLinecap="round"/>
      {/* Leaf */}
      <path d="M 192 67 Q 210 56, 208 44 Q 196 60, 192 67 Z" fill={A}/>
      {/* Highlight */}
      <ellipse cx="175" cy="100" rx="9" ry="14" fill="white" opacity="0.12"
        transform="rotate(-15 175 100)"/>
    </svg>
  );
}

// ─── Straw + Berry = Strawberry ──────────────────────────────────────────────
export function StrawBerry() {
  const seeds = [[175,108],[195,102],[185,120],[200,122],[172,122],[188,133]];
  return (
    <svg viewBox="0 0 255 155" style={{ width: '100%', maxWidth: '310px' }}>
      {/* Bent drinking straw */}
      <path d="M 62 140 L 62 48 Q 62 30, 80 30 L 98 30"
        stroke={T} strokeWidth="14" fill="none" strokeLinecap="round"/>
      <path d="M 62 140 L 62 48 Q 62 30, 80 30 L 98 30"
        stroke={A} strokeWidth="14" fill="none" strokeLinecap="round"
        strokeDasharray="11,11"/>
      {/* + */}
      <text x="124" y="92" textAnchor="middle" fontSize="32" fontWeight="300"
        fontFamily={F} fill={D}>+</text>
      {/* Berry body */}
      <ellipse cx="190" cy="108" rx="34" ry="37" fill={T}/>
      {/* Leaf crown */}
      <path d="M 190 74 Q 175 64, 170 50 Q 182 64, 190 72 Q 198 64, 210 50 Q 205 64, 190 74 Z"
        fill={A}/>
      {/* Seeds */}
      {seeds.map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="2.5" ry="3.5" fill="#101e2c" opacity="0.45"/>
      ))}
    </svg>
  );
}

// ─── Butter block + Fly = Butterfly ──────────────────────────────────────────
export function ButterFly() {
  return (
    <svg viewBox="0 0 265 155" style={{ width: '100%', maxWidth: '320px' }}>
      {/* Butter block */}
      <rect x="12" y="70" width="82" height="52" rx="6" fill={T}/>
      <polygon points="12,70 32,50 114,50 94,70" fill={T} opacity="0.82"/>
      <polygon points="94,70 114,50 114,102 94,122" fill={T} opacity="0.7"/>
      {/* Label */}
      <rect x="18" y="78" width="70" height="36" rx="3" fill={A} opacity="0.18"/>
      <text x="53" y="101" textAnchor="middle" fontSize="13" fontWeight="700"
        fontFamily={F} fill={A} letterSpacing="0.5">BUTTER</text>
      {/* + */}
      <text x="130" y="96" textAnchor="middle" fontSize="30" fontWeight="300"
        fontFamily={F} fill={D}>+</text>
      {/* Fly body */}
      <ellipse cx="205" cy="96" rx="10" ry="20" fill={T}/>
      {/* Fly head */}
      <circle cx="205" cy="72" r="10" fill={T}/>
      <circle cx="199" cy="70" r="3.5" fill="#101e2c"/>
      <circle cx="211" cy="70" r="3.5" fill="#101e2c"/>
      {/* Wings */}
      <ellipse cx="181" cy="84" rx="21" ry="13" fill={T} opacity="0.55" transform="rotate(-18 181 84)"/>
      <ellipse cx="229" cy="84" rx="21" ry="13" fill={T} opacity="0.55" transform="rotate(18 229 84)"/>
      <ellipse cx="181" cy="106" rx="16" ry="9"  fill={T} opacity="0.45" transform="rotate(12 181 106)"/>
      <ellipse cx="229" cy="106" rx="16" ry="9"  fill={T} opacity="0.45" transform="rotate(-12 229 106)"/>
    </svg>
  );
}

// ─── Cow + Boy stick figure = Cowboy ─────────────────────────────────────────
export function CowBoy() {
  return (
    <svg viewBox="0 0 265 165" style={{ width: '100%', maxWidth: '320px' }}>
      {/* Cow body */}
      <ellipse cx="72" cy="105" rx="50" ry="33" fill={T}/>
      {/* Cow head */}
      <ellipse cx="120" cy="90" rx="24" ry="20" fill={T}/>
      {/* Ears */}
      <ellipse cx="102" cy="75" rx="8" ry="6" fill={T}/>
      <ellipse cx="134" cy="75" rx="8" ry="6" fill={T}/>
      {/* Eye */}
      <circle cx="126" cy="87" r="4" fill="#101e2c"/>
      <circle cx="124" cy="85" r="1.5" fill="white"/>
      {/* Nostrils */}
      <ellipse cx="130" cy="98" rx="4" ry="3" fill="#101e2c" opacity="0.45"/>
      {/* Horns */}
      <path d="M 106 72 Q 98 54, 92 52" stroke={T} strokeWidth="5" fill="none" strokeLinecap="round"/>
      <path d="M 128 72 Q 136 54, 142 52" stroke={T} strokeWidth="5" fill="none" strokeLinecap="round"/>
      {/* Legs */}
      {[[36,138],[54,138],[78,138],[96,138]].map(([x,y],i) => (
        <rect key={i} x={x} y={y} width="11" height="24" rx="5" fill={T}/>
      ))}
      {/* Spots */}
      <ellipse cx="62" cy="100" rx="16" ry="12" fill={D} opacity="0.4"/>
      <ellipse cx="88" cy="115" rx="10" ry="8" fill={D} opacity="0.35"/>
      {/* + */}
      <text x="154" y="110" textAnchor="middle" fontSize="30" fontWeight="300"
        fontFamily={F} fill={D}>+</text>
      {/* Boy stick figure */}
      <circle cx="210" cy="48" r="15" stroke={T} strokeWidth="3" fill="none"/>
      <line x1="210" y1="63" x2="210" y2="104" stroke={T} strokeWidth="3"/>
      <line x1="186" y1="78" x2="234" y2="78" stroke={T} strokeWidth="3"/>
      <line x1="210" y1="104" x2="194" y2="130" stroke={T} strokeWidth="3"/>
      <line x1="210" y1="104" x2="226" y2="130" stroke={T} strokeWidth="3"/>
    </svg>
  );
}

// ─── Upside-down figure = Head over heels ────────────────────────────────────
export function HeadOverHeels() {
  return (
    <svg viewBox="0 0 240 205" style={{ width: '100%', maxWidth: '280px' }}>
      {/* HEELS label at top (feet are up) */}
      <text x="120" y="18" textAnchor="middle" fontSize="13" fontWeight="700"
        fontFamily={F} fill={A} letterSpacing="1">HEELS</text>
      {/* Feet/shoe shapes at top */}
      <path d="M 88 28 Q 80 24, 70 26 Q 68 34, 80 34 L 94 34 Z" fill={T}/>
      <path d="M 152 28 Q 160 24, 170 26 Q 172 34, 160 34 L 146 34 Z" fill={T}/>
      {/* Legs pointing down from feet */}
      <line x1="88"  y1="33" x2="120" y2="88" stroke={T} strokeWidth="4.5"/>
      <line x1="152" y1="33" x2="120" y2="88" stroke={T} strokeWidth="4.5"/>
      {/* Body */}
      <line x1="120" y1="88" x2="120" y2="140" stroke={T} strokeWidth="4.5"/>
      {/* Arms */}
      <line x1="92"  y1="108" x2="148" y2="108" stroke={T} strokeWidth="4.5"/>
      {/* Head at the bottom */}
      <circle cx="120" cy="165" r="24" stroke={T} strokeWidth="4" fill="none"/>
      {/* Face (upside down smile = frown from our view) */}
      <circle cx="110" cy="160" r="3" fill={T}/>
      <circle cx="130" cy="160" r="3" fill={T}/>
      <path d="M 110 174 Q 120 168, 130 174" stroke={T} strokeWidth="2.5"
        fill="none" strokeLinecap="round"/>
      {/* HEAD label at bottom */}
      <text x="120" y="202" textAnchor="middle" fontSize="13" fontWeight="700"
        fontFamily={F} fill={A} letterSpacing="1">HEAD</text>
    </svg>
  );
}
