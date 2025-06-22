import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,

} from "@/components/ui/carousel"

export function CarouselHero() {
    const contenido = [
        {
            imagen: "/img/productos/Foto39.jpg",
        },
        {
            imagen: "/img/productos/smoothie.jpg",
        },
        {
            imagen: "/img/productos/infoAlimento.jpg",
        },

    ]

    const plugin = Autoplay({ delay: 3000, stopOnInteraction: true })
    return (
        <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[plugin]}
        >
            <CarouselContent className=" aspect-video xl:aspect-auto">
                {contenido.map((item, index) => (
                    <CarouselItem key={index}>
                        {/* Contenedor relativo para que el overlay se posicione sobre él */}
                        <div className="w-full relative">
                            <img src={contenido[index].imagen} alt="Austria Uruguay" className="w-full object-cover" />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>

    )
}
