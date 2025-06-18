interface HTMLElementWithStyle extends HTMLElement {
  style: CSSStyleDeclaration;
}

const menuButton = document.getElementById("menuButton");
const menuContent = document.getElementById("menuContent");
const productsButton = document.getElementById("productsButton");
const productsSubmenu = document.getElementById("productsSubmenu");
const kurbisButton = document.getElementById("kurbisButton");
const kurbisSubmenu = document.getElementById("kurbisSubmenu");
const recetasLink = document.getElementById("recetasLink") as HTMLElementWithStyle | null;
const comprarOnlineButton = document.getElementById("comprarOnlineButton") as HTMLElementWithStyle | null;
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const productsChevron = productsButton?.querySelector("svg");
const kurbisChevron = kurbisButton?.querySelector("svg");

let isMenuOpen = false;
let openSubmenuElement: HTMLElement | null = null;

function calculateSubmenuHeight(el: HTMLElement): number {
  return el.getBoundingClientRect().height;
}

function closeMenus() {
  menuContent?.classList.add("translate-x-full");
  document.body.style.overflow = "";
  menuIcon && (menuIcon.style.opacity = "1");
  closeIcon && (closeIcon.style.opacity = "0");
  isMenuOpen = false;
  menuButton?.setAttribute("aria-expanded", "false");
  if (openSubmenuElement) closeSubmenu(openSubmenuElement);
}

function openSubmenu(button: HTMLElement, submenu: HTMLElement) {
  if (!submenu) return;

  submenu.classList.remove("hidden");
  requestAnimationFrame(() => {
    submenu.classList.remove("opacity-0", "scale-95");
    const displacement = calculateSubmenuHeight(submenu);
    recetasLink && (recetasLink.style.transform = `translateY(${displacement}px)`);
    comprarOnlineButton && (comprarOnlineButton.style.transform = `translateY(${displacement}px)`);
    submenu.style.transform = `translateY(${displacement}px)`;
  });
  openSubmenuElement = submenu;
}

function closeSubmenu(submenu: HTMLElement) {
  submenu.classList.add("opacity-0", "scale-95");
  recetasLink && (recetasLink.style.transform = "translateY(0)");
  comprarOnlineButton && (comprarOnlineButton.style.transform = "translateY(0)");

  const chevron = submenu === productsSubmenu ? productsChevron : kurbisChevron;
  chevron?.classList.remove("rotate-180");

  setTimeout(() => submenu.classList.add("hidden"), 300);
  openSubmenuElement = null;
}

menuButton?.addEventListener("click", (e) => {
  e.stopPropagation();
  isMenuOpen = !isMenuOpen;
  menuButton.setAttribute("aria-expanded", isMenuOpen.toString());

  if (isMenuOpen) {
    menuContent?.classList.remove("translate-x-full");
    document.body.style.overflow = "hidden";
    menuIcon && (menuIcon.style.opacity = "0");
    closeIcon && (closeIcon.style.opacity = "1");
  } else {
    closeMenus();
  }
});

productsButton?.addEventListener("click", (e) => {
  e.stopPropagation();
  if (openSubmenuElement === productsSubmenu) {
    closeSubmenu(productsSubmenu!);
  } else {
    if (openSubmenuElement) closeSubmenu(openSubmenuElement);
    openSubmenu(productsButton, productsSubmenu!);
  }
});

kurbisButton?.addEventListener("click", (e) => {
  e.stopPropagation();
  if (openSubmenuElement === kurbisSubmenu) {
    closeSubmenu(kurbisSubmenu!);
  } else {
    if (openSubmenuElement) closeSubmenu(openSubmenuElement);
    openSubmenu(kurbisButton, kurbisSubmenu!);
  }
});

document.addEventListener("click", (e) => {
  const target = e.target as Node;
  if (!menuButton?.contains(target) && !menuContent?.contains(target)) {
    closeMenus();
  }
});

productsSubmenu?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => closeMenus()));
kurbisSubmenu?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => closeMenus()));
