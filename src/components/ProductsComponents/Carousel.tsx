import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel"

type content = {
  imagen: string
  alt: string
}

export function CarouselProduct({ contenido }: { contenido: content[] }) {

  const plugin = Autoplay({ delay: 3000, stopOnInteraction: true })
  return (
    <section className="p-4 lg:py-16 lg:px-4 bg-[var(--color-background-alt)]">
      <div className="max-w-100 mx-auto fade-in-up">
        <div className="bg-[var(--color-primario)]/10 border border-[var(--color-primario)]/30 p-4 sm:p-8 text-center">
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[plugin]}
            className="relative"
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
          </Carousel>
        </div>
      </div>
    </section>
  )
}