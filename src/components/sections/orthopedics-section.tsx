import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"

const services = [
  { title: "Коронки", description: "Металлокерамические, циркониевые и керамические коронки — восстановление разрушенных зубов с эстетикой", price: "от 16 000 ₽", direction: "top" },
  { title: "Виниры и люминиры", description: "Тонкие керамические накладки для идеальной формы и цвета улыбки без значительного препарирования", price: "от 28 000 ₽", direction: "right" },
  { title: "Мостовидные протезы", description: "Несъёмные конструкции для восстановления одного или нескольких отсутствующих зубов", price: "", direction: "bottom" },
  { title: "Съёмные протезы", description: "Частичные и полные съёмные протезы — нейлоновые, акриловые, бюгельные — при потере нескольких зубов", price: "от 11 000 ₽", direction: "left" },
  { title: "Протезирование на имплантах", description: "Одиночные коронки и мостовидные протезы с опорой на импланты — надёжно и как естественный зуб", price: "от 32 000 ₽", direction: "top" },
  { title: "Восстановление после травм", description: "Реставрация и протезирование при сколах, переломах и значительных разрушениях зубов", price: "", direction: "right" },
]

export function OrthopedicsSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl flex gap-10 items-stretch h-[calc(100vh-6rem)] md:h-[calc(100vh-4rem)]">
        <div className="flex-1 min-w-0 flex flex-col justify-center">
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
            Ортопедия
          </h2>
          <p className="text-base font-semibold text-foreground md:text-lg">Восстанавливаем зубы так, чтобы вы забыли о проблеме</p>

          <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
            <div className="inline-flex flex-col gap-1 rounded-xl border border-foreground/10 bg-foreground/5 px-5 py-4">
              <span className="font-mono text-xs uppercase tracking-widest text-foreground/40">Приём ведёт</span>
              <p className="text-sm font-semibold text-foreground md:text-base">
                Крецу Ион Иванович
                <span className="ml-2 font-normal text-foreground/50">· Врач стоматолог-ортопед · стаж более 12 лет</span>
              </p>
            </div>

            <p className="max-w-md text-base leading-relaxed text-foreground/80 md:text-lg">
              Современные методы протезирования на зубах и имплантах помогут сделать вашу улыбку неотразимой и вернуть вам полноценную функцию жевания.
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
                  <p className="mt-1 font-mono text-sm font-semibold" style={{ color: "#fbbf24", textShadow: "0 0 12px rgba(251, 191, 36, 0.5), 0 0 24px rgba(251, 191, 36, 0.25)" }}>{service.price}</p>
                )}
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
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(11)}>
            Записаться на консультацию
          </MagneticButton>
          <p className="mt-3 font-mono text-xs text-foreground/40">Окончательная стоимость определяется на консультации при составлении плана лечения</p>
        </div>
        </div>

        <div
          className={`hidden lg:flex shrink-0 items-center transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="w-[340px] overflow-hidden rounded-3xl shadow-2xl" style={{ aspectRatio: "3/4" }}>
            <img
              src="https://cdn.poehali.dev/files/c89fb05d-f7e2-4d77-8e4b-df733ed18ce3.jpg"
              alt="Крецу Ион Иванович — врач-ортопед показывает модель протеза"
              className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  )
}