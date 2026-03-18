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
  CalendarDays,
  Calendar,
  ChevronDown,
  ChevronUp,
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

const upcomingLessons = [
  { id: 1, tutor: "Maria Santos",       subject: "Spanish",  date: "Thu, Mar 19", time: "10:00 AM" },
  { id: 2, tutor: "Yuki Tanaka",        subject: "Japanese", date: "Sat, Mar 21", time: "2:00 PM"  },
  { id: 3, tutor: "Jean-Pierre Dubois", subject: "French",   date: "Mon, Mar 24", time: "11:00 AM" },
]

const pastLessons = [
  { id: 1, tutor: "Maria Santos",  subject: "Spanish",  date: "Wed, Mar 12", rating: 5 },
  { id: 2, tutor: "Yuki Tanaka",   subject: "Japanese", date: "Fri, Mar 14", rating: 4 },
  { id: 3, tutor: "Hans Mueller",  subject: "German",   date: "Mon, Mar 17", rating: 5 },
]

// Lesson dates shown on the mini calendar (year, 0-indexed month, day)
const LESSON_CALENDAR_DATES = [
  { year: 2026, month: 2, day: 12 },
  { year: 2026, month: 2, day: 14 },
  { year: 2026, month: 2, day: 17 },
  { year: 2026, month: 2, day: 19 },
  { year: 2026, month: 2, day: 21 },
  { year: 2026, month: 2, day: 24 },
]

const CAL_MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
]

function StudentMiniCalendar() {
  const [monthOffset, setMonthOffset] = useState(0)
  const today = new Date()
  const display  = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1)
  const year     = display.getFullYear()
  const month    = display.getMonth()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  // Monday-first weekday offset (0 = Mon … 6 = Sun)
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7

  const lessonDaysInMonth = new Set(
    LESSON_CALENDAR_DATES
      .filter(d => d.year === year && d.month === month)
      .map(d => d.day),
  )

  const cells: (number | null)[] = []
  for (let i = 0; i < firstWeekday; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  const isCurrentMonth = year === today.getFullYear() && month === today.getMonth()
  const todayDay = today.getDate()

  return (
    <div className="bg-white px-3 pb-3 pt-2">
      {/* Month navigation */}
      <div className="mb-2 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setMonthOffset(o => o - 1)}
          aria-label="Previous month"
          className="flex h-6 w-6 items-center justify-center rounded text-base text-muted-foreground hover:bg-[#F0F6FA] hover:text-[#354d73]"
        >
          ‹
        </button>
        <span className="text-xs font-semibold text-[#042230]">
          {CAL_MONTHS[month]} {year}
        </span>
        <button
          type="button"
          onClick={() => setMonthOffset(o => o + 1)}
          aria-label="Next month"
          className="flex h-6 w-6 items-center justify-center rounded text-base text-muted-foreground hover:bg-[#F0F6FA] hover:text-[#354d73]"
        >
          ›
        </button>
      </div>

      {/* Day-of-week headers */}
      <div className="mb-1 grid grid-cols-7 text-center">
        {["Mo","Tu","We","Th","Fr","Sa","Su"].map(d => (
          <div key={d} className="text-[10px] font-medium text-muted-foreground">{d}</div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-y-0.5">
        {cells.map((day, i) => {
          const isToday  = day !== null && isCurrentMonth && day === todayDay
          const isLesson = day !== null && !isToday && lessonDaysInMonth.has(day)
          return (
            <div
              key={i}
              className={[
                "mx-auto flex h-6 w-6 items-center justify-center rounded-full text-[11px] leading-none",
                day === null     ? "invisible"                                                       : "",
                isToday          ? "bg-[#354d73] font-bold text-white"                              : "",
                isLesson         ? "bg-[#354d73]/15 font-semibold text-[#354d73] ring-1 ring-[#354d73]/40" : "",
                !isToday && !isLesson && day !== null ? "text-[#042230]"                            : "",
              ].filter(Boolean).join(" ")}
            >
              {day}
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div className="mt-2 flex items-center gap-3 border-t border-border pt-2">
        <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#354d73]" /> Today
        </span>
        <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#354d73]/15 ring-1 ring-[#354d73]/40" /> Lesson
        </span>
      </div>
    </div>
  )
}

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
  const [calendarOpen, setCalendarOpen] = useState(false)
  const [lessonsOpen, setLessonsOpen] = useState(true)

  const filtered = tutors.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.languages.some((s) => s.toLowerCase().includes(search.toLowerCase()))
  )

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

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar Filters */}
          <aside className="w-full shrink-0 lg:w-64">
            <div className="sticky top-24 space-y-6">
              {/* ── My Calendar ───────────────────────────── */}
              <div className="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setCalendarOpen(o => !o)}
                  className="flex w-full items-center justify-between px-4 py-3 hover:bg-[#F0F6FA]"
                >
                  <span className="flex items-center gap-2 text-sm font-semibold text-[#042230]">
                    <CalendarDays className="h-4 w-4 text-[#354d73]" />
                    My Calendar
                  </span>
                  {calendarOpen
                    ? <ChevronUp   className="h-4 w-4 text-muted-foreground" />
                    : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
                </button>
                {calendarOpen && (
                  <div className="border-t border-border">
                    <StudentMiniCalendar />
                  </div>
                )}
              </div>

              {/* ── My Lessons ────────────────────────────── */}
              <div className="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setLessonsOpen(o => !o)}
                  className="flex w-full items-center justify-between px-4 py-3 hover:bg-[#F0F6FA]"
                >
                  <span className="flex items-center gap-2 text-sm font-semibold text-[#042230]">
                    <BookOpen className="h-4 w-4 text-[#354d73]" />
                    My Lessons
                  </span>
                  {lessonsOpen
                    ? <ChevronUp   className="h-4 w-4 text-muted-foreground" />
                    : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
                </button>

                {lessonsOpen && (
                  <div className="divide-y divide-border border-t border-border">
                    {/* Upcoming lessons */}
                    <div className="px-4 py-3">
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#354d73]">
                        Upcoming
                      </p>
                      <div className="space-y-3">
                        {upcomingLessons.map(lesson => (
                          <div key={lesson.id} className="flex items-start gap-2">
                            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#354d73]/10">
                              <Calendar className="h-3.5 w-3.5 text-[#354d73]" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold leading-tight text-[#042230]">
                                {lesson.tutor}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {lesson.subject} · {lesson.date}
                              </p>
                              <p className="text-xs text-muted-foreground">{lesson.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Past lessons */}
                    <div className="px-4 py-3">
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Past Lessons
                      </p>
                      <div className="space-y-3">
                        {pastLessons.map(lesson => (
                          <div key={lesson.id} className="flex items-start gap-2">
                            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted">
                              <BookOpen className="h-3.5 w-3.5 text-muted-foreground" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold leading-tight text-[#042230]">
                                {lesson.tutor}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {lesson.subject} · {lesson.date}
                              </p>
                              <div className="mt-0.5 flex items-center gap-0.5">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3.5 w-3.5 ${
                                      i < lesson.rating
                                        ? "fill-amber-400 text-amber-400"
                                        : "fill-muted text-muted"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

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
