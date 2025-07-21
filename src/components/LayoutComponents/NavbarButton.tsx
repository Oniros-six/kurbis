import type React from "react"

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  url: string
}

export function Button({ children, className = "", variant = "primary", url, ...props }: ButtonProps) {
  const baseClasses =
    "px-6 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out cursor-pointer"
  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[var(--color-primario)] to-[var(--color-complementario)] text-black hover:shadow-lg",
    secondary:
      "bg-[var(--color-secundario)] text-[var(--color-perla)] hover:bg-[var(--color-secundario/30)]",
  }

  return (
    <a
      href={url}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
