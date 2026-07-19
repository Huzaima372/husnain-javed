import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import * as TbIcons from 'react-icons/tb'
import { TbMapPin, TbMail, TbPhone, TbSend } from 'react-icons/tb'
import Button from '../components/Button'
import profile from '../data/profile.json'
import socials from '../data/socials.json'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <Helmet>
        <title>Contact — {profile.fullName}</title>
        <meta name="description" content="Get in touch with Husnain Javed." />
      </Helmet>

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8 text-left"
          >
            <div>
              <span className="tag-mono text-xs uppercase text-[var(--accent-primary)]">// Get in touch</span>
              <h1 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-2 mb-3">
                Let's build something
              </h1>
              <p className="text-[var(--text-secondary)]">
                Open to internships, freelance ML/CV work, and collaboration. Reach out any time.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--accent-primary)]">
                  <TbMapPin size={18} />
                </span>
                <span className="text-sm text-[var(--text-secondary)]">{profile.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--accent-primary)]">
                  <TbMail size={18} />
                </span>
                <a href={`mailto:${profile.email}`} className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)]">
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--accent-primary)]">
                  <TbPhone size={18} />
                </span>
                <a href="tel:+923226869904" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)]">
                  {profile.phone}
                </a>
              </div>
            </div>

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
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6 md:p-8 card-shadow"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="tag-mono text-xs uppercase text-[var(--text-muted)]">Name</label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="min-h-[44px] rounded-lg bg-[var(--surface)] border border-[var(--border)] px-4 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="tag-mono text-xs uppercase text-[var(--text-muted)]">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="min-h-[44px] rounded-lg bg-[var(--surface)] border border-[var(--border)] px-4 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="tag-mono text-xs uppercase text-[var(--text-muted)]">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="rounded-lg bg-[var(--surface)] border border-[var(--border)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] resize-none"
              />
            </div>

            <Button type="submit" variant="primary" className="mt-2">
              <TbSend size={16} /> Send Message
            </Button>

            {sent && (
              <p className="tag-mono text-xs text-[var(--accent-primary)] text-center">
                Opening your email client with this message pre-filled.
              </p>
            )}
          </motion.form>
        </div>
      </section>
    </>
  )
}
