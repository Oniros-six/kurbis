import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Component() {
  const faqData = [
    {
      id: "item-1",
      question: "¿Qué ventajas tiene el aceite Kürbis por estar sin filtrar?",
      answer: "Al estar sin filtrar presenta más polifenoles y antioxidantes y se realza más el sabor.",
    },
    {
      id: "item-2",
      question: "¿Los productos Kürbis son libres de lactosa?",
      answer:
        "Sí, todos nuestros productos Kürbis son completamente libres de lactosa, lo que los hace ideales para personas con intolerancia a la lactosa.",
    },
    {
      id: "item-3",
      question: "¿Los productos Kürbis son libres de gluten?",
      answer:
        "Las semillas de zapallo Cucurbita pepo, var Styriaca, naturalmente no tienen gluten, pero aún la planta de elaboración no está certificada libre de gluten."
    },
    {
      id: "item-4",
      question:
        "¿Se puede consumir el Aceite Kürbis junto con el Alimento vegetal Kürbis para potenciar las propiedades nutricionales?",
      answer:
        "Consulta con tu profesional de salud de confianza o en un sitio web fiable y seguro."
    },
    {
      id: "item-5",
      question:
        "¿Los Productos Kürbis tienen propiedades antihelmínticas intestinales?",
      answer:
        "Consulta con tu profesional de salud de confianza o en un sitio web fiable y seguro."
    },
    {
      id: "item-6",
      question: "¿Se puede usar el aceite Kürbis para el cuidado de la piel, aromaterapia y hacer masaje terapéutico?",
      answer:
        "Consulta con expertos en cosmetología, masoterapia y aromaterapia.",
    },
    {
      id: "item-7",
      question: "¿Es posible quitar una mancha de aceite kürbis de una prenda de vestir?",
      answer:
        "Sólo tenés que hacer el lavado habitual y luego colgar la prenda a pleno sol para que salga la mancha."
    },
  ]

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-2 md:px-6 lg:px-8 py-12 ">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-primario)] rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-[var(--color-perla)]">
            Conocé más acerca de nuestros productos
          </h1>
          <h2 className="text-xl text-[var(--color-perla)] max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más frecuentes sobre nuestros productos Kürbis
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-1" className="space-y-6">
            {faqData.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-200 overflow-hidden"
              >
                <AccordionTrigger className="text-left items-center px-2 md:px-8 py-2 md:py-4 hover:no-underline hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 transition-all duration-300 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-orange-500 [&>svg]:transition-transform [&>svg]:duration-300">
                  <div className="flex items-center gap-4 w-full">
                    <div className="flex-shrink-0 w-8 h-8 bg-[var(--color-primario)] rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">
                      {index + 1}
                    </div>
                    <span className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-gray-900 leading-relaxed pr-2">
                      {item.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 md:px-8 pb-8">
                  <div className="ml-12 pt-2">
                    <div className="w-full h-px bg-gradient-to-r from-orange-200 to-transparent mb-3 md:mb-6"></div>
                    <p className="text-gray-700 text-base leading-relaxed">{item.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
