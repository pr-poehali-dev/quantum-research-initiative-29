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
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1">
            <span className="font-mono text-xs text-foreground/50">Приём ведут:</span>
            <span className="font-mono text-xs text-foreground/70">Увыхмина Н.А. <span className="text-foreground/40">· стаж 35 лет · отличник стоматологии</span></span>
            <span className="font-mono text-xs text-foreground/70">Краснова А.В. <span className="text-foreground/40">· стаж 15 лет</span></span>
            <span className="font-mono text-xs text-foreground/70">Судникова Д.В. <span className="text-foreground/40">· стаж 3 года</span></span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-12 lg:gap-x-24">
          {[
            {
              title: "Лечение кариеса",
              description: "Безболезненное лечение кариеса любой стадии с использованием современных материалов и анестезии",
              direction: "top",
            },
            {
              title: "Эстетическая реставрация и композитные виниры",
              description: "Восстановление формы, цвета и эстетики зубов с помощью художественной реставрации и тонких композитных виниров",
              direction: "right",
            },
            {
              title: "Лечение пульпита и периодонтита",
              description: "Качественное эндодонтическое лечение воспалений пульпы и корневых каналов — быстро и без боли",
              direction: "left",
            },
            {
              title: "Перелечивание каналов под микроскопом",
              description: "Повторное лечение корневых каналов любой сложности под операционным микроскопом — точно и надёжно",
              direction: "bottom",
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
  service: { title: string; description: string; direction: string }
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
    </div>
  )
}