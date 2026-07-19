import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold font-[var(--font-display)] tracking-wide transition-all duration-300 min-h-[44px]'

const variants = {
  primary:
    'bg-[var(--accent-cta)] text-[var(--bg-primary)] hover:bg-[var(--accent-cta-hover)] hover:-translate-y-0.5 shadow-[0_10px_30px_-10px_rgba(94,234,212,0.5)]',
  secondary:
    'bg-transparent border border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10',
  ghost:
    'bg-[var(--surface)] border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent-primary)]',
}

export default function Button({ variant = 'primary', to, href, onClick, children, className = '', download, type = 'button' }) {
  const cls = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} download={download} target={download ? undefined : '_blank'} rel="noreferrer">
        {children}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
