import { useEffect, useState } from 'react'

export function useSectionInView(ids: string[]): string | null {
  const [currentId, setCurrentId] = useState<string | null>(null)

  useEffect(() => {
    if (ids.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentId(entry.target.id)
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: '-50px 0px -50px 0px',
      }
    )

    ids.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [ids])

  return currentId
}
