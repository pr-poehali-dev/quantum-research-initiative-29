import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"

const services = [
  { title: "Брекет-системы", description: "Металлические и керамические брекеты для исправления прикуса и выравнивания зубного ряда", price: "", direction: "top" },
  { title: "Элайнеры (капы)", description: "Съёмные прозрачные капы — незаметное исправление прикуса без металлических конструкций", price: "", direction: "right" },
  { title: "Ретейнеры", description: "Фиксация результата лечения после снятия брекетов — удержание зубов в правильном положении", price: "", direction: "bottom" },
  { title: "Ортодонтия для детей", description: "Исправление прикуса у детей и подростков на ранних стадиях — пластины и съёмные аппараты", price: "", direction: "left" },
  { title: "Диагностика и план лечения", description: "Компьютерная диагностика прикуса, 3D-моделирование результата и составление индивидуального плана", price: "", direction: "top" },
]

export function OrthodonticsSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
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
            Ортодонтия
          </h2>
          <p className="text-base font-semibold text-foreground md:text-lg">Исправляем прикус и создаём гармоничную улыбку — с заботой о каждом пациенте</p>
          <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
            <div className="inline-flex flex-col gap-1 rounded-xl border border-foreground/10 bg-foreground/5 px-5 py-4">
              <span className="font-mono text-xs uppercase tracking-widest text-foreground/40">Приём ведёт</span>
              <p className="text-sm font-semibold text-foreground md:text-base">
                Краснова Александра Васильевна
                <span className="ml-2 font-normal text-foreground/50">· Врач-стоматолог терапевт · Детский стоматолог · Ортодонт · стаж 15 лет</span>
              </p>
            </div>

            <p className="max-w-md text-base leading-relaxed text-foreground/80 md:text-lg">
              <span className="font-semibold text-foreground">Детям</span> — мягкое развитие челюстей с вниманием к осанке.&nbsp;
              <span className="font-semibold text-foreground">Взрослым</span> — эстетика и здоровье.{" "}
              Функциональный подход. Точное планирование. Все виды аппаратуры: от классических пластинок и трейнеров до брекетов и элайнеров.
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
                {service.price && (
                  <p className="mt-1 font-mono text-sm font-semibold" style={{ color: "#c084fc" }}>{service.price}</p>
                )}
              </div>
            )
          })}
        </div>

        <div
          className={`mt-8 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(10)}>
            Записаться на консультацию
          </MagneticButton>
          <p className="mt-3 font-mono text-xs text-foreground/40">Окончательная стоимость определяется на консультации при составлении плана лечения</p>
        </div>
      </div>
    </section>
  )
}