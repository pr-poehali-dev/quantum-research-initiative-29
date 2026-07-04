import { useEffect, useRef, useState } from "react"

export function useReveal(threshold = 0.3) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: isMobile ? 0 : threshold,
        rootMargin: isMobile ? "0px 0px -15% 0px" : "0px",
        root: null,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return { ref, isVisible }
}