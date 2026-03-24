"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Globe, DollarSign, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { StudentHeaderActions } from "./student-header-actions"

const languages = [
  "Spanish", "French", "German", "Italian", "Portuguese", 
  "Chinese", "Japanese", "Korean", "Arabic", "Russian"
]

const siteLanguages = [
  { code: "en", label: "English" },
  { code: "es", label: "Espanol" },
  { code: "fr", label: "Francais" },
  { code: "de", label: "Deutsch" },
  { code: "pt", label: "Portugues" },
  { code: "zh", label: "Chinese" },
  { code: "ja", label: "Japanese" },
  { code: "ko", label: "Korean" },
]

const currencies = [
  { code: "USD", symbol: "$", label: "US Dollar" },
  { code: "EUR", symbol: "E", label: "Euro" },
  { code: "GBP", symbol: "£", label: "British Pound" },
  { code: "CAD", symbol: "C$", label: "Canadian Dollar" },
  { code: "AUD", symbol: "A$", label: "Australian Dollar" },
  { code: "JPY", symbol: "¥", label: "Japanese Yen" },
]

interface HeaderProps {
  /** "minimal" renders the login-page variant: nav left-aligned, language selector only, no auth buttons or currency */
  /** "student" renders the student-dashboard variant: no auth buttons, shows student icons (messages/notifs/profile) */
  variant?: "minimal" | "student"
}

export function Header({ variant }: HeaderProps = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(siteLanguages[0])
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0])

  const isMinimal = variant === "minimal"
  const isStudent = variant === "student"

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className={`mx-auto flex h-20 max-w-7xl items-center px-4 sm:h-24 sm:px-6 lg:h-28 lg:px-8 ${isMinimal ? "" : "justify-between"}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="My Language Plug"
            width={888}
            height={364}
            className="h-12 w-auto sm:h-14 lg:h-16"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={`hidden items-center gap-8 md:flex ${isMinimal ? "ml-8" : ""}`}>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Languages
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang} asChild>
                  <Link href={`/tutors?language=${lang.toLowerCase()}`}>
                    {lang}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link 
            href="/tutors" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Find Tutors
          </Link>
          <Link 
            href="/become-tutor" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Become a Tutor
          </Link>
          <Link 
            href="/corporate" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Corporate
          </Link>
        </nav>

        {/* Desktop right-side controls */}
        <div className={`hidden items-center gap-2 md:flex ${isMinimal ? "ml-auto" : ""}`}>
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground hover:text-foreground">
                <Globe className="h-4 w-4" />
                <span className="hidden lg:inline">{selectedLanguage.label}</span>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {siteLanguages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setSelectedLanguage(lang)}
                  className={selectedLanguage.code === lang.code ? "bg-muted" : ""}
                >
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {!isMinimal && !isStudent && (
            <>
              {/* Currency Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground hover:text-foreground">
                    <DollarSign className="h-4 w-4" />
                    <span className="hidden lg:inline">{selectedCurrency.code}</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {currencies.map((currency) => (
                    <DropdownMenuItem
                      key={currency.code}
                      onClick={() => setSelectedCurrency(currency)}
                      className={selectedCurrency.code === currency.code ? "bg-muted" : ""}
                    >
                      {currency.symbol} {currency.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="ghost" asChild>
                <Link href="/login">Log In</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </>
          )}

          {/* Student variant: show student action icons instead of auth buttons */}
          {isStudent && <StudentHeaderActions />}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col gap-1 p-4">
            <Link 
              href="/tutors" 
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Tutors
            </Link>
            <Link 
              href="/become-tutor" 
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Become a Tutor
            </Link>
            <Link 
              href="/corporate" 
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Corporate
            </Link>
            <Link 
              href="/contact" 
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            {/* Language Selector (always shown in mobile) */}
            <div className="mt-4 flex items-center justify-center gap-2 border-t border-border pt-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Globe className="h-4 w-4" />
                    {selectedLanguage.label}
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                  {siteLanguages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setSelectedLanguage(lang)}
                      className={selectedLanguage.code === lang.code ? "bg-muted" : ""}
                    >
                      {lang.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {!isMinimal && !isStudent && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-2">
                      <DollarSign className="h-4 w-4" />
                      {selectedCurrency.code}
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center">
                    {currencies.map((currency) => (
                      <DropdownMenuItem
                        key={currency.code}
                        onClick={() => setSelectedCurrency(currency)}
                        className={selectedCurrency.code === currency.code ? "bg-muted" : ""}
                      >
                        {currency.symbol} {currency.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>

            {!isMinimal && !isStudent && (
              <div className="mt-4 flex flex-col gap-2">
                <Button variant="outline" asChild className="w-full">
                  <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Log In</Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/signup">Get Started</Link>
                </Button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
