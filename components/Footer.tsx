export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-16">
      <div className="container-custom">
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Developer Portfolio. Built with Next.js & Cosmic.
        </p>
      </div>
    </footer>
  )
}