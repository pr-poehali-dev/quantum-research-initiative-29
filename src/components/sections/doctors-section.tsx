import { useReveal } from "@/hooks/use-reveal"

const doctors = [
  {
    name: "Увыхмина Наталья Алексеевна",
    experience: "Стаж более 35 лет",
    badge: "Отличник стоматологии",
    direction: "top",
  },
  {
    name: "Краснова Александра Васильевна",
    experience: "Стаж более 15 лет",
    badge: null,
    direction: "right",
  },
  {
    name: "Судникова Дарья Витальевна",
    experience: "Стаж более 3 лет",
    badge: null,
    direction: "bottom",
  },
]

export function DoctorsSection() {
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
          <h2
            className="mb-2 font-sans text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
            style={{
              background: "linear-gradient(135deg, #f472b6, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Наши врачи
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Приём ведут опытные специалисты</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {doctors.map((doctor, i) => {
            const getRevealClass = () => {
              if (!isVisible) {
                switch (doctor.direction) {
                  case "top": return "-translate-y-16 opacity-0"
                  case "right": return "translate-x-16 opacity-0"
                  case "bottom": return "translate-y-16 opacity-0"
                  default: return "translate-y-12 opacity-0"
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
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-foreground/20 bg-foreground/5 text-2xl font-bold text-foreground/30">
                  {doctor.name.charAt(0)}
                </div>

                <div className="mb-3 flex items-center gap-3">
                  <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
                  <span className="font-mono text-xs text-foreground/60">0{i + 1}</span>
                </div>

                <h3 className="mb-1 font-sans text-xl font-semibold text-foreground md:text-2xl leading-snug">
                  {doctor.name}
                </h3>
                <p className="mb-2 font-mono text-sm text-foreground/60">{doctor.experience}</p>
                {doctor.badge && (
                  <span
                    className="inline-block rounded-full px-3 py-1 text-xs font-medium"
                    style={{
                      background: "linear-gradient(135deg, #f472b620, #a78bfa20)",
                      border: "1px solid #a78bfa40",
                      color: "#c084fc",
                    }}
                  >
                    {doctor.badge}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
