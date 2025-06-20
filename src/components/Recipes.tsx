import { motion } from "framer-motion"

export default function Recetas() {
   const recetas = [
  {
    id: 1,
    titulo: "Ensalada Styriaca",
    imagen: "/img/recetas/ensalada.jpg",
    descripcion: `Prepara la ensalada que más te guste, sazona y marina con
vinagre a tu elección y una cantidad generosa de Aceite Kürbis.
Mezcla bien y disfruta de un plato fresco, delicioso y nutritivo.`
  },
  {
    id: 2,
    titulo: "Helado Pleasure",
    imagen: "/img/recetas/helado.jpg",
    descripcion: `Combina el helado clásico de vainilla con el sabor fino y delicado
del Aceite Kürbis, que complementará a la vainilla clásica.
Cuando lo pruebes, vas a sentir que es un verdadero placer.`
  },
  {
    id: 3,
    titulo: "Pesto Austríaco",
    imagen: "/img/recetas/pesto.jpg",
    descripcion: `Mezcla los siguientes ingredientes:
1/2 taza de semillas de zapallo tostadas sin aceite, o las semillas
que prefieras. Agrega 2 cucharadas de queso parmesano, 2
dientes de ajo, 1 taza de hojas frescas de albahaca, 1/3 taza de
Aceite Kürbis, 1/8 cucharadita de sal marina.
Coloca los ingredientes en una procesadora o licuadora a alta
velocidad hasta que estén bien mezclados y obtengan la
consistencia que te guste.
Al terminar, puedes añadir más Aceite Kürbis a tu gusto.
Puedes agregar el pesto a la pasta, rebanadas de pan, sopas y
salsas para un sabor extra, o con queso grillado o quesadillas.
Te llamará la atención el sabor sutil y exclusivo de este nuevo
pesto.`
  },
  {
    id: 4,
    titulo: "Smoothie Super Cucurbita",
    imagen: "/img/recetas/smoothie.jpg",
    descripcion: `Mezcla 2 tazas de ananá, 1 taza de melón, 1 puñado de
espinacas, 3 cucharadas de alimento vegetal Kürbis, agua y unos
cubitos de hielo.
Licúa bien los ingredientes en una procesadora o batidora a alta
velocidad.
Vierte en vasos y decora tu smoothie con 1 cucharada de Aceite
Kürbis en cada vaso y hojas de menta.
Deleítate con el sabor y la nutrición de esta receta.`
  },
  {
    id: 5,
    titulo: "Crosstini Manjar",
    imagen: "/img/recetas/crostini.jpg",
    descripcion: `Mezcla el queso crema que te guste con Aceite Kürbis, hasta
obtener la consistencia y el sabor deseados.
Colócalo encima de rebanadas tostadas del pan que elijas.
Decora con Aceite Kürbis y con semillas de zapallo tostadas, y
disfruta de esta delicatessen.`
  }
];


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
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[var(--color-primario)]/30"></div>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[var(--color-primario)] mb-6 leading-tight">
                            Recetas
                        </h1>
                        <div className="w-24 h-[1px] bg-[var(--color-primario)] mx-auto mb-8"></div>
                        <p className="text-xl md:text-2xl text-gray-300 mb-16 font-light tracking-wide">
                            Con los productos Kürbis, imagina, crea recetas espectaculares, deleítate y compártelas en familia y con amigos
                        </p>
                    </motion.div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[var(--color-primario)]/0 via-[var(--color-primario)] to-[var(--color-primario)]/0"></div>
            </section>

            {/* Recipes Section with Background */}
            <section
                className="min-h-screen relative bg-[var(--color-background)]"
            >
                {/* Content Container */}
                <div className="relative z-10 py-20 px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Recipes Column */}
                        <div className="space-y-16">
                            {recetas.map((receta, index) => (
                                <motion.div
                                    key={receta.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    {/* Recipe Container */}
                                    <div className="bg-[var(--color-background)]/90 backdrop-blur-sm border border-[var(--color-primario)]/20 p-1">
                                        <div className="bg-[var(--color-background)] p-8 border border-[var(--color-primario)]/10">
                                            {/* Recipe Title */}
                                            <div className="text-center mb-8 relative">
                                                <div className="absolute top-1/2 left-0 w-[20%] h-[1px] bg-gradient-to-r from-[var(--color-primario)] to-transparent"></div>
                                                <div className="absolute top-1/2 right-0 w-[20%] h-[1px] bg-gradient-to-l from-[var(--color-primario)] to-transparent"></div>

                                                <div className="inline-block px-8 bg-[var(--color-background)]">
                                                    <h2 className="font-serif text-2xl md:text-3xl font-light text-[var(--color-primario)]">{receta.titulo}</h2>
                                                </div>
                                            </div>

                                            {/* Recipe Content */}
                                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                                {/* Image */}
                                                <div className="flex-shrink-0 w-full md:w-48 lg:w-[17rem]">
                                                    <div className=" bg-[var(--color-primario)]/10 border border-[var(--color-primario)]/30 p-2">
                                                        <img
                                                            src={receta.imagen}
                                                            alt={receta.titulo}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <div className="flex-1">
                                                    {receta.descripcion.split("\n").map((linea, i) => (
                                                        <p key={i} className="text-gray-300 font-light leading-relaxed text-lg">
                                                            {linea}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative corner elements */}
                                    <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-[var(--color-primario)]/50"></div>
                                    <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-[var(--color-primario)]/50"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Overlay pattern */}
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primario)]/5 via-transparent to-[var(--color-primario)]/5 pointer-events-none"></div>
            </section>
        </div>
    )
}
