import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"

export function ChildrenSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
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
              filter: "drop-shadow(0 0 6px rgba(255,255,255,0.9)) drop-shadow(0 0 14px rgba(255,255,255,0.6)) drop-shadow(0 0 28px rgba(255,255,255,0.35))",
            }}
          >
            Детская стоматология
          </h2>
          <p className="mb-3 text-sm font-semibold text-foreground md:text-base">Бережно, без стресса, с заботой</p>

          <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-4">
            <div className="inline-flex flex-col gap-1 rounded-xl border border-foreground/10 bg-foreground/5 px-3 py-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">Приём ведёт</span>
              <div>
                <p className="text-xs font-semibold text-foreground md:text-sm">
                  Краснова Александра Васильевна
                  <span className="ml-1 font-normal text-foreground/50">· стаж 15 лет</span>
                </p>
                <p className="mt-0.5 font-mono text-[10px] text-foreground/50">
                  Врач-стоматолог терапевт · Детский стоматолог · Ортодонт
                </p>
              </div>
            </div>

            <p className="max-w-md text-xs leading-snug text-foreground/80 md:text-sm">
              Лечение детей и подростков в доброжелательной атмосфере нашей клиники не травмирует психику Вашего ребёнка
              и гарантирует качество лечения.
            </p>
          </div>
        </div>

        <div
          className={`grid gap-x-6 gap-y-3 md:grid-cols-2 md:gap-x-8 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {[
            {
              title: "Лечение молочных и постоянных зубов",
              description: "Бережное лечение кариеса и других заболеваний у детей с применением мягкой анестезии",
              price: "от 3 000 ₽",
            },
            {
              title: "Профилактика и гигиена",
              description: "Профессиональная чистка, герметизация фиссур и обучение правильному уходу за зубами",
              price: "от 150 ₽",
            },
            {
              title: "Ортодонтия для детей",
              description: "Исправление прикуса у детей и подростков на ранних стадиях — брекеты и съёмные аппараты",
              price: "",
            },
            {
              title: "Психологический комфорт",
              description: "Приём проходит в спокойной атмосфере — ребёнок не боится стоматолога и приходит с удовольствием",
              price: "",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group"
              style={{ transitionDelay: `${300 + i * 120}ms` }}
            >
              <div className="mb-1 flex items-center gap-2">
                <div className="h-px w-6 bg-foreground/30 transition-all duration-300 group-hover:w-10 group-hover:bg-foreground/50" />
                <span className="font-mono text-[10px] text-foreground/60">0{i + 1}</span>
              </div>
              <h3 className="mb-0.5 font-sans text-sm font-semibold text-foreground md:text-base">{item.title}</h3>
              <p className="max-w-sm text-xs leading-snug text-foreground/80">{item.description}</p>
              {item.price && <p className="mt-1 font-mono text-xs font-semibold" style={{ color: "#fbbf24", textShadow: "0 0 12px rgba(251, 191, 36, 0.5), 0 0 24px rgba(251, 191, 36, 0.25)" }}>{item.price}</p>}
            </div>
          ))}
        </div>

        <div
          className={`mt-3 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
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
              src="https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/bucket/67fa81b7-0dcf-43dd-8339-48c6ecd654eb.jpg"
              alt="Малыш чистит зубы"
              className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
            />
          </div>
          <div className="flex-1 w-[260px] overflow-hidden rounded-2xl shadow-xl">
            <img
              src="https://cdn.poehali.dev/files/b8754c46-9bde-4c82-8676-23be3c95b5fc.jpg"
              alt="Александра Васильевна на приёме"
              className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
            />
          </div>
          <div className="flex-1 w-[260px] overflow-hidden rounded-2xl shadow-xl">
            <img
              src="https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/bucket/ae24e8a8-46df-43d8-b511-313aff78bb25.jpg"
              alt="Счастливый ребёнок у стоматолога"
              className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  )
}