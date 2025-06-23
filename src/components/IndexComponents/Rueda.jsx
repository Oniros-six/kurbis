import "../../styles/rueda.css"

function Rueda({ text }) {
    const totalLength = text.length;
    const degPerChar = 360 / totalLength;

    return (
        <div className="spinning-text-wrapper size-[100px] text-[0.50rem] md:size-[200px] md:text-base">
            <div className="spinning-text">
                <p>
                    {text.split("").map((letra, i) => (
                        <span
                            className="letter origin-[0px_50px] md:origin-[0px_100px]"
                            key={i}
                            style={{
                                transform: `rotate(${degPerChar * i}deg)`,
                                opacity: letra === ' ' ? 0 : 1, // Espacios invisibles pero ocupan posición
                            }}
                        >
                            {letra === ' ' ? '\u00A0' : letra} {/* Espacio no rompible para mantener posición */}
                        </span>
                    ))}
                </p>
            </div>
            <img src="/AustriaUruguay.svg" alt="Banderas" className="flags-icon flags" />
        </div>
    );
}

export default Rueda;