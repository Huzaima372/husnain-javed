import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${alignment} mb-12 gap-3`}
    >
      {eyebrow && (
        <span className="tag-mono text-xs uppercase text-[var(--accent-primary)]">
          // {eyebrow}
        </span>
      )}
      <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--text-secondary)] max-w-xl text-base md:text-lg">{subtitle}</p>
      )}
    </motion.div>
  )
}
