import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { useState, useCallback, type SetStateAction } from "react"
import CuadroInformativo from "./CuadroInformativo"

type content = {
  imagen: string
  alt: string
  withInfo: boolean
  info?: string
}

export function CarouselProduct({ contenido }: { contenido: content[] }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const onSlideChange = useCallback((api: { selectedScrollSnap: () => SetStateAction<number> }) => {
    if (!api) return
    setCurrentSlide(api.selectedScrollSnap())
  }, [])

  // Verificar si el slide actual tiene withInfo: true
  const shouldShowInfo = contenido[currentSlide]?.withInfo || false
  const info = shouldShowInfo ? contenido[currentSlide].info : ""

  return (
    <section className="p-4 lg:py-16 lg:px-4 bg-[var(--color-background-alt)] group">
      <div className="max-w-100 mx-auto fade-in-up ">
        <div className="bg-[var(--color-primario)]/10 border border-[var(--color-primario)]/30 p-4 sm:p-8 text-center">
          <Carousel
            opts={{ loop: true, align: "start" }}
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
                      alt={contenido[index].alt}
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Mostrar el div con transición desde la esquina */}
           <CuadroInformativo info={info} shouldShowInfo={shouldShowInfo} />

            <CarouselPrevious className="opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-all duration-200 
            absolute -left-7 top-1/2 md:-left-8 z-20
        flex items-center justify-center hover:scale-110 
        bg-white/80 text-black backdrop-blur-sm border-gray-200/50 shadow-sm 
        h-6 w-6 md:h-8 md:w-8 rounded-full"
            />
            <CarouselNext className="opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-all duration-200 
            absolute -right-7 top-1/2 md:-right-8 z-20
        flex items-center justify-center hover:scale-110 
        bg-white/80 text-black backdrop-blur-sm border-gray-200/50 shadow-sm 
        h-6 w-6 md:h-8 md:w-8 rounded-full"
            />
          </Carousel>
        </div>
      </div>
    </section>
  )
}        
