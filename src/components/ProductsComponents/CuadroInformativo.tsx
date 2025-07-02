export default function CuadroInformativo({info, shouldShowInfo}:{info:string|undefined, shouldShowInfo:boolean}) {
  return (
    <div
      className={`absolute flex justify-center items-center size-25 border-[var(--color-primario)] border-3 backdrop-blur-sm shadow-lg transition-all duration-200 ease-out ${shouldShowInfo
        ? '-top-10 -right-10 opacity-100 scale-100'
        : 'top-0 right-0 opacity-0 scale-75 pointer-events-none'
        }`}
    >
      <span className="text-xs font-semibold text-center leading-tight text-[var(--color-primario)]">
        {info}
      </span>
    </div>
  )
}