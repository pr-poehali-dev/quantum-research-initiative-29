import { useReveal } from "@/hooks/use-reveal"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Результаты
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Реальные истории пациентов</p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {[
            {
              number: "01",
              title: "Виниры",
              category: "Эстетическая стоматология",
              year: "2025",
              direction: "left",
              image: "",
            },
            {
              number: "02",
              title: "Имплантация под ключ",
              category: "Имплантология",
              year: "2025",
              direction: "right",
              image: "",
            },
            {
              number: "03",
              title: "Исправление прикуса",
              category: "Ортодонтия · брекеты и элайнеры",
              year: "2024",
              direction: "left",
              image: "https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/files/151078de-3159-4194-8615-dd18c46a4565.jpg",
            },
          ].map((project, i) => (
            <ProjectCard key={i} project={project} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: { number: string; title: string; category: string; year: string; direction: string; image?: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return project.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex items-center justify-between border-b border-foreground/10 py-6 transition-all duration-700 hover:border-foreground/20 md:py-8 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        marginLeft: index % 2 === 0 ? "0" : "auto",
        maxWidth: index % 2 === 0 ? "85%" : "90%",
      }}
    >
      <div className="flex items-center gap-4 md:gap-8">
        <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
          {project.number}
        </span>
        {project.image && (
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl shadow-md md:h-20 md:w-20">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        )}
        <div>
          <h3 className="mb-1 font-sans text-2xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-3xl lg:text-4xl">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-foreground/50 md:text-sm">{project.category}</p>
        </div>
      </div>
      <span className="font-mono text-xs text-foreground/30 md:text-sm">{project.year}</span>
    </div>
  )
}