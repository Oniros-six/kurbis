import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MessageCircle, User, CreditCard, Truck, Phone } from "lucide-react"
import { smoothScroll } from "../scripts/smoothScroll"
import { Separator } from "./ui/separator"

const Image = ({ img, titulo }: { img: string, titulo: string }) => {
  return (
    <div className="relative flex flex-col gap-2 items-center">
      <div
        className="absolute -top-5  w-full h-full border border-[var(--color-primario)]/30"
      />
      <div
        className="absolute -top-4 right-1 w-full h-full border border-[var(--color-primario)]/30"
      />
      <div className="relative flex items-end overflow-hidden h-full p-4">
        <img src={`/img/` + img}
          width={300}
          height={250}
          className="w-min" />
      </div>
      <Button
        size="lg"
        className="w-full bg-[var(--color-background)] z-10 px-12 py-6 text-lg rounded-none shadow-2xl hover:shadow-[var(--color-secundario)]/20 transition-all duration-300 transform hover:scale-105 border border-[var(--color-primario)] tracking-wider font-[Roboto] font-medium"
      >
        {titulo}
      </Button>
    </div>
  )
}

export default function BuySection() {
  const phone = "59894398865";
  const message = "Hola, quiero más información sobre sus productos";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  const precioAceite = "800,00"
  const precioAlimento = "1.450,00"
  const duoWellness = "1.800,00"
  const superVital = "3.600,00"
  const saboresAustria = "4.000,00"
  const steps = [
    {
      number: "01",
      icon: <Phone className="w-8 h-8" />,
      title: "Hacés clic en 'Hablar por WhatsApp'",
      description: "Iniciás la conversación con nosotros de forma directa y personal.",
    },
    {
      number: "02",
      icon: <User className="w-8 h-8" />,
      title: "Te respondemos personalmente",
      description: "Nuestro equipo te atiende para resolver todas tus dudas y necesidades.",
    },
    {
      number: "03",
      icon: <CreditCard className="w-8 h-8" />,
      title: "Aceptamos transferencia bancaria o efectivo",
      description: "Elegís la forma de pago que más te convenga, sin complicaciones.",
    },
    {
      number: "04",
      icon: <Truck className="w-8 h-8" />,
      title: "Enviamos a todo el país luego del pago",
      description: "Tu pedido llega a donde estés, con el cuidado que merece.",
    },
  ]

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-perla)]">
      {/* Hero Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Luxury Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primario)]/5 via-transparent to-[var(--color-primario)]/5 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[var(--color-primario)]/0 via-[var(--color-primario)] to-[var(--color-primario)]/0"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[var(--color-primario)]/30"></div>
          <div className="absolute -bottom-3 md:bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[var(--color-primario)]/30"></div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[var(--color-perla)] mb-6 leading-tight">
              Tu compra es <span className="text-[var(--color-primario)]">100% personalizada</span>
            </h1>
            <div className="w-24 h-[1px] bg-[var(--color-primario)] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 mb-16 font-light tracking-wide">
              Solo vas a encontrar estos productos aquí
            </p>
          </motion.div>

        </div>
        {/* WhatsApp Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex justify-center">
            <Button
              onClick={() => smoothScroll("#precios")}
              size="lg"
              className="bg-transparent text-[var(--color-perla)] cursor-pointer px-12 py-6 text-lg font-light tracking-wider rounded-none shadow-2xl hover:shadow-[var(--color-secundario)]/20 transform hover:scale-105 border border-[var(--color-primario)] transition-all duration-300"
            >
              Conoce nuestros precios
            </Button>
          </div>
        </motion.div>
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[var(--color-primario)]/0 via-[var(--color-primario)] to-[var(--color-primario)]/0"></div>
      </section>

      {/* Price section */}
      <section id="precios" className="pt-32 pb-16 px-8 bg-[var(--color-background)] relative">
        {/* Luxury Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primario)]/3 via-transparent to-[var(--color-primario)]/3 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[var(--color-primario)] mb-8">
              Productos que solo encontraras aqui
            </h2>
            <div className="w-24 h-[1px] bg-[var(--color-primario)] mx-auto mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-10">
              <Image img="comprar/oil-bottle.webp" titulo={"$U  " + precioAceite} />
              <Image img="comprar/natural.webp" titulo={"$U  " + precioAlimento} />
            </div>
          </motion.div>
        </div>
        <Separator className="max-w-70 md:max-w-100 lg:max-w-130 mx-auto border-[var(--color-primario)] my-20 md:my-22 lg:my-26" />
        {/* promos section */}
        <div className="max-w-7xl mx-auto text-center relative z-10 ">
          <a href="/#promociones">
            <button
              className="cursor-pointer w-fit bg-[var(--color-primario)] font-medium xs:text-lg sm:text-2xl text-black mb-5 py-2.5 px-4 sm:px-6 mx-auto transition-all duration-300 transform hover:scale-105 "
            >
              No olvides nuestras promociones por tiempo limitado
            </button>
          </a>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-[1px] bg-[var(--color-primario)] mx-auto mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-10">
              <Image img="duo-wellness-sr.webp" titulo={"$U  " + duoWellness} />
              <Image img="super-vital-sr.webp" titulo={"$U  " + superVital} />
              <Image img="sabores-austria-sr.webp" titulo={"$U  " + saboresAustria} />
            </div>
          </motion.div>
        </div>
        <Separator className="max-w-70 md:max-w-100 lg:max-w-130 mx-auto border-[var(--color-primario)] my-20 md:my-22 lg:my-26" />
        {/* Soon section */}
        <div className="max-w-4xl mx-auto text-center relative z-10 md:mt-25">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[var(--color-primario)] mb-8">
              Proximamente...
            </h2>
            <div className="w-24 h-[1px] bg-[var(--color-primario)] mx-auto mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-10">
              <Image img="comprar/vainilla.webp" titulo="Vainas de Vainilla" />
              <Image img="comprar/cacao.webp" titulo="Cacao" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-background)] relative">
        <div className="mx-auto text-center px-px">

          <blockquote className="font-[arizonia]">
            <span className="text-3xl xs:text-4xl sm:text-6xl text-[#D4AF37]/30 mr-1 sm:mr-2">“</span>
            <span className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-[#D4AF37] ">Calidad y Tradición Austriaca</span>
            <span className="text-3xl xs:text-4xl sm:text-6xl text-[#D4AF37]/30 mr-1 sm:m-0">”</span>
          </blockquote>

        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 px-4 bg-[var(--color-background-alt)] relative">
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[var(--color-primario)]/0 via-[var(--color-primario)] to-[var(--color-primario)]/0"></div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20 relative"
          >
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-0 w-[25%] h-[1px] bg-gradient-to-r from-[var(--color-primario)] to-transparent"></div>
            <div className="absolute top-1/2 right-0 w-[25%] h-[1px] bg-gradient-to-l from-[var(--color-primario)] to-transparent"></div>

            <div className="inline-block px-4 bg-[var(--color-background-alt)] relative">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[var(--color-primario)] mb-6">
                ¿Cómo funciona?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                Un proceso simple y directo para que tengas la mejor experiencia de compra
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-[var(--color-background)] p-1 h-full">
                  <div className="border border-[var(--color-primario)]/20 p-8 h-full text-center hover:border-[var(--color-primario)]/40 transition-all duration-300">
                    {/* Step Number */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-primario)] text-[var(--color-background)] rounded-full text-xl font-bold mb-6">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="text-[var(--color-primario)] mb-6 flex justify-center">{step.icon}</div>

                    {/* Title */}
                    <h3 className="font-serif text-lg font-light text-[var(--color-primario)] mb-4 leading-tight">{step.title}</h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed font-light">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 px-4 bg-[var(--color-background)] relative">
        {/* Luxury Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primario)]/3 via-transparent to-[var(--color-primario)]/3 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[var(--color-primario)] mb-8">
              ¿Listo para hacer tu pedido?
            </h2>
            <div className="w-24 h-[1px] bg-[var(--color-primario)] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Nuestro equipo está esperando para ayudarte con tu compra personalizada
            </p>
            <a href={url} target="new_blank">
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-[var(--color-perla)] px-16 py-8 text-xl font-normal tracking-wider rounded-none shadow-2xl hover:shadow-[var(--color-secundario)]/20 transition-all duration-300 transform hover:scale-105 border border-[var(--color-secundario)]/30 mb-12"
              >
                <MessageCircle className="w-7 h-7 mr-2" />
                Hablar por WhatsApp
              </Button>
            </a>
            {/* Disclaimer */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-sm text-gray-500 italic font-light"
            >
              Por el momento, no contamos con compra online automatizada.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-[var(--color-background-alt)] relative">
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[var(--color-primario)]/0 via-[var(--color-primario)] to-[var(--color-primario)]/0"></div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[var(--color-primario)] mb-8">
              ¿Por qué elegir compra personalizada?
            </h2>
            <div className="w-24 h-[1px] bg-[var(--color-primario)] mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-[var(--color-primario)]/10 border border-[var(--color-primario)]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-10 h-10 text-[var(--color-primario)]" />
              </div>
              <h3 className="font-serif text-xl font-light text-[var(--color-primario)] mb-4">Atención Personal</h3>
              <p className="text-gray-300 font-light leading-relaxed">
                Hablás directamente con nosotros, sin intermediarios ni sistemas automatizados.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-[var(--color-primario)]/10 border border-[var(--color-primario)]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-10 h-10 text-[var(--color-primario)]" />
              </div>
              <h3 className="font-serif text-xl font-light text-[var(--color-primario)] mb-4">Pago Flexible</h3>
              <p className="text-gray-300 font-light leading-relaxed">
                Elegís entre transferencia bancaria o efectivo, como más te convenga.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-[var(--color-primario)]/10 border border-[var(--color-primario)]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-10 h-10 text-[var(--color-primario)]" />
              </div>
              <h3 className="font-serif text-xl font-light text-[var(--color-primario)] mb-4">Envío Nacional</h3>
              <p className="text-gray-300 font-light leading-relaxed">
                Llegamos a todo el país con el cuidado que tus productos merecen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
