import { useReveal } from "@/hooks/use-reveal"
import { useState, type FormEvent } from "react"
import { MagneticButton } from "@/components/magnetic-button"
import Icon from "@/components/ui/icon"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [showDirections, setShowDirections] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      return
    }

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-24">
          <div className="flex flex-col justify-center overflow-y-auto max-h-screen py-4">
            <div
              className={`mb-6 transition-all duration-700 md:mb-8 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:mb-3 md:text-7xl lg:text-8xl">
                Запишитесь
                <br />
                к нам
              </h2>
              <p className="font-mono text-xs text-foreground/60 md:text-base">/ Первый визит — бесплатная консультация</p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {/* Телефоны */}
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <Icon name="Phone" size={12} className="text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Телефон</span>
                </div>
                <div className="flex flex-col gap-1">
                  <a href="tel:+74912954202" className="text-base text-foreground transition-colors hover:text-foreground/70 md:text-xl">
                    +7 (4912) 95-42-02
                  </a>
                  <a href="tel:+79105094063" className="text-base text-foreground transition-colors hover:text-foreground/70 md:text-xl">
                    +7 (910) 509-40-63
                  </a>
                </div>
              </div>

              {/* Адрес */}
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Icon name="MapPin" size={12} className="text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Адрес</span>
                </div>
                <p className="text-base text-foreground md:text-xl">Рязань, ул. Маяковского, 57</p>
                <p className="mt-0.5 font-mono text-xs text-foreground/50">1 этаж, с торца дома</p>
                <p className="mt-0.5 font-mono text-xs text-foreground/50">напротив Центрального рынка</p>
              </div>

              {/* Карта */}
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "450ms" }}
              >
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=39.726219%2C54.629562&z=16&pt=39.726219%2C54.629562&l=map"
                  className="h-32 w-full rounded-lg border border-foreground/10"
                  frameBorder="0"
                  allowFullScreen
                  title="Карта проезда"
                />
              </div>

              {/* Как добраться — сворачиваемый блок */}
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "550ms" }}
              >
                <button
                  onClick={() => setShowDirections(!showDirections)}
                  className="flex items-center gap-2 font-mono text-xs text-foreground/60 hover:text-foreground/90 transition-colors"
                >
                  <Icon name={showDirections ? "ChevronUp" : "ChevronDown"} size={12} />
                  Как добраться
                </button>

                {showDirections && (
                  <div className="mt-3 space-y-3 rounded-lg border border-foreground/10 bg-foreground/5 p-4 text-xs text-foreground/80 leading-relaxed">
                    <div>
                      <p className="mb-1 font-mono text-foreground/50 uppercase tracking-wider text-[10px]">Автобусы</p>
                      <p>№ 4, 13, 15, 16, 20, 21, 24, 57</p>
                    </div>
                    <div>
                      <p className="mb-1 font-mono text-foreground/50 uppercase tracking-wider text-[10px]">Троллейбусы</p>
                      <p>№ 3, 5, 8, 16</p>
                    </div>
                    <div>
                      <p className="mb-1 font-mono text-foreground/50 uppercase tracking-wider text-[10px]">Маршрутные такси</p>
                      <p>№ 77, 98</p>
                    </div>
                    <div className="border-t border-foreground/10 pt-3">
                      <p className="mb-1 font-mono text-foreground/50 uppercase tracking-wider text-[10px]">Маршрут</p>
                      <p>Остановка «Центральный рынок» → 200 м по ул. Маяковского до д. 57.</p>
                      <p className="mt-1">Или остановка «Стадион Спартак» (авт. те же + марш. № 88, тролл. № 16) → ~4 мин пешком.</p>
                    </div>
                    <a
                      href="https://yandex.ru/maps/?ll=39.726219,54.629562&z=17&pt=39.726219,54.629562"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-foreground/60 hover:text-foreground/90 transition-colors border-b border-foreground/20"
                    >
                      Открыть маршрут в Яндекс Картах
                      <Icon name="ExternalLink" size={10} />
                    </a>
                  </div>
                )}
              </div>

              {/* Соцсети */}
              <div
                className={`flex gap-2 transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "650ms" }}
              >
                {["Telegram", "VK", "WhatsApp"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="border-b border-transparent font-mono text-xs text-foreground/60 transition-all hover:border-foreground/60 hover:text-foreground/90"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Minimal form */}
          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <label className="mb-1 block font-mono text-xs text-foreground/60 md:mb-2">Имя</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-1.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-2 md:text-base"
                  placeholder="Ваше имя"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <label className="mb-1 block font-mono text-xs text-foreground/60 md:mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-1.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-2 md:text-base"
                  placeholder="your@email.com"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <label className="mb-1 block font-mono text-xs text-foreground/60 md:mb-2">Сообщение</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-1.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-2 md:text-base"
                  placeholder="Что вас беспокоит или какую процедуру хотите записаться?"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "650ms" }}
              >
                <MagneticButton
                  variant="primary"
                  size="lg"
                  className="w-full disabled:opacity-50"
                >
                  {isSubmitting ? "Отправляем..." : "Записаться на приём"}
                </MagneticButton>
                {submitSuccess && (
                  <p className="mt-3 text-center font-mono text-sm text-foreground/80">Заявка отправлена! Мы перезвоним в ближайшее время 🧚</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}