"use client"

import { usePathname } from "next/navigation"
import { Header } from "./header"

/**
 * Renders the Header with the appropriate variant based on the current route.
 * - /login  → "minimal" variant (left-aligned nav, language selector only).
 * - /student → "student" variant (no auth buttons; shows Messages/Notifications/Profile icons).
 * - All other pages use the full header (centered nav, login/get-started/currency/language).
 */
export function HeaderController() {
  const pathname = usePathname()

  let variant: "minimal" | "student" | undefined
  if (pathname === "/login") variant = "minimal"
  else if (pathname.startsWith("/student")) variant = "student"

  return <Header variant={variant} />
}
