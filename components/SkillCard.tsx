import { Skill } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function SkillCard({ skill }: { skill: Skill }) {
  const name = getMetafieldValue(skill.metadata?.skill_name) || skill.title
  const proficiency = getMetafieldValue(skill.metadata?.proficiency)
  const years = skill.metadata?.years_experience
  
  const proficiencyLevel = (() => {
    const p = proficiency.toLowerCase()
    if (p.includes('expert')) return 100
    if (p.includes('advanced')) return 80
    if (p.includes('intermediate')) return 60
    if (p.includes('beginner')) return 40
    return 70
  })()
  
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 card-hover">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        {years !== undefined && years !== null && (
          <span className="text-xs text-gray-400">
            {years} {years === 1 ? 'year' : 'years'}
          </span>
        )}
      </div>
      {proficiency && (
        <>
          <div className="flex justify-between text-xs text-gray-400 mb-2">
            <span>{proficiency}</span>
            <span>{proficiencyLevel}%</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
              style={{ width: `${proficiencyLevel}%` }}
            />
          </div>
        </>
      )}
    </div>
  )
}