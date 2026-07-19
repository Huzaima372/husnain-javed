import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PhotoScan from './PhotoScan'

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group block rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card-bg)] card-shadow transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-primary)]/60"
      >
        <div className="relative overflow-hidden h-44">
          <PhotoScan src={project.image} variant={project.variant} alt={project.title} className="w-full h-full" />
          {project.featured && (
            <span className="tag-mono absolute top-3 right-3 text-[10px] uppercase bg-[var(--bg-primary)]/80 border border-[var(--accent-primary)]/50 text-[var(--accent-primary)] px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
        <div className="p-5 flex flex-col gap-3">
          <span className="tag-mono text-[11px] uppercase text-[var(--accent-secondary)]">{project.category}</span>
          <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-[var(--text-secondary)]">{project.description}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((t) => (
              <span
                key={t}
                className="tag-mono text-[10px] uppercase px-2 py-1 rounded-md bg-[var(--surface)] border border-[var(--border)] text-[var(--text-muted)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
