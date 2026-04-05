import { useReveal } from "@/hooks/use-reveal"

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
            style={{ background: "linear-gradient(135deg, #f472b6, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          >
            Терапевтическая стоматология
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Лечим правильно, честно, с результатом</p>
          <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
            <div className="inline-flex flex-col gap-2 rounded-xl border border-foreground/10 bg-foreground/5 px-5 py-4">
              <span className="font-mono text-xs uppercase tracking-widest text-foreground/40">Приём ведут</span>
              <div className="flex flex-col gap-1.5">
                <p className="text-sm font-semibold text-foreground md:text-base">
                  Увыхмина Наталья Алексеевна
                  <span className="ml-2 font-normal text-foreground/50">· стаж 35 лет ·</span>
                  <span className="ml-1 font-mono text-xs" style={{ color: "#c084fc" }}>отличник стоматологии</span>
                </p>
                <p className="text-sm font-semibold text-foreground md:text-base">
                  Краснова Александра Васильевна
                  <span className="ml-2 font-normal text-foreground/50">· стаж 15 лет</span>
                </p>
                <p className="text-sm font-semibold text-foreground md:text-base">
                  Судникова Дарья Витальевна
                  <span className="ml-2 font-normal text-foreground/50">· стаж 3 года</span>
                </p>
              </div>
            </div>

            <div className="max-w-sm rounded-xl border px-5 py-4" style={{ borderColor: "#f472b630", background: "linear-gradient(135deg, #f472b608, #a78bfa08)" }}>
              <p className="mb-1 font-sans text-base font-bold text-foreground md:text-lg">Вас направили на удаление? Не спешите!</p>
              <p className="text-sm leading-relaxed text-foreground/70">
                Наши врачи постараются спасти зуб, которому «подписали приговор». А эстетические реставрации вернут Вам желание улыбаться!
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-12 lg:gap-x-24">
          {[
            {
              title: "Лечение кариеса",
              description: "Безболезненное лечение кариеса любой стадии с использованием современных материалов и анестезии",
              price: "от 3 500 ₽",
              direction: "top",
            },
            {
              title: "Эстетическая реставрация и композитные виниры",
              description: "Восстановление формы, цвета и эстетики зубов с помощью художественной реставрации и тонких композитных виниров",
              price: "реставрация от 5 000 ₽ · виниры от 13 500 ₽",
              direction: "right",
            },
            {
              title: "Лечение пульпита и периодонтита",
              description: "Качественное эндодонтическое лечение воспалений пульпы и корневых каналов — быстро и без боли",
              price: "от 9 500 ₽",
              direction: "left",
            },
            {
              title: "Перелечивание каналов под микроскопом",
              description: "Повторное лечение корневых каналов любой сложности под операционным микроскопом — точно и надёжно",
              price: "от 12 000 ₽",
              direction: "bottom",
            },
            {
              title: "Гигиена и профилактика",
              description: "Профессиональная чистка зубов, снятие налёта и камня — залог здоровья и красивой улыбки",
              price: "от 150 ₽ за зуб",
              direction: "left",
            },
          ].map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: { title: string; description: string; price: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <span className="font-mono text-xs text-foreground/60">0{index + 1}</span>
      </div>
      <h3 className="mb-2 font-sans text-xl font-semibold text-foreground md:text-2xl">{service.title}</h3>
      <p className="max-w-sm text-sm leading-relaxed text-foreground/80 md:text-base">{service.description}</p>
      <p className="mt-2 font-mono text-sm font-semibold" style={{ color: "#c084fc" }}>{service.price}</p>
    </div>
  )
}