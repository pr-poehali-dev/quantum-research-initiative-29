import { useState } from "react"
import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import Icon from "@/components/ui/icon"

const services = [
  { title: "Одномоментная имплантация", description: "Установка импланта сразу после удаления зуба — без лишних визитов и долгого ожидания", price: "от 32 000 ₽", direction: "top", image: "https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/files/e8b63120-6d8d-424f-b83f-54a983a16fe5.jpg" },
  { title: "Отсроченная имплантация", description: "Классический протокол с заживлением лунки — надёжно и предсказуемо", price: "от 36 500 ₽", direction: "right", image: "https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/files/5be13a9b-c267-4c47-88ca-01ee3b1eef74.jpg" },
  { title: "Имплантация All-on-4", description: "Полное восстановление зубного ряда на четырёх имплантах — несъёмный протез за один день", price: "", direction: "bottom", image: "https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/files/69fb61a5-ffb4-4e94-aa2a-59225136b73a.jpg" },
  { title: "Имплантация All-on-6", description: "Восстановление зубного ряда на шести имплантах — повышенная надёжность и равномерное распределение нагрузки", price: "", direction: "left", image: "https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/files/4fa434df-e49c-4d95-bbe6-964d02daeadd.jpg" },
  { title: "Открытый и закрытый синус-лифтинг", description: "Наращивание кости в области верхней челюсти для успешной установки импланта", price: "закрытый от 16 000 ₽", direction: "left", image: "https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/files/04cfd172-f31a-448d-9aea-8ea23a78dd47.jpg" },
  { title: "Вертикальное наращивание кости", description: "Восстановление объёма костной ткани при значительной атрофии", price: "от 15 000 ₽", direction: "top", image: "https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/files/d6ec596d-5e0e-4b05-b680-fc78b12616e9.jpg" },
  { title: "Наращивание кости с аутотрансплантатом", description: "Использование собственной кости пациента — наиболее биологически совместимый метод", price: "от 6 000 ₽", direction: "right", image: "https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/files/a17bce89-d5bb-4668-92da-a7118b21616b.jpg" },
]



export function ImplantSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl flex gap-6 lg:gap-8 items-stretch h-[calc(100vh-5rem)] md:h-[calc(100vh-3rem)] py-4">
        <div className="flex-1 min-w-0 flex flex-col justify-center overflow-hidden">
        <div
          className={`mb-3 transition-all duration-700 md:mb-4 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2
            className="mb-1 font-sans text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
            style={{
              background: "linear-gradient(135deg, #f472b6, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 1px #fff) drop-shadow(0 0 2px #fff) drop-shadow(0 0 4px rgba(255,255,255,0.95)) drop-shadow(0 0 10px rgba(255,255,255,0.7))",
            }}
          >
            Имплантация
          </h2>
          <p className="text-sm font-semibold text-foreground md:text-base">Не просто устанавливаем импланты — корректируем работу всей зубочелюстной системы</p>

          <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            <div className="inline-flex flex-col gap-1 rounded-xl border border-foreground/10 bg-foreground/5 px-3 py-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">Приём ведёт</span>
              <p className="text-xs font-semibold text-foreground md:text-sm">
                Демин Ефим Степанович
                <span className="ml-1 font-normal text-foreground/50">· Стоматолог-хирург, имплантолог · стаж 12+ лет</span>
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              className="group relative w-full max-w-[160px] overflow-hidden rounded-lg border border-foreground/10 bg-foreground/5 transition-all hover:border-foreground/30 hover:bg-foreground/10"
              style={{ aspectRatio: "16/9" }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/10 backdrop-blur transition-all group-hover:scale-110 group-hover:bg-foreground/20">
                  <Icon name="Play" size={14} className="ml-0.5 text-foreground" />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-foreground/60">Смотреть видео</span>
              </div>
            </button>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 gap-x-5 gap-y-2 lg:gap-x-6">
          {services.map((service, i) => {
            const getRevealClass = () => {
              if (!isVisible) {
                switch (service.direction) {
                  case "left": return "-translate-x-16 opacity-0"
                  case "right": return "translate-x-16 opacity-0"
                  case "top": return "-translate-y-16 opacity-0"
                  default: return "translate-y-16 opacity-0"
                }
              }
              return "translate-x-0 translate-y-0 opacity-100"
            }

            return (
              <div
                key={i}
                className={`group transition-all duration-700 ${getRevealClass()}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="mb-1 flex items-center gap-3">
                  <div className="h-px w-6 bg-foreground/30 transition-all duration-300 group-hover:w-10 group-hover:bg-foreground/50" />
                </div>
                <h3 className="mb-1 font-sans text-base font-semibold text-foreground md:text-lg transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#f472b6] group-hover:to-[#a78bfa] group-hover:bg-clip-text group-hover:text-transparent">{service.title}</h3>
                <p className="max-w-sm text-sm leading-snug text-foreground/80 md:text-base">{service.description}</p>
                {service.price && (
                  <p className="mt-1 font-mono text-sm font-semibold md:text-base" style={{ color: "#fbbf24", textShadow: "0 0 12px rgba(251, 191, 36, 0.5), 0 0 24px rgba(251, 191, 36, 0.25)" }}>{service.price}</p>
                )}
              </div>
            )
          })}
        </div>
        <div className="flex flex-col gap-5 md:hidden">
          {services.map((service, i) => (
            <div key={i} className="group">
              <div className="mb-1 flex items-center gap-3">
                <div className="h-px w-6 bg-foreground/30" />
              </div>
              <h3 className="mb-1 font-sans text-base font-semibold text-foreground transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#f472b6] group-hover:to-[#a78bfa] group-hover:bg-clip-text group-hover:text-transparent">{service.title}</h3>
              <p className="text-sm leading-snug text-foreground/80">{service.description}</p>
              {service.price && (
                <p className="mt-1 font-mono text-sm font-semibold" style={{ color: "#fbbf24", textShadow: "0 0 12px rgba(251, 191, 36, 0.5), 0 0 24px rgba(251, 191, 36, 0.25)" }}>{service.price}</p>
              )}
            </div>
          ))}
        </div>

        <div
          className={`mt-3 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <MagneticButton size="default" variant="primary" onClick={() => scrollToSection?.(11)}>
            Записаться на консультацию
          </MagneticButton>
          <p className="mt-2 font-mono text-[10px] text-foreground/40">Окончательная стоимость определяется на консультации при составлении плана лечения</p>
        </div>
        </div>

        <div
          className={`hidden lg:flex shrink-0 flex-col gap-3 self-stretch transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="flex-1 w-[260px] overflow-hidden rounded-2xl shadow-xl">
            <img
              src="https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/files/84dc439d-d50a-4524-acea-dd4e2e7adc07.jpg"
              alt="Имплантация — операция"
              className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
            />
          </div>
          <div className="flex-1 w-[260px] overflow-hidden rounded-2xl shadow-xl">
            <img
              src="https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/files/5969d77b-333e-4a0f-b45a-3e31f059c77d.jpg"
              alt="Результат имплантации"
              className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
            />
          </div>
          <div className="flex-1 w-[260px] overflow-hidden rounded-2xl shadow-xl">
            <img
              src="https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/files/698f798f-6504-4c84-bd3d-9f1bd01732a7.jpg"
              alt="Современная операционная"
              className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
            />
          </div>
        </div>
      </div>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl border-foreground/10 bg-background p-0">
          <DialogTitle className="sr-only">Имплантация зубов</DialogTitle>
          <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: "16/9" }}>
            {isVideoOpen && (
              <iframe
                src="https://vkvideo.ru/video_ext.php?oid=-237544957&id=456239017&hash=46cc161bfe63ebb9&hd=3&autoplay=1"
                className="absolute inset-0 h-full w-full"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                frameBorder="0"
                allowFullScreen
                title="Имплантация зубов"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}