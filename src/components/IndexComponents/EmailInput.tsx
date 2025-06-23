import type React from "react"

import { useState } from "react"

export default function EmailInput() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Email submitted:", email)
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        <label htmlFor="email" className="text-[var(--color-perla)]/90 text-sm font-medium mb-1 block">
          Email
        </label>
        <div className="flex flex-col sm:flex-row gap-4 items-center mx-auto">

          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nombre@ejemplo.com"
            className="w-full bg-transparent text-[var(--color-perla)]/80 text-base placeholder:text-gray-500 border-0 border-b border-gray-700 focus:border-gray-500 focus:ring-0 pb-2 transition-colors"
            required
          />
          <button
            type="submit"
            className="w-auto bg-[var(--color-primario)] text-black hover:bg-[var(--color-secundario)]  hover:text-[var(--color-perla)] font-medium py-2.5 px-4 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 active:scale-[0.98]"
          >
            Suscribirme
          </button>
        </div>


      </form>
    </div>
  )
}
