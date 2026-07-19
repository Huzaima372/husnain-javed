import { Helmet } from 'react-helmet-async'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { TbDownload } from 'react-icons/tb'
import profile from '../data/profile.json'

export default function Resume() {
  return (
    <>
      <Helmet>
        <title>Resume — {profile.fullName}</title>
        <meta name="description" content="Download or view Husnain Javed's resume." />
      </Helmet>

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading eyebrow="Resume" title="My resume" subtitle="View it below, or download a copy for your records." />

          <div className="flex justify-center mb-8">
            <Button href={profile.resumeFile} download variant="primary">
              <TbDownload size={18} /> Download PDF
            </Button>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card-bg)] card-shadow">
            <iframe
              src={profile.resumeFile}
              title="Husnain Javed Resume"
              className="w-full"
              style={{ height: '80vh', border: 'none' }}
            />
          </div>
        </div>
      </section>
    </>
  )
}
