import { useReveal } from "@/hooks/use-reveal"

const services = [
  { title: "Лечение кариеса", price: "от 3 500 ₽" },
  { title: "Лечение пульпита и периодонтита", price: "от 9 500 ₽" },
  { title: "Эстетическая реставрация", price: "от 5 000 ₽" },
  { title: "Композитные виниры", price: "от 13 500 ₽" },
  { title: "Перелечивание каналов под микроскопом", price: "от 12 000 ₽" },
  { title: "Гигиена и профилактика", price: "от 150 ₽ за зуб" },
]

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1fr_360px] md:gap-16">

          {/* Left: заголовок + прайс */}
          <div
            className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}
          >
            <h2
              className="mb-1 font-sans text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
              style={{ background: "linear-gradient(135deg, #f472b6, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            >
              Терапевтическая стоматология
            </h2>
            <p className="mb-6 font-mono text-sm text-foreground/50">/ Лечим правильно, честно, с результатом</p>

            <div className="divide-y divide-foreground/10">
              {services.map((s, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between py-3 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${150 + i * 80}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-foreground/30">0{i + 1}</span>
                    <span className="text-sm font-medium text-foreground md:text-base">{s.title}</span>
                  </div>
                  <span className="ml-4 shrink-0 font-mono text-sm font-semibold" style={{ color: "#c084fc" }}>{s.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: врачи + призыв */}
          <div
            className={`flex flex-col gap-4 transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="rounded-xl border border-foreground/10 bg-foreground/5 px-5 py-4">
              <span className="mb-3 block font-mono text-xs uppercase tracking-widest text-foreground/40">Приём ведут</span>
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-sm font-semibold text-foreground md:text-base">Увыхмина Наталья Алексеевна</p>
                  <p className="font-mono text-xs text-foreground/50">стаж 35 лет · <span style={{ color: "#c084fc" }}>отличник стоматологии</span></p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground md:text-base">Краснова Александра Васильевна</p>
                  <p className="font-mono text-xs text-foreground/50">стаж 15 лет</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground md:text-base">Судникова Дарья Витальевна</p>
                  <p className="font-mono text-xs text-foreground/50">стаж 3 года</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border px-5 py-4" style={{ borderColor: "#f472b630", background: "linear-gradient(135deg, #f472b608, #a78bfa08)" }}>
              <p className="mb-1.5 font-sans text-base font-bold text-foreground">Вас направили на удаление? Не спешите!</p>
              <p className="text-sm leading-relaxed text-foreground/70">
                Наши врачи постараются спасти зуб, которому «подписали приговор». А эстетические реставрации вернут Вам желание улыбаться!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
