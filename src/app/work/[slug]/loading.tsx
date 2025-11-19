export default function Loading() {
  return (
    <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Skeleton */}
        <header className="text-center mb-12">
          <div className="h-12 bg-neutral-200 dark:bg-neutral-700 rounded-lg mb-4 mx-auto max-w-md animate-pulse" />

          {/* Tags Skeleton */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-6 w-16 bg-neutral-200 dark:bg-neutral-700 rounded-full animate-pulse"
              />
            ))}
          </div>

          {/* Action Links Skeleton */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="h-12 w-36 bg-neutral-200 dark:bg-neutral-700 rounded-lg animate-pulse" />
            <div className="h-12 w-32 bg-neutral-200 dark:bg-neutral-700 rounded-lg animate-pulse" />
          </div>
        </header>

        {/* Image Skeleton */}
        <section className="mb-12">
          <div className="aspect-video bg-neutral-200 dark:bg-neutral-700 rounded-xl animate-pulse" />
        </section>

        {/* Description Skeleton */}
        <section>
          <div className="h-8 bg-neutral-200 dark:bg-neutral-700 rounded-lg mb-4 max-w-sm animate-pulse" />
          <div className="space-y-3">
            <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse" />
            <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse" />
            <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded max-w-3xl animate-pulse" />
          </div>
        </section>

        {/* Additional Content Skeleton */}
        <section className="mt-12 p-8 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl border border-neutral-200 dark:border-neutral-700">
          <div className="h-6 bg-neutral-200 dark:bg-neutral-700 rounded mb-4 max-w-xs animate-pulse" />
          <div className="space-y-2">
            <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse" />
            <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse" />
            <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded max-w-2xl animate-pulse" />
          </div>
        </section>
      </div>
    </main>
  )
}
