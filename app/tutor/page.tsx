"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  Home,
  MessageCircle,
  Star,
  Calendar,
  Wallet,
  Settings,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Users,
  DollarSign,
  BarChart2,
  Send,
  Clock,
  Filter,
  BookOpen,
  Video,
  X,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// ── Demo data ─────────────────────────────────────────────────────────────────

const TUTOR_NAME = "Brazil James"
const TUTOR_AVATAR = "B" // initials fallback

type UpcomingLesson = {
  id: number
  student: string
  avatar: string
  language: string
  type: "Trial" | "Regular" | "Intensive"
  duration: number
  datetime: string
  status: "upcoming" | "in-progress" | "completed" | "cancelled"
}

const UPCOMING_LESSONS: UpcomingLesson[] = [
  {
    id: 1,
    student: "Jane Cooper",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
    language: "English",
    type: "Regular",
    duration: 50,
    datetime: "Mon Mar 24th, 2026 at 10:00 AM",
    status: "upcoming",
  },
  {
    id: 2,
    student: "Marco Rossi",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
    language: "English",
    type: "Trial",
    duration: 30,
    datetime: "Tue Mar 25th, 2026 at 02:00 PM",
    status: "upcoming",
  },
  {
    id: 3,
    student: "Amara Diallo",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop",
    language: "English",
    type: "Intensive",
    duration: 60,
    datetime: "Wed Mar 26th, 2026 at 06:00 PM",
    status: "upcoming",
  },
]

type PreviousLesson = {
  id: number
  student: string
  avatar: string
  language: string
  duration: number
  datetime: string
  canReview: boolean
}

const PREVIOUS_LESSONS: PreviousLesson[] = [
  {
    id: 1,
    student: "Learner User",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop",
    language: "English",
    duration: 50,
    datetime: "Mon May 26th, 2025 at 06:00 AM",
    canReview: true,
  },
  {
    id: 2,
    student: "Sophie Laurent",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
    language: "English",
    duration: 50,
    datetime: "Fri May 22nd, 2025 at 04:00 PM",
    canReview: false,
  },
]

type ConversationItem = {
  id: number
  student: string
  avatar: string
  language: string
  lastMessage: string
  time: string
  unread: number
  online: boolean
}

const DEMO_CONVERSATIONS: ConversationItem[] = [
  {
    id: 1,
    student: "Jane Cooper",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
    language: "English",
    lastMessage: "See you at 10 AM tomorrow! 🌟",
    time: "2 min ago",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    student: "Marco Rossi",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
    language: "English",
    lastMessage: "Will the session be on video call?",
    time: "1 h ago",
    unread: 1,
    online: true,
  },
  {
    id: 3,
    student: "Amara Diallo",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop",
    language: "English",
    lastMessage: "Thank you so much for the last lesson!",
    time: "Yesterday",
    unread: 0,
    online: false,
  },
]

type ChatMessage = { id: number; from: "me" | "student"; text: string; time: string }
const DEMO_CHAT: Record<number, ChatMessage[]> = {
  1: [
    { id: 1, from: "student", text: "Hi! Looking forward to our session tomorrow.", time: "Yesterday 4:00 PM" },
    { id: 2, from: "me",      text: "Me too Jane! We'll focus on pronunciation this time.", time: "Yesterday 4:15 PM" },
    { id: 3, from: "student", text: "See you at 10 AM tomorrow! 🌟", time: "2 min ago" },
  ],
  2: [
    { id: 1, from: "student", text: "Will the session be on video call?", time: "1 h ago" },
    { id: 2, from: "me",      text: "Yes, I'll send you the link 30 min before.", time: "50 min ago" },
  ],
  3: [
    { id: 1, from: "student", text: "Thank you so much for the last lesson!", time: "Yesterday" },
    { id: 2, from: "me",      text: "My pleasure Amara, you're improving fast! 🚀", time: "Yesterday" },
  ],
}

type Review = {
  id: number
  student: string
  avatar: string
  rating: number
  comment: string
  date: string
  language: string
}

const DEMO_REVIEWS: Review[] = [
  {
    id: 1,
    student: "Jane Cooper",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
    rating: 5,
    comment: "Brazil is an amazing teacher. He explains things clearly and makes every lesson fun!",
    date: "Mar 22, 2026",
    language: "English",
  },
  {
    id: 2,
    student: "Sophie Laurent",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
    rating: 5,
    comment: "Very patient and professional. I feel more confident speaking after every session.",
    date: "Mar 18, 2026",
    language: "English",
  },
  {
    id: 3,
    student: "Marco Rossi",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
    rating: 4,
    comment: "Great trial lesson. I booked regular sessions right after.",
    date: "Mar 14, 2026",
    language: "English",
  },
]

// ── Sidebar nav ───────────────────────────────────────────────────────────────

type NavItem = {
  id: "home" | "messages" | "reviews" | "schedule" | "wallet" | "settings"
  label: string
  icon: React.ElementType
  badge?: number
}

const NAV_ITEMS: NavItem[] = [
  { id: "home",     label: "Home",      icon: Home },
  { id: "messages", label: "Messages", icon: MessageCircle, badge: 3 },
  { id: "reviews",  label: "Reviews",  icon: Star },
  { id: "schedule", label: "Schedule", icon: Calendar },
  { id: "wallet",   label: "Wallet",   icon: Wallet },
  { id: "settings", label: "Settings", icon: Settings },
]

// ── Stat card ─────────────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  icon: Icon,
  trend,
}: {
  label: string
  value: string
  icon: React.ElementType
  trend?: string
}) {
  return (
    <div className="flex items-start justify-between rounded-xl border border-border bg-white px-5 py-4 shadow-sm">
      <div>
        <p className="text-xs font-medium text-muted-foreground">{label}</p>
        <p className="mt-1 text-2xl font-bold text-[#042230]">{value}</p>
        {trend && (
          <p className="mt-0.5 flex items-center gap-0.5 text-xs text-emerald-600">
            <TrendingUp className="h-3 w-3" />
            {trend}
          </p>
        )}
      </div>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#354d73]/10">
        <Icon className="h-5 w-5 text-[#354d73]" />
      </div>
    </div>
  )
}

// ── Schedule tab content ──────────────────────────────────────────────────────

const CAL_MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
]

const LESSON_CALENDAR_DATES = [
  { year: 2026, month: 2, day: 24 },
  { year: 2026, month: 2, day: 25 },
  { year: 2026, month: 2, day: 26 },
  { year: 2026, month: 2, day: 28 },
]

function TutorMiniCalendar() {
  const [monthOffset, setMonthOffset] = useState(0)
  const today = new Date()
  const display  = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1)
  const year     = display.getFullYear()
  const month    = display.getMonth()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7

  const lessonDays = new Set(
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
    <div className="rounded-xl border border-border bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setMonthOffset(o => o - 1)}
          aria-label="Previous month"
          className="flex h-7 w-7 items-center justify-center rounded text-muted-foreground hover:bg-[#F0F6FA] hover:text-[#354d73]"
        >
          ‹
        </button>
        <span className="text-sm font-semibold text-[#042230]">
          {CAL_MONTHS[month]} {year}
        </span>
        <button
          type="button"
          onClick={() => setMonthOffset(o => o + 1)}
          aria-label="Next month"
          className="flex h-7 w-7 items-center justify-center rounded text-muted-foreground hover:bg-[#F0F6FA] hover:text-[#354d73]"
        >
          ›
        </button>
      </div>

      <div className="mb-1 grid grid-cols-7 text-center">
        {["Mo","Tu","We","Th","Fr","Sa","Su"].map(d => (
          <div key={d} className="text-[10px] font-medium text-muted-foreground">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-0.5">
        {cells.map((day, i) => {
          const isToday  = day !== null && isCurrentMonth && day === todayDay
          const isLesson = day !== null && !isToday && lessonDays.has(day)
          return (
            <div
              key={i}
              className={[
                "mx-auto flex h-7 w-7 items-center justify-center rounded-full text-xs leading-none",
                day === null     ? "invisible"                                                             : "",
                isToday          ? "bg-[#354d73] font-bold text-white"                                    : "",
                isLesson         ? "bg-[#354d73]/15 font-semibold text-[#354d73] ring-1 ring-[#354d73]/40" : "",
                !isToday && !isLesson && day !== null ? "text-[#042230]"                                  : "",
              ].filter(Boolean).join(" ")}
            >
              {day}
            </div>
          )
        })}
      </div>

      <div className="mt-3 flex items-center gap-4 border-t border-border pt-3">
        <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#354d73]" /> Today
        </span>
        <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#354d73]/30 ring-1 ring-[#354d73]/40" /> Lesson
        </span>
      </div>
    </div>
  )
}

// ── Home (schedule) panel ─────────────────────────────────────────────────────

function HomePanel() {
  const [scheduleTab, setScheduleTab] = useState<"lessons" | "calendar">("lessons")
  const [langFilter, setLangFilter]   = useState("all")
  const [typeFilter, setTypeFilter]   = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const filtered = UPCOMING_LESSONS.filter(l => {
    if (langFilter   !== "all" && l.language.toLowerCase() !== langFilter) return false
    if (typeFilter   !== "all" && l.type.toLowerCase()     !== typeFilter) return false
    if (statusFilter !== "all" && l.status                 !== statusFilter) return false
    return true
  })

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Attendance Percentage" value="87%" icon={CheckCircle2} trend="+5% this month" />
        <StatCard label="Total Lessons"         value="23"  icon={BookOpen} />
        <StatCard label="Monthly Earnings"      value="$0.00" icon={DollarSign} />
        <StatCard label="Wallet"                value="$0.00" icon={Wallet} />
      </div>

      {/* My Schedule */}
      <div className="rounded-xl border border-border bg-white shadow-sm">
        <div className="border-b border-border px-5 py-4">
          <h2 className="text-base font-semibold text-[#042230]">My Schedule</h2>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border px-5">
          {(["lessons", "calendar"] as const).map(tab => (
            <button
              key={tab}
              type="button"
              onClick={() => setScheduleTab(tab)}
              className={`-mb-px mr-6 pb-3 pt-3 text-sm font-medium transition-colors ${
                scheduleTab === tab
                  ? "border-b-2 border-[#354d73] text-[#354d73]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab === "lessons" ? "Lesson Schedule" : "Calendar"}
            </button>
          ))}
        </div>

        <div className="p-5">
          {scheduleTab === "lessons" ? (
            <>
              {/* Filters */}
              <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <Select value={langFilter} onValueChange={setLangFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All languages</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Lesson type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All types</SelectItem>
                    <SelectItem value="trial">Trial</SelectItem>
                    <SelectItem value="regular">Regular</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All statuses</SelectItem>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <h3 className="mb-3 text-sm font-semibold text-[#042230]">Upcoming lessons</h3>

              {filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#F0F6FA]">
                    <Calendar className="h-8 w-8 text-[#354d73]/40" />
                  </div>
                  <p className="text-base font-semibold text-[#354d73]">
                    No schedules available for selected filters
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Try adjusting your filters or check your upcoming bookings
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filtered.map(lesson => (
                    <div
                      key={lesson.id}
                      className="flex items-center justify-between rounded-lg border border-border p-4 hover:bg-[#F0F6FA]/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={lesson.avatar}
                          alt={lesson.student}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-semibold text-[#042230]">{lesson.student}</p>
                            <Badge
                              variant="secondary"
                              className={`text-xs ${lesson.type === "Trial" ? "bg-amber-100 text-amber-700" : lesson.type === "Intensive" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"}`}
                            >
                              {lesson.type}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">🇬🇧 {lesson.language}</p>
                          <p className="text-xs text-muted-foreground">{lesson.datetime}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-[#042230]">{lesson.duration} min</p>
                        <Button size="sm" variant="outline" className="mt-1 h-7 text-xs">
                          <Video className="mr-1 h-3 w-3" />
                          Join
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <TutorMiniCalendar />
          )}
        </div>
      </div>

      {/* Previous Lessons */}
      <div className="rounded-xl border border-border bg-white shadow-sm">
        <div className="border-b border-border px-5 py-4">
          <h2 className="text-base font-semibold text-[#042230]">Previous lessons</h2>
        </div>
        <div className="divide-y divide-border">
          {PREVIOUS_LESSONS.map(lesson => (
            <div key={lesson.id} className="px-5 py-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                <span>{lesson.duration} Minutes</span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={lesson.avatar}
                  alt={lesson.student}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-[#042230]">{lesson.student}</p>
                  <p className="text-xs text-muted-foreground">🇬🇧 {lesson.language}</p>
                </div>
              </div>
              <div className="mt-3 rounded-lg bg-[#F0F6FA] px-4 py-2.5">
                <p className="text-sm font-medium text-[#042230]">{lesson.datetime}</p>
                <p className="text-xs text-muted-foreground">Time is based on your location</p>
              </div>
              {lesson.canReview && (
                <div className="mt-2">
                  <button
                    type="button"
                    className="text-xs font-medium text-[#354d73] hover:underline"
                  >
                    Review Student
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Messages panel ────────────────────────────────────────────────────────────

function MessagesPanel() {
  const [activeConv, setActiveConv] = useState<number | null>(1)
  const [draft, setDraft] = useState("")
  const totalUnread = DEMO_CONVERSATIONS.reduce((s, c) => s + c.unread, 0)

  const conv = DEMO_CONVERSATIONS.find(c => c.id === activeConv)
  const messages = activeConv ? DEMO_CHAT[activeConv] ?? [] : []

  return (
    <div className="rounded-xl border border-border bg-white shadow-sm overflow-hidden" style={{ height: "calc(100vh - 14rem)" }}>
      <div className="flex h-full">
        {/* Conversation list */}
        <div className="w-72 shrink-0 border-r border-border flex flex-col">
          <div className="border-b border-border px-4 py-3">
            <h2 className="text-base font-semibold text-[#042230]">
              Messages
              {totalUnread > 0 && (
                <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#354d73] text-[10px] font-bold text-white">
                  {totalUnread}
                </span>
              )}
            </h2>
          </div>
          <div className="flex-1 overflow-y-auto divide-y divide-border">
            {DEMO_CONVERSATIONS.map(c => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveConv(c.id)}
                className={`w-full px-4 py-3 text-left hover:bg-[#F0F6FA] transition-colors ${activeConv === c.id ? "bg-[#F0F6FA]" : ""}`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <img src={c.avatar} alt={c.student} className="h-10 w-10 rounded-full object-cover" />
                    {c.online && (
                      <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="truncate text-sm font-semibold text-[#042230]">{c.student}</p>
                      <span className="shrink-0 text-[10px] text-muted-foreground">{c.time}</span>
                    </div>
                    <p className="truncate text-xs text-muted-foreground">{c.lastMessage}</p>
                  </div>
                  {c.unread > 0 && (
                    <span className="shrink-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#354d73] text-[9px] font-bold text-white">
                      {c.unread}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat window */}
        <div className="flex flex-1 flex-col min-w-0">
          {conv ? (
            <>
              {/* Chat header */}
              <div className="flex items-center gap-3 border-b border-border px-5 py-3">
                <img src={conv.avatar} alt={conv.student} className="h-9 w-9 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-[#042230]">{conv.student}</p>
                  <p className="text-xs text-muted-foreground">🇬🇧 {conv.language}</p>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
                {messages.map(msg => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-2xl px-4 py-2.5 text-sm ${
                        msg.from === "me"
                          ? "bg-[#354d73] text-white"
                          : "bg-[#F0F6FA] text-[#042230]"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p className={`mt-0.5 text-[10px] ${msg.from === "me" ? "text-white/60" : "text-muted-foreground"}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="border-t border-border px-4 py-3 flex items-center gap-2">
                <Input
                  placeholder="Write a message…"
                  value={draft}
                  onChange={e => setDraft(e.target.value)}
                  onKeyDown={e => { if (e.key === "Enter") setDraft("") }}
                  className="h-10 flex-1"
                />
                <Button
                  size="icon"
                  className="h-10 w-10 shrink-0 bg-[#354d73] hover:bg-[#2a3d5e]"
                  onClick={() => setDraft("")}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center text-center p-8">
              <MessageCircle className="mb-3 h-10 w-10 text-[#354d73]/30" />
              <p className="text-sm text-muted-foreground">Select a conversation to start messaging</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Reviews panel ─────────────────────────────────────────────────────────────

function ReviewsPanel() {
  const avg = (DEMO_REVIEWS.reduce((s, r) => s + r.rating, 0) / DEMO_REVIEWS.length).toFixed(1)

  return (
    <div className="space-y-4">
      {/* Summary */}
      <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <p className="text-4xl font-bold text-[#042230]">{avg}</p>
            <div className="mt-1 flex items-center justify-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.round(Number(avg)) ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}`}
                />
              ))}
            </div>
            <p className="mt-1 text-xs text-muted-foreground">{DEMO_REVIEWS.length} reviews</p>
          </div>
          <div className="flex-1 space-y-1.5">
            {[5,4,3,2,1].map(star => {
              const count = DEMO_REVIEWS.filter(r => r.rating === star).length
              const pct   = Math.round((count / DEMO_REVIEWS.length) * 100)
              return (
                <div key={star} className="flex items-center gap-2">
                  <span className="w-4 text-xs text-muted-foreground">{star}</span>
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#F0F6FA]">
                    <div className="h-full rounded-full bg-amber-400" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="w-6 text-xs text-muted-foreground">{count}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Individual reviews */}
      {DEMO_REVIEWS.map(r => (
        <div key={r.id} className="rounded-xl border border-border bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <img src={r.avatar} alt={r.student} className="h-10 w-10 rounded-full object-cover" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-[#042230]">{r.student}</p>
              <p className="text-xs text-muted-foreground">{r.date} · 🇬🇧 {r.language}</p>
            </div>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.comment}</p>
        </div>
      ))}
    </div>
  )
}

// ── Wallet panel ──────────────────────────────────────────────────────────────

function WalletPanel() {
  return (
    <div className="space-y-4">
      {/* Balance cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-[#354d73] p-5 text-white shadow-sm">
          <p className="text-xs font-medium text-white/70">Available Balance</p>
          <p className="mt-1 text-3xl font-bold">$0.00</p>
          <p className="mt-1 text-xs text-white/60">USD</p>
          <Button
            size="sm"
            variant="secondary"
            className="mt-4 bg-white text-[#354d73] hover:bg-white/90"
          >
            Withdraw Funds
          </Button>
        </div>
        <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
          <p className="text-xs font-medium text-muted-foreground">Total Earned</p>
          <p className="mt-1 text-3xl font-bold text-[#042230]">$0.00</p>
          <p className="mt-1 text-xs text-muted-foreground">All time</p>
          <div className="mt-4 flex items-center gap-1.5">
            <TrendingUp className="h-4 w-4 text-emerald-500" />
            <span className="text-xs text-emerald-600">$0 this month</span>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="rounded-xl border border-border bg-white shadow-sm">
        <div className="border-b border-border px-5 py-4">
          <h2 className="text-base font-semibold text-[#042230]">Recent Transactions</h2>
        </div>
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#F0F6FA]">
            <DollarSign className="h-8 w-8 text-[#354d73]/40" />
          </div>
          <p className="text-sm font-semibold text-[#354d73]">No transactions yet</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Your earnings will appear here after completed lessons
          </p>
        </div>
      </div>

      {/* Payout settings hint */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💳</span>
          <div className="flex-1">
            <p className="text-sm font-semibold text-amber-900">Connect your payout method to get paid</p>
            <p className="mt-1 text-xs text-amber-700">
              To receive your earnings, you need to connect a payout method such as PayPal, a bank account, or Payoneer.
              Once connected, payouts are processed every Friday automatically.
            </p>
            <p className="mt-2 text-xs text-amber-700 font-medium">
              ⚠️ Without a connected payout method, your earnings will accumulate here but cannot be transferred.
            </p>
            <Button size="sm" variant="outline" className="mt-3 border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900">
              Connect Payout Method
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Schedule panel ────────────────────────────────────────────────────────────

function SchedulePanel() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const slots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]

  const [available, setAvailable] = useState<Set<string>>(
    () => new Set(["Mon-10:00", "Mon-11:00", "Wed-14:00", "Wed-15:00", "Fri-09:00", "Fri-10:00"])
  )

  function toggle(key: string) {
    setAvailable(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  return (
    <div className="rounded-xl border border-border bg-white shadow-sm overflow-x-auto">
      <div className="border-b border-border px-5 py-4 flex items-center justify-between">
        <h2 className="text-base font-semibold text-[#042230]">Weekly Availability</h2>
        <Button size="sm" className="bg-[#354d73] hover:bg-[#2a3d5e]">Save Schedule</Button>
      </div>
      <div className="p-5">
        <p className="mb-4 text-xs text-muted-foreground">
          Click cells to toggle your availability. Students can only book during your available slots.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr>
                <th className="pb-2 pr-3 text-left font-medium text-muted-foreground">Time</th>
                {days.map(d => (
                  <th key={d} className="pb-2 px-1 text-center font-medium text-muted-foreground">{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {slots.map(slot => (
                <tr key={slot}>
                  <td className="py-0.5 pr-3 text-muted-foreground">{slot}</td>
                  {days.map(day => {
                    const key = `${day}-${slot}`
                    const isOn = available.has(key)
                    return (
                      <td key={day} className="py-0.5 px-1 text-center">
                        <button
                          type="button"
                          onClick={() => toggle(key)}
                          aria-label={`${isOn ? "Remove" : "Add"} availability for ${day} at ${slot}`}
                          className={`h-6 w-12 rounded transition-colors ${
                            isOn
                              ? "bg-[#354d73] hover:bg-[#2a3d5e]"
                              : "bg-[#F0F6FA] hover:bg-[#354d73]/20"
                          }`}
                        />
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ── Settings panel ────────────────────────────────────────────────────────────

function SettingsPanel() {
  return (
    <div className="space-y-4">
      {[
        { label: "Profile Information", desc: "Update your name, bio, and profile photo", href: "/tutor/profile" },
        { label: "Teaching Preferences", desc: "Set your languages, specialties, and lesson types", href: "/tutor/settings?tab=teaching" },
        { label: "Pricing & Rates",      desc: "Set your hourly rate and trial lesson pricing",  href: "/tutor/settings?tab=pricing" },
        { label: "Notifications",        desc: "Manage email and push notification preferences",  href: "/tutor/settings?tab=notifications" },
        { label: "Account & Security",   desc: "Change your password and account settings",       href: "/tutor/settings?tab=account" },
      ].map(item => (
        <Link
          key={item.label}
          href={item.href}
          className="flex items-center justify-between rounded-xl border border-border bg-white p-5 shadow-sm hover:bg-[#F0F6FA] transition-colors"
        >
          <div>
            <p className="text-sm font-semibold text-[#042230]">{item.label}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{item.desc}</p>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
      ))}
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────

type ActiveSection = "home" | "messages" | "reviews" | "schedule" | "wallet" | "settings"

export default function TutorDashboardPage() {
  const [active, setActive] = useState<ActiveSection>("home")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const sectionTitle: Record<ActiveSection, string> = {
    home:     "Dashboard",
    messages: "Messages",
    reviews:  "My Reviews",
    schedule: "My Schedule",
    wallet:   "Wallet",
    settings: "Settings",
  }

  return (
    <div className="flex min-h-[calc(100vh-7rem)] bg-[#F7F9FB]">
      {/* ── Sidebar ──────────────────────────────────────────── */}
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-56 flex-col border-r border-border bg-white transition-transform duration-200 md:static md:translate-x-0 md:z-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Tutor profile block */}
        <div className="flex items-center gap-3 border-b border-border px-5 py-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#354d73] text-sm font-bold text-white">
            {TUTOR_AVATAR}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[#042230]">{TUTOR_NAME}</p>
            <p className="text-xs text-muted-foreground">Tutor</p>
          </div>
          <button
            type="button"
            className="ml-auto md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4">
          {NAV_ITEMS.map(item => {
            const isActive = active === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => { setActive(item.id); setSidebarOpen(false) }}
                className={`flex w-full items-center gap-3 px-5 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#354d73]/10 text-[#354d73]"
                    : "text-muted-foreground hover:bg-[#F0F6FA] hover:text-[#042230]"
                }`}
              >
                <item.icon className={`h-4 w-4 shrink-0 ${isActive ? "text-[#354d73]" : ""}`} />
                {item.label}
                {item.badge !== undefined && (
                  <span className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-[#354d73] text-[9px] font-bold text-white">
                    {item.badge}
                  </span>
                )}
              </button>
            )
          })}
        </nav>

        {/* Footer links */}
        <div className="border-t border-border px-5 py-4 space-y-2">
          <a href="/contact" className="block text-xs text-muted-foreground hover:text-[#354d73]">Contact us</a>
          <a href="/privacy"  className="block text-xs text-muted-foreground hover:text-[#354d73]">Privacy policy</a>
          <a href="/terms"    className="block text-xs text-muted-foreground hover:text-[#354d73]">Terms Of Use</a>
          <a href="/faq"      className="block text-xs text-muted-foreground hover:text-[#354d73]">FAQs</a>
        </div>
      </aside>

      {/* ── Main content ─────────────────────────────────────── */}
      <div className="flex-1 min-w-0">
        {/* Mobile top bar */}
        <div className="flex items-center gap-3 border-b border-border bg-white px-4 py-3 md:hidden">
          <button type="button" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5 text-muted-foreground" />
          </button>
          <p className="text-sm font-semibold text-[#042230]">{sectionTitle[active]}</p>
        </div>

        <div className="p-4 sm:p-6 lg:p-8">
          {active === "home"     && <HomePanel />}
          {active === "messages" && <MessagesPanel />}
          {active === "reviews"  && <ReviewsPanel />}
          {active === "schedule" && <SchedulePanel />}
          {active === "wallet"   && <WalletPanel />}
          {active === "settings" && <SettingsPanel />}
        </div>
      </div>
    </div>
  )
}
