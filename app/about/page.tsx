import SectionHeader from '@/components/SectionHeader'
import { getProfile, getMetafieldValue } from '@/lib/cosmic'

export const metadata = {
  title: 'About | Developer Portfolio',
}

export default async function AboutPage() {
  const profile = await getProfile()
  
  if (!profile) {
    return (
      <section className="py-20">
        <div className="container-custom text-center">
          <p className="text-gray-400">Profile information not available.</p>
        </div>
      </section>
    )
  }
  
  const fullName = getMetafieldValue(profile.metadata?.full_name) || profile.title
  const jobTitle = getMetafieldValue(profile.metadata?.job_title)
  const bio = getMetafieldValue(profile.metadata?.bio)
  const email = getMetafieldValue(profile.metadata?.email)
  const location = getMetafieldValue(profile.metadata?.location)
  const githubUrl = getMetafieldValue(profile.metadata?.github_url)
  const linkedinUrl = getMetafieldValue(profile.metadata?.linkedin_url)
  const twitterUrl = getMetafieldValue(profile.metadata?.twitter_url)
  const photo = profile.metadata?.profile_photo
  const resume = profile.metadata?.resume
  
  return (
    <section className="py-20">
      <div className="container-custom">
        <SectionHeader title="About Me" subtitle="Get to know me better" />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {photo && (
              <div className="md:col-span-1 flex justify-center">
                <img
                  src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
                  alt={fullName}
                  className="w-64 h-64 rounded-2xl object-cover border-4 border-white/10"
                />
              </div>
            )}
            <div className={photo ? "md:col-span-2" : "md:col-span-3"}>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {fullName}
              </h1>
              {jobTitle && (
                <p className="text-xl gradient-text font-semibold mb-4">{jobTitle}</p>
              )}
              {location && (
                <p className="text-gray-400 mb-6 flex items-center gap-2">
                  📍 {location}
                </p>
              )}
              {bio && (
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {bio}
                </p>
              )}
            </div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <p className="text-white">{email}</p>
                  </div>
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <span className="text-2xl">🐙</span>
                  <div>
                    <p className="text-xs text-gray-400">GitHub</p>
                    <p className="text-white">View Profile</p>
                  </div>
                </a>
              )}
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <span className="text-2xl">💼</span>
                  <div>
                    <p className="text-xs text-gray-400">LinkedIn</p>
                    <p className="text-white">Connect</p>
                  </div>
                </a>
              )}
              {twitterUrl && (
                <a
                  href={twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <span className="text-2xl">🐦</span>
                  <div>
                    <p className="text-xs text-gray-400">Twitter</p>
                    <p className="text-white">Follow</p>
                  </div>
                </a>
              )}
            </div>
            
            {resume && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <a
                  href={resume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  📄 Download Resume
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}