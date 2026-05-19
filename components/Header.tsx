import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg bg-black/50 border-b border-white/10">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold gradient-text">
            Portfolio
          </Link>
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/skills" className="text-gray-300 hover:text-white transition-colors">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/experience" className="text-gray-300 hover:text-white transition-colors">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}