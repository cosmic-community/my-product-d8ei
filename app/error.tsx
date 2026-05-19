'use client'

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-bold text-white mb-4">Something went wrong</h2>
      <p className="text-gray-400 mb-6">An error occurred while loading this page.</p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
      >
        Try again
      </button>
    </div>
  )
}