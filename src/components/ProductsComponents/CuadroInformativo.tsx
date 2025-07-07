type CuadroInformativoProps = {
  info: string | undefined
  shouldShowInfo: boolean
  atLeft?: boolean
  atTop?: boolean
}

export default function CuadroInformativo({
  info,
  shouldShowInfo,
  atLeft= true,
  atTop = true,
}: CuadroInformativoProps) {
  const horizontal = atLeft? "-left-10" : "-right-10"
  const vertical = atTop ? "-top-10" : "-bottom-10"
  const hiddenHorizontal = atLeft? "-left-0" : "-right-0"
  const hiddenVertical = atTop ? "top-0" : "bottom-0"

  return (
    <div
      className={`absolute flex justify-center items-center w-30 md:w-36 h-25 border-[var(--color-primario)] border-3 backdrop-blur-sm bg-[rgba(0,0,0,0.4)] shadow-lg transition-all duration-200 ease-out px-2
        ${shouldShowInfo
          ? `${horizontal} ${vertical} opacity-100 scale-100`
          : `${hiddenHorizontal} ${hiddenVertical} opacity-0 scale-75 pointer-events-none`
        }`}
    >
      <span className="text-xs font-semibold leading-tight text-white whitespace-pre-line text-left">
        {info}
      </span>
    </div>
  )
}
