# Husnain Javed — Portfolio

A React + Vite + Tailwind CSS v4 portfolio built from Husnain's resume. Visual theme: a
"diagnostic scan / object-detection" motif (bounding-box corner brackets, confidence-score
labels, scan-line grids) that echoes his computer-vision and disease-prediction work.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # to test the production build locally
```

The build output goes to `dist/` — upload that folder to any static host (Vercel, Netlify,
GitHub Pages, etc.).

## Editing content

All personal content lives in `src/data/*.json` — no need to touch components to update text:

- `profile.json` — name, tagline, roles, summary, stats, education, languages
- `skills.json` — skills grouped by category, with proficiency levels
- `projects.json` — project list (edit/add/remove freely — the grid and detail pages read from this)
- `experience.json` — work/internship timeline
- `certifications.json` — certifications grouped into galleries
- `socials.json` — social/contact links

## Resume file

`public/resume/Husnain_Javed_ATS_Resume.pdf` is served at `/resume/...` and is what the
"Download Resume" button and the `/resume` page embed. Replace this file (keep the same name,
or update `resumeFile` in `profile.json`) to update the resume shown on the site.

## Notes

- Project/certificate thumbnails are custom SVG illustrations (`ScanArt.jsx`) rather than stock
  photography, keeping everything on-theme and dependency-free.
- Contact form has no backend — submitting it opens the visitor's email client with the message
  pre-filled to husnain.uon@gmail.com. Swap in a real form backend (Formspree, EmailJS, etc.) if
  you want submissions to land somewhere without opening mail.
