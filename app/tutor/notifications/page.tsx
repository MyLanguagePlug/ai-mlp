"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Bell,
  Check,
  CheckCheck,
  MessageCircle,
  CreditCard,
  AlertCircle,
  Calendar,
  Star,
  UserCheck,
  X,
} from "lucide-react"

// ── Types ─────────────────────────────────────────────────────────────────────

type NotifType = "booking" | "message" | "payment" | "review" | "reminder" | "system"

type NotifItem = {
  id: number
  type: NotifType
  title: string
  body: string
  time: string
  date: "today" | "yesterday" | "earlier"
  read: boolean
}

// ── Demo data ─────────────────────────────────────────────────────────────────

const INIT_NOTIFICATIONS: NotifItem[] = [
  {
    id: 1,
    type: "booking",
    title: "New booking request 📅",
    body: "Marco Rossi booked a Trial lesson for Tue, Mar 25 at 10:00 AM.",
    time: "5 min ago",
    date: "today",
    read: false,
  },
  {
    id: 2,
    type: "message",
    title: "New message from Jane Cooper",
    body: "See you at 10 AM tomorrow! Looking forward to our session 🌟",
    time: "1 h ago",
    date: "today",
    read: false,
  },
  {
    id: 3,
    type: "payment",
    title: "Payment received",
    body: "You received $45.00 from Marco Rossi for the Spanish lesson on Mar 22.",
    time: "3 h ago",
    date: "today",
    read: false,
  },
  {
    id: 4,
    type: "reminder",
    title: "Upcoming lesson in 30 minutes",
    body: "Your English lesson with Amara Diallo starts at 2:00 PM today.",
    time: "5 h ago",
    date: "today",
    read: true,
  },
  {
    id: 5,
    type: "review",
    title: "New 5-star review ⭐",
    body: "Jane Cooper left a review: \"Fantastic tutor! The lessons are always engaging and fun.\"",
    time: "Yesterday, 4:30 PM",
    date: "yesterday",
    read: false,
  },
  {
    id: 6,
    type: "booking",
    title: "Booking cancelled",
    body: "Yuki Tanaka cancelled the Japanese conversation lesson scheduled for Mon, Mar 24.",
    time: "Yesterday, 11:00 AM",
    date: "yesterday",
    read: true,
  },
  {
    id: 7,
    type: "system",
    title: "Complete your profile to get more students",
    body: "Tutors with a profile video get 3× more bookings. Add yours today!",
    time: "2 days ago",
    date: "earlier",
    read: true,
  },
  {
    id: 8,
    type: "payment",
    title: "Monthly earnings summary",
    body: "You earned $320.00 in March. Great work! View your full earnings breakdown.",
    time: "3 days ago",
    date: "earlier",
    read: true,
  },
  {
    id: 9,
    type: "booking",
    title: "Booking confirmed",
    body: "Your lesson with Hans Mueller on Fri, Mar 28 at 9:00 AM has been confirmed.",
    time: "4 days ago",
    date: "earlier",
    read: true,
  },
  {
    id: 10,
    type: "review",
    title: "New 4-star review",
    body: "Marco Rossi left a review: \"Very helpful and patient. Would recommend to anyone learning Spanish.\"",
    time: "5 days ago",
    date: "earlier",
    read: true,
  },
]

// ── Filter tabs ───────────────────────────────────────────────────────────────

type FilterId = "all" | "unread" | "booking" | "payment" | "review"

const FILTERS: { id: FilterId; label: string }[] = [
  { id: "all",     label: "All" },
  { id: "unread",  label: "Unread" },
  { id: "booking", label: "Bookings" },
  { id: "payment", label: "Payments" },
  { id: "review",  label: "Reviews" },
]

// ── Icon / colour helpers ─────────────────────────────────────────────────────

const iconMap: Record<NotifType, React.ReactNode> = {
  booking:  <Calendar   className="h-5 w-5 text-[#354d73]"        />,
  message:  <MessageCircle className="h-5 w-5 text-sky-500"       />,
  payment:  <CreditCard  className="h-5 w-5 text-amber-500"       />,
  review:   <Star        className="h-5 w-5 text-yellow-500"      />,
  reminder: <Bell        className="h-5 w-5 text-[#354d73]"       />,
  system:   <AlertCircle className="h-5 w-5 text-muted-foreground"/>,
}

const bgMap: Record<NotifType, string> = {
  booking:  "bg-[#354d73]/10",
  message:  "bg-sky-50",
  payment:  "bg-amber-50",
  review:   "bg-yellow-50",
  reminder: "bg-[#354d73]/10",
  system:   "bg-muted",
}

// ── Section label helper ──────────────────────────────────────────────────────

const DATE_LABELS: Record<"today" | "yesterday" | "earlier", string> = {
  today:     "Today",
  yesterday: "Yesterday",
  earlier:   "Earlier",
}

// ── Page component ────────────────────────────────────────────────────────────

export default function TutorNotificationsPage() {
  const [notifications, setNotifications] = useState<NotifItem[]>(INIT_NOTIFICATIONS)
  const [activeFilter, setActiveFilter]   = useState<FilterId>("all")

  const unreadCount = notifications.filter(n => !n.read).length

  function markAllRead() {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })))
  }

  function markRead(id: number) {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n))
  }

  function dismiss(id: number) {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  const filtered = notifications.filter(n => {
    if (activeFilter === "unread")  return !n.read
    if (activeFilter === "booking") return n.type === "booking"
    if (activeFilter === "payment") return n.type === "payment"
    if (activeFilter === "review")  return n.type === "review"
    return true
  })

  const sections = (["today", "yesterday", "earlier"] as const).filter(
    section => filtered.some(n => n.date === section)
  )

  return (
    <div className="min-h-screen bg-[#F7F9FB]">
      {/* ── Sticky header ────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-30 border-b border-border bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-3 sm:px-6">
          <Link
            href="/tutor"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground hover:bg-[#F0F6FA] hover:text-[#354d73] transition-colors"
            aria-label="Back to dashboard"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>

          <div className="flex-1 min-w-0">
            <h1 className="text-base font-bold text-[#042230] leading-tight">Notifications</h1>
            {unreadCount > 0 && (
              <p className="text-xs text-muted-foreground">{unreadCount} unread</p>
            )}
          </div>

          {unreadCount > 0 && (
            <button
              type="button"
              onClick={markAllRead}
              className="flex items-center gap-1.5 rounded-full border border-[#354d73]/30 px-3 py-1.5 text-xs font-medium text-[#354d73] hover:bg-[#F0F6FA] transition-colors shrink-0"
            >
              <CheckCheck className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Mark all read</span>
              <span className="sm:hidden">All read</span>
            </button>
          )}
        </div>

        {/* ── Filter tabs ────────────────────────────────────────────────── */}
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto pb-3 scrollbar-none">
            {FILTERS.map(f => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeFilter === f.id
                    ? "bg-[#354d73] text-white"
                    : "bg-[#F0F6FA] text-[#354d73] hover:bg-[#e4eef5]"
                }`}
              >
                {f.label}
                {f.id === "unread" && unreadCount > 0 && (
                  <span className="ml-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[9px] font-bold text-white">
                    {unreadCount}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* ── Notification list ─────────────────────────────────────────────── */}
      <main className="mx-auto max-w-2xl px-4 py-4 sm:px-6">
        {sections.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F0F6FA]">
              <Bell className="h-7 w-7 text-[#354d73]/40" />
            </div>
            <p className="text-base font-semibold text-[#042230]">All caught up!</p>
            <p className="mt-1 text-sm text-muted-foreground">No notifications to show here.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {sections.map(section => (
              <section key={section}>
                {/* Section label */}
                <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {DATE_LABELS[section]}
                </p>

                {/* Notification cards */}
                <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm divide-y divide-border">
                  {filtered
                    .filter(n => n.date === section)
                    .map(notif => (
                      <div
                        key={notif.id}
                        className={`group relative flex items-start gap-3 px-4 py-4 transition-colors hover:bg-[#F0F6FA]/60 ${
                          !notif.read ? "bg-[#F0F6FA]/40" : ""
                        }`}
                      >
                        {/* Unread indicator */}
                        {!notif.read && (
                          <span className="absolute left-1.5 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-[#354d73]" />
                        )}

                        {/* Icon */}
                        <div
                          className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${bgMap[notif.type]}`}
                        >
                          {iconMap[notif.type]}
                        </div>

                        {/* Content */}
                        <button
                          type="button"
                          onClick={() => markRead(notif.id)}
                          className="min-w-0 flex-1 text-left"
                        >
                          <p
                            className={`text-sm leading-snug ${
                              !notif.read
                                ? "font-semibold text-[#042230]"
                                : "font-medium text-foreground"
                            }`}
                          >
                            {notif.title}
                          </p>
                          <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                            {notif.body}
                          </p>
                          <p className="mt-1.5 text-[11px] text-muted-foreground/70">
                            {notif.time}
                          </p>
                        </button>

                        {/* Dismiss button */}
                        <button
                          type="button"
                          onClick={() => dismiss(notif.id)}
                          aria-label="Dismiss notification"
                          className="shrink-0 mt-0.5 flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground opacity-0 group-hover:opacity-100 hover:bg-muted transition-all"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
