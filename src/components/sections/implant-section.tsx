import { useState } from "react"
import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import Icon from "@/components/ui/icon"

const services = [
  { title: "Одномоментная имплантация", description: "Установка импланта сразу после удаления зуба — без лишних визитов и долгого ожидания", price: "от 32 000 ₽", direction: "top" },
  { title: "Отсроченная имплантация", description: "Классический протокол с заживлением лунки — надёжно и предсказуемо", price: "от 36 500 ₽", direction: "right" },
  { title: "Имплантация All-on-4", description: "Полное восстановление зубного ряда на четырёх имплантах — несъёмный протез за один день", price: "", direction: "bottom" },
  { title: "Имплантация All-on-6", description: "Восстановление зубного ряда на шести имплантах — повышенная надёжность и равномерное распределение нагрузки", price: "", direction: "left" },
  { title: "Открытый и закрытый синус-лифтинг", description: "Наращивание кости в области верхней челюсти для успешной установки импланта", price: "закрытый от 16 000 ₽", direction: "left" },
  { title: "Вертикальное наращивание кости", description: "Восстановление объёма костной ткани при значительной атрофии", price: "от 15 000 ₽", direction: "top" },
  { title: "Наращивание кости с аутотрансплантатом", description: "Использование собственной кости пациента — наиболее биологически совместимый метод", price: "от 6 000 ₽", direction: "right" },
]

export function ImplantSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-5 transition-all duration-700 md:mb-6 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2
            className="mb-1 font-sans text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            style={{
              background: "linear-gradient(135deg, #f472b6, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Имплантация
          </h2>
          <p className="text-sm font-semibold text-foreground md:text-base">Мы не просто устанавливаем импланты — мы корректируем работу всей зубочелюстной системы</p>

          <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-center">
            <div className="inline-flex flex-col gap-0.5 rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-2.5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">Приём ведёт</span>
              <p className="text-xs font-semibold text-foreground md:text-sm">
                Демин Ефим Степанович
                <span className="ml-2 font-normal text-foreground/50">· Врач стоматолог-хирург, имплантолог · стаж более 12 лет</span>
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              className="group relative w-full max-w-[200px] overflow-hidden rounded-xl border border-foreground/10 bg-foreground/5 transition-all hover:border-foreground/30 hover:bg-foreground/10"
              style={{ aspectRatio: "16/9" }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/10 backdrop-blur transition-all group-hover:scale-110 group-hover:bg-foreground/20">
                  <Icon name="Play" size={18} className="ml-0.5 text-foreground" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/60">Смотреть видео</span>
              </div>
            </button>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-3 md:gap-4">
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
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <div className="h-px w-6 bg-foreground/30 transition-all duration-300 group-hover:w-10 group-hover:bg-foreground/50" />
                  <span className="font-mono text-[10px] text-foreground/60">0{i + 1}</span>
                </div>
                <h3 className="mb-0.5 font-sans text-sm font-semibold text-foreground md:text-base">{service.title}</h3>
                <p className="text-xs leading-snug text-foreground/70">{service.description}</p>
                {service.price && (
                  <p className="mt-0.5 font-mono text-xs font-semibold" style={{ color: "#fbbf24", textShadow: "0 0 12px rgba(251, 191, 36, 0.5), 0 0 24px rgba(251, 191, 36, 0.25)" }}>{service.price}</p>
                )}
              </div>
            )
          })}
        </div>

        <div
          className={`mt-4 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(10)}>
            Записаться на консультацию
          </MagneticButton>
          <p className="mt-2 font-mono text-[10px] text-foreground/40">Окончательная стоимость определяется на консультации при составлении плана лечения</p>
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