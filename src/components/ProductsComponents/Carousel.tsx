import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel"
import { useState, useCallback, type SetStateAction } from "react"

export function CarouselProduct() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const contenido = [
    {
      imagen: "/img/productos/polvo.webp",
      withInfo: false,
    },
    {
      imagen: "/img/productos/smoothie.webp",
      withInfo: true,
    },
    {
      imagen: "/img/productos/infoAlimento.webp",
      withInfo: false,
    },
  ]

  const plugin = Autoplay({ delay: 3000, stopOnInteraction: true })

  const onSlideChange = useCallback((api: { selectedScrollSnap: () => SetStateAction<number> }) => {
    if (!api) return
    setCurrentSlide(api.selectedScrollSnap())
  }, [])

  // Verificar si el slide actual tiene withInfo: true
  const shouldShowInfo = contenido[currentSlide]?.withInfo || false

  return (
    <section className="p-4 lg:py-16 lg:px-4 bg-[var(--color-background-alt)]">
      <div className="max-w-100 mx-auto fade-in-up">
        <div className="bg-[var(--color-primario)]/10 border border-[var(--color-primario)]/30 p-4 sm:p-8 text-center">
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[plugin]}
            className="relative"
            setApi={(api) => {
              if (!api) return
              
              // Establecer slide inicial
              setCurrentSlide(api.selectedScrollSnap())
              
              // Escuchar cambios de slide
              api.on('select', () => onSlideChange(api))
            }}
          >
            <CarouselContent>
              {contenido.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="h-full">
                    <img
                      src={contenido[index].imagen}
                      alt="Austria Uruguay"
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Mostrar el div con transición desde la esquina */}
            <div 
              className={`absolute flex justify-center items-center size-25 border-[var(--color-primario)] border-1 bg-black backdrop-blur-sm shadow-lg transition-all duration-200 ease-out ${
                shouldShowInfo 
                  ? '-top-10 -right-10 opacity-100 scale-100' 
                  : 'top-0 right-0 opacity-0 scale-75 pointer-events-none'
              }`}
            >
              <span className="text-xs font-semibold text-center leading-tight text-[var(--color-primario)]">
                Información
              </span>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}