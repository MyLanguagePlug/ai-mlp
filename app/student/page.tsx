"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Search,
  Heart,
  Star,
  MessageCircle,
  Clock,
  DollarSign,
  Bell,
  User,
  BookOpen,
  Settings,
  HelpCircle,
  LogOut,
  Home,
  Gift,
  SlidersHorizontal,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { TutorCard } from "@/components/tutor-card"

const ALL_LANGUAGES = "All languages"

const specialties = [
  "Conversational",
  "Business",
  "Exam Prep",
  "Grammar",
  "Pronunciation",
  "Beginner Friendly",
  "Kids",
]

const tutors = [
  {
    id: "1",
    name: "Maria Santos",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    country: "Spain",
    languages: ["Spanish", "English"],
    specialties: ["Business Spanish", "Conversational", "DELE Prep"],
    rating: 4.9,
    reviews: 234,
    hourlyRate: 25,
    lessonsCompleted: 1240,
    isVerified: true,
    isNativeSpeaker: true,
    bio: "Hi! I'm Maria, a passionate Spanish teacher with 8+ years of experience. I create engaging lessons tailored to your goals 🌟",
  },
  {
    id: "2",
    name: "Jean-Pierre Dubois",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    country: "France",
    languages: ["French", "English", "Spanish"],
    specialties: ["Conversational", "Grammar", "Business French"],
    rating: 4.8,
    reviews: 189,
    hourlyRate: 30,
    lessonsCompleted: 980,
    isVerified: true,
    isNativeSpeaker: true,
    bio: "Bonjour! Let's make French fun and practical. I specialise in conversational French and business language.",
  },
  {
    id: "3",
    name: "Yuki Tanaka",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    country: "Japan",
    languages: ["Japanese", "English"],
    specialties: ["JLPT Prep", "Beginner Friendly", "Business Japanese"],
    rating: 5.0,
    reviews: 156,
    hourlyRate: 35,
    lessonsCompleted: 820,
    isVerified: true,
    isNativeSpeaker: true,
    bio: "I teach all levels from absolute beginners to advanced. My lessons focus on natural conversation and culture.",
  },
  {
    id: "4",
    name: "Hans Mueller",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    country: "Germany",
    languages: ["German", "English"],
    specialties: ["TestDaF Prep", "Academic German", "Conversational"],
    rating: 4.9,
    reviews: 203,
    hourlyRate: 28,
    lessonsCompleted: 1560,
    isVerified: true,
    isNativeSpeaker: true,
    bio: "I help students achieve fluency through structured lessons and real-world German practice.",
  },
  {
    id: "5",
    name: "Ana Silva",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    country: "Brazil",
    languages: ["Portuguese", "Spanish", "English"],
    specialties: ["Conversational", "Travel", "Beginner Friendly"],
    rating: 4.8,
    reviews: 142,
    hourlyRate: 22,
    lessonsCompleted: 710,
    isVerified: true,
    isNativeSpeaker: true,
    bio: "As a bilingual tutor I offer Portuguese and Spanish lessons. Fun, engaging and results-driven!",
  },
  {
    id: "6",
    name: "Wei Zhang",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop",
    country: "China",
    languages: ["Mandarin", "English"],
    specialties: ["HSK Prep", "Business Chinese", "Pronunciation"],
    rating: 4.9,
    reviews: 178,
    hourlyRate: 32,
    lessonsCompleted: 1120,
    isVerified: true,
    isNativeSpeaker: true,
    bio: "I make Mandarin accessible and enjoyable. From tones to characters — I've got you covered.",
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

function TutorCardSkeleton() {
  return (
    <div className="flex gap-4 rounded-lg border p-4">
      <div className="h-48 w-48 shrink-0 rounded-lg bg-muted" />
      <div className="flex-1 space-y-3">
        <div className="h-6 w-1/3 rounded bg-muted" />
        <div className="h-4 w-1/4 rounded bg-muted" />
        <div className="h-4 w-full rounded bg-muted" />
        <div className="h-4 w-2/3 rounded bg-muted" />
      </div>
    </div>
  )
}

export default function StudentDashboard() {
  const [profileOpen, setProfileOpen] = useState(false)
  const [search, setSearch] = useState("")

  const filtered = tutors.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.languages.some((s) => s.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-[#F0F6FA]">
      {/* ── Student-specific top bar ─────────────────────────────────────── */}
      <div className="sticky top-0 z-30 border-b border-border bg-white shadow-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="hidden sm:flex flex-col">
            <span className="text-base font-bold text-[#354d73] leading-tight">My Language Plug</span>
            <p className="text-sm font-semibold text-[#354d73]">
              Welcome back, Jane! 👋
            </p>
          </div>

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

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar Filters */}
          <aside className="w-full shrink-0 lg:w-64">
            <div className="sticky top-20 space-y-6">
              {/* Filter Header */}
              <div className="flex items-center justify-between">
                <h2 className="flex items-center gap-2 font-semibold text-(--navy)">
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                </h2>
                <Button variant="ghost" size="sm" className="text-primary">
                  Clear All
                </Button>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="mb-3 text-sm font-medium text-(--navy)">
                  <DollarSign className="mr-1 inline h-4 w-4" />
                  Price Range
                </h3>
                <div className="flex items-center gap-2">
                  <Input type="number" placeholder="Min" className="h-9" />
                  <span className="text-muted-foreground">-</span>
                  <Input type="number" placeholder="Max" className="h-9" />
                </div>
              </div>

              {/* Rating */}
              <div>
                <h3 className="mb-3 text-sm font-medium text-(--navy)">
                  <Star className="mr-1 inline h-4 w-4" />
                  Rating
                </h3>
                <div className="space-y-2">
                  {[4.5, 4.0, 3.5].map((rating) => (
                    <label key={rating} className="flex cursor-pointer items-center gap-2">
                      <Checkbox />
                      <div className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        <span className="text-sm">{rating}+ stars</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <h3 className="mb-3 text-sm font-medium text-(--navy)">
                  <Clock className="mr-1 inline h-4 w-4" />
                  Availability
                </h3>
                <div className="space-y-2">
                  {["Morning", "Afternoon", "Evening", "Weekends"].map((time) => (
                    <label key={time} className="flex cursor-pointer items-center gap-2">
                      <Checkbox />
                      <span className="text-sm">{time}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Specialties */}
              <div>
                <h3 className="mb-3 text-sm font-medium text-(--navy)">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {specialties.map((specialty) => (
                    <Badge
                      key={specialty}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Tutor Type */}
              <div>
                <h3 className="mb-3 text-sm font-medium text-(--navy)">Tutor Type</h3>
                <div className="space-y-2">
                  <label className="flex cursor-pointer items-center gap-2">
                    <Checkbox />
                    <span className="text-sm">Native Speakers Only</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2">
                    <Checkbox />
                    <span className="text-sm">Verified Tutors Only</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2">
                    <Checkbox />
                    <span className="text-sm">Offers Trial Lessons</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Tutor List */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-muted-foreground">
                Showing <span className="font-medium text-foreground">{filtered.length}</span> tutors
              </p>
              <Select defaultValue="recommended">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Tutor Cards */}
            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-border bg-white p-12 text-center">
                <p className="text-lg font-medium text-[#042230]">No tutors found</p>
                <p className="mt-1 text-sm text-muted-foreground">Try adjusting your search or filters.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filtered.map((tutor) => (
                  <TutorCard key={tutor.id} {...tutor} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
