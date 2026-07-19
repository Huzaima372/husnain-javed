import { motion } from 'framer-motion'
import * as TbIcons from 'react-icons/tb'

export default function SkillCard({ skill, index = 0 }) {
  const Icon = TbIcons[skill.icon] || TbIcons.TbCode

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
      className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-5 flex flex-col gap-3"
    >
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-[var(--surface)] flex items-center justify-center text-[var(--accent-primary)]">
          <Icon size={18} />
        </div>
        <span className="text-sm font-medium text-[var(--text-primary)]">{skill.name}</span>
      </div>
      <div className="h-1.5 rounded-full bg-[var(--surface)] overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-highlight))' }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: (index % 4) * 0.08, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}
