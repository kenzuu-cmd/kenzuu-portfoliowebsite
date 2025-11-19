import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-4">
            Project Not Found
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
            The project you're looking for doesn't exist or may have been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/work"
            className="inline-flex items-center justify-center px-6 py-3 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors"
          >
            View All Projects
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
          >
            Go Home
          </Link>
        </div>

        {/* Decorative element */}
        <div className="mt-12 text-6xl opacity-20">🎨</div>
      </div>
    </main>
  )
}
