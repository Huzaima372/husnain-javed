// Real project photography with the site's signature detection-box overlay
// on top — keeps the "diagnostic scan" identity while using actual imagery.

const confByVariant = {
  'dental-oral': '94.2% CONF',
  'leaf-disease': '91.6% CONF',
  'kidney-data': '88.9% CONF',
  'heart-data': '92.4% CONF',
  'diabetes-cancer': '90.1% CONF',
  'face-mask': '96.3% CONF',
  'spam-nlp': '87.5% CONF',
  'certificate': '99.1% VERIFIED',
}

export default function PhotoScan({ src, variant, alt = '', className = '' }) {
  const label = confByVariant[variant] || 'SCAN'

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/70 via-transparent to-transparent" />
      <div className="absolute inset-3 border border-dashed pointer-events-none" style={{ borderColor: 'var(--accent-highlight)', opacity: 0.7 }} />
      {/* corner brackets */}
      <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 pointer-events-none" style={{ borderColor: 'var(--accent-primary)' }} />
      <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 pointer-events-none" style={{ borderColor: 'var(--accent-primary)' }} />
      <span className="tag-mono absolute top-2.5 left-7 text-[10px]" style={{ color: 'var(--accent-highlight)' }}>
        {label}
      </span>
    </div>
  )
}
