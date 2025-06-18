import type React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "primary" | "secondary"
}

export function Button({ children, className = "", variant = "primary", ...props }: ButtonProps) {
  const baseClasses = "px-6 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out cursor-pointer"
  const variantClasses = {
    primary: "bg-gradient-to-r from-[var(--color-primario)] to-[var(--color-complementario)] text-black hover:shadow-lg",
    secondary: "bg-[var(--color-secundario)] text-[var(--color-perla)] hover:bg-[var(--color-secundario/30)]",
  }

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
