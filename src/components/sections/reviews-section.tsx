import { useReveal } from "@/hooks/use-reveal"

const reviews = [
  {
    author: "Пациент клиники",
    date: "14 июля",
    doctor: "Увыхмина Наталья Алексеевна",
    text: "Удивительный врач, всегда всё подробно расскажет, безошибочно найдёт, где надо лечить. Осмотрев, сразу нашла причину и предложила лечить зуб без анестезии. Было страшно, но я доверилась и не успела опомниться, как всё произошло: быстро, без боли и, как всегда, качественно и красиво! И правда зубная фея!",
    liked: "Внимание со стороны персонала, чистота и стиль кабинетов, сразу можно в клинике сделать снимки. Все врачи очень хорошие, внимательные и профессионалы своего дела.",
    source: "ПроДокторов",
  },
  {
    author: "Пациент клиники",
    date: "Канун Нового года",
    doctor: "Увыхмина Наталья Алексеевна",
    text: "Хочу рассказать историю о спасении моего зуба. Резко разболелся зуб, я начал искать врача. Перед тем как найти Наталью Алексеевну, я попал к двум докторам, которые могли предложить только удаление. Я не терял надежды и мне повезло. Доктор провела осмотр, рассказала подробно схему лечения и в конечном итоге спасла мой зуб. Была проделана сложная и качественная работа. Наталья Алексеевна, благодарю Вас за ваш труд и золотые ручки!",
    liked: "",
    source: "ПроДокторов",
  },
  {
    author: "Анна, мама Артёма (5 лет) и Софии (8 лет)",
    date: "Отзыв мамы",
    doctor: "Краснова Александра Васильевна",
    text: "Сын с трёх лет боялся стоматологов, после первого визита к Александре Васильевне сам просится на приём! Дочке вылечили четыре зуба за один визит — без слёз и истерик. Спасибо за такое отношение к деткам!",
    liked: "",
    source: "Детская стоматология",
  },
]

export function ReviewsSection() {
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
              filter: "drop-shadow(0 0 1px #fff) drop-shadow(0 0 2px #fff) drop-shadow(0 0 4px rgba(255,255,255,0.95)) drop-shadow(0 0 10px rgba(255,255,255,0.7))",
            }}
          >
            Отзывы
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Что говорят наши пациенты</p>
          <p
            className="mt-3 text-sm font-semibold md:text-base"
            style={{
              background: "linear-gradient(135deg, #f472b6, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter:
                "drop-shadow(0 0 1px #fff) drop-shadow(0 0 2px #fff) drop-shadow(0 0 4px rgba(255,255,255,0.95)) drop-shadow(0 0 10px rgba(255,255,255,0.7))",
            }}
          >
            Больше отзывов о нашей клинике можно прочитать на{" "}
            <a
              href="https://prodoctorov.ru/ryazan/lpu/30220-zubnye-fei/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline"
            >
              ПроДокторов
            </a>
            ,{" "}
            <a
              href="https://zoon.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline"
            >
              Zoon
            </a>{" "}
            и{" "}
            <a
              href="https://yandex.ru/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline"
            >
              Яндекс
            </a>
            .
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <div
              key={i}
              className={`group flex flex-col gap-4 rounded-2xl border border-foreground/10 bg-foreground/5 p-6 backdrop-blur-sm transition-all duration-700 hover:border-foreground/20 hover:bg-foreground/10 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-sans text-sm font-semibold text-foreground">{review.author}</p>
                  <p className="font-mono text-xs text-foreground/50">{review.date}</p>
                </div>
                <span
                  className="shrink-0 rounded-full px-3 py-1 font-mono text-xs"
                  style={{
                    background: "linear-gradient(135deg, #f472b620, #a78bfa20)",
                    border: "1px solid #a78bfa40",
                    color: "#c084fc",
                  }}
                >
                  {review.source}
                </span>
              </div>

              <div className="h-px w-full bg-foreground/10" />

              <p className="font-mono text-xs text-foreground/50">Врач: {review.doctor}</p>

              <p className="flex-1 text-sm leading-relaxed text-foreground/80">
                {review.text}
              </p>

              {review.liked && (
                <div
                  className="rounded-xl p-4"
                  style={{
                    background: "linear-gradient(135deg, #f472b610, #a78bfa10)",
                    border: "1px solid #a78bfa20",
                  }}
                >
                  <p className="mb-1 font-mono text-xs text-foreground/50">Понравилось</p>
                  <p className="text-xs leading-relaxed text-foreground/70">{review.liked}</p>
                </div>
              )}

              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-sm" style={{ color: "#f472b6" }}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}