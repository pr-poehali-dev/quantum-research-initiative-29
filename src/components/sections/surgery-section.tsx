import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"
import Icon from "@/components/ui/icon"

const surgery = [
  { title: "Удаление зуба", description: "Безболезненное удаление зубов любой сложности с современной анестезией", price: "от 3 500 ₽", direction: "left" },
  { title: "Удаление зуба мудрости", description: "Удаление ретинированных и дистопированных «восьмёрок» — быстро и аккуратно", price: "от 5 500 ₽", direction: "top" },
  { title: "Резекция верхушки корня", description: "Зубосохраняющая операция при кистах и гранулёмах у корня зуба", price: "от 7 000 ₽", direction: "right" },
  { title: "Пластика уздечки", description: "Коррекция уздечки губы или языка — быстрая операция с минимальным дискомфортом", price: "от 4 500 ₽", direction: "bottom" },
  { title: "Цистэктомия", description: "Удаление кисты челюсти с сохранением зуба — комплексная операция под контролем", price: "от 8 000 ₽", direction: "left" },
  { title: "Вскрытие абсцесса", description: "Срочная помощь при гнойных воспалениях — снимаем боль и устраняем очаг инфекции", price: "от 3 500 ₽", direction: "right" },
]

export function SurgerySection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl flex gap-10 items-stretch h-[calc(100vh-6rem)] md:h-[calc(100vh-4rem)]">
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <div
            className={`mb-6 transition-all duration-700 md:mb-8 ${
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
              Хирургия
            </h2>
            <p className="text-base font-semibold text-foreground md:text-lg">Зубосохраняющие операции и удаления — бережно и профессионально</p>

            <div className="mt-5 inline-flex flex-col gap-2 rounded-xl border border-foreground/10 bg-foreground/5 px-5 py-4">
              <span className="font-mono text-xs uppercase tracking-widest text-foreground/40">Приём ведёт</span>
              <p className="text-sm font-semibold text-foreground md:text-base">
                Демин Ефим Степанович
                <span className="ml-2 font-normal text-foreground/50">· Стоматолог-хирург, имплантолог · стаж 12+ лет</span>
              </p>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-3 md:gap-4">
            {surgery.map((s, i) => {
              const getRevealClass = () => {
                if (!isVisible) {
                  switch (s.direction) {
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
                  className={`group rounded-xl border border-foreground/10 bg-foreground/5 px-5 py-4 transition-all duration-700 hover:border-foreground/25 hover:bg-foreground/10 ${getRevealClass()}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Icon name="Scissors" size={14} className="text-foreground/50" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">0{i + 1}</span>
                  </div>
                  <h3 className="mb-1 font-sans text-lg font-semibold text-foreground md:text-xl">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/80">{s.description}</p>
                  <p className="mt-2 font-mono text-sm font-semibold" style={{ color: "#fbbf24", textShadow: "0 0 12px rgba(251, 191, 36, 0.5), 0 0 24px rgba(251, 191, 36, 0.25)" }}>{s.price}</p>
                </div>
              )
            })}
          </div>

          <div
            className={`mt-5 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            style={{ transitionDelay: "700ms" }}
          >
            <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(11)}>
              Записаться на консультацию
            </MagneticButton>
            <p className="mt-3 font-mono text-xs text-foreground/40">Окончательная стоимость определяется на консультации при составлении плана лечения</p>
          </div>
        </div>

        <div
          className={`hidden lg:flex shrink-0 flex-col justify-center gap-4 transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="h-[220px] w-[260px] overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://cdn.poehali.dev/files/769dbed3-6595-4093-be3c-e6f87b439cbb.jpg"
              alt="Демин Ефим Степанович — стоматолог-хирург на приёме"
              className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
            />
          </div>
          <div className="h-[160px] w-[260px] overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/bucket/e3ae9d8e-0637-4cfc-b31f-6d909b5e43cb.jpg"
              alt="Удаление зуба — бережно и безболезненно"
              className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
            />
          </div>
          <div className="h-[160px] w-[260px] overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/bucket/080727b9-2626-44ad-8599-737d1b3653a8.jpg"
              alt="Стерильные хирургические инструменты"
              className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  )
}