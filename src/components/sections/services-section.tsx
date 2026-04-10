import { useState } from "react"
import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

export function ServicesSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)
  const [isAwardOpen, setIsAwardOpen] = useState(false)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-6 transition-all duration-700 md:mb-8 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
            style={{ background: "linear-gradient(135deg, #f472b6, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          >
            Терапевтическая стоматология
          </h2>
          <p className="text-base font-semibold text-foreground md:text-lg">Лечим правильно, честно, с результатом</p>
          <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
            <div className="inline-flex flex-col gap-2 rounded-xl border border-foreground/10 bg-foreground/5 px-5 py-4">
              <span className="font-mono text-xs uppercase tracking-widest text-foreground/40">Приём ведут</span>
              <div className="flex flex-col gap-1.5">
                <p className="text-sm font-semibold text-foreground md:text-base">
                  Увыхмина Наталья Алексеевна
                  <span className="ml-2 font-normal text-foreground/50">· стаж 35 лет ·</span>
                  <button
                    type="button"
                    onClick={() => setIsAwardOpen(true)}
                    className="ml-1 inline-flex cursor-pointer items-center rounded-full border border-amber-400/40 bg-amber-400/10 px-2.5 py-0.5 font-mono text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 hover:border-amber-400/70 hover:bg-amber-400/20"
                    style={{ background: "linear-gradient(135deg, #fde68a, #fbbf24, #d97706)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: "drop-shadow(0 0 8px rgba(251, 191, 36, 0.6))" }}
                  >
                    ★ отличник стоматологии
                  </button>
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

        <div className="hidden md:flex gap-x-8 lg:gap-x-10 items-start">
          <div className="flex flex-col gap-3 flex-1">
            {[
              { title: "Лечение кариеса", description: "Безболезненное лечение кариеса любой стадии с использованием современных материалов и анестезии", price: "от 3 500 ₽", direction: "top" },
              { title: "Лечение пульпита и периодонтита", description: "Качественное эндодонтическое лечение воспалений пульпы и корневых каналов — быстро и без боли", price: "от 9 500 ₽", direction: "left" },
              { title: "Гигиена и профилактика", description: "Профессиональная чистка зубов, снятие налёта и камня — залог здоровья и красивой улыбки", price: "от 150 ₽ за зуб", direction: "left" },
            ].map((service, i) => (
              <ServiceCard key={i} service={service} index={i} isVisible={isVisible} />
            ))}
          </div>
          <div className="flex flex-col gap-3 flex-1 mt-4">
            {[
              { title: "Эстетическая реставрация и композитные виниры", description: "Восстановление формы, цвета и эстетики зубов с помощью художественной реставрации и тонких композитных виниров", price: "реставрация от 5 000 ₽ · виниры от 13 500 ₽", direction: "right" },
              { title: "Перелечивание каналов под микроскопом", description: "Повторное лечение корневых каналов любой сложности под операционным микроскопом — точно и надёжно", price: "от 12 000 ₽", direction: "bottom" },
            ].map((service, i) => (
              <ServiceCard key={i + 3} service={service} index={i + 3} isVisible={isVisible} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 md:hidden">
          {[
            { title: "Лечение кариеса", description: "Безболезненное лечение кариеса любой стадии с использованием современных материалов и анестезии", price: "от 3 500 ₽", direction: "top" },
            { title: "Эстетическая реставрация и композитные виниры", description: "Восстановление формы, цвета и эстетики зубов с помощью художественной реставрации и тонких композитных виниров", price: "реставрация от 5 000 ₽ · виниры от 13 500 ₽", direction: "right" },
            { title: "Лечение пульпита и периодонтита", description: "Качественное эндодонтическое лечение воспалений пульпы и корневых каналов — быстро и без боли", price: "от 9 500 ₽", direction: "left" },
            { title: "Перелечивание каналов под микроскопом", description: "Повторное лечение корневых каналов любой сложности под операционным микроскопом — точно и надёжно", price: "от 12 000 ₽", direction: "bottom" },
            { title: "Гигиена и профилактика", description: "Профессиональная чистка зубов, снятие налёта и камня — залог здоровья и красивой улыбки", price: "от 150 ₽ за зуб", direction: "left" },
          ].map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isVisible={isVisible} />
          ))}
        </div>

        <div
          className={`mt-4 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
          style={{ transitionDelay: "700ms" }}
        >
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(10)}>
            Записаться на консультацию
          </MagneticButton>
          <p className="mt-3 font-mono text-xs text-foreground/40">Окончательная стоимость определяется на консультации при составлении плана лечения</p>
        </div>

      </div>

      <Dialog open={isAwardOpen} onOpenChange={setIsAwardOpen}>
        <DialogContent className="max-w-2xl border-amber-400/30 bg-background p-0">
          <DialogTitle className="sr-only">Отличник стоматологии</DialogTitle>
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/bucket/febd6b4a-816d-4fab-8662-9783a09e014b.jpg"
              alt="Грамота — Отличник стоматологии"
              className="mx-auto max-h-[70vh] w-auto"
            />
            <div className="px-6 py-4">
              <p className="font-sans text-base font-semibold text-foreground md:text-lg">
                Увыхмина Наталья Алексеевна
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-amber-400">
                ★ Отличник стоматологии · стаж 35 лет
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
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
      <div className="mb-1.5 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
      </div>
      <h3 className="mb-1 font-sans text-lg font-semibold text-foreground md:text-xl">{service.title}</h3>
      <p className="max-w-sm text-sm leading-relaxed text-foreground/80">{service.description}</p>
      <p className="mt-2 font-mono text-sm font-semibold" style={{ color: "#fbbf24", textShadow: "0 0 12px rgba(251, 191, 36, 0.5), 0 0 24px rgba(251, 191, 36, 0.25)" }}>{service.price}</p>
    </div>
  )
}