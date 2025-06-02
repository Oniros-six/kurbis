"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function NavbarDesktop() {

    return (
        <NavigationMenu viewport={false} className="hidden md:flex w-full items-center justify-center">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink className="text-lg font-medium hover:bg-[var(--color-complementario)]" asChild>
                        <a href="/" className="flex items-center gap-2 ">
                            Inicio
                        </a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className="text-lg font-medium hover:bg-[var(--color-complementario)]" asChild>
                        <a href="/productos" className="flex items-center gap-2">
                            Productos
                        </a>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem >
                    <NavigationMenuTrigger className="text-lg font-medium hover:bg-[var(--color-complementario)] data-[state=open]:bg-[var(--color-complementario)] data-[state=open]:hover:bg-[var(--color-complementario)] data-[state=open]:focus:bg-[var(--color-complementario)]">Kurbis</NavigationMenuTrigger>
                    <NavigationMenuContent >
                        <NavigationMenuLink className="text-md hover:bg-[var(--color-complementario)]">
                            <a href="/mision">Mision</a>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="text-md hover:bg-[var(--color-complementario)]">
                            <a href="/sustentabilidad">Sustentabilidad</a>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="text-md hover:bg-[var(--color-complementario)]">
                            <a href="/nosotros">Nosotros</a>
                        </NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className="text-lg font-medium hover:bg-[var(--color-complementario)]" asChild>
                        <a href="/recetas" className="flex items-center gap-2">
                            Recetas
                        </a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu >
    )
}
