import { motion } from 'framer-motion'
import { TbBriefcase } from 'react-icons/tb'

export default function TimelineItem({ item, index = 0, isLast = false }) {
  return (
    <div className="relative pl-14 md:pl-16">
      {!isLast && (
        <span className="absolute left-[19px] md:left-[23px] top-10 bottom-[-2.5rem] w-px bg-[var(--divider)]" />
      )}
      <span className="absolute left-0 md:left-1 top-0 w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--accent-primary)]/60 flex items-center justify-center text-[var(--accent-primary)]">
        <TbBriefcase size={18} />
      </span>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6 mb-10 card-shadow"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
          <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--text-primary)]">
            {item.role}
          </h3>
          <span className="tag-mono text-xs text-[var(--accent-primary)]">
            {item.start} — {item.end}
          </span>
        </div>
        <p className="text-sm text-[var(--text-secondary)] mb-4">
          {item.company} · {item.location}
        </p>
        <ul className="flex flex-col gap-2">
          {item.bullets.map((b, i) => (
            <li key={i} className="text-sm text-[var(--text-secondary)] flex gap-2">
              <span className="text-[var(--accent-secondary)]">▹</span>
              {b}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}
