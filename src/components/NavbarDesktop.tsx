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
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <a href="/" className="flex items-center gap-2">
                            Inicio
                        </a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <a href="/productos" className="flex items-center gap-2">
                            Productos
                        </a>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem >
                    <NavigationMenuTrigger>Kurbis</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>
                            <a href="/mision">Mision</a>
                        </NavigationMenuLink>
                        <NavigationMenuLink>
                            <a href="/sustentabilidad">Sustentabilidad</a>
                        </NavigationMenuLink>
                        <NavigationMenuLink>
                            <a href="/nosotros">Nosotros</a>
                        </NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <a href="/recetas" className="flex items-center gap-2">
                            Recetas
                        </a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu >
    )
}
