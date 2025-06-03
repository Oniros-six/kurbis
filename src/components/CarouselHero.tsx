import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselHero() {
  // TODO Deshardcodear el numero de slides
  const totalSlides = 4;
  const plugin = Autoplay({ delay: 3000, stopOnInteraction: true })
  return (
    <Carousel
      opts={{
        loop: true,
        align: "start",
      }}
      plugins={[plugin]}
      >
      <CarouselContent className="static h-[28vh] md:h-[40vh] lg:h-[50vw] xl:h-[92vh] ">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="w-full">
                <img src={`/carousel/slider${index}.webp`} alt="Austria Uruguay" className="w-full object-cover" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* // TODO Asegurarme que no les importe si los manejadores no se ven */}
      <div className="flex justify-center -mt-10">
        <CarouselPrevious
          className="static translate-y-0 mr-2 hover:bg-primary hover:text-white transition-colors hidden"
        />
        <CarouselNext
          className="static translate-y-0 ml-2 hover:bg-primary hover:text-white transition-colors hidden"
        />
      </div>
    </Carousel>
  )
}
