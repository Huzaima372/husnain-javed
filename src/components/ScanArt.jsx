// Bespoke scan-line / bounding-box illustrations, one per project domain.
// These stand in for photography: abstract, on-theme visuals that echo the
// detection-overlay signature used throughout the site, rather than a
// generic stock photo or gradient blob.

const palettes = {
  'medical-imaging': { a: '#5EEAD4', b: '#7DD3FC', label: '94.2% CONF' },
  'leaf': { a: '#5EEAD4', b: '#A3E635', label: '91.6% CONF' },
  'data-health': { a: '#A78BFA', b: '#7DD3FC', label: '88.9% CONF' },
  'heart-data': { a: '#FB7185', b: '#A78BFA', label: '92.4% CONF' },
  'data-health-2': { a: '#7DD3FC', b: '#A78BFA', label: '90.1% CONF' },
}

export default function ScanArt({ variant = 'medical-imaging', className = '' }) {
  const p = palettes[variant] || palettes['medical-imaging']

  return (
    <svg viewBox="0 0 400 260" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`g-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={p.a} stopOpacity="0.28" />
          <stop offset="100%" stopColor={p.b} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="var(--card-bg)" />
      <rect width="400" height="260" fill={`url(#g-${variant})`} />

      {/* scan grid */}
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="260" stroke="var(--divider)" strokeWidth="1" />
      ))}
      {Array.from({ length: 7 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 40} x2="400" y2={i * 40} stroke="var(--divider)" strokeWidth="1" />
      ))}

      {/* abstract subject shape, per domain */}
      {variant === 'medical-imaging' && (
        <ellipse cx="200" cy="140" rx="70" ry="50" fill="none" stroke={p.a} strokeWidth="2" opacity="0.7" />
      )}
      {variant === 'leaf' && (
        <path
          d="M200 80 C 260 100, 270 170, 200 200 C 130 170, 140 100, 200 80 Z"
          fill="none"
          stroke={p.a}
          strokeWidth="2"
          opacity="0.7"
        />
      )}
      {variant === 'data-health' && (
        <g fill="none" stroke={p.a} strokeWidth="2" opacity="0.7">
          <circle cx="200" cy="130" r="55" />
          <circle cx="200" cy="130" r="30" />
        </g>
      )}
      {variant === 'heart-data' && (
        <path
          d="M200 190 C 130 140, 140 80, 200 110 C 260 80, 270 140, 200 190 Z"
          fill="none"
          stroke={p.a}
          strokeWidth="2"
          opacity="0.7"
        />
      )}
      {variant === 'data-health-2' && (
        <polyline
          points="90,170 140,150 170,180 210,110 250,140 310,90"
          fill="none"
          stroke={p.a}
          strokeWidth="2.5"
          opacity="0.8"
        />
      )}

      {/* detection box */}
      <rect x="120" y="60" width="160" height="140" fill="none" stroke={p.b} strokeWidth="1.5" strokeDasharray="6 4" opacity="0.8" />
      <line x1="120" y1="60" x2="140" y2="60" stroke={p.b} strokeWidth="3" />
      <line x1="120" y1="60" x2="120" y2="80" stroke={p.b} strokeWidth="3" />
      <line x1="280" y1="200" x2="260" y2="200" stroke={p.b} strokeWidth="3" />
      <line x1="280" y1="200" x2="280" y2="180" stroke={p.b} strokeWidth="3" />

      <text x="122" y="52" fontFamily="JetBrains Mono, monospace" fontSize="11" fill={p.b}>
        {p.label}
      </text>
    </svg>
  )
}
