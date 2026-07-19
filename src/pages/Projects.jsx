import { useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects.json'
import profile from '../data/profile.json'

export default function Projects() {
  const categories = useMemo(
    () => ['All', ...new Set(projects.map((p) => p.category))],
    []
  )
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <Helmet>
        <title>Projects — {profile.fullName}</title>
        <meta name="description" content="Machine learning and computer vision projects by Husnain Javed." />
      </Helmet>

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Projects"
            title="All projects"
            subtitle="Prediction and detection systems built with Python, OpenCV, and Keras."
          />

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`tag-mono text-[11px] uppercase px-4 py-2 rounded-full border transition-colors min-h-[38px] ${
                  active === c
                    ? 'bg-[var(--accent-primary)] text-[var(--bg-primary)] border-[var(--accent-primary)]'
                    : 'border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
