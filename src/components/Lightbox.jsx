import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TbX } from 'react-icons/tb'
import ScanArt from './ScanArt'

export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [item, onClose])

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-xl w-full rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card-bg)]"
          >
            <div className="relative">
              <ScanArt variant={item.image} className="w-full h-64 object-cover" />
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[var(--bg-primary)]/80 border border-[var(--border)] flex items-center justify-center text-[var(--text-primary)]"
              >
                <TbX size={18} />
              </button>
            </div>
            <div className="p-6">
              <h3 className="font-[var(--font-display)] text-xl font-semibold text-[var(--text-primary)] mb-1">
                {item.title}
              </h3>
              <p className="tag-mono text-xs text-[var(--accent-primary)] mb-3">{item.issuer}</p>
              <p className="text-sm text-[var(--text-secondary)]">{item.detail}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
