export default function carouselLayover({ titulo, subtitulo, isH1 }: { titulo: string, subtitulo?: string, isH1: boolean }) {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <div
                className="bg-[var(--color-secundario)]/50 p-4 sm:p-6 md:p-8
                max-w-full
                w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]
                h-25 md:h-35 lg:h-45 xl:h-60
                content-center text-center"
            >
                {isH1 ? <h1
                    className="text-[var(--color-perla)] text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl
                  font-bold uppercase mb-2 leading-tight"
                >
                    {titulo}
                </h1>
                    :
                    <h2
                        className="text-[var(--color-perla)] text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl
                  font-bold uppercase mb-2 leading-tight"
                    >
                        {titulo}
                    </h2>}
                <p
                    className="text-[var(--color-perla)] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl
                  font-bold leading-relaxed break-words"
                >
                    {subtitulo}
                </p>
            </div>
        </div>
    )
}