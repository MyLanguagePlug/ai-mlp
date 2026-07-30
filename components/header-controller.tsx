"use client"

import { usePathname } from "next/navigation"
import { Header } from "./header"

/**
 * Renders the Header with the appropriate variant based on the current route.
 * - /login  → "minimal" variant (left-aligned nav, language selector only).
 * - /student → "student" variant (no auth buttons; shows Messages/Notifications/Profile icons).
 * - /tutor  → "tutor" variant (no auth buttons; shows tutor-specific header actions).
 * - All other pages use the full header (centered nav, login/get-started/currency/language).
 */
export function HeaderController() {
  const pathname = usePathname()

  let variant: "minimal" | "student" | "tutor" | undefined
  if (pathname === "/login" || pathname === "/tutor/login") variant = "minimal"
  else if (pathname.startsWith("/student")) variant = "student"
  else if (pathname === "/tutor" || pathname.startsWith("/tutor/")) variant = "tutor"

  return <Header variant={variant} />
}
