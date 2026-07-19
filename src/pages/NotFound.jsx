import { Helmet } from 'react-helmet-async'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 — Page not found</title>
      </Helmet>
      <section className="pt-40 pb-32 px-6 flex flex-col items-center text-center gap-5 min-h-[70vh] justify-center">
        <span className="tag-mono text-xs uppercase text-[var(--accent-primary)]">// 404</span>
        <h1 className="font-[var(--font-display)] text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
          No detection here
        </h1>
        <p className="text-[var(--text-secondary)] max-w-sm">
          The page you're looking for doesn't exist, or has moved somewhere the model can't find it.
        </p>
        <Button to="/" variant="primary" className="mt-2">Back to home</Button>
      </section>
    </>
  )
}
