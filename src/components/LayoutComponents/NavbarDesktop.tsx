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
                    <NavigationMenuLink className="p-2 text-lg font-medium hover:bg-[var(--color-complementario)]" asChild>
                        <a href="/" className="flex items-center gap-2 ">
                            Inicio
                        </a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem >
                    <NavigationMenuTrigger className="p-2 text-lg font-medium hover:bg-[var(--color-complementario)] data-[state=open]:bg-[var(--color-complementario)] data-[state=open]:hover:bg-[var(--color-complementario)] data-[state=open]:focus:bg-[var(--color-complementario)]">Productos</NavigationMenuTrigger>
                    <NavigationMenuContent className="z-10">
                        <NavigationMenuLink className="text-md w-28 hover:bg-[var(--color-complementario)]">
                            <a href="/productos">Productos</a>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="text-md w-28 hover:bg-[var(--color-complementario)]">
                            <a href="/aceite">Aceite</a>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="text-md w-28 hover:bg-[var(--color-complementario)]">
                            <a href="/alimento">Alimento</a>
                        </NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem >
                    <NavigationMenuTrigger className="p-2 text-lg font-medium hover:bg-[var(--color-complementario)] data-[state=open]:bg-[var(--color-complementario)] data-[state=open]:hover:bg-[var(--color-complementario)] data-[state=open]:focus:bg-[var(--color-complementario)]">Kürbis</NavigationMenuTrigger>
                    <NavigationMenuContent className="z-10">
                        <NavigationMenuLink className="text-md hover:bg-[var(--color-complementario)]">
                            <a href="/nosotros">Nosotros</a>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="text-md hover:bg-[var(--color-complementario)]">
                            <a href="/mision">Mision</a>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="text-md hover:bg-[var(--color-complementario)]">
                            <a href="/sostenibilidad">Sostenibilidad</a>
                        </NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className="p-2 text-lg font-medium hover:bg-[var(--color-complementario)]" asChild>
                        <a href="/recetas" className="flex items-center gap-2">
                            Recetas
                        </a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu >
    )
}
