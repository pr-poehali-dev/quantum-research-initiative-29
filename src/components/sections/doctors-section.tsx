import { useReveal } from "@/hooks/use-reveal"

const doctors = [
  {
    name: "Увыхмина Наталья Алексеевна",
    experience: "Стаж более 35 лет",
    specialties: ["Врач стоматолог-терапевт", "Эндодонтист"],
    badge: "Отличник стоматологии",
    founder: true,
    direction: "top",
    photo: "https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/bucket/817ff915-03e7-4986-b5cf-27869a335a13.jpg",
  },
  {
    name: "Краснова Александра Васильевна",
    experience: "Стаж более 15 лет",
    specialties: ["Врач стоматолог-терапевт", "Детский стоматолог", "Ортодонт", "Эндодонтист", "Микроскопист"],
    direction: "right",
    photo: "https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/bucket/84d9405d-af44-4c2e-8f69-465bd6cc7685.jpg",
  },
  {
    name: "Судникова Дарья Витальевна",
    experience: "Стаж более 3 лет",
    specialties: ["Врач стоматолог-терапевт", "Эндодонтист", "Микроскопист"],
    direction: "right",
    photo: "https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/bucket/53bb3275-71ba-4e55-bbb1-f55835c73caf.jpg",
  },
  {
    name: "Крецу Ион Иванович",
    experience: "Стаж более 12 лет",
    specialties: ["Врач стоматолог-ортопед"],
    direction: "bottom",
    photo: "https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/bucket/66b042c1-3d6a-4883-9c47-79a7fa55f1a5.jpg",
  },
  {
    name: "Демин Ефим Степанович",
    experience: "Стаж более 12 лет",
    specialties: ["Врач стоматолог-хирург", "Имплантолог"],
    direction: "left",
    photo: "https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/bucket/ec5e123f-727c-4698-9b28-870e233a7a8d.jpg",
  },
]

export function DoctorsSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-start px-6 pt-16 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-4 transition-all duration-700 md:mb-6 text-center ${
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
              filter: "drop-shadow(0 0 1px #fff) drop-shadow(0 0 2px #fff) drop-shadow(0 0 4px rgba(255,255,255,0.95)) drop-shadow(0 0 10px rgba(255,255,255,0.7))",
            }}
          >
            Наша команда
          </h2>
          <p className="text-base font-semibold text-foreground md:text-lg">Опытные специалисты вашей улыбки</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5 md:gap-8">
          {doctors.map((doctor, i) => {
            const getRevealClass = () => {
              if (!isVisible) {
                switch (doctor.direction) {
                  case "top": return "-translate-y-16 opacity-0"
                  case "right": return "translate-x-16 opacity-0"
                  case "bottom": return "translate-y-16 opacity-0"
                  default: return "-translate-x-16 opacity-0"
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
                {"photo" in doctor && doctor.photo ? (
                  <div className="mb-3 aspect-[3/4] w-full overflow-hidden rounded-2xl border border-foreground/20">
                    <img src={doctor.photo} alt={doctor.name} className={`h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 ${doctor.name.includes("Демин") ? "object-[center_15%]" : "object-top"}`} />
                  </div>
                ) : (
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-foreground/20 bg-foreground/5 text-xl font-bold text-foreground/30">
                    {doctor.name.charAt(0)}
                  </div>
                )}

                <div className="mb-3 flex items-center gap-3">
                  <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
                  <span className="font-mono text-xs text-foreground/60">0{i + 1}</span>
                </div>

                <h3 className="mb-1 mt-4 font-sans text-lg font-semibold text-foreground leading-snug">
                  {doctor.name}
                </h3>
                <p className="mb-3 font-sans text-xs font-bold text-foreground/80">{doctor.experience}</p>
                <div className="flex flex-col gap-1">
                  {doctor.specialties.map((s, j) => (
                    <span key={j} className="font-sans text-xs font-semibold text-foreground/90">
                      · {s}
                    </span>
                  ))}
                </div>
                {"founder" in doctor && doctor.founder && (
                  <span
                    className="mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium"
                    style={{
                      background: "linear-gradient(135deg, #fbbf2420, #f4722020)",
                      border: "1px solid #fbbf2440",
                      color: "#fbbf24",
                    }}
                  >
                    Основатель клиники
                  </span>
                )}
                {"badge" in doctor && doctor.badge && (
                  <span
                    className="mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium"
                    style={{
                      background: "linear-gradient(135deg, #34d39920, #06b6d420)",
                      border: "1px solid #34d39940",
                      color: "#34d399",
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