import { useState, useEffect } from "react"
import { Menu, ChevronDown, X, ArrowRight, Languages } from "lucide-react"
import { NavbarDesktop } from "./NavbarDesktop"
import { Button } from "./NavbarButton"
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  // Toggle main menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setActiveSubmenu(null) // Close any open submenus when toggling main menu
  }

  // Toggle submenu
  const toggleSubmenu = (submenu: string) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu)
  }

  // Close menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false)
        setActiveSubmenu(null)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest("#menuButton") && !target.closest("#menuContent")) {
        setIsMenuOpen(false)
        setActiveSubmenu(null)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <div className="sticky top-0 flex justify-end md:justify-center items-center w-full h-9 mx-auto px-4 md:py-5 lg:py-6 z-[70] bg-white">
      {/* Logo */}
      <img
        src="/logo.webp"
        alt="Kürbis"
        className="w-14 md:w-16 lg:w-18 z-40 mx-2 absolute -inset-1 lg:-inset-2 lg:left-5"
      />
      {/* Mobile Menu */}
      <nav className="relative md:hidden">
        <button
          id="menuButton"
          onClick={toggleMenu}
          className="flex items-center space-x-2 text-sm font-medium cursor-pointer p-2 hover:bg-[var(--color-secundario)] rounded-lg transition-colors z-40 relative"
          aria-expanded={isMenuOpen}
        >
          <div className="relative w-5 h-5">
            <Menu
              className={`w-7 h-7 text-black absolute inset-0 transition-opacity duration-300 m-auto ${isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              id="menuIcon"
            />
            <X
              className={`w-7 h-7 text-[var(--color-perla)] absolute inset-0 transition-opacity duration-300 m-auto ${isMenuOpen ? "opacity-100" : "opacity-0"
                }`}
              id="closeIcon"
            />
          </div>
        </button>

        {/* Mobile Menu Content */}
        <div
          id="menuContent"
          className={`fixed inset-0 bg-gradient-to-b from-[var(--color-secundario)]/95 to-[var(--color-secundario)] transition-all duration-700 ease-in-out backdrop-blur-sm z-10 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="container mx-auto px-8 h-full flex flex-col justify-center">
            <div className="mx-auto space-y-6 text-orange-100">
              {/* Inicio */}
              <a
                href="/"
                className="text-2xl font-medium text-[var(--color-primario)] block relative group active:scale-95 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">Inicio</span>
                <span className="absolute inset-0 bg-[var(--color-primario)]/10 scale-x-0 group-active:scale-x-100 transition-transform duration-300 rounded-lg"></span>
              </a>

              {/* Productos Submenu */}
              <div className="relative">
                <button
                  className="flex items-center space-x-2 text-2xl font-medium text-[var(--color-primario)] relative group active:scale-95 transition-all duration-300 w-full"
                  onClick={() => toggleSubmenu("productos")}
                >
                  <span className="relative z-10">Productos</span>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-300 ${activeSubmenu === "productos" ? "rotate-180" : ""
                      }`}
                  />
                  <span className="absolute inset-0 bg-[var(--color-primario)]/10 scale-x-0 group-active:scale-x-100 transition-transform duration-300 rounded-lg"></span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ml-4 rounded-lg ${activeSubmenu === "productos" ? "max-h-96 opacity-100 mt-2 p-4" : "max-h-0 opacity-0 mt-0 p-0"
                    }`}
                >
                  <a
                    href="/productos"
                    className="text-xl font-medium text-orange-100 block py-2 relative group active:scale-95 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative z-10">Productos</span>
                    <span className="absolute inset-0 bg-white/10 scale-x-0 group-active:scale-x-100 transition-transform duration-300 rounded-lg"></span>
                  </a>
                  <a
                    href="/productos/aceite"
                    className="text-xl font-medium text-orange-100 block py-2 relative group active:scale-95 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative z-10">Aceite Kürbis</span>
                    <span className="absolute inset-0 bg-white/10 scale-x-0 group-active:scale-x-100 transition-transform duration-300 rounded-lg"></span>
                  </a>
                  <a
                    href="/productos/alimento"
                    className="text-xl font-medium text-orange-100 block py-2 relative group active:scale-95 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative z-10">Alimento Kürbis</span>
                    <span className="absolute inset-0 bg-white/10 scale-x-0 group-active:scale-x-100 transition-transform duration-300 rounded-lg"></span>
                  </a>
                </div>
              </div>

              {/* Kürbis Submenu */}
              <div className="relative">
                <button
                  className="flex items-center space-x-2 text-2xl font-medium text-[var(--color-primario)] relative group active:scale-95 transition-all duration-300 w-full"
                  onClick={() => toggleSubmenu("kurbis")}
                >
                  <span className="relative z-10">Kürbis</span>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-300 ${activeSubmenu === "kurbis" ? "rotate-180" : ""
                      }`}
                  />
                  <span className="absolute inset-0 bg-[var(--color-primario)]/10 scale-x-0 group-active:scale-x-100 transition-transform duration-300 rounded-lg"></span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ml-4 rounded-lg ${activeSubmenu === "kurbis" ? "max-h-96 opacity-100 mt-2 p-4" : "max-h-0 opacity-0 mt-0 p-0"
                    }`}
                >
                  <a
                    href="/nosotros"
                    className="text-xl font-medium text-orange-100 block py-2 relative group active:scale-95 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative z-10">Nosotros</span>
                    <span className="absolute inset-0 bg-white/10 scale-x-0 group-active:scale-x-100 transition-transform duration-300 rounded-lg"></span>
                  </a>
                  <a
                    href="/mision"
                    className="text-xl font-medium text-orange-100 block py-2 relative group active:scale-95 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative z-10">Misión</span>
                    <span className="absolute inset-0 bg-white/10 scale-x-0 group-active:scale-x-100 transition-transform duration-300 rounded-lg"></span>
                  </a>
                  <a
                    href="/sostenibilidad"
                    className="text-xl font-medium text-orange-100 block py-2 relative group active:scale-95 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative z-10">Sostenibilidad</span>
                    <span className="absolute inset-0 bg-white/10 scale-x-0 group-active:scale-x-100 transition-transform duration-300 rounded-lg"></span>
                  </a>
                </div>
              </div>

              {/* Recetas */}
              <a
                href="/recetas"
                className="text-2xl font-medium text-[var(--color-primario)] block relative group active:scale-95 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">Recetas</span>
                <span className="absolute inset-0 bg-[var(--color-primario)]/10 scale-x-0 group-active:scale-x-100 transition-transform duration-300 rounded-lg"></span>
              </a>

              {/* Mobile Buy Button */}
              <Button className="flex md:hidden items-center transition-all duration-300">
                <a href="/comprar">Comprar</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Navbar */}
      <NavbarDesktop />


      {/* Desktop Buy Button */}
      <Button className="hidden md:flex absolute right-5 hover:scale-105 transition-all duration-300 ease-in-out items-center group gap-2">
        <a href="/comprar">Comprar</a>
      </Button>

      <Tooltip >
        <TooltipTrigger asChild>
          <button className="flex absolute right-15 md:right-35 lg:right-40 hover:scale-115 transition-all duration-300 ease-in-out items-center hover:border-1 border-black p-1 rounded-b-sm"><Languages /></button>
        </TooltipTrigger>
        <TooltipContent>
          <p>More lenguages available soon...</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
