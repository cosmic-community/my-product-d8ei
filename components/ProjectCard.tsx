import { Project } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ProjectCard({ project }: { project: Project }) {
  const name = getMetafieldValue(project.metadata?.project_name) || project.title
  const summary = getMetafieldValue(project.metadata?.short_summary)
  const techStack = getMetafieldValue(project.metadata?.tech_stack)
  const liveUrl = getMetafieldValue(project.metadata?.live_url)
  const githubUrl = getMetafieldValue(project.metadata?.github_url)
  const screenshot = project.metadata?.screenshot
  const featured = project.metadata?.featured
  
  const techs = techStack.split(',').map(t => t.trim()).filter(Boolean)
  
  return (
    <article className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden card-hover">
      {screenshot && (
        <div className="aspect-video overflow-hidden bg-black/20">
          <img
            src={`${screenshot.imgix_url}?w=1200&h=675&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          {featured && (
            <span className="text-xs px-2 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-medium">
              Featured
            </span>
          )}
        </div>
        {summary && (
          <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
            {summary}
          </p>
        )}
        {techs.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {techs.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="flex gap-3 pt-4 border-t border-white/10">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent-light hover:text-white transition-colors flex items-center gap-1"
            >
              Live Demo →
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </article>
  )
}