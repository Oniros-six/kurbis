import { motion, useInView } from "framer-motion"
import { useRef } from "react"

// Timeline Step Component with Luxury Styling
function LuxuryTimelineStep({
  step,
  index,
  isLast,
}: {
  step: {
    title: string
    description: string
    image: string
    alt: string
  }
  index: number
  isLast: boolean
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.3 }}
      className="relative flex items-center justify-center mb-20 md:mb-32"
    >
      {/* Desktop Layout */}
      <div className="hidden md:flex w-full max-w-6xl items-center">
        {isEven ? (
          <>
            {/* Content Left */}
            <div className="w-5/12 pr-12 text-right">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: index * 0.3 + 0.2 }}
              >
                <div className="mb-4 w-16 h-[1px] bg-[var(--color-primario)] ml-auto"></div>
                <h3 className="font-serif text-3xl lg:text-4xl font-light text-[var(--color-primario)] mb-6">{step.title}</h3>
                <p className="text-[var(--color-perla)] leading-relaxed text-lg font-light">{step.description}</p>
              </motion.div>
            </div>

            {/* Center Circle and Line */}
            <div className="w-2/12 flex flex-col items-center relative">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.6, delay: index * 0.3 + 0.4 }}
                className="w-8 h-8 bg-[var(--color-primario)] rounded-full border-4 border-[var(--color-background)] shadow-2xl z-10 relative"
              >
                <div className="absolute inset-1 bg-[var(--color-background)] rounded-full"></div>
                <div className="absolute inset-2 bg-[var(--color-primario)] rounded-full"></div>
              </motion.div>

              {/* Continuous line that extends through all steps */}
              <div className="absolute top-4 w-[1px] bg-gradient-to-b from-[var(--color-primario)] via-[var(--color-primario)]/70 to-[var(--color-primario)]/50 h-[calc(100%+8rem)]" />
            </div>

            {/* Image Right */}
            <div className="w-5/12 pl-12">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: index * 0.3 + 0.5 }}
                className="relative"
              >
                <div className="absolute -top-4 -left-4 w-full h-full border border-[var(--color-primario)]/30"></div>
                <div className="relative overflow-hidden bg-[var(--color-background-alt)]">
                  <img
                    src={step.image}
                    alt={step.alt}
                    width={500}
                    height={350}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </>
        ) : (
          <>
            {/* Image Left */}
            <div className="w-5/12 pr-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: index * 0.3 + 0.5 }}
                className="relative"
              >
                <div className="absolute -top-4 -right-4 w-full h-full border border-[var(--color-primario)]/30"></div>
                <div className="relative overflow-hidden bg-[var(--color-background-alt)]">
                  <img
                    src={step.image}
                    alt={step.alt}
                    width={500}
                    height={350}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Center Circle and Line */}
            <div className="w-2/12 flex flex-col items-center relative">
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }}
                transition={{ duration: 0.6, delay: index * 0.3 + 0.4 }}
                className="w-8 h-8 bg-[var(--color-primario)] rounded-full border-4 border-[var(--color-background)] shadow-2xl z-10 relative"
              >
                <div className="absolute inset-1 bg-[var(--color-background)] rounded-full"></div>
                <div className="absolute inset-2 bg-[var(--color-primario)] rounded-full"></div>
              </motion.div>

              {/* Continuous line that extends through all steps */}
              <div className="absolute top-4 w-[1px] bg-gradient-to-b from-[var(--color-primario)] via-[var(--color-primario)]/70 to-[var(--color-primario)]/50 h-[calc(100%+8rem)]" />
            </div>

            {/* Content Right */}
            <div className="w-5/12 pl-12 text-left">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: index * 0.3 + 0.2 }}
              >
                <div className="mb-4 w-16 h-[1px] bg-[var(--color-primario)]"></div>
                <h3 className="font-serif text-3xl lg:text-4xl font-light text-[var(--color-primario)] mb-6">{step.title}</h3>
                <p className="text-[var(--color-perla)] leading-relaxed text-lg font-light">{step.description}</p>
              </motion.div>
            </div>
          </>
        )}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden w-full max-w-sm">
        <div className="flex">
          {/* Timeline Line and Circle */}
          <div className="flex flex-col items-center mr-8 relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 + 0.3 }}
              className="w-6 h-6 bg-[var(--color-primario)] rounded-full border-2 border-[var(--color-background)] shadow-lg z-10 relative"
            >
              <div className="absolute inset-1 bg-[var(--color-background)] rounded-full"></div>
              <div className="absolute inset-[6px] bg-[var(--color-primario)] rounded-full"></div>
            </motion.div>

            {/* Continuous line for mobile */}
            <div className="absolute top-3 w-[1px] bg-gradient-to-b from-[var(--color-primario)] via-[var(--color-primario)]/70 to-[var(--color-primario)]/50 h-[calc(100%+5rem)]" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: index * 0.3 + 0.4 }}
              className="mb-6 relative"
            >
              <div className="absolute -top-2 -left-2 w-full h-full border border-[var(--color-primario)]/20"></div>
              <div className="relative bg-[var(--color-background-alt)] overflow-hidden">
                <img
                  src={step.image}
                  alt={step.alt}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>
            </motion.div>
            <div className="mb-3 w-12 h-[1px] bg-[var(--color-primario)]"></div>
            <h3 className="font-serif text-xl font-light text-[var(--color-primario)] mb-4">{step.title}</h3>
            <p className="text-[var(--color-perla)] leading-relaxed font-light">{step.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Luxury Timeline Section Component
export default function TimeLine() {
  const timelineSteps = [
    {
      title: "El oro verde de Austria",
      description:
        `Austria es mundialmente famoso por su aceite de semillas de zapallo, el “oro verde de Austria”, sin duda una especialidad culinaria emblemática, arraigada en la historia como patrimonio biológico y cultural del departamento de Styria. El color verde oscuro de este aceite, con matices rojos, su aroma almendrado, su alto valor nutricional, su sabor fino y delicado pero, al mismo tiempo, intenso, y sus propiedades saludables lo hacen único. Es un elemento indispensable en la cocina de esta región. Poco a poco se va conociendo en otros países del mundo y ahora en Uruguay.`,
      image: "/placeholder.svg?height=350&width=500",
      alt: "",
    },
    {
      title: "Un tesoro invaluable",
      description:
        "Este aceite es elaborado con las semillas de zapallo Cucurbita pepo var. Styriaca. Pertenecen a la familia de las cucurbitáceas, son oleaginosas, no son transgénicas, son grandes, verdes oscuras, sin cáscaras, cubiertas con una fina piel, libres de gluten. Son una fuente inagotable de nutrientes, ricas en componentes funcionales. Son un tesoro invaluable: guardan en su interior historias de generaciones, tradiciones y prácticas culturales propias del territorio de Austria. Un legado vivo creado en Styria por los agricultores locales hace más de 100 años, reconocido por la Unión Europea desde el año 1996.",
      image: "/img/nosotros/dedos.webp?height=350&width=500",
      alt: "Dedos con una semilla",
    },
    {
      title: "Somos pioneros en Uruguay y en la región",
      description:
        "Somos pioneros y lideramos la producción artesanal de aceite y alimento vegetal de semillas de zapallo Cucurbita pepo var. Styriaca en Uruguay y en la región, con el nombre de Kürbis y con la planta de elaboración ubicada en Piriápolis. Tenemos el afán de brindar alternativas saludables, innovadoras y sostenibles, inspirados en el impulso cultural y la preservación de este patrimonio biológico y cultural de Austria, bajo la atenta mirada que nos dio el único experto austríaco en Uruguay, quien se dedicó más de 20 años a esta producción.",
      image: "/img/nosotros/manos.webp?height=350&width=500",
      alt: "Manos con semillas",
    },
    {
      title: "El sabor auténtico de Austria transmitido a Kürbis",
      description:
        "Nuestro tutor adquirió un amplio conocimiento, experiencia y pasión en mantener la tradición de la receta original, con un sabor y calidad verdaderamente representativos de los artesanos de Styria, y nos transmitió su legado para preservarlo de generación en generación.",
      image: "/img/nosotros/mapa.webp?height=350&width=500",
      alt: "Mapa señalando Austria y Uruguay",
    },

  ]

  return (
    <section className="py-32 px-4 bg-[url(/img/nosotros/laboratorio.jpeg)] bg-fixed bg-cover bg-center relative overflow-hidden">
      {/* Luxury Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primario)]/5 via-transparent to-[var(--color-primario)]/5 pointer-events-none" />
      <div className="absolute inset-0 bg-black/80 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[var(--color-primario)]/0 via-[var(--color-primario)] to-[var(--color-primario)]/0"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-24 relative">
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-0 w-[25%] h-[1px] bg-gradient-to-r from-[var(--color-primario)] to-transparent"></div>
          <div className="absolute top-1/2 right-0 w-[25%] h-[1px] bg-gradient-to-l from-[var(--color-primario)] to-transparent"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-block px-12 relative"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[var(--color-primario)] mb-8">
              CULTURA FAMILIAR
            </h2>
            <p className="text-lg md:text-xl text-[var(--color-perla)] max-w-3xl mx-auto leading-relaxed font-light">
              Semillas,<br className="min-[420px]:hidden"/> memorias que llevan vida <br/>
              Una apuesta por el patrimonio biológico y cultural de Austria
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Continuous background line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[var(--color-primario)]/30 via-[var(--color-primario)]/50 to-[var(--color-primario)]/30 transform -translate-x-1/2 hidden md:block" />
          <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[var(--color-primario)]/30 via-[var(--color-primario)]/50 to-[var(--color-primario)]/30 md:hidden" />

          {timelineSteps.map((step, index) => (
            <LuxuryTimelineStep key={index} step={step} index={index} isLast={index === timelineSteps.length - 1} />
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[var(--color-primario)]/0 via-[var(--color-primario)] to-[var(--color-primario)]/0"></div>
    </section>
  )
}
