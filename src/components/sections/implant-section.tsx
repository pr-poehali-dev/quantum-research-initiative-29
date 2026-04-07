import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"

const services = [
  { title: "Одномоментная имплантация", description: "Установка импланта сразу после удаления зуба — без лишних визитов и долгого ожидания", direction: "top" },
  { title: "Отсроченная имплантация", description: "Классический протокол с заживлением лунки — надёжно и предсказуемо", direction: "right" },
  { title: "Имплантация All-on-4", description: "Полное восстановление зубного ряда на четырёх имплантах — несъёмный протез за один день", direction: "bottom" },
  { title: "Имплантация All-on-6", description: "Восстановление зубного ряда на шести имплантах — повышенная надёжность и равномерное распределение нагрузки", direction: "left" },
  { title: "Открытый и закрытый синус-лифтинг", description: "Наращивание кости в области верхней челюсти для успешной установки импланта", direction: "left" },
  { title: "Вертикальное наращивание кости", description: "Восстановление объёма костной ткани при значительной атрофии", direction: "top" },
  { title: "Наращивание кости с аутотрансплантатом", description: "Использование собственной кости пациента — наиболее биологически совместимый метод", direction: "right" },
]

export function ImplantSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2
            className="mb-2 font-sans text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
            style={{
              background: "linear-gradient(135deg, #f472b6, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Имплантация
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Мы не просто устанавливаем импланты — мы корректируем работу всей зубочелюстной системы</p>

          <div className="mt-5 inline-flex flex-col gap-1 rounded-xl border border-foreground/10 bg-foreground/5 px-5 py-4">
            <span className="font-mono text-xs uppercase tracking-widest text-foreground/40">Приём ведёт</span>
            <p className="text-sm font-semibold text-foreground md:text-base">
              Демин Ефим Степанович
              <span className="ml-2 font-normal text-foreground/50">· Врач стоматолог-хирург, имплантолог · стаж более 12 лет</span>
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
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
                <div className="mb-2 flex items-center gap-3">
                  <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
                  <span className="font-mono text-xs text-foreground/60">0{i + 1}</span>
                </div>
                <h3 className="mb-1 font-sans text-base font-semibold text-foreground md:text-lg">{service.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/70">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div
          className={`mt-8 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(8)}>
            Записаться на консультацию
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}