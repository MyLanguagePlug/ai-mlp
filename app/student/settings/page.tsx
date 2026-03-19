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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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



function PlaceholderSection({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-[#042230]">{title}</h2>
      <div className="rounded-xl border border-border bg-[#F0F6FA] px-8 py-16 text-center">
        <p className="text-muted-foreground">This section is coming soon.</p>
      </div>
    </div>
  )
}


function DeleteSection() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-[#042230]">Delete Account</h2>
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
    setTimeout(() => setSaved(false), 2000)
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
            {active === "payment-methods" && <PlaceholderSection title="Payment Methods" />}
            {active === "payment-history" && <PlaceholderSection title="Payment History" />}
            {active === "calendar" && <CalendarSection />}
            {active === "notifications" && <PlaceholderSection title="Notifications" />}
            {active === "delete-account" && <DeleteSection />}
          </div>
        </div>
      </div>
    </div>
  )
}
