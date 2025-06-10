import { motion } from "framer-motion"

export default function Recetas() {
    const recetas = [
        {
            id: 1,
            titulo: "Ensalada Styriaca",
            imagen: "/img/recetas/ensalada.jpg",
            descripcion: `Prepará la ensalada que más te guste, sazoná y mariná con vinagre a tu elección, añade una cantidad generosa de Aceite Kürbis. 
            Mezclá bien y disfrutá de un plato fresco, delicioso y nutritivo.`
        },
        {
            id: 2,
            titulo: "Helado Pleasure",
            imagen: "/img/recetas/helado.jpg",
            descripcion: `Combiná el helado clásico de vainilla con el sabor fino y delicado del Aceite Kürbis, que complementará a la vainilla clásica. 
Cuando lo pruebes,  vas a sentir que  es un verdadero placer.`
        },
        {
            id: 3,
            titulo: "Pesto Austríaco",
            imagen: "/img/recetas/pesto3.jpg",
            descripcion: `Mezclá los siguientes ingredientes:
1/2 taza de Semillas de Zapallo tostadas sin aceite o las semillas que prefieras. Agregá 2 cucharadas de Queso Parmesano, 2 dientes de ajo, 1 taza de hojas frescas de Albahaca, 1/3 taza de Aceite Kürbis, 1/8 cucharadita de Sal Marina. 
Poné los ingredientes en una procesadora o  licuadora a alta velocidad hasta que estén bien mezclados y obtengan la consistencia que te guste.
Cuando terminás podés añadir más Aceite Kürbis a tu gusto.
Podés agregar el pesto a  la pasta, a rebanadas de pan, a sopas y salsas para un sabor extra, o con queso grillado o quesadilla.
Te llamará la atención el sabor sutil y exclusivo de este nuevo pesto.`
        },
        {
            id: 4,
            titulo: "Smoothie Super Cucurbita",
            imagen: "/img/recetas/smoothie.jpg",
            descripcion: `Mezclá 2 tazas de ananá, 1 taza de melón, 1 puñado de espinacas, 3 cucharadas de Alimento vegetal Kürbis, agua y unos cubitos de hielo.
Licuá bien los ingredientes en una procesadora o batidora a alta velocidad.
Vertí en vasos y decorá tu smoothie con 1 cucharada de Aceite Kürbis en cada vaso y hojas de menta.
Deleitate del sabor y nutrición de esta receta.`
        },
        {
            id: 5,
            titulo: "Crosstini Manjar",
            imagen: "/img/recetas/crostini.jpg",
            descripcion: `Mezclá el queso crema que te guste, con Aceite Kürbis, hasta obtener la consistencia y sabor deseado.
Colocalo encima de rebanadas tostadas del pan que elijas. 
Decorá con Aceite Kürbis y con semillas de zapallo tostadas y disfrutá de esta delicia.`
        }
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
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[var(--color-primario)]/30"></div>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[var(--color-primario)] mb-6 leading-tight">
                            Recetas
                        </h1>
                        <div className="w-24 h-[1px] bg-[var(--color-primario)] mx-auto mb-8"></div>
                        <p className="text-xl md:text-2xl text-gray-300 mb-16 font-light tracking-wide">
                            Con los productos Kürbis, usá tu imaginación, crea recetas espectaculares, deléitate y compartilas en familia y con amigos.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[var(--color-primario)]/0 via-[var(--color-primario)] to-[var(--color-primario)]/0"></div>
            </section>

            {/* Recipes Section with Background */}
            <section
                className="min-h-screen relative"
                style={{
                    backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.85), rgba(10, 10, 10, 0.85)), url('/img/recetas/fondo.png')`,

                }}
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
                                                <div className="flex-shrink-0 w-full md:w-48">
                                                    <div className="aspect-square bg-[var(--color-primario)]/10 border border-[var(--color-primario)]/30 p-2">
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
