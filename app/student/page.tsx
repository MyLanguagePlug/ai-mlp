"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Search,
  Heart,
  Star,
  MessageCircle,
  Globe,
  Bell,
  User,
  BookOpen,
  Settings,
  HelpCircle,
  LogOut,
  Home,
  Gift,
  ChevronDown,
  SlidersHorizontal,
  BadgeCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const ALL_LANGUAGES = "All languages"

const tutors = [
  {
    id: "1",
    name: "Maria Santos",
    flag: "🇪🇸",
    country: "Spain",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    subjects: ["Spanish"],
    speaks: "Spanish (Native), English (Fluent)",
    price: 25,
    originalPrice: 35,
    rating: 4.9,
    reviews: 234,
    students: 89,
    lessons: 1240,
    badges: ["Top Rated", "Super Tutor"],
    bio: "Hi! I'm Maria, a passionate Spanish teacher with 8+ years of experience. I create engaging lessons tailored to your goals 🌟",
    popular: true,
  },
  {
    id: "2",
    name: "Jean-Pierre Dubois",
    flag: "🇫🇷",
    country: "France",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    subjects: ["French"],
    speaks: "French (Native), English (Advanced), Spanish (Intermediate)",
    price: 30,
    originalPrice: null,
    rating: 4.8,
    reviews: 189,
    students: 72,
    lessons: 980,
    badges: ["Verified"],
    bio: "Bonjour! Let's make French fun and practical. I specialise in conversational French and business language.",
    popular: true,
  },
  {
    id: "3",
    name: "Yuki Tanaka",
    flag: "🇯🇵",
    country: "Japan",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    subjects: ["Japanese"],
    speaks: "Japanese (Native), English (Fluent)",
    price: 35,
    originalPrice: null,
    rating: 5.0,
    reviews: 156,
    students: 63,
    lessons: 820,
    badges: ["Top Rated"],
    bio: "I teach all levels from absolute beginners to advanced. My lessons focus on natural conversation and culture.",
    popular: false,
  },
  {
    id: "4",
    name: "Hans Mueller",
    flag: "🇩🇪",
    country: "Germany",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    subjects: ["German"],
    speaks: "German (Native), English (Fluent), French (Beginner)",
    price: 28,
    originalPrice: 38,
    rating: 4.9,
    reviews: 203,
    students: 94,
    lessons: 1560,
    badges: ["Verified", "Super Tutor"],
    bio: "I help students achieve fluency through structured lessons and real-world German practice.",
    popular: true,
  },
  {
    id: "5",
    name: "Ana Silva",
    flag: "🇧🇷",
    country: "Brazil",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
    subjects: ["Portuguese", "Spanish"],
    speaks: "Portuguese (Native), Spanish (Fluent), English (Advanced)",
    price: 22,
    originalPrice: null,
    rating: 4.8,
    reviews: 142,
    students: 58,
    lessons: 710,
    badges: ["Verified"],
    bio: "As a bilingual tutor I offer Portuguese and Spanish lessons. Fun, engaging and results-driven!",
    popular: false,
  },
  {
    id: "6",
    name: "Wei Zhang",
    flag: "🇨🇳",
    country: "China",
    avatar:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&crop=face",
    subjects: ["Mandarin"],
    speaks: "Mandarin (Native), English (Fluent)",
    price: 32,
    originalPrice: 42,
    rating: 4.9,
    reviews: 178,
    students: 81,
    lessons: 1120,
    badges: ["Top Rated"],
    bio: "I make Mandarin accessible and enjoyable. From tones to characters — I've got you covered.",
    popular: true,
  },
]

const navLinks = [
  { href: "/student", icon: Home, label: "Home" },
  { href: "/student#messages", icon: MessageCircle, label: "Messages" },
  { href: "/student#lessons", icon: BookOpen, label: "My lessons" },
  { href: "/student#saved", icon: Heart, label: "Saved tutors" },
  { href: "/student#refer", icon: Gift, label: "Refer a friend" },
  { href: "/student/settings", icon: Settings, label: "Settings" },
  { href: "/help", icon: HelpCircle, label: "Help" },
]

function TutorCard({ tutor }: { tutor: (typeof tutors)[0] }) {
  const [saved, setSaved] = useState(false)

  return (
    <div className="relative flex flex-col gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:flex-row">
      <button
        type="button"
        onClick={() => setSaved(!saved)}
        className="absolute right-4 top-4 text-muted-foreground hover:text-rose-500 z-10"
        aria-label={saved ? "Unsave tutor" : "Save tutor"}
      >
        <Heart
          className={`h-5 w-5 transition-colors ${saved ? "fill-rose-500 text-rose-500" : ""}`}
        />
      </button>

      {/* Avatar */}
      <div className="mx-auto shrink-0 sm:mx-0">
        <Image
          src={tutor.avatar}
          alt={tutor.name}
          width={96}
          height={96}
          className="h-24 w-24 rounded-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-2 min-w-0">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-bold text-[#042230]">
              {tutor.name}{" "}
              <span className="text-sm font-normal text-muted-foreground">
                {tutor.flag} {tutor.country}
              </span>
            </h3>
          </div>
          <div className="mt-1 flex flex-wrap gap-1.5">
            {tutor.badges.map((b) => (
              <Badge
                key={b}
                className={
                  b === "Top Rated"
                    ? "bg-[#354d73] text-white text-xs"
                    : b === "Super Tutor"
                    ? "bg-[#5A8DA5] text-white text-xs"
                    : "bg-[#F0F6FA] text-[#354d73] text-xs"
                }
              >
                {b === "Verified" && <BadgeCheck className="mr-1 h-3 w-3" />}
                {b}
              </Badge>
            ))}
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          <Globe className="mr-1 inline h-3 w-3" />
          Speaks: {tutor.speaks}
        </p>

        <p className="line-clamp-2 text-sm text-foreground/80">{tutor.bio}</p>

        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
          <span>
            <Star className="mr-0.5 inline h-3 w-3 fill-amber-400 text-amber-400" />
            <strong className="text-foreground">{tutor.rating}</strong>{" "}
            ({tutor.reviews} reviews)
          </span>
          <span>
            <User className="mr-0.5 inline h-3 w-3" />
            {tutor.students} students
          </span>
          <span>
            <BookOpen className="mr-0.5 inline h-3 w-3" />
            {tutor.lessons} lessons
          </span>
        </div>

        {tutor.popular && (
          <p className="text-xs text-[#5A8DA5] font-medium">
            ↑ Popular · Booked 7 times recently
          </p>
        )}
      </div>

      {/* Pricing + actions */}
      <div className="flex shrink-0 flex-col items-center justify-between gap-3 sm:items-end">
        <div className="text-right">
          {tutor.originalPrice && (
            <p className="text-xs text-muted-foreground line-through">${tutor.originalPrice}</p>
          )}
          <p className="text-xl font-bold text-[#042230]">${tutor.price}</p>
          <p className="text-xs text-muted-foreground">50-min lesson</p>
        </div>
        <div className="flex flex-col gap-2 w-full sm:w-36">
          <Button className="w-full bg-[#354d73] hover:bg-[#2a3d5e] text-white" size="sm">
            Book trial lesson
          </Button>
          <Button variant="outline" className="w-full" size="sm">
            Send message
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function StudentDashboard() {
  const [profileOpen, setProfileOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [language, setLanguage] = useState(ALL_LANGUAGES)

  const filtered = tutors.filter((t) => {
    const matchesSearch =
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.subjects.some((s) => s.toLowerCase().includes(search.toLowerCase()))
    const matchesLang =
      language === ALL_LANGUAGES ||
      t.subjects.some((s) => s.toLowerCase() === language.toLowerCase())
    return matchesSearch && matchesLang
  })

  return (
    <div className="min-h-screen bg-[#F0F6FA]">
      {/* ── Student-specific top bar ─────────────────────────────────────── */}
      <div className="sticky top-0 z-30 border-b border-border bg-white shadow-sm">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#354d73] hidden sm:block">
            Welcome back, Jane! 👋
          </p>

          {/* Search (inline in top bar) */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search tutors or languages…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 h-9 bg-[#F0F6FA] border-transparent focus:border-[#354d73]"
            />
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-[#F0F6FA] hover:text-foreground"
              aria-label="Messages"
            >
              <MessageCircle className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-[#F0F6FA] hover:text-foreground"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
            </button>

            {/* Profile dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#354d73] text-white hover:bg-[#2a3d5e]"
                aria-label="Profile menu"
              >
                <User className="h-5 w-5" />
              </button>

              {profileOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setProfileOpen(false)} />
                  <div className="absolute right-0 top-11 z-50 w-56 rounded-xl border border-border bg-white shadow-xl">
                    <div className="flex items-center gap-3 border-b border-border px-4 py-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F0F6FA]">
                        <User className="h-5 w-5 text-[#354d73]" />
                      </div>
                      <span className="font-semibold text-[#042230]">Jane</span>
                    </div>
                    <nav className="py-1">
                      {navLinks.map(({ href, icon: Icon, label }) => (
                        <Link
                          key={label}
                          href={href}
                          onClick={() => setProfileOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-[#F0F6FA]"
                        >
                          <Icon className="h-4 w-4 text-muted-foreground" />
                          {label}
                        </Link>
                      ))}
                    </nav>
                    <div className="border-t border-border py-1">
                      <Link
                        href="/login"
                        onClick={() => setProfileOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-rose-600 hover:bg-[#F0F6FA]"
                      >
                        <LogOut className="h-4 w-4" />
                        Log out
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page title */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#042230] sm:text-3xl">
            Find your perfect language tutor
          </h1>
          <p className="mt-1 text-muted-foreground">
            {filtered.length.toLocaleString()} tutors ready to help you today
          </p>
        </div>

        {/* Promo banner */}
        <div className="mb-6 flex items-center gap-3 rounded-xl bg-[#354d73]/10 border border-[#354d73]/20 px-5 py-4">
          <span className="text-2xl">🎉</span>
          <div>
            <p className="font-semibold text-[#354d73]">Enjoy 30% off your trial lesson!</p>
            <p className="text-sm text-muted-foreground">No code needed. Applies to tutors charging $10 or more.</p>
          </div>
        </div>

        {/* Filters row */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1.5">
                I want to learn: <strong>{language}</strong>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {[ALL_LANGUAGES, "Spanish", "French", "German", "Japanese", "Portuguese", "Mandarin"].map(
                (l) => (
                  <DropdownMenuItem key={l} onClick={() => setLanguage(l)}>
                    {l}
                  </DropdownMenuItem>
                )
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1.5">
                Price per lesson <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Any price</DropdownMenuItem>
              <DropdownMenuItem>$5 – $15</DropdownMenuItem>
              <DropdownMenuItem>$15 – $30</DropdownMenuItem>
              <DropdownMenuItem>$30+</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1.5">
                Availability <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Any time</DropdownMenuItem>
              <DropdownMenuItem>This week</DropdownMenuItem>
              <DropdownMenuItem>Weekends</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="sm" className="gap-1.5 ml-auto">
            <SlidersHorizontal className="h-4 w-4" />
            More filters
          </Button>
        </div>

        {/* Tutor list */}
        <div className="flex flex-col gap-4">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-border bg-white p-12 text-center">
              <p className="text-lg font-medium text-[#042230]">No tutors found</p>
              <p className="mt-1 text-sm text-muted-foreground">Try adjusting your search or filters.</p>
            </div>
          ) : (
            filtered.map((tutor) => <TutorCard key={tutor.id} tutor={tutor} />)
          )}
        </div>
      </main>
    </div>
  )
}
