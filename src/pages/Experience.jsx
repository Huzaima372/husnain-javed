import { Helmet } from 'react-helmet-async'
import SectionHeading from '../components/SectionHeading'
import TimelineItem from '../components/TimelineItem'
import experience from '../data/experience.json'
import profile from '../data/profile.json'

export default function Experience() {
  return (
    <>
      <Helmet>
        <title>Experience — {profile.fullName}</title>
        <meta name="description" content="Professional and internship experience." />
      </Helmet>

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            eyebrow="Experience"
            title="Where I've worked"
            subtitle="A short timeline so far — with more to come."
          />
          <div className="mt-4">
            {experience.map((item, i) => (
              <TimelineItem key={item.role} item={item} index={i} isLast={i === experience.length - 1} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
