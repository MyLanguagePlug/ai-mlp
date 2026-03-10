"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Globe, DollarSign, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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

const footerLinks = {
  students: {
    title: "For Students",
    links: [
      { label: "Find Tutors", href: "/tutors" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "Languages", href: "/languages" },
      { label: "Student Reviews", href: "/reviews" },
    ],
  },
  tutors: {
    title: "For Tutors",
    links: [
      { label: "Become a Tutor", href: "/become-tutor" },
      { label: "Tutor Requirements", href: "/tutor-requirements" },
      { label: "Tutor Resources", href: "/tutor-resources" },
      { label: "Success Stories", href: "/tutor-success" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Corporate", href: "/corporate" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "FAQ", href: "/faq" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
}

const languages = [
  "Spanish", "French", "German", "Italian", "Portuguese", 
  "Chinese", "Japanese", "Korean", "Arabic", "Russian",
  "English", "Dutch"
]

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
]

export function Footer() {
  const [selectedLanguage, setSelectedLanguage] = useState(siteLanguages[0])
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0])

  return (
    <footer className="border-t border-border bg-[--light-blue]">
      {/* Top Bar with Language/Currency Selectors */}
      <div className="border-b border-border/50">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-3 px-4 py-3 sm:px-6 lg:px-8">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">{selectedLanguage.label}</span>
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

          {/* Currency Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
                <DollarSign className="h-4 w-4" />
                <span className="hidden sm:inline">{selectedCurrency.code}</span>
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

          {/* Login Button */}
          <Button variant="outline" size="sm" asChild>
            <Link href="/login">Log In</Link>
          </Button>
        </div>
      </div>

      {/* Popular Languages */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h3 className="mb-4 text-sm font-semibold text-[--navy]">Popular Languages</h3>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <Link
              key={lang}
              href={`/tutors?language=${lang.toLowerCase()}`}
              className="rounded-full bg-background px-3 py-1 text-sm text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {lang}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="My Language Plug"
                  width={888}
                  height={364}
                  className="h-12 w-auto sm:h-14"
                />
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Connect with expert language tutors for personalized 1-on-1 lessons. 
                Learn any language on your schedule.
              </p>
              <div className="mt-6 flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h3 className="mb-4 text-sm font-semibold text-[--navy]">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} My Language Plug. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms
            </Link>
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
