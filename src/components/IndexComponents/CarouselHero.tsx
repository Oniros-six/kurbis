import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export function CarouselHero() {
  // TODO Contenido esta hardcodeado, cuando se haga el cms lo deshardcodeo
  // TODO buscar imagenes que tengan la resolucion correcta
  const contenido = [
    {
      imagen: "/carousel/slider1.webp",
      titulo: "el 'oro' verde de austria",
      subtitulo: "- Ahora en Uruguay -",
    },
    {
      imagen: "/carousel/slider2.jpg",
      titulo: "El Rey del bienestar y la salud",
      subtitulo: "",
    },
    {
      imagen: "/carousel/slider0.webp",
      titulo: "Un patrimonio biológico & cultural",
      subtitulo: "- Desde Austria a Uruguay -",
    },
    {
      imagen: "/carousel/slider3.jpg",
      titulo: "El regalo ideal",
      subtitulo: "- Para los amantes de lo saludable & gourmet -",
    },
  ]

  const plugin = Autoplay({ delay: 3000, stopOnInteraction: true })
  return (
    <Carousel
      opts={{ loop: true, align: "start" }}
      plugins={[plugin]}
    >
      <CarouselContent className="xl:h-[92vh] 2xl:h-[95vh] aspect-video xl:aspect-auto">
        {contenido.map((item, index) => (
          <CarouselItem key={index}>
            {/* Contenedor relativo para que el overlay se posicione sobre él */}
            <div className="w-full relative">
              <img src={contenido[index].imagen} alt="Austria Uruguay" className="w-full object-cover" />

              {/* Overlay centrado */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="bg-[var(--color-secundario)]/50  p-4 sm:p-6 md:p-8
                max-w-full
                w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]
                text-center"
                >
                  <h2
                    className="text-[var(--color-perla)] text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl
                  font-bold uppercase mb-2 leading-tight"
                  >
                    {item.titulo}
                  </h2>
                  <p
                    className="text-[var(--color-perla)] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl
                  font-bold leading-relaxed break-words"
                  >
                    {item.subtitulo}
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>

  )
}
