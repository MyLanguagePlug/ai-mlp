"use client"

import { usePathname } from "next/navigation"
import { Header } from "./header"

/**
 * Renders the Header with the appropriate variant based on the current route.
 * The /login page uses the "minimal" variant (left-aligned nav, language selector only).
 * The /student pages have their own custom header, so the global header is hidden.
 * All other pages use the full header (centered nav, login/get-started/currency/language).
 */
export function HeaderController() {
  const pathname = usePathname()
  if (pathname.startsWith("/student")) return null
  return <Header variant={pathname === "/login" ? "minimal" : undefined} />
}
