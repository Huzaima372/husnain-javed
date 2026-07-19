import { Link } from 'react-router-dom'
import * as TbIcons from 'react-icons/tb'
import Logo from './Logo'
import profile from '../data/profile.json'
import socials from '../data/socials.json'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--divider)] bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center text-center gap-5">
        <Logo className="w-10 h-10" />
        <p className="text-[var(--text-secondary)] text-sm max-w-sm">{profile.tagline}</p>

        <ul className="flex flex-wrap justify-center gap-6 tag-mono text-xs uppercase text-[var(--text-secondary)]">
          <li><Link to="/#about" className="hover:text-[var(--accent-primary)]">About</Link></li>
          <li><Link to="/experience" className="hover:text-[var(--accent-primary)]">Experience</Link></li>
          <li><Link to="/projects" className="hover:text-[var(--accent-primary)]">Projects</Link></li>
          <li><Link to="/resume" className="hover:text-[var(--accent-primary)]">Resume</Link></li>
          <li><Link to="/contact" className="hover:text-[var(--accent-primary)]">Contact</Link></li>
        </ul>

        <div className="flex gap-3">
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

        <p className="tag-mono text-[11px] text-[var(--text-muted)]">
          © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
