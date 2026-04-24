import { useState } from "react"
import { useReveal } from "@/hooks/use-reveal"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Icon from "@/components/ui/icon"

type Project = {
  number: string
  title: string
  category: string
  year: string
  direction: string
  image?: string
  gallery?: string[]
}

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [openProject, setOpenProject] = useState<Project | null>(null)

  const projects: Project[] = [
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
      image: "https://cdn.poehali.dev/files/18f38e88-128a-4cb8-bafc-3cb7a9639c3e.jpg",
      gallery: [
        "https://cdn.poehali.dev/files/18f38e88-128a-4cb8-bafc-3cb7a9639c3e.jpg",
        "https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/files/36883415-a15b-44fb-9ebc-11c621f7c4e9.jpg",
        "https://cdn.poehali.dev/projects/9d515a8d-6162-4d67-834a-3a3c9c632b11/files/ec889f94-1d95-413d-978a-5271137aaea3.jpg",
      ],
    },
  ]

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
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              index={i}
              isVisible={isVisible}
              onOpen={() => project.gallery && setOpenProject(project)}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!openProject} onOpenChange={(open) => !open && setOpenProject(null)}>
        <DialogContent className="max-w-5xl">
          <DialogHeader>
            <DialogTitle className="font-sans text-2xl font-light">
              {openProject?.title}
            </DialogTitle>
            <p className="font-mono text-xs text-foreground/60">
              {openProject?.category} · {openProject?.year}
            </p>
          </DialogHeader>
          <div className="grid gap-4">
            {openProject?.gallery?.map((src, idx) => (
              <div key={idx} className="overflow-hidden rounded-xl">
                <img src={src} alt={`${openProject.title} ${idx + 1}`} className="h-auto w-full object-contain" />
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isVisible,
  onOpen,
}: {
  project: Project
  index: number
  isVisible: boolean
  onOpen: () => void
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return project.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  const isClickable = !!project.gallery

  return (
    <div
      onClick={isClickable ? onOpen : undefined}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={(e) => {
        if (isClickable && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault()
          onOpen()
        }
      }}
      className={`group flex items-center justify-between border-b border-foreground/10 py-6 transition-all duration-700 hover:border-foreground/20 md:py-8 ${getRevealClass()} ${
        isClickable ? "cursor-pointer hover:bg-foreground/5 rounded-xl px-3 md:px-4" : ""
      }`}
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
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-foreground/30 md:text-sm">{project.year}</span>
        {isClickable && (
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/5 text-foreground/60 transition-all group-hover:bg-foreground group-hover:text-background md:h-10 md:w-10">
            <Icon name="ArrowUpRight" size={18} />
          </span>
        )}
      </div>
    </div>
  )
}