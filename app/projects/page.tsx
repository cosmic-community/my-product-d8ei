import ProjectCard from '@/components/ProjectCard'
import SectionHeader from '@/components/SectionHeader'
import { getProjects } from '@/lib/cosmic'

export const metadata = {
  title: 'Projects | Developer Portfolio',
}

export default async function ProjectsPage() {
  const projects = await getProjects()
  
  return (
    <section className="py-20">
      <div className="container-custom">
        <SectionHeader
          title="All Projects"
          subtitle="Explore my complete portfolio of work"
        />
        {projects.length === 0 ? (
          <p className="text-center text-gray-400">No projects available yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}