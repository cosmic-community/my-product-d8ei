import Link from 'next/link'
import { Profile } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function Hero({ profile }: { profile: Profile | null }) {
  if (!profile) {
    return (
      <section className="py-24">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Developer Portfolio
          </h1>
          <p className="text-gray-400 text-lg">Welcome to my portfolio</p>
        </div>
      </section>
    )
  }
  
  const fullName = getMetafieldValue(profile.metadata?.full_name) || profile.title
  const jobTitle = getMetafieldValue(profile.metadata?.job_title)
  const bio = getMetafieldValue(profile.metadata?.bio)
  const photo = profile.metadata?.profile_photo
  
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20" />
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <p className="text-accent-light mb-3 text-lg font-medium">Hi, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              {fullName}
            </h1>
            {jobTitle && (
              <h2 className="text-2xl md:text-3xl gradient-text font-semibold mb-6">
                {jobTitle}
              </h2>
            )}
            {bio && (
              <p className="text-gray-300 text-lg leading-relaxed mb-8 line-clamp-4">
                {bio}
              </p>
            )}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                View Projects
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                About Me
              </Link>
            </div>
          </div>
          {photo && (
            <div className="flex justify-center md:justify-end animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full blur-3xl opacity-30" />
                <img
                  src={`${photo.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
                  alt={fullName}
                  className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-white/10"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}