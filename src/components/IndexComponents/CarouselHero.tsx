import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Rueda from "./Rueda.jsx";
import CarouselLayover from "./CarouselLayover.js";

const slides = [
  {
    imagen: "/carousel/ubicacion.webp",
    titulo: "el 'oro' verde de austria",
    alt: "Botella de aceite vertiendo sobre contorno de Uruguay",
    subtitulo: "- Ahora en Uruguay -",
    priority: 'high',
    lazy: "eager",
    isH1: true
  },
  {
    imagen: "/carousel/zapallo.webp",
    titulo: "El Rey del bienestar y la salud",
    alt: "Zapallo",
    subtitulo: "",
    priority: "auto",
    lazy: "lazy",
    isH1: false
  },
  {
    imagen: "/carousel/semillas.webp",
    titulo: "Un patrimonio biológico & cultural",
    alt: "Semillas Kurbis",
    subtitulo: "- Desde Austria a Uruguay -",
    priority: "auto",
    lazy: "lazy",
    isH1: false
  },
  {
    imagen: "/carousel/regalo.webp",
    titulo: "El regalo ideal",
    alt: "Botella de aceite Kurbis como regalo",
    subtitulo: "- Para los amantes de lo saludable & gourmet -",
    priority: "auto",
    lazy: "lazy",
    isH1: false
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
    }, 6000);
    return () => {
      if (timeoutRef.current !== undefined) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [index]);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full aspect-[16/11] lg:aspect-[2.4/1] xl:aspect-[2.45/1] 2xl:aspect-5/2 group">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full flex justify-center content-center"
        >
          <img
            src={slides[index].imagen}
            alt={slides[index].alt}
            {...(slides[index].priority === 'high' && { fetchpriority: 'high' })}
            {...(slides[index].lazy === 'lazy' && { loading: 'lazy' })}
            className="w-full h-full object-cover lg:size-auto"
          />
          <CarouselLayover titulo={slides[index].titulo} subtitulo={slides[index].subtitulo} isH1={slides[index].isH1} />
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
      <div className="absolute left-3 -bottom-10 lg:-bottom-4 ">
        <Rueda text="BIENVENIDOS A KÜRBIS — WILLKOMMEN BEI KÜRBIS — " />
      </div>
    </div>
  );
}