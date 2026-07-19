import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import * as TbIcons from 'react-icons/tb'
import { TbChevronDown, TbSchool, TbTargetArrow } from 'react-icons/tb'

import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import ScanBackground from '../components/ScanBackground'
import Avatar from '../components/Avatar'
import SkillCard from '../components/SkillCard'
import ProjectCard from '../components/ProjectCard'
import HoverExpandGallery from '../components/HoverExpandGallery'

import profile from '../data/profile.json'
import socials from '../data/socials.json'
import skills from '../data/skills.json'
import projects from '../data/projects.json'
import certifications from '../data/certifications.json'

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <>
      <Helmet>
        <title>{profile.fullName} — Portfolio</title>
        <meta name="description" content={profile.summary} />
      </Helmet>

      {/* HERO */}
      <section
        className="relative overflow-hidden pt-32 pb-24 px-6"
        style={{ background: 'var(--hero-gradient)' }}
      >
        <div className="scan-grid absolute inset-0" />
        <ScanBackground opacity={0.5} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative max-w-3xl mx-auto flex flex-col items-center text-center gap-6"
        >
          <Avatar />

          <span className="tag-mono text-xs uppercase text-[var(--accent-primary)]">
            // Welcome to my portfolio
          </span>

          <h1 className="font-[var(--font-display)] text-4xl md:text-6xl font-bold text-[var(--text-primary)]">
            Hi, I'm {profile.firstName}
          </h1>

          <div className="font-[var(--font-display)] text-xl md:text-2xl font-semibold gradient-text min-h-[2rem]">
            <TypeAnimation
              sequence={profile.roles.flatMap((r) => [r, 2000])}
              wrapper="span"
              speed={{ type: 'keyStrokeDelayInMs', value: 45 }}
              repeat={Infinity}
            />
          </div>

          <p className="text-[var(--text-secondary)] max-w-md text-base md:text-lg">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Button href={profile.resumeFile} download variant="primary">
              Download Resume
            </Button>
            <Button to="/projects" variant="secondary">
              View Projects
            </Button>
            <Button to="/contact" variant="ghost">
              Contact Me
            </Button>
          </div>

          <div className="flex gap-3 mt-2">
            {socials.map((s) => {
              const Icon = TbIcons[s.icon] || TbIcons.TbLink
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="w-11 h-11 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all hover:scale-110 hover:-translate-y-0.5"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="relative flex justify-center mt-16 text-[var(--text-muted)]"
        >
          <TbChevronDown size={24} />
        </motion.div>
      </section>

      {/* STAT STRIP */}
      <section className="border-y border-[var(--divider)] bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--divider)]">
          {profile.stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center py-10 px-4 text-center">
              <span className="font-[var(--font-display)] text-3xl md:text-4xl font-bold gradient-text">
                {s.value}
              </span>
              <span className="tag-mono text-[11px] uppercase text-[var(--text-muted)] mt-2">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-nav py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading eyebrow="About" title="Who I am" />

          <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto mb-14">
            <p className="text-[var(--text-secondary)]">{profile.summary}</p>
            <p className="text-[var(--text-secondary)]">{profile.focusNote}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-14">
            {profile.education.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-6 flex gap-4"
              >
                <span className="w-10 h-10 shrink-0 rounded-lg bg-[var(--surface)] flex items-center justify-center text-[var(--accent-primary)]">
                  <TbSchool size={18} />
                </span>
                <div>
                  <h3 className="font-[var(--font-display)] font-semibold text-[var(--text-primary)]">
                    {e.degree}
                  </h3>
                  <p className="text-sm text-[var(--accent-secondary)] tag-mono mt-1">{e.institution}</p>
                  <p className="text-sm text-[var(--text-secondary)] mt-2">{e.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-14">
            {profile.focusAreas.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-6"
              >
                <span className="w-10 h-10 rounded-lg bg-[var(--surface)] flex items-center justify-center text-[var(--accent-secondary)] mb-4">
                  <TbTargetArrow size={18} />
                </span>
                <h3 className="font-[var(--font-display)] font-semibold text-[var(--text-primary)] mb-1">
                  {f.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{f.detail}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {profile.languages.map((l) => (
              <span
                key={l.name}
                className="tag-mono text-xs uppercase px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)]"
              >
                {l.name} <span className="text-[var(--accent-primary)]">· {l.level}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-nav py-24 px-6 bg-[var(--bg-secondary)] border-y border-[var(--divider)]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Skills" title="What I work with" />
          <div className="flex flex-col gap-12">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="tag-mono text-center text-xs uppercase text-[var(--accent-secondary)] mb-6">
                  {group.category}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.items.map((skill, i) => (
                    <SkillCard key={skill.name} skill={skill} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="scroll-mt-nav relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 scan-grid opacity-40" />
        <div className="relative max-w-5xl mx-auto">
          <SectionHeading eyebrow="Certifications" title="Verified experience" />
          <div className="flex flex-col gap-14">
            {certifications.map((group) => (
              <div key={group.group}>
                <h3 className="tag-mono text-center text-xs uppercase text-[var(--accent-primary)] mb-6">
                  {group.group}
                </h3>
                <HoverExpandGallery items={group.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-24 px-6 bg-[var(--bg-secondary)] border-y border-[var(--divider)]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Projects" title="Featured work" subtitle="A few of the detection and prediction systems I've shipped." />
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {featured.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
          <div className="flex justify-center">
            <Button to="/projects" variant="secondary">View all projects</Button>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-24 px-6">
        <div className="max-w-xl mx-auto flex flex-col items-center text-center gap-4">
          <span className="tag-mono text-xs uppercase text-[var(--accent-primary)]">// Let's talk</span>
          <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            Have a project in mind?
          </h2>
          <p className="text-[var(--text-secondary)]">
            I'm looking for internship and collaboration opportunities in machine learning and computer vision.
          </p>
          <Button to="/contact" variant="primary" className="mt-2">Contact Me</Button>
        </div>
      </section>
    </>
  )
}
