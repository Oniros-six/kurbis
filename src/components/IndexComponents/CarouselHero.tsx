import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Rueda from "./Rueda.jsx";

const slides = [
  {
    imagen: "/carousel/ubicacion.jpg",
    titulo: "el 'oro' verde de austria",
    alt:"",
    subtitulo: "- Ahora en Uruguay -",
  },
  {
    imagen: "/carousel/slider2.webp",
    titulo: "El Rey del bienestar y la salud",
    alt: "Zapallo",
    subtitulo: "",
  },
  // {
  //   imagen: "/carousel/slider0.webp",
  //   titulo: "Un patrimonio biológico & cultural",
  //   alt:"Zapallo",
  //   subtitulo: "- Desde Austria a Uruguay -",
  // },
  {
    imagen: "/carousel/slider0.webp",
    titulo: "El regalo ideal",
    alt: "Botella de aceite Kurbis como regalo",
    subtitulo: "- Para los amantes de lo saludable & gourmet -",
  },
];

export function CarouselHero() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<number | undefined>(undefined);

  // Autoplay
  useEffect(() => {
    if (timeoutRef.current !== undefined) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => {
      if (timeoutRef.current !== undefined) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [index]);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full aspect-video xl:aspect-[2.2/1]  group">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={slides[index].imagen}
            alt={slides[index].alt}
            className="w-full h-full object-cover"
          />
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
                {slides[index].titulo}
              </h2>
              <p
                className="text-[var(--color-perla)] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl
                  font-bold leading-relaxed break-words"
              >
                {slides[index].subtitulo}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Controles */}
      <button
        onClick={prev}
        className="opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-all duration-200 
            absolute left-2 top-1/2 z-20
        flex items-center justify-center hover:scale-110 
        bg-white/80 text-black backdrop-blur-sm border-gray-200/50 shadow-sm 
        h-6 w-6 md:h-8 md:w-8 rounded-full"
        aria-label="Anterior"
      >
        <ArrowLeft size={15} />
      </button>
      <button
        onClick={next}
        className="opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-all duration-200 
            absolute right-2 top-1/2 z-20
        flex items-center justify-center hover:scale-110 
        bg-white/80 text-black backdrop-blur-sm border-gray-200/50 shadow-sm 
        h-6 w-6 md:h-8 md:w-8 rounded-full"
        aria-label="Siguiente"
      >
        <ArrowRight size={15} />
      </button>
      <div className="absolute left-3 -bottom-10 lg:-bottom-5 ">
        <Rueda text="BIENVENIDOS A KÜRBIS — WILLKOMMEN BEI KÜRBIS — " />
      </div>
    </div>
  );
}
