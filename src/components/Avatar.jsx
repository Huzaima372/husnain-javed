import { motion } from 'framer-motion'
import profile from '../data/profile.json'

export default function Avatar({ size = 180 }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className="relative inline-flex"
      style={{ width: size, height: size }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'var(--accent-primary)',
          opacity: 0.25,
          filter: 'blur(3rem)',
        }}
      />
      <svg
        className="absolute -inset-3"
        viewBox="0 0 100 100"
        style={{ width: size + 24, height: size + 24 }}
      >
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="var(--accent-secondary)"
          strokeWidth="0.6"
          strokeDasharray="3 4"
          opacity="0.6"
        />
      </svg>
      <div
        className="relative rounded-full overflow-hidden bbox"
        style={{
          width: size,
          height: size,
          border: '1px solid var(--border)',
        }}
      >
        <img
          src={profile.photo}
          alt={profile.fullName}
          className="w-full h-full object-cover"
        />
        <span className="tag-mono absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-[var(--accent-primary)] bg-[var(--bg-primary)]/70 px-2 py-0.5 rounded-full">
          scan · 99.1%
        </span>
      </div>
    </motion.div>
  )
}
