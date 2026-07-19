import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { TbArrowLeft } from 'react-icons/tb'
import PhotoScan from '../components/PhotoScan'
import ProjectCard from '../components/ProjectCard'
import Button from '../components/Button'
import projects from '../data/projects.json'
import profile from '../data/profile.json'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/projects" replace />

  const related = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3)

  return (
    <>
      <Helmet>
        <title>{project.title} — {profile.fullName}</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-32 pb-24 px-6"
      >
        <div className="max-w-3xl mx-auto">
          <Link
            to="/projects"
            className="tag-mono text-xs uppercase text-[var(--text-secondary)] hover:text-[var(--accent-primary)] inline-flex items-center gap-2 mb-8"
          >
            <TbArrowLeft size={16} /> Back to projects
          </Link>

          <div className="rounded-2xl overflow-hidden border border-[var(--border)] mb-8 h-64 md:h-80">
            <PhotoScan src={project.image} variant={project.variant} alt={project.title} className="w-full h-full" />
          </div>
          {project.note && (
            <span className="tag-mono text-[11px] uppercase text-[var(--accent-primary)] block mb-2">
              // {project.note}
            </span>
          )}

          <span className="tag-mono text-xs uppercase text-[var(--accent-secondary)]">{project.category}</span>
          <h1 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-2 mb-4">
            {project.title}
          </h1>
          <p className="text-[var(--text-secondary)] text-lg mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map((t) => (
              <span
                key={t}
                className="tag-mono text-[11px] uppercase px-3 py-1.5 rounded-md bg-[var(--surface)] border border-[var(--border)] text-[var(--text-muted)]"
              >
                {t}
              </span>
            ))}
            <span className="tag-mono text-[11px] uppercase px-3 py-1.5 rounded-md bg-[var(--surface)] border border-[var(--border)] text-[var(--text-muted)]">
              {project.year}
            </span>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6 mb-14">
            <h2 className="font-[var(--font-display)] text-lg font-semibold text-[var(--text-primary)] mb-4">
              What it does
            </h2>
            <ul className="flex flex-col gap-3">
              {project.bullets.map((b, i) => (
                <li key={i} className="text-sm text-[var(--text-secondary)] flex gap-2">
                  <span className="text-[var(--accent-primary)]">▹</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {related.length > 0 && (
            <div>
              <h2 className="font-[var(--font-display)] text-lg font-semibold text-[var(--text-primary)] mb-6">
                Related projects
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {related.map((p, i) => (
                  <ProjectCard key={p.slug} project={p} index={i} />
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-center mt-14">
            <Button to="/contact" variant="primary">Discuss a project like this</Button>
          </div>
        </div>
      </motion.section>
    </>
  )
}
