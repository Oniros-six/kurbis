export default function CuadroInformativo({ info, shouldShowInfo, atRight = true }: { info: string | undefined, shouldShowInfo: boolean, atRight?: boolean }) {
  return (
    <div
      className={`absolute flex justify-center items-center w-30 md:w-36 h-25 border-[var(--color-primario)] border-3 backdrop-blur-sm shadow-lg transition-all duration-200 ease-out px-2 ${shouldShowInfo
        ? `${atRight ? "-right-10" : "-left-10"} -top-10 opacity-100 scale-100`
        : `${atRight ? "-right-0 " : "-left-0  "} top-0 opacity-0 scale-75 pointer-events-none`
        }`}
    >
      <span className="text-xs font-semibold leading-tight text-[var(--color-primario)] whitespace-pre-line text-left">
        {info}
      </span>
    </div>
  )
}