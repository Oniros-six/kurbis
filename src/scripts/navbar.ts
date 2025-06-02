// Interfaces y tipos
interface HTMLElementWithStyle extends HTMLElement {
    style: CSSStyleDeclaration;
}

// Elementos del DOM
const menuButton = document.getElementById("menuButton");
const menuContent = document.getElementById("menuContent");
const kurbisButton = document.getElementById("kurbisButton");
const kurbisSubmenu = document.getElementById("kurbisSubmenu");
const recetasLink = document.getElementById("recetasLink") as HTMLElementWithStyle | null;
const comprarOnlineButton = document.getElementById("comprarOnlineButton") as HTMLElementWithStyle | null;
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const chevronIcon = kurbisButton?.querySelector("svg");

// Estados
let isSubmenuOpen = false;
let isMenuOpen = false;

// Funciones auxiliares
/**
 * Calcula la altura del submenú para el desplazamiento
 */
function calculateSubmenuHeight(): number {
    if (!kurbisSubmenu) return 0;
    const submenuRect = kurbisSubmenu.getBoundingClientRect();
    return submenuRect.height;
}

/**
 * Cierra todos los menús y restaura el estado inicial
 */
function closeMenus(): void {
    menuContent?.classList.add("translate-x-full");
    document.body.style.overflow = "";
    if (menuIcon) menuIcon.style.opacity = "1";
    if (closeIcon) closeIcon.style.opacity = "0";
    isMenuOpen = false;
    menuButton?.setAttribute("aria-expanded", "false");
    closeSubmenu();
}

/**
 * Abre el submenú móvil y ajusta la posición de los elementos
 */
function openSubmenu(): void {
    kurbisSubmenu?.classList.remove("hidden");
    requestAnimationFrame(() => {
        kurbisSubmenu?.classList.remove("opacity-0", "-translate-y-2");
        const displacement = calculateSubmenuHeight();
        if (recetasLink) {
            recetasLink.style.transform = `translateY(${displacement}px)`;
        }
        if (comprarOnlineButton) {
            comprarOnlineButton.style.transform = `translateY(${displacement}px)`;
        }
    });
    chevronIcon?.classList.add("rotate-180");
    isSubmenuOpen = true;
}

/**
 * Cierra el submenú móvil y restaura la posición de los elementos
 */
function closeSubmenu(): void {
    if (!kurbisSubmenu) return;
    kurbisSubmenu.classList.add("opacity-0", "-translate-y-2");
    if (recetasLink) {
        recetasLink.style.transform = "translateY(0)";
    }
    if (comprarOnlineButton) {
        comprarOnlineButton.style.transform = "translateY(0)";
    }
    chevronIcon?.classList.remove("rotate-180");
    setTimeout(() => {
        kurbisSubmenu.classList.add("hidden");
    }, 300);
    isSubmenuOpen = false;
}

// Event Listeners
menuButton?.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    menuButton.setAttribute("aria-expanded", isMenuOpen.toString());
    
    if (isMenuOpen) {
        menuContent?.classList.remove("translate-x-full");
        document.body.style.overflow = "hidden";
        if (menuIcon) menuIcon.style.opacity = "0";
        if (closeIcon) closeIcon.style.opacity = "1";
    } else {
        closeMenus();
    }
});

kurbisButton?.addEventListener("click", (e) => {
    e.stopPropagation();
    if (isSubmenuOpen) {
        closeSubmenu();
    } else {
        openSubmenu();
    }
});

// Event listeners para los enlaces del submenú
const submenuLinks = kurbisSubmenu?.querySelectorAll("a");
submenuLinks?.forEach(link => {
    link.addEventListener("click", closeMenus);
});

// Cerrar menús al hacer clic fuera
document.addEventListener("click", (event) => {
    const target = event.target as Node;
    
    // Para menú móvil
    if (!menuButton?.contains(target) && !menuContent?.contains(target)) {
        closeMenus();
    }
}); 