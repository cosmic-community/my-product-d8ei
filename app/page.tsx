import Link from 'next/link'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import SkillCard from '@/components/SkillCard'
import SectionHeader from '@/components/SectionHeader'
import { getProfile, getFeaturedProjects, getProjects, getSkills } from '@/lib/cosmic'

export default async function HomePage() {
  const [profile, featured, allProjects, skills] = await Promise.all([
    getProfile(),
    getFeaturedProjects(),
    getProjects(),
    getSkills(),
  ])
  
  const displayProjects = featured.length > 0 ? featured.slice(0, 3) : allProjects.slice(0, 3)
  const topSkills = skills.slice(0, 6)
  
  return (
    <>
      <Hero profile={profile} />
      
      {displayProjects.length > 0 && (
        <section className="py-20">
          <div className="container-custom">
            <SectionHeader
              title="Featured Projects"
              subtitle="A selection of my recent work"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/projects"
                className="inline-block px-6 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      )}
      
      {topSkills.length > 0 && (
        <section className="py-20 bg-white/[0.02]">
          <div className="container-custom">
            <SectionHeader
              title="Skills & Expertise"
              subtitle="Technologies I work with"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {topSkills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/skills"
                className="inline-block px-6 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                View All Skills
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}