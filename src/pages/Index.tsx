import { Shader, ChromaFlow, Swirl } from "shaders/react"
import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { WorkSection } from "@/components/sections/work-section"
import { ServicesSection } from "@/components/sections/services-section"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { DoctorsSection } from "@/components/sections/doctors-section"
import { ChildrenSection } from "@/components/sections/children-section"
import { ReviewsSection } from "@/components/sections/reviews-section"
import { ImplantSection } from "@/components/sections/implant-section"
import { SurgerySection } from "@/components/sections/surgery-section"
import { OrthodonticsSection } from "@/components/sections/orthodontics-section"
import { OrthopedicsSection } from "@/components/sections/orthopedics-section"
import { MagneticButton } from "@/components/magnetic-button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import Icon from "@/components/ui/icon"
import { useRef, useEffect, useState } from "react"

export default function Index() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHeroVideoOpen, setIsHeroVideoOpen] = useState(false)
  const touchStartY = useRef(0)
  const touchStartX = useRef(0)
  const shaderContainerRef = useRef<HTMLDivElement>(null)
  const scrollThrottleRef = useRef<number>()

  useEffect(() => {
    const checkShaderReady = () => {
      if (shaderContainerRef.current) {
        const canvas = shaderContainerRef.current.querySelector("canvas")
        if (canvas && canvas.width > 0 && canvas.height > 0) {
          setIsLoaded(true)
          return true
        }
      }
      return false
    }

    if (checkShaderReady()) return

    const intervalId = setInterval(() => {
      if (checkShaderReady()) {
        clearInterval(intervalId)
      }
    }, 100)

    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true)
    }, 1500)

    return () => {
      clearInterval(intervalId)
      clearTimeout(fallbackTimer)
    }
  }, [])

  const scrollToSection = (index: number) => {
    if (scrollContainerRef.current) {
      const sectionWidth = scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollTo({
        left: sectionWidth * index,
        behavior: "smooth",
      })
      setCurrentSection(index)
    }
  }

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
      touchStartX.current = e.touches[0].clientX
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (Math.abs(e.touches[0].clientY - touchStartY.current) > 10) {
        e.preventDefault()
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY
      const touchEndX = e.changedTouches[0].clientX
      const deltaY = touchStartY.current - touchEndY
      const deltaX = touchStartX.current - touchEndX

      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 50) {
        if (deltaY > 0 && currentSection < 11) {
          scrollToSection(currentSection + 1)
        } else if (deltaY < 0 && currentSection > 0) {
          scrollToSection(currentSection - 1)
        }
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("touchstart", handleTouchStart, { passive: true })
      container.addEventListener("touchmove", handleTouchMove, { passive: false })
      container.addEventListener("touchend", handleTouchEnd, { passive: true })
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart)
        container.removeEventListener("touchmove", handleTouchMove)
        container.removeEventListener("touchend", handleTouchEnd)
      }
    }
  }, [currentSection])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()

        if (!scrollContainerRef.current) return

        scrollContainerRef.current.scrollBy({
          left: e.deltaY,
          behavior: "instant",
        })

        const sectionWidth = scrollContainerRef.current.offsetWidth
        const newSection = Math.round(scrollContainerRef.current.scrollLeft / sectionWidth)
        if (newSection !== currentSection) {
          setCurrentSection(newSection)
        }
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false })
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel)
      }
    }
  }, [currentSection])

  useEffect(() => {
    const handleScroll = () => {
      if (scrollThrottleRef.current) return

      scrollThrottleRef.current = requestAnimationFrame(() => {
        if (!scrollContainerRef.current) {
          scrollThrottleRef.current = undefined
          return
        }

        const sectionWidth = scrollContainerRef.current.offsetWidth
        const scrollLeft = scrollContainerRef.current.scrollLeft
        const newSection = Math.round(scrollLeft / sectionWidth)

        if (newSection !== currentSection && newSection >= 0 && newSection <= 11) {
          setCurrentSection(newSection)
        }

        scrollThrottleRef.current = undefined
      })
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true })
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll)
      }
      if (scrollThrottleRef.current) {
        cancelAnimationFrame(scrollThrottleRef.current)
      }
    }
  }, [currentSection])

  return (
    <main className="relative h-screen w-full overflow-hidden bg-background">
      <CustomCursor />
      <GrainOverlay />

      <div
        ref={shaderContainerRef}
        className={`fixed inset-0 z-0 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ contain: "strict" }}
      >
        <Shader className="h-full w-full">
          <Swirl
            colorA="#b48fe0"
            colorB="#e19136"
            speed={0.8}
            detail={0.8}
            blend={50}
            coarseX={40}
            coarseY={40}
            mediumX={40}
            mediumY={40}
            fineX={40}
            fineY={40}
          />
          <ChromaFlow
            baseColor="#c9a0f0"
            upColor="#c9a0f0"
            downColor="#d1d1d1"
            leftColor="#e19136"
            rightColor="#e19136"
            intensity={0.9}
            radius={1.8}
            momentum={25}
            maskType="alpha"
            opacity={0.97}
          />
        </Shader>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <nav
        className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-6 transition-opacity duration-700 md:px-12 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div />

        <div className="hidden items-center gap-8 md:flex">
          {["Главная", "Врачи", "Наши работы", "Терапия", "Детская", "Ортодонтия", "Имплантация", "Хирургия", "Ортопедия", "О клинике", "Отзывы", "Запись"].map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(index)}
              className={`group relative font-sans text-sm font-medium transition-colors ${
                currentSection === index ? "text-foreground" : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {item}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300 ${
                  currentSection === index ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </div>

        <MagneticButton variant="secondary" onClick={() => scrollToSection(11)}>
          Записаться
        </MagneticButton>
      </nav>

      <div
        ref={scrollContainerRef}
        data-scroll-container
        className={`relative z-10 flex h-screen overflow-x-auto overflow-y-hidden transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Hero Section */}
        <section className="flex min-h-screen w-screen shrink-0 flex-col justify-end px-6 pb-16 pt-24 md:px-12 md:pb-24">
          <img
            src="https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/bucket/d5f5d458-93f2-4ebf-a420-c7be70a80c69.png"
            alt="Зубные феи"
            className="absolute -left-8 top-24 w-[40vw] max-w-lg animate-in fade-in duration-1000 md:-left-4 lg:left-0"
          />
          <div className="absolute right-6 top-36 h-[55vh] w-[28vw] max-w-sm animate-in fade-in duration-1000 md:right-12 lg:right-16">
            <img
              src="https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/bucket/2d6241de-cb8a-4443-be6f-d00633c14190.jpg"
              alt="Врачи клиники"
              className="h-full w-full object-cover object-center"
              style={{
                maskImage: 'radial-gradient(ellipse 80% 85% at 50% 40%, black 40%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse 80% 85% at 50% 40%, black 40%, transparent 80%)',
              }}
            />
          </div>

          <div className="max-w-3xl">
            <a
              href="https://yandex.ru/maps/?text=Рязань+Маяковского+57"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 inline-block animate-in fade-in slide-in-from-bottom-4 rounded-full border border-foreground/20 bg-foreground/15 px-4 py-1.5 backdrop-blur-md duration-700 hover:bg-foreground/25 transition-colors"
            >
              <p className="font-mono text-xs text-foreground/90">Стоматологическая клиника · Рязань · Ул. Маяковского, 57</p>
            </a>

            <p className="mb-8 max-w-2xl animate-in fade-in slide-in-from-bottom-4 text-lg leading-relaxed text-foreground/90 duration-1000 delay-200 md:text-xl">
              <span className="text-pretty">
                Современная стоматология без боли и страха. Бережное лечение, протезирование, исправление прикуса и имплантация для всей семьи.
                <br className="hidden md:block" />
                <span className="mt-3 block font-sans text-xl font-semibold text-foreground md:text-2xl">
                  Лечить правильно. Лечить честно. Результат должен превосходить ожидания.
                </span>
              </span>
            </p>
            <div className="flex animate-in fade-in slide-in-from-bottom-4 flex-col gap-4 duration-1000 delay-300 sm:flex-row sm:items-center">
              <MagneticButton
                size="lg"
                variant="primary"
                onClick={() => scrollToSection(4)}
              >
                Записаться на приём
              </MagneticButton>
              <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection(2)}>
                Наши услуги
              </MagneticButton>
              <button
                type="button"
                onClick={() => setIsHeroVideoOpen(true)}
                className="group relative flex items-center gap-3 rounded-full px-6 py-3 transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #f472b6, #a78bfa)",
                  boxShadow: "0 0 32px rgba(244, 114, 182, 0.5), 0 0 64px rgba(167, 139, 250, 0.3)",
                }}
              >
                <span
                  className="pointer-events-none absolute -right-3 -top-3 z-20 flex h-7 items-center gap-1 rounded-full px-2.5 font-sans text-[10px] font-black uppercase tracking-wider text-white shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #ef4444, #f97316)",
                    boxShadow: "0 0 16px rgba(239, 68, 68, 0.8)",
                    animation: "wiggle 1.2s ease-in-out infinite",
                  }}
                >
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                  Смотри сейчас
                </span>
                <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity group-hover:opacity-100" style={{ background: "linear-gradient(135deg, #fbbf24, #f472b6)" }} />
                <span className="pointer-events-none absolute -inset-1 -z-10 rounded-full opacity-75 blur-md transition-opacity group-hover:opacity-100" style={{ background: "linear-gradient(135deg, #f472b6, #a78bfa)" }} />
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-white/35">
                  <span className="absolute inset-0 animate-ping rounded-full bg-white/40" />
                  <Icon name="Play" size={18} className="relative ml-0.5 text-white" />
                </span>
                <span className="relative font-sans text-sm font-bold uppercase tracking-wider text-white drop-shadow-md">
                  Смотреть видео
                </span>
              </button>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-in fade-in duration-1000 delay-500">
            <div className="flex items-center gap-2">
              <p className="font-mono text-xs text-foreground/80">Листайте вправо</p>
              <div className="flex h-6 w-12 items-center justify-center rounded-full border border-foreground/20 bg-foreground/15 backdrop-blur-md">
                <div className="h-2 w-2 animate-pulse rounded-full bg-foreground/80" />
              </div>
            </div>
          </div>
        </section>

        <DoctorsSection />
        <WorkSection />
        <ServicesSection scrollToSection={scrollToSection} />
        <ChildrenSection scrollToSection={scrollToSection} />
        <OrthodonticsSection scrollToSection={scrollToSection} />
        <ImplantSection scrollToSection={scrollToSection} />
        <SurgerySection scrollToSection={scrollToSection} />
        <OrthopedicsSection scrollToSection={scrollToSection} />
        <AboutSection scrollToSection={scrollToSection} />
        <ReviewsSection />
        <ContactSection />
      </div>

      <Dialog open={isHeroVideoOpen} onOpenChange={setIsHeroVideoOpen}>
        <DialogContent className="max-w-sm border-foreground/10 bg-background p-0">
          <DialogTitle className="sr-only">Видео о клинике</DialogTitle>
          <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: "9/16" }}>
            {isHeroVideoOpen && (
              <iframe
                src="https://vkvideo.ru/video_ext.php?oid=-237544957&id=456239020&hd=2"
                className="absolute inset-0 h-full w-full"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                frameBorder="0"
                allowFullScreen
                title="Видео о клинике"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-6deg) scale(1); }
          50% { transform: rotate(6deg) scale(1.08); }
        }
      `}</style>
    </main>
  )
}