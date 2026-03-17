"use client"

import { usePathname } from "next/navigation"
import { Header } from "./header"

/**
 * Renders the Header with the appropriate variant based on the current route.
 * The /login page uses the "minimal" variant (left-aligned nav, language selector only).
 * All other pages use the full header (centered nav, login/get-started/currency/language).
 */
export function HeaderController() {
  const pathname = usePathname()
  return <Header variant={pathname === "/login" ? "minimal" : undefined} />
}
