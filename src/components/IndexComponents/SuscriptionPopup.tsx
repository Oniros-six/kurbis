import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Mail} from "lucide-react"

export default function Component({isOpen, setIsOpen}:  {isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) {


  return (
    <div className="p-2">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md border-0 p-0">
          <Card className="border-0 shadow-lg py-0">
            <CardContent className="p-0">
              {/* Header con fondo de color */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 md:p-6 text-center text-[var(--color-perla)] rounded-t-lg">

                <div className="flex justify-center md:mb-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <CheckCircle className="h-12 w-12" />
                  </div>
                </div>

                <DialogHeader className="space-y-2">
                  <DialogTitle className="text-2xl font-bold text-black">¡Gracias por suscribirte!</DialogTitle>
                  <DialogDescription className="text-black text-base">
                    Tu suscripción ha sido confirmada exitosamente
                  </DialogDescription>
                </DialogHeader>
              </div>

              {/* Contenido principal */}
              <div className="p-2 md:p-6 text-center space-y-4 bg-[var(--color-background)]">
                <div className="flex justify-center">
                  <div className="bg-green-50 p-3 rounded-full">
                    <Mail className="h-8 w-8 text-green-900" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[var(--color-complementario)]">¡Bienvenido a la comunidad Kürbis!</h3>
                  <p className="text-[var(--color-perla)] text-sm leading-relaxed">
                    Recibirás nuestras últimas noticias, ofertas exclusivas y contenido de calidad directamente en tu
                    bandeja de entrada.
                  </p>
                </div>

                {/* Beneficios */}
                <div className="p-4 rounded-lg text-left bg-[var(--color-background-alt)]">
                  <h4 className="font-medium text-[var(--color-perla)] mb-2">Lo que recibirás:</h4>
                  <ul className="space-y-1 text-sm text-[var(--color-perla)]">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[var(--color-perla)]" />
                      Noticias sobre nuevos productos
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[var(--color-perla)]" />
                      Promociones y descuentos especiales
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[var(--color-perla)]" />
                      Acceso anticipado a nuevos productos
                    </li>
                  </ul>
                </div>

                {/* Botones de acción */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button onClick={() => setIsOpen(false)} className="flex-1 bg-green-600 hover:bg-green-700 text-black">
                    Continuar navegando
                  </Button>
                </div>

                {/* Nota adicional */}
                <p className="text-xs text-gray-500 pt-2">Revisa tu email para confirmar tu suscripción</p>
              </div>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  )
}
