"use client"

import { useState } from "react"
import Link from "next/link"
import {
  User,
  Lock,
  Mail,
  CreditCard,
  Clock,
  CalendarDays,
  Bell,
  Trash2,
  Upload,
  ChevronLeft,
  ChevronRight,
  Check,
  ArrowLeft,
  Star,
  BookOpen,
  Calendar,
  Plus,
  Download,
  Receipt,
  ShieldCheck,
  BellOff,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const sidebarItems = [
  { id: "account", label: "Account", icon: User },
  { id: "password", label: "Password", icon: Lock },
  { id: "email", label: "Email", icon: Mail },
  { id: "payment-methods", label: "Payment methods", icon: CreditCard },
  { id: "payment-history", label: "Payment history", icon: Clock },
  { id: "calendar", label: "Calendar", icon: CalendarDays },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "delete-account", label: "Delete account", icon: Trash2 },
]

const timezones = [
  "UTC (GMT +0:00)",
  "America/New_York (GMT -5:00)",
  "America/Chicago (GMT -6:00)",
  "America/Los_Angeles (GMT -8:00)",
  "Europe/London (GMT +0:00)",
  "Europe/Paris (GMT +1:00)",
  "Asia/Tokyo (GMT +9:00)",
  "Australia/Sydney (GMT +11:00)",
]

function AccountSection({ saved, onSave }: { saved: boolean; onSave: () => void }) {
  const [firstName, setFirstName] = useState("Jane")
  const [lastName, setLastName] = useState("Smith")
  const [phone, setPhone] = useState("")
  const [timezone, setTimezone] = useState("UTC (GMT +0:00)")

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold text-[#042230]">Account Settings</h2>
      </div>

      {/* Profile image */}
      <div>
        <Label className="mb-3 block text-sm font-medium text-foreground">Profile image</Label>
        <div className="flex items-start gap-6">
          <div className="flex h-28 w-28 items-center justify-center rounded-xl bg-[#F0F6FA]">
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 rounded-full bg-[#354d73]/20" />
              <div className="mt-1 h-3 w-16 rounded-sm bg-[#354d73]/20" />
            </div>
          </div>
          <div className="space-y-1">
            <Button variant="outline" size="sm" className="gap-2">
              <Upload className="h-4 w-4" />
              Upload photo
            </Button>
            <p className="text-xs text-muted-foreground">Maximum size – 2MB</p>
            <p className="text-xs text-muted-foreground">JPG or PNG format</p>
          </div>
        </div>
      </div>

      {/* First name */}
      <div className="space-y-1.5">
        <Label htmlFor="firstName">
          First name{" "}
          <span className="text-[#354d73] text-xs font-normal">· Required</span>
        </Label>
        <Input
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="max-w-md"
        />
      </div>

      {/* Last name */}
      <div className="space-y-1.5">
        <Label htmlFor="lastName">Last name</Label>
        <Input
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="max-w-md"
        />
      </div>

      {/* Phone */}
      <div className="space-y-1.5">
        <Label htmlFor="phone">Phone number</Label>
        <div className="flex max-w-md gap-2">
          <select
                aria-label="Country code"
                className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
            <option>🇺🇸 +1</option>
            <option>🇬🇧 +44</option>
            <option>🇦🇺 +61</option>
            <option>🇨🇦 +1</option>
            <option>🇩🇪 +49</option>
            <option>🇫🇷 +33</option>
          </select>
          <Input
            id="phone"
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-1"
          />
        </div>
      </div>

      {/* Timezone */}
      <div className="space-y-1.5">
        <Label htmlFor="timezone">Timezone</Label>
        <select
          id="timezone"
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
          className="flex h-10 w-full max-w-md rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          {timezones.map((tz) => (
            <option key={tz}>{tz}</option>
          ))}
        </select>
      </div>

      {/* Social networks */}
      <div className="space-y-3">
        <Label>Social networks</Label>
        <div className="space-y-3 max-w-md">
          <div className="flex items-center justify-between rounded-lg border border-border p-4">
            <div className="flex items-center gap-3">
              <svg className="h-5 w-5 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor" aria-label="Facebook">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-sm text-muted-foreground">Not connected to Facebook account</span>
            </div>
            <Button variant="outline" size="sm">Connect</Button>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border p-4">
            <div className="flex items-center gap-3">
              <svg className="h-5 w-5" viewBox="0 0 24 24" aria-label="Google">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm text-muted-foreground">Not connected to Google account</span>
            </div>
            <Button variant="outline" size="sm">Connect</Button>
          </div>
        </div>
      </div>

      {/* Save button */}
      <div className="max-w-md">
        <Button
          onClick={onSave}
          className="w-full bg-[#354d73] hover:bg-[#2a3d5e] text-white h-12 text-base font-semibold"
        >
          {saved ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Saved!
            </>
          ) : (
            "Save changes"
          )}
        </Button>
      </div>
    </div>
  )
}

function PasswordSection() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-[#042230]">Change Password</h2>
      <div className="space-y-1.5 max-w-md">
        <Label htmlFor="currentPassword">Current password</Label>
        <Input id="currentPassword" type="password" className="max-w-md" />
      </div>
      <div className="space-y-1.5 max-w-md">
        <Label htmlFor="newPassword">New password</Label>
        <Input id="newPassword" type="password" className="max-w-md" />
      </div>
      <div className="space-y-1.5 max-w-md">
        <Label htmlFor="confirmPassword">Confirm new password</Label>
        <Input id="confirmPassword" type="password" className="max-w-md" />
      </div>
      <Button className="max-w-md w-full bg-[#354d73] hover:bg-[#2a3d5e] h-12 font-semibold">
        Update password
      </Button>
    </div>
  )
}

function EmailSection() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-[#042230]">Email Settings</h2>
      <div className="space-y-1.5 max-w-md">
        <Label>Current email</Label>
        <p className="rounded-md border border-border bg-muted px-3 py-2 text-sm text-foreground">
          jane@example.com
        </p>
      </div>
    </div>
  )
}

// ── Shared lesson data (mirrors student dashboard) ───────────────────────────

type Lesson = {
  id: number
  tutor: string
  subject: string
  /** ISO date string YYYY-MM-DD */
  date: string
  time?: string
  /** 1-5 star rating – only on past lessons */
  rating?: number
  type: "upcoming" | "past"
}

const ALL_LESSONS: Lesson[] = [
  // ── Past lessons ───────────────────────────────────────────────
  { id: 101, tutor: "Maria Santos",       subject: "Spanish",   date: "2026-01-08",  rating: 5, type: "past" },
  { id: 102, tutor: "Yuki Tanaka",        subject: "Japanese",  date: "2026-01-15",  rating: 4, type: "past" },
  { id: 103, tutor: "Hans Mueller",       subject: "German",    date: "2026-01-22",  rating: 5, type: "past" },
  { id: 104, tutor: "Maria Santos",       subject: "Spanish",   date: "2026-02-05",  rating: 5, type: "past" },
  { id: 105, tutor: "Jean-Pierre Dubois", subject: "French",    date: "2026-02-12",  rating: 4, type: "past" },
  { id: 106, tutor: "Yuki Tanaka",        subject: "Japanese",  date: "2026-02-19",  rating: 5, type: "past" },
  { id: 107, tutor: "Maria Santos",       subject: "Spanish",   date: "2026-03-12",  rating: 5, type: "past" },
  { id: 108, tutor: "Yuki Tanaka",        subject: "Japanese",  date: "2026-03-14",  rating: 4, type: "past" },
  { id: 109, tutor: "Hans Mueller",       subject: "German",    date: "2026-03-17",  rating: 5, type: "past" },
  // ── Upcoming lessons ───────────────────────────────────────────
  { id: 201, tutor: "Maria Santos",       subject: "Spanish",   date: "2026-03-19",  time: "10:00 AM", type: "upcoming" },
  { id: 202, tutor: "Yuki Tanaka",        subject: "Japanese",  date: "2026-03-21",  time: "2:00 PM",  type: "upcoming" },
  { id: 203, tutor: "Jean-Pierre Dubois", subject: "French",    date: "2026-03-24",  time: "11:00 AM", type: "upcoming" },
  { id: 204, tutor: "Maria Santos",       subject: "Spanish",   date: "2026-04-02",  time: "10:00 AM", type: "upcoming" },
  { id: 205, tutor: "Yuki Tanaka",        subject: "Japanese",  date: "2026-04-09",  time: "2:00 PM",  type: "upcoming" },
  { id: 206, tutor: "Hans Mueller",       subject: "German",    date: "2026-04-16",  time: "9:00 AM",  type: "upcoming" },
  { id: 207, tutor: "Jean-Pierre Dubois", subject: "French",    date: "2026-04-23",  time: "11:00 AM", type: "upcoming" },
]

const CAL_MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
]
const CAL_DAYS_SHORT = ["Mo","Tu","We","Th","Fr","Sa","Su"]

// Stable reference — created once at module load so it doesn't change on re-renders
const TODAY = new Date()

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="mt-0.5 flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={[
          "h-3 w-3",
          i < rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted",
        ].join(" ")} />
      ))}
    </div>
  )
}

function CalendarSection() {
  const [monthOffset, setMonthOffset] = useState(0)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const display      = new Date(TODAY.getFullYear(), TODAY.getMonth() + monthOffset, 1)
  const year         = display.getFullYear()
  const month        = display.getMonth()          // 0-indexed
  const daysInMonth  = new Date(year, month + 1, 0).getDate()
  // Monday-first offset
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7

  // Build grid cells
  const cells: (number | null)[] = []
  for (let i = 0; i < firstWeekday; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  const isCurrentMonth = year === TODAY.getFullYear() && month === TODAY.getMonth()

  // Group lessons for this month by day
  const lessonsByDay = new Map<number, Lesson[]>()
  ALL_LESSONS.forEach(lesson => {
    const d = new Date(lesson.date)
    if (d.getFullYear() === year && d.getMonth() === month) {
      const day = d.getDate()
      if (!lessonsByDay.has(day)) lessonsByDay.set(day, [])
      lessonsByDay.get(day)!.push(lesson)
    }
  })

  // Lessons for the selected day
  const selectedDayLessons: Lesson[] = selectedDate
    ? ALL_LESSONS.filter(l => l.date === selectedDate)
    : []

  // All lessons for this month (for the side list)
  const monthLessons = ALL_LESSONS.filter(l => {
    const d = new Date(l.date)
    return d.getFullYear() === year && d.getMonth() === month
  }).sort((a, b) => a.date.localeCompare(b.date))

  const upcomingThisMonth = monthLessons.filter(l => l.type === "upcoming")
  const pastThisMonth     = monthLessons.filter(l => l.type === "past")

  function formatDate(iso: string) {
    const d = new Date(iso)
    return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })
  }

  function isoOf(day: number) {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold text-[#042230]">My Calendar</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          View all your upcoming and past lessons at a glance.
        </p>
      </div>

      {/* ── Full monthly calendar (full width) ────────────────────── */}
      <div className="w-full overflow-hidden rounded-2xl border border-border bg-white shadow-sm">

        {/* Month navigation header */}
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <button
            type="button"
            onClick={() => { setMonthOffset(o => o - 1); setSelectedDate(null) }}
            aria-label="Previous month"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[#354d73] hover:bg-[#F0F6FA]"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-base font-bold text-[#042230]">
            {CAL_MONTHS[month]} {year}
          </span>
          <button
            type="button"
            onClick={() => { setMonthOffset(o => o + 1); setSelectedDate(null) }}
            aria-label="Next month"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[#354d73] hover:bg-[#F0F6FA]"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Day-of-week headers */}
        <div className="grid grid-cols-7 border-b border-border">
          {CAL_DAYS_SHORT.map(d => (
            <div key={d} className="py-2 text-center text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              {d}
            </div>
          ))}
        </div>

        {/* Day cells */}
        <div className="grid grid-cols-7">
          {cells.map((day, i) => {
            if (day === null) {
              return <div key={i} className="h-14 border-b border-r border-border/40 last:border-r-0" />
            }
            const iso         = isoOf(day)
            const isToday     = isCurrentMonth && day === TODAY.getDate()
            const isSelected  = selectedDate === iso
            const dayLessons  = lessonsByDay.get(day) ?? []
            const hasUpcoming = dayLessons.some(l => l.type === "upcoming")
            const hasPast     = dayLessons.some(l => l.type === "past")

            return (
              <button
                key={i}
                type="button"
                onClick={() => setSelectedDate(prev => prev === iso ? null : iso)}
                className={[
                  "relative flex h-14 flex-col items-center justify-start pt-1.5",
                  "border-b border-r border-border/40 text-sm transition-colors",
                  "hover:bg-[#F0F6FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#354d73]",
                  isSelected ? "bg-[#354d73]/8 ring-2 ring-inset ring-[#354d73]" : "",
                  (i + 1) % 7 === 0 ? "border-r-0" : "",
                ].filter(Boolean).join(" ")}
              >
                <span className={[
                  "flex h-7 w-7 items-center justify-center rounded-full text-sm font-medium",
                  isToday   ? "bg-[#354d73] text-white font-bold"          : "",
                  isSelected && !isToday ? "bg-[#354d73]/15 text-[#354d73]" : "",
                  !isToday && !isSelected ? "text-[#042230]"               : "",
                ].filter(Boolean).join(" ")}>
                  {day}
                </span>
                {dayLessons.length > 0 && (
                  <div className="mt-0.5 flex items-center gap-0.5">
                    {hasUpcoming && <span className="h-1.5 w-1.5 rounded-full bg-[#354d73]" />}
                    {hasPast     && <span className="h-1.5 w-1.5 rounded-full bg-[#042230]/40" />}
                  </div>
                )}
              </button>
            )
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 border-t border-border px-5 py-3">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#354d73]" /> Today
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#354d73]" /> Upcoming
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#042230]/40" /> Past
          </span>
        </div>
      </div>

      {/* ── Selected-day detail (below calendar) ──────────────────── */}
      {selectedDate && (
        <div className="rounded-2xl border border-[#354d73]/20 bg-[#354d73]/5 p-5">
          <p className="mb-3 text-sm font-bold text-[#354d73]">
            {formatDate(selectedDate)}
          </p>
          {selectedDayLessons.length === 0 ? (
            <p className="text-sm text-muted-foreground">No lessons on this day.</p>
          ) : (
            <div className="flex flex-wrap gap-3">
              {selectedDayLessons.map(lesson => (
                <div key={lesson.id} className="flex min-w-[180px] flex-1 items-start gap-3 rounded-xl border border-border bg-white p-3 shadow-sm">
                  <div className={[
                    "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                    lesson.type === "upcoming" ? "bg-[#354d73]/10" : "bg-muted",
                  ].join(" ")}>
                    <BookOpen className={[
                      "h-4 w-4",
                      lesson.type === "upcoming" ? "text-[#354d73]" : "text-muted-foreground",
                    ].join(" ")} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#042230]">{lesson.tutor}</p>
                    <p className="text-xs text-muted-foreground">{lesson.subject}</p>
                    {lesson.time && (
                      <p className="mt-0.5 text-xs font-medium text-[#354d73]">{lesson.time}</p>
                    )}
                    {lesson.rating !== undefined && (
                      <StarRating rating={lesson.rating} />
                    )}
                  </div>
                  <span className={[
                    "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                    lesson.type === "upcoming"
                      ? "bg-[#354d73]/10 text-[#354d73]"
                      : "bg-muted text-muted-foreground",
                  ].join(" ")}>
                    {lesson.type}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── Upcoming this month — horizontal card row ─────────────── */}
      {upcomingThisMonth.length > 0 && (
        <div>
          <p className="mb-3 text-sm font-bold text-[#042230]">
            Upcoming — {CAL_MONTHS[month]}
          </p>
          <div
            role="list"
            aria-label={`Upcoming lessons in ${CAL_MONTHS[month]}`}
            tabIndex={0}
            className="flex gap-3 overflow-x-auto rounded-lg pb-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#354d73]"
          >
            {upcomingThisMonth.map(lesson => (
              <button
                key={lesson.id}
                role="listitem"
                type="button"
                onClick={() => setSelectedDate(lesson.date)}
                className="group flex w-44 shrink-0 flex-col rounded-2xl border border-border bg-white p-4 text-left shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#354d73]"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#354d73]/10">
                  <Calendar className="h-4 w-4 text-[#354d73]" />
                </div>
                <p className="truncate text-sm font-semibold text-[#042230]">{lesson.tutor}</p>
                <p className="mt-0.5 truncate text-xs text-muted-foreground">{lesson.subject}</p>
                <p className="mt-2 text-xs font-medium text-[#354d73]">{formatDate(lesson.date)}</p>
                {lesson.time && (
                  <p className="text-xs text-muted-foreground">{lesson.time}</p>
                )}
                <span className="mt-3 self-start rounded-full bg-[#354d73]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#354d73]">
                  Upcoming
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Past lessons this month — horizontal card row ─────────── */}
      {pastThisMonth.length > 0 && (
        <div>
          <p className="mb-3 text-sm font-bold text-[#042230]">
            Past Lessons — {CAL_MONTHS[month]}
          </p>
          <div
            role="list"
            aria-label={`Past lessons in ${CAL_MONTHS[month]}`}
            tabIndex={0}
            className="flex gap-3 overflow-x-auto rounded-lg pb-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#354d73]"
          >
            {pastThisMonth.map(lesson => (
              <button
                key={lesson.id}
                role="listitem"
                type="button"
                onClick={() => setSelectedDate(lesson.date)}
                className="group flex w-44 shrink-0 flex-col rounded-2xl border border-border bg-white p-4 text-left shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#354d73]"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="truncate text-sm font-semibold text-[#042230]">{lesson.tutor}</p>
                <p className="mt-0.5 truncate text-xs text-muted-foreground">{lesson.subject}</p>
                <p className="mt-2 text-xs text-muted-foreground">{formatDate(lesson.date)}</p>
                {lesson.rating !== undefined && (
                  <div className="mt-1">
                    <StarRating rating={lesson.rating} />
                  </div>
                )}
                <span className="mt-3 self-start rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                  Past
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Empty state */}
      {monthLessons.length === 0 && !selectedDate && (
        <div className="rounded-2xl border border-border bg-white px-6 py-12 text-center shadow-sm">
          <CalendarDays className="mx-auto mb-3 h-10 w-10 text-muted-foreground/40" />
          <p className="font-medium text-[#042230]">No lessons in {CAL_MONTHS[month]}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Navigate to another month or book a new lesson.
          </p>
        </div>
      )}
    </div>
  )
}



const SAVE_CONFIRMATION_MS = 2000

// ─── Demo data ──────────────────────────────────────────────────────────────

type PaymentCard = {
  id: string
  brand: "visa" | "mastercard" | "other"
  last4: string
  expiry: string
  name: string
  isDefault: boolean
}

const DEMO_CARDS: PaymentCard[] = [
  { id: "c1", brand: "visa",       last4: "4242", expiry: "09/27", name: "Jane Smith",    isDefault: true  },
  { id: "c2", brand: "mastercard", last4: "5555", expiry: "03/26", name: "Jane Smith",    isDefault: false },
]

type Transaction = {
  id: string
  date: string
  tutor: string
  subject: string
  amount: string
  status: "paid" | "pending" | "refunded"
}

const DEMO_TRANSACTIONS: Transaction[] = [
  { id: "t1", date: "2026-03-19", tutor: "Maria Santos",       subject: "Spanish",  amount: "$25.00", status: "paid"     },
  { id: "t2", date: "2026-03-14", tutor: "Yuki Tanaka",        subject: "Japanese", amount: "$30.00", status: "paid"     },
  { id: "t3", date: "2026-03-12", tutor: "Maria Santos",       subject: "Spanish",  amount: "$25.00", status: "paid"     },
  { id: "t4", date: "2026-02-28", tutor: "Jean-Pierre Dubois", subject: "French",   amount: "$35.00", status: "paid"     },
  { id: "t5", date: "2026-02-20", tutor: "Hans Mueller",       subject: "German",   amount: "$28.00", status: "refunded" },
  { id: "t6", date: "2026-02-14", tutor: "Yuki Tanaka",        subject: "Japanese", amount: "$30.00", status: "paid"     },
  { id: "t7", date: "2026-01-30", tutor: "Maria Santos",       subject: "Spanish",  amount: "$25.00", status: "pending"  },
]

// ─── Payment Methods Section ─────────────────────────────────────────────────

function CardBrandBadge({ brand }: { brand: "visa" | "mastercard" | "other" }) {
  if (brand === "visa") {
    return (
      <div className="flex h-8 w-12 items-center justify-center rounded-md bg-[#1a1f71] px-1.5">
        <span className="text-[11px] font-extrabold italic tracking-widest text-white">VISA</span>
      </div>
    )
  }
  if (brand === "mastercard") {
    return (
      <div className="flex h-8 w-12 items-center justify-center rounded-md bg-white px-1">
        <div className="flex">
          <span className="inline-block h-5 w-5 rounded-full bg-[#EB001B] opacity-90" />
          <span className="-ml-2 inline-block h-5 w-5 rounded-full bg-[#F79E1B] opacity-90" />
        </div>
      </div>
    )
  }
  return (
    <div className="flex h-8 w-12 items-center justify-center rounded-md bg-muted px-1.5">
      <CreditCard className="h-4 w-4 text-muted-foreground" />
    </div>
  )
}

function PaymentMethodsSection() {
  const [cards, setCards] = useState<PaymentCard[]>(DEMO_CARDS)
  const [showForm, setShowForm] = useState(false)
  const [newCard, setNewCard] = useState({ number: "", name: "", expiry: "", cvv: "" })
  const [formError, setFormError] = useState("")

  function setDefault(id: string) {
    setCards(prev => prev.map(c => ({ ...c, isDefault: c.id === id })))
  }

  function removeCard(id: string) {
    setCards(prev => prev.filter(c => c.id !== id))
  }

  function handleAdd() {
    setFormError("")
    const cleaned = newCard.number.replace(/\s/g, "")
    if (cleaned.length < 13) { setFormError("Card number must be at least 13 digits."); return }
    if (!newCard.name.trim())  { setFormError("Enter the name on card.");   return }
    if (!/^\d{2}\/\d{2}$/.test(newCard.expiry)) { setFormError("Use MM/YY format for expiry."); return }
    if (newCard.cvv.length < 3) { setFormError("Enter a valid CVV."); return }
    const last4 = cleaned.slice(-4)
    const brand: "visa" | "mastercard" | "other" =
      cleaned[0] === "4" ? "visa" :
      cleaned[0] === "5" ? "mastercard" :
      "other"
    setCards(prev => [...prev, {
      id: `c${Date.now()}`, brand, last4, expiry: newCard.expiry,
      name: newCard.name, isDefault: prev.length === 0,
    }])
    setNewCard({ number: "", name: "", expiry: "", cvv: "" })
    setShowForm(false)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold text-[#042230]">Payment Methods</h2>
        <p className="mt-1 text-sm text-muted-foreground">Manage your saved cards for lesson payments.</p>
      </div>

      {/* Saved cards */}
      {cards.length > 0 ? (
        <div className="flex flex-col gap-3">
          {cards.map(card => (
            <div
              key={card.id}
              className="flex items-center gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm"
            >
              <CardBrandBadge brand={card.brand} />
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#042230]">
                  •••• •••• •••• {card.last4}
                </p>
                <p className="text-xs text-muted-foreground">{card.name} · Expires {card.expiry}</p>
              </div>
              {card.isDefault ? (
                <span className="rounded-full bg-[#354d73]/10 px-2.5 py-1 text-[11px] font-semibold text-[#354d73]">
                  Default
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => setDefault(card.id)}
                  className="text-xs text-[#354d73] hover:underline focus:outline-none"
                >
                  Set default
                </button>
              )}
              {!card.isDefault && (
                <button
                  type="button"
                  onClick={() => removeCard(card.id)}
                  aria-label="Remove card"
                  className="ml-1 flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground hover:bg-rose-50 hover:text-rose-500"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border bg-[#F0F6FA] px-6 py-10 text-center">
          <CreditCard className="mx-auto mb-3 h-8 w-8 text-muted-foreground/40" />
          <p className="text-sm text-muted-foreground">No saved payment methods yet.</p>
        </div>
      )}

      {/* Add card toggle */}
      {!showForm && (
        <Button
          type="button"
          variant="outline"
          onClick={() => setShowForm(true)}
          className="w-fit gap-2"
        >
          <Plus className="h-4 w-4" />
          Add new card
        </Button>
      )}

      {/* Add card form */}
      {showForm && (
        <div className="rounded-2xl border border-[#354d73]/20 bg-[#F0F6FA] p-5">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-bold text-[#042230]">Add new card</p>
            <button
              type="button"
              onClick={() => { setShowForm(false); setFormError("") }}
              aria-label="Cancel"
              className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground hover:bg-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {/* Card number */}
            <div className="space-y-1.5">
              <Label htmlFor="cardNumber">Card number</Label>
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={newCard.number}
                maxLength={19}
                onChange={e => {
                  const raw = e.target.value.replace(/\D/g, "").slice(0, 16)
                  const formatted = raw.replace(/(.{4})/g, "$1 ").trim()
                  setNewCard(p => ({ ...p, number: formatted }))
                }}
              />
            </div>

            {/* Name */}
            <div className="space-y-1.5">
              <Label htmlFor="cardName">Name on card</Label>
              <Input
                id="cardName"
                placeholder="Jane Smith"
                value={newCard.name}
                onChange={e => setNewCard(p => ({ ...p, name: e.target.value }))}
              />
            </div>

            {/* Expiry + CVV */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="cardExpiry">Expiry date</Label>
                <Input
                  id="cardExpiry"
                  placeholder="MM/YY"
                  value={newCard.expiry}
                  maxLength={5}
                  onChange={e => {
                    let v = e.target.value.replace(/\D/g, "").slice(0, 4)
                    if (v.length > 2) v = v.slice(0, 2) + "/" + v.slice(2)
                    setNewCard(p => ({ ...p, expiry: v }))
                  }}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="cardCVV">CVV</Label>
                <Input
                  id="cardCVV"
                  placeholder="•••"
                  value={newCard.cvv}
                  maxLength={4}
                  onChange={e => setNewCard(p => ({ ...p, cvv: e.target.value.replace(/\D/g, "").slice(0, 4) }))}
                />
              </div>
            </div>

            {formError && (
              <p className="text-xs text-rose-600">{formError}</p>
            )}

            <div className="flex items-center gap-2 pt-1">
              <ShieldCheck className="h-4 w-4 text-[#354d73]" />
              <p className="text-xs text-muted-foreground">Your card info is encrypted and stored securely.</p>
            </div>

            <div className="flex gap-3 pt-1">
              <Button type="button" onClick={handleAdd} className="bg-[#354d73] text-white hover:bg-[#354d73]/90">
                Save card
              </Button>
              <Button type="button" variant="outline" onClick={() => { setShowForm(false); setFormError("") }}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Payment History Section ──────────────────────────────────────────────────

function PaymentHistorySection() {
  const statusStyles: Record<Transaction["status"], { label: string; className: string }> = {
    paid:     { label: "Paid",     className: "bg-emerald-50 text-emerald-700" },
    pending:  { label: "Pending",  className: "bg-amber-50   text-amber-700"  },
    refunded: { label: "Refunded", className: "bg-[#354d73]/10 text-[#354d73]" },
  }

  const totalPaid = DEMO_TRANSACTIONS
    .filter(t => t.status === "paid")
    .reduce((sum, t) => sum + parseFloat(t.amount.replace("$", "")), 0)
    .toFixed(2)

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold text-[#042230]">Payment History</h2>
        <p className="mt-1 text-sm text-muted-foreground">A record of all your lesson payments.</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {[
          { label: "Total spent",    value: `$${totalPaid}`, icon: Receipt   },
          { label: "Lessons paid",   value: `${DEMO_TRANSACTIONS.filter(t => t.status === "paid").length}`,    icon: Check       },
          { label: "Pending",        value: `${DEMO_TRANSACTIONS.filter(t => t.status === "pending").length}`, icon: Clock       },
        ].map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-2xl border border-border bg-[#F0F6FA] px-5 py-4">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#354d73]/10">
              <Icon className="h-4 w-4 text-[#354d73]" />
            </div>
            <p className="text-xl font-bold text-[#042230]">{value}</p>
            <p className="text-xs text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>

      {/* Transaction table */}
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
        <div className="border-b border-border px-5 py-3">
          <p className="text-sm font-bold text-[#042230]">All transactions</p>
        </div>

        {/* Header */}
        <div className="hidden grid-cols-[1fr_1fr_auto_auto_auto] items-center gap-3 border-b border-border bg-[#F0F6FA] px-5 py-2 sm:grid">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Tutor</p>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Date</p>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Amount</p>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Status</p>
          <p className="sr-only">Actions</p>
        </div>

        <div className="divide-y divide-border">
          {DEMO_TRANSACTIONS.map(tx => {
            const s = statusStyles[tx.status]
            return (
              <div
                key={tx.id}
                className="grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-[1fr_1fr_auto_auto_auto] sm:items-center sm:gap-3"
              >
                {/* Tutor + subject */}
                <div>
                  <p className="text-sm font-semibold text-[#042230]">{tx.tutor}</p>
                  <p className="text-xs text-muted-foreground">{tx.subject}</p>
                </div>
                {/* Date */}
                <p className="text-sm text-muted-foreground">{formatDate(tx.date)}</p>
                {/* Amount */}
                <p className="text-sm font-semibold text-[#042230]">{tx.amount}</p>
                {/* Status */}
                <span className={`inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${s.className}`}>
                  {s.label}
                </span>
                {/* Download */}
                <button
                  type="button"
                  aria-label="Download receipt"
                  className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground hover:bg-[#F0F6FA] hover:text-[#354d73]"
                >
                  <Download className="h-3.5 w-3.5" />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ─── Notifications Section ────────────────────────────────────────────────────

type NotifGroup = {
  id: string
  title: string
  description: string
  items: { id: string; label: string; description: string }[]
}

const NOTIF_GROUPS: NotifGroup[] = [
  {
    id: "email",
    title: "Email notifications",
    description: "Choose which emails you receive from My Language Plug.",
    items: [
      { id: "email-reminders",  label: "Lesson reminders",      description: "Get reminded 24 h and 1 h before a lesson."  },
      { id: "email-bookings",   label: "New booking confirmed",  description: "When a tutor accepts your booking request."   },
      { id: "email-messages",   label: "New messages",          description: "When a tutor sends you a message."            },
      { id: "email-receipts",   label: "Payment receipts",      description: "After every successful payment."              },
      { id: "email-marketing",  label: "Promotions & tips",     description: "Deals, tutor spotlights and learning tips."   },
    ],
  },
  {
    id: "push",
    title: "Push notifications",
    description: "Receive browser or mobile push alerts.",
    items: [
      { id: "push-reminders",   label: "Lesson reminders",      description: "Push alert 15 min before your lesson starts." },
      { id: "push-bookings",    label: "Booking updates",       description: "Confirmation, changes or cancellations."      },
      { id: "push-messages",    label: "New messages",          description: "Instant alert when a tutor replies."          },
    ],
  },
]

function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className={[
        "relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full transition-colors",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#354d73] focus-visible:ring-offset-1",
        checked ? "bg-[#354d73]" : "bg-muted",
      ].join(" ")}
    >
      <span
        className={[
          "inline-block h-4 w-4 rounded-full bg-white shadow transition-transform",
          checked ? "translate-x-4" : "translate-x-0.5",
        ].join(" ")}
      />
    </button>
  )
}

function NotificationsSection() {
  const defaultEnabled = new Set(["email-reminders", "email-bookings", "email-receipts", "push-reminders", "push-bookings"])
  const [enabled, setEnabled] = useState<Set<string>>(defaultEnabled)
  const [saved, setSaved] = useState(false)

  function toggle(id: string) {
    setEnabled(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  function toggleGroup(group: NotifGroup) {
    const allOn = group.items.every(item => enabled.has(item.id))
    setEnabled(prev => {
      const next = new Set(prev)
      group.items.forEach(item => allOn ? next.delete(item.id) : next.add(item.id))
      return next
    })
  }

  function handleSave() {
    setSaved(true)
    setTimeout(() => setSaved(false), SAVE_CONFIRMATION_MS)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold text-[#042230]">Notifications</h2>
        <p className="mt-1 text-sm text-muted-foreground">Control how and when My Language Plug contacts you.</p>
      </div>

      {NOTIF_GROUPS.map(group => {
        const allOn = group.items.every(item => enabled.has(item.id))
        return (
          <div key={group.id} className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            {/* Group header */}
            <div className="flex items-center justify-between border-b border-border bg-[#F0F6FA] px-5 py-4">
              <div>
                <p className="text-sm font-bold text-[#042230]">{group.title}</p>
                <p className="text-xs text-muted-foreground">{group.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">{allOn ? "All on" : "Manage"}</span>
                <Toggle checked={allOn} onChange={() => toggleGroup(group)} />
              </div>
            </div>

            {/* Individual items */}
            <div className="divide-y divide-border">
              {group.items.map(item => (
                <div key={item.id} className="flex items-center justify-between px-5 py-3">
                  <div className="flex items-start gap-3">
                    <div className={[
                      "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                      enabled.has(item.id) ? "bg-[#354d73]/10" : "bg-muted",
                    ].join(" ")}>
                      {enabled.has(item.id)
                        ? <Bell className="h-3.5 w-3.5 text-[#354d73]" />
                        : <BellOff className="h-3.5 w-3.5 text-muted-foreground" />}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#042230]">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <Toggle checked={enabled.has(item.id)} onChange={() => toggle(item.id)} />
                </div>
              ))}
            </div>
          </div>
        )
      })}

      <div className="flex items-center gap-3">
        <Button
          type="button"
          onClick={handleSave}
          className="bg-[#354d73] text-white hover:bg-[#354d73]/90"
        >
          {saved ? <><Check className="mr-2 h-4 w-4" />Saved</> : "Save preferences"}
        </Button>
      </div>
    </div>
  )
}


function DeleteSection() {
  const [accountActive, setAccountActive] = useState(true)
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-[#042230]">Delete Account</h2>

      {/* Account Status */}
      <div className="rounded-xl border border-orange-200 bg-orange-50 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-orange-800">Account Status</p>
            <p className="mt-1 text-xs text-orange-700">
              {accountActive
                ? "Your account is active and visible to tutors."
                : "Your account is inactive and hidden from tutors."}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className={`text-xs font-medium ${accountActive ? "text-orange-400" : "text-orange-700"}`}>
              Inactive
            </span>
            <Switch
              checked={accountActive}
              onCheckedChange={setAccountActive}
              className="data-[state=checked]:bg-orange-500"
            />
            <span className={`text-xs font-medium ${accountActive ? "text-orange-700" : "text-orange-400"}`}>
              Active
            </span>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-rose-200 bg-rose-50 p-6">
        <p className="font-medium text-rose-700">Warning: this action is permanent.</p>
        <p className="mt-1 text-sm text-rose-600">
          Deleting your account will remove all your data, bookings, and messages. This cannot be undone.
        </p>
      </div>
      <Button variant="destructive" className="max-w-xs">
        <Trash2 className="mr-2 h-4 w-4" />
        Delete my account
      </Button>
    </div>
  )
}

export default function StudentSettings() {
  const [active, setActive] = useState("account")
  const [saved, setSaved] = useState(false)

  function handleSave() {
    setSaved(true)
    setTimeout(() => setSaved(false), SAVE_CONFIRMATION_MS)
  }

  return (
    <div className="min-h-screen bg-[#F0F6FA]">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back to dashboard */}
        <Link
          href="/student"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          {/* ── Sidebar ────────────────────────────────────────── */}
          <nav className="shrink-0 lg:w-52">
            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
              {sidebarItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActive(id)}
                  className={`flex w-full items-center gap-3 px-5 py-3 text-sm transition-colors
                    ${active === id
                      ? "border-l-4 border-[#354d73] bg-[#F0F6FA] font-semibold text-[#354d73]"
                      : "border-l-4 border-transparent text-foreground hover:bg-[#F0F6FA] hover:text-[#354d73]"
                    }
                    ${id === "delete-account" ? "text-rose-600 hover:text-rose-700" : ""}
                  `}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {label}
                </button>
              ))}
            </div>
          </nav>

          {/* ── Content ─────────────────────────────────────────── */}
          <div className="flex-1 rounded-2xl border border-border bg-white p-6 shadow-sm lg:p-8">
            {active === "account" && <AccountSection saved={saved} onSave={handleSave} />}
            {active === "password" && <PasswordSection />}
            {active === "email" && <EmailSection />}
            {active === "payment-methods" && <PaymentMethodsSection />}
            {active === "payment-history" && <PaymentHistorySection />}
            {active === "calendar" && <CalendarSection />}
            {active === "notifications" && <NotificationsSection />}
            {active === "delete-account" && <DeleteSection />}
          </div>
        </div>
      </div>
    </div>
  )
}
