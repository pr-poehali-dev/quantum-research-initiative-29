import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"

const services = [
  { title: "Брекет-системы", description: "Металлические и керамические брекеты для исправления прикуса и выравнивания зубного ряда", price: "от 19 000 ₽", direction: "top" },
  { title: "Элайнеры (капы)", description: "Съёмные прозрачные капы — незаметное исправление прикуса без металлических конструкций", price: "от 140 000 ₽", direction: "right" },
  { title: "Ретейнеры", description: "Фиксация результата лечения после снятия брекетов — удержание зубов в правильном положении", price: "от 3 000 ₽", direction: "bottom" },
  { title: "Ортодонтия для детей", description: "Исправление прикуса у детей и подростков на ранних стадиях — пластины и съёмные аппараты", price: "от 11 000 ₽", direction: "left" },
  { title: "Диагностика и план лечения", description: "Компьютерная диагностика прикуса, 3D-моделирование результата и составление индивидуального плана", price: "от 3 000 ₽", direction: "top" },
]

export function OrthodonticsSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

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
            }}
          >
            Ортодонтия
          </h2>
          <p className="text-sm font-semibold text-foreground md:text-base">Исправляем прикус и создаём гармоничную улыбку</p>
          <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-start md:gap-4">
            <div className="inline-flex flex-col gap-1 rounded-xl border border-foreground/10 bg-foreground/5 px-3 py-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">Приём ведёт</span>
              <p className="text-xs font-semibold text-foreground md:text-sm">
                Краснова Александра Васильевна
                <span className="ml-1 font-normal text-foreground/50">· Ортодонт · стаж 15 лет</span>
              </p>
            </div>

            <p className="max-w-md text-xs leading-snug text-foreground/80 md:text-sm">
              <span className="font-semibold text-foreground">Детям</span> — мягкое развитие челюстей.{" "}
              <span className="font-semibold text-foreground">Взрослым</span> — эстетика и здоровье.{" "}
              Все виды аппаратуры: пластинки, трейнеры, брекеты, элайнеры.
            </p>
          </div>
        </div>

        <div className="grid gap-x-5 gap-y-3 md:grid-cols-3 md:gap-x-6">
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
                  <p className="mt-1 font-mono text-xs font-semibold" style={{ color: "#fbbf24", textShadow: "0 0 12px rgba(251, 191, 36, 0.5), 0 0 24px rgba(251, 191, 36, 0.25)" }}>{service.price}</p>
                )}
              </div>
            )
          })}
        </div>

        <div
          className={`mt-3 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
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
              src="https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/bucket/2ff70494-a53a-4046-ae02-e907581e53eb.jpg"
              alt="Элайнеры"
              className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
            />
          </div>
          <div className="flex-1 w-[260px] overflow-hidden rounded-2xl shadow-xl">
            <img
              src="https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/bucket/0e0355a9-25a0-4efc-a687-38c56805eca4.jpg"
              alt="Брекеты"
              className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
            />
          </div>
          <div className="flex-1 w-[260px] overflow-hidden rounded-2xl shadow-xl">
            <img
              src="https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/bucket/a720afe8-999a-4172-80a5-0ca8d1ade2b8.jpg"
              alt="Детские пластинки"
              className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  )
}