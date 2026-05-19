import { WorkExperience } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

function formatDate(dateString: string): string {
  if (!dateString) return ''
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
  } catch {
    return dateString
  }
}

export default function ExperienceCard({ experience }: { experience: WorkExperience }) {
  const jobTitle = getMetafieldValue(experience.metadata?.job_title) || experience.title
  const company = getMetafieldValue(experience.metadata?.company)
  const location = getMetafieldValue(experience.metadata?.location)
  const description = getMetafieldValue(experience.metadata?.description)
  const startDate = getMetafieldValue(experience.metadata?.start_date)
  const endDate = getMetafieldValue(experience.metadata?.end_date)
  const isCurrent = experience.metadata?.current
  const logo = experience.metadata?.company_logo
  
  return (
    <article className="relative pl-8 pb-10 border-l-2 border-white/10 last:border-l-0 last:pb-0">
      <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 ring-4 ring-[#0a0a0a]" />
      <div className="bg-white/5 border border-white/10 rounded-xl p-6 card-hover">
        <div className="flex items-start gap-4 mb-4">
          {logo && (
            <img
              src={`${logo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
              alt={company}
              className="w-14 h-14 rounded-lg object-cover bg-white/10"
            />
          )}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white">{jobTitle}</h3>
            {company && (
              <p className="text-accent-light font-medium">{company}</p>
            )}
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400 mt-1">
              {(startDate || endDate) && (
                <span>
                  {formatDate(startDate)} - {isCurrent ? 'Present' : formatDate(endDate)}
                </span>
              )}
              {location && <span>📍 {location}</span>}
            </div>
          </div>
        </div>
        {description && (
          <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
            {description}
          </p>
        )}
      </div>
    </article>
  )
}