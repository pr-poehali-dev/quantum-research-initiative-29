import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"

export function ChildrenSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-10 transition-all duration-700 md:mb-14 ${
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
            Детская стоматология
          </h2>
          <p className="mb-5 font-mono text-sm text-foreground/60 md:text-base">/ Бережно, без стресса, с заботой</p>

          <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
            <div className="inline-flex flex-col gap-2 rounded-xl border border-foreground/10 bg-foreground/5 px-5 py-4">
              <span className="font-mono text-xs uppercase tracking-widest text-foreground/40">Приём ведёт</span>
              <div>
                <p className="text-sm font-semibold text-foreground md:text-base">
                  Краснова Александра Васильевна
                  <span className="ml-2 font-normal text-foreground/50">· стаж 15 лет</span>
                </p>
                <p className="mt-0.5 font-mono text-xs text-foreground/50">
                  Врач-стоматолог терапевт · Детский стоматолог · Ортодонт
                </p>
              </div>
            </div>

            <p className="max-w-md text-base leading-relaxed text-foreground/80 md:text-lg">
              Лечение детей и подростков в доброжелательной атмосфере нашей клиники не травмирует психику Вашего ребёнка
              и гарантирует качество лечения.
            </p>
          </div>
        </div>

        <div
          className={`grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-10 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {[
            {
              title: "Лечение молочных и постоянных зубов",
              description: "Бережное лечение кариеса и других заболеваний у детей с применением мягкой анестезии",
            },
            {
              title: "Профилактика и гигиена",
              description: "Профессиональная чистка, герметизация фиссур и обучение правильному уходу за зубами",
            },
            {
              title: "Ортодонтия для детей",
              description: "Исправление прикуса у детей и подростков на ранних стадиях — брекеты и съёмные аппараты",
            },
            {
              title: "Психологический комфорт",
              description: "Приём проходит в спокойной атмосфере — ребёнок не боится стоматолога и приходит с удовольствием",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group"
              style={{ transitionDelay: `${300 + i * 120}ms` }}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
                <span className="font-mono text-xs text-foreground/60">0{i + 1}</span>
              </div>
              <h3 className="mb-2 font-sans text-xl font-semibold text-foreground md:text-2xl">{item.title}</h3>
              <p className="max-w-sm text-sm leading-relaxed text-foreground/80 md:text-base">{item.description}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-8 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
          style={{ transitionDelay: "700ms" }}
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