import SkillCard from '@/components/SkillCard'
import SectionHeader from '@/components/SectionHeader'
import { getSkills, getMetafieldValue } from '@/lib/cosmic'
import { Skill } from '@/types'

export const metadata = {
  title: 'Skills | Developer Portfolio',
}

export default async function SkillsPage() {
  const skills = await getSkills()
  
  const skillsByCategory: Record<string, Skill[]> = {}
  skills.forEach((skill) => {
    const category = getMetafieldValue(skill.metadata?.category) || 'Other'
    if (!skillsByCategory[category]) {
      skillsByCategory[category] = []
    }
    skillsByCategory[category].push(skill)
  })
  
  const categories = Object.keys(skillsByCategory).sort()
  
  return (
    <section className="py-20">
      <div className="container-custom">
        <SectionHeader
          title="Skills & Expertise"
          subtitle="My technical toolkit and proficiency levels"
        />
        {skills.length === 0 ? (
          <p className="text-center text-gray-400">No skills available yet.</p>
        ) : (
          <div className="space-y-12">
            {categories.map((category) => {
              const categorySkills = skillsByCategory[category]
              if (!categorySkills || categorySkills.length === 0) return null
              
              return (
                <div key={category}>
                  <h3 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10">
                    {category}
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categorySkills.map((skill) => (
                      <SkillCard key={skill.id} skill={skill} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}