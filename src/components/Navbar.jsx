import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { TbMenu2, TbX } from 'react-icons/tb'
import Logo from './Logo'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  { label: 'Skills', to: '/#skills' },
  { label: 'Certifications', to: '/#certifications' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-[var(--bg-primary)]/80 border-b border-[var(--border)]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 md:px-8 h-16">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Logo className="w-9 h-9" />
        </Link>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.label}>
              {l.to.startsWith('/#') ? (
                <a
                  href={l.to}
                  className="tag-mono text-xs uppercase text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  {l.label}
                </a>
              ) : (
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `tag-mono text-xs uppercase transition-colors ${
                      isActive ? 'text-[var(--accent-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--accent-primary)]'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-[var(--text-primary)] p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <TbX size={22} /> : <TbMenu2 size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden flex flex-col bg-[var(--bg-secondary)] border-b border-[var(--border)] overflow-hidden"
          >
            {links.map((l, i) => (
              <motion.li
                key={l.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                className="border-b border-[var(--divider)] last:border-0"
              >
                {l.to.startsWith('/#') ? (
                  <a
                    href={l.to}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-4 tag-mono text-xs uppercase text-[var(--text-secondary)]"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-4 tag-mono text-xs uppercase text-[var(--text-secondary)]"
                  >
                    {l.label}
                  </Link>
                )}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
