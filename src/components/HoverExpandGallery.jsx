import { useState } from 'react'
import { TbEye } from 'react-icons/tb'
import ScanArt from './ScanArt'
import Lightbox from './Lightbox'

function chunk(arr, size) {
  const out = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

export default function HoverExpandGallery({ items }) {
  const [active, setActive] = useState(null)
  const rows = chunk(items, 3)

  return (
    <>
      <div className="flex flex-col gap-3">
        {rows.map((row, ri) => (
          <div key={ri} className="flex gap-3 h-56 md:h-64">
            {row.map((item) => (
              <button
                key={item.title}
                onClick={() => setActive(item)}
                className="group relative flex-1 hover:flex-[2.4] transition-[flex-grow] duration-500 ease-in-out rounded-xl overflow-hidden border border-[var(--border)] cursor-pointer"
                style={{ transitionProperty: 'flex-grow' }}
              >
                <ScanArt variant={item.image} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <TbEye
                  size={26}
                  className="absolute inset-0 m-auto text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                  <p className="font-[var(--font-display)] text-sm font-semibold text-white">{item.title}</p>
                  <p className="tag-mono text-[10px] uppercase text-[var(--accent-primary)]">{item.issuer}</p>
                </div>
              </button>
            ))}
          </div>
        ))}
      </div>
      <Lightbox item={active} onClose={() => setActive(null)} />
    </>
  )
}
