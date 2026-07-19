import { useMemo } from 'react'

// Seeded scatter of "detection nodes" connected by thin lines — an ambient
// callback to the object-detection graphs at the center of Husnain's CV work.
function seededRandom(seed) {
  let value = seed
  return () => {
    value = (value * 9301 + 49297) % 233280
    return value / 233280
  }
}

export default function ScanBackground({ opacity = 0.5, count = 26, seed = 7 }) {
  const { nodes, lines } = useMemo(() => {
    const rand = seededRandom(seed)
    const pts = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: rand() * 100,
      y: rand() * 100,
      r: 1.2 + rand() * 1.8,
    }))
    const segs = []
    pts.forEach((p, i) => {
      const next = pts[(i + 1) % pts.length]
      const dist = Math.hypot(p.x - next.x, p.y - next.y)
      if (dist < 40) segs.push([p, next])
      const j = (i + 5) % pts.length
      const p2 = pts[j]
      const d2 = Math.hypot(p.x - p2.x, p.y - p2.y)
      if (d2 < 28) segs.push([p, p2])
    })
    return { nodes: pts, lines: segs }
  }, [count, seed])

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity }}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {lines.map(([a, b], i) => (
        <line
          key={i}
          x1={a.x}
          y1={a.y}
          x2={b.x}
          y2={b.y}
          stroke="var(--text-muted)"
          strokeWidth="0.08"
        />
      ))}
      {nodes.map((n) => (
        <circle key={n.id} cx={n.x} cy={n.y} r={n.r * 0.25} fill="var(--accent-primary)" />
      ))}
    </svg>
  )
}
