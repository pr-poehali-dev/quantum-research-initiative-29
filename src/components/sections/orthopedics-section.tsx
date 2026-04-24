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
              filter: "drop-shadow(0 0 1px #fff) drop-shadow(0 0 2px #fff) drop-shadow(0 0 4px rgba(255,255,255,0.95)) drop-shadow(0 0 10px rgba(255,255,255,0.7))",
            }}
          >
            Ортопедия
          </h2>
          <p className="text-sm font-semibold text-foreground md:text-base">Восстанавливаем зубы так, чтобы вы забыли о проблеме</p>

          <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-start md:gap-4">
            <div className="inline-flex flex-col gap-1 rounded-xl border border-foreground/10 bg-foreground/5 px-3 py-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">Приём ведёт</span>
              <p className="text-xs font-semibold text-foreground md:text-sm">
                Крецу Ион Иванович
                <span className="ml-1 font-normal text-foreground/50">· Врач стоматолог-ортопед · стаж 12+ лет</span>
              </p>
            </div>

            <p className="max-w-md text-xs leading-snug text-foreground/80 md:text-sm">
              Современные методы протезирования на зубах и имплантах сделают улыбку неотразимой и вернут полноценную функцию жевания.
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
                <h3 className="mb-0.5 font-sans text-sm font-semibold text-foreground md:text-base transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#f472b6] group-hover:to-[#a78bfa] group-hover:bg-clip-text group-hover:text-transparent">{service.title}</h3>
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
          style={{ transitionDelay: "700ms" }}
        >
          <MagneticButton size="default" variant="primary" onClick={() => scrollToSection?.(11)}>
            Записаться на консультацию
          </MagneticButton>
          <p className="mt-2 font-mono text-[10px] text-foreground/40">Окончательная стоимость определяется на консультации при составлении плана лечения</p>
        </div>
        </div>

        <div
          className={`hidden lg:flex shrink-0 flex-col justify-center gap-3 transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="w-[260px] overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 shadow-xl" style={{ aspectRatio: "4/3" }}>
            <img
              src="https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/bucket/8cc958c6-7455-4120-a01c-2fcc30dbafda.jpg"
              alt="Керамические виниры на модели"
              className="h-full w-full object-contain transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>
          <div className="w-[260px] overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 shadow-xl" style={{ aspectRatio: "4/3" }}>
            <img
              src="https://cdn.poehali.dev/files/c89fb05d-f7e2-4d77-8e4b-df733ed18ce3.jpg"
              alt="Крецу Ион Иванович — врач-ортопед показывает модель протеза"
              className="h-full w-full object-contain transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>
          <div className="w-[260px] overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 shadow-xl" style={{ aspectRatio: "4/3" }}>
            <img
              src="https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/bucket/a0ba72b0-a6af-46b6-a0b6-00c02e26cbbe.jpg"
              alt="Мостовидный протез на имплантах"
              className="h-full w-full object-contain transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}