import ExperienceCard from '@/components/ExperienceCard'
import SectionHeader from '@/components/SectionHeader'
import { getWorkExperience } from '@/lib/cosmic'

export const metadata = {
  title: 'Experience | Developer Portfolio',
}

export default async function ExperiencePage() {
  const experiences = await getWorkExperience()
  
  return (
    <section className="py-20">
      <div className="container-custom">
        <SectionHeader
          title="Work Experience"
          subtitle="My professional journey"
        />
        {experiences.length === 0 ? (
          <p className="text-center text-gray-400">No work experience available yet.</p>
        ) : (
          <div className="max-w-3xl mx-auto">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}