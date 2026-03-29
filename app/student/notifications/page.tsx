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
  X,
  Gift,
  Star,
} from "lucide-react"

// ── Types ─────────────────────────────────────────────────────────────────────

type NotifType = "reminder" | "booking" | "message" | "payment" | "system" | "promo"

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
    type: "reminder",
    title: "Lesson in 1 hour ⏰",
    body: "Your Spanish lesson with Maria Santos starts at 10:00 AM. Don't forget to join!",
    time: "44 min ago",
    date: "today",
    read: false,
  },
  {
    id: 2,
    type: "message",
    title: "New message from Yuki",
    body: "Hi Jane! Just a reminder about our session on Saturday. See you then! 😊",
    time: "2 h ago",
    date: "today",
    read: false,
  },
  {
    id: 3,
    type: "promo",
    title: "🎉 30% off trial lessons this week",
    body: "Book a trial lesson with any tutor this week and save 30%. No promo code needed!",
    time: "4 h ago",
    date: "today",
    read: false,
  },
  {
    id: 4,
    type: "booking",
    title: "Booking confirmed ✅",
    body: "Jean-Pierre Dubois accepted your French lesson on Mon, Mar 24 at 3:00 PM.",
    time: "Yesterday, 5:12 PM",
    date: "yesterday",
    read: false,
  },
  {
    id: 5,
    type: "reminder",
    title: "Rate your last lesson",
    body: "How was your German lesson with Hans Mueller? Leave a quick rating — it helps other students!",
    time: "Yesterday, 2:00 PM",
    date: "yesterday",
    read: false,
  },
  {
    id: 6,
    type: "payment",
    title: "Payment receipt",
    body: "Your payment of $30.00 for the Japanese lesson with Yuki Tanaka was successful.",
    time: "2 days ago",
    date: "earlier",
    read: true,
  },
  {
    id: 7,
    type: "booking",
    title: "Lesson rescheduled",
    body: "Hans Mueller has rescheduled your German lesson to Wed, Mar 26 at 11:00 AM. Please confirm.",
    time: "3 days ago",
    date: "earlier",
    read: true,
  },
  {
    id: 8,
    type: "system",
    title: "New tutors available in Japanese",
    body: "3 new tutors matching your saved interests in Japanese are now on the platform. Check them out!",
    time: "4 days ago",
    date: "earlier",
    read: true,
  },
  {
    id: 9,
    type: "message",
    title: "Message from Maria Santos",
    body: "Great session today, Jane! Keep practising the subjunctive — you're doing brilliantly. 🌟",
    time: "5 days ago",
    date: "earlier",
    read: true,
  },
  {
    id: 10,
    type: "payment",
    title: "Lesson credit added",
    body: "You received a $10 credit for referring your friend Alex. Use it on your next booking!",
    time: "6 days ago",
    date: "earlier",
    read: true,
  },
]

// ── Filter tabs ───────────────────────────────────────────────────────────────

type FilterId = "all" | "unread" | "booking" | "message" | "payment"

const FILTERS: { id: FilterId; label: string }[] = [
  { id: "all",     label: "All" },
  { id: "unread",  label: "Unread" },
  { id: "booking", label: "Lessons" },
  { id: "message", label: "Messages" },
  { id: "payment", label: "Payments" },
]

// ── Icon / colour helpers ─────────────────────────────────────────────────────

const iconMap: Record<NotifType, React.ReactNode> = {
  reminder: <Bell        className="h-5 w-5 text-[#354d73]"         />,
  booking:  <Calendar    className="h-5 w-5 text-emerald-600"       />,
  message:  <MessageCircle className="h-5 w-5 text-sky-500"         />,
  payment:  <CreditCard  className="h-5 w-5 text-amber-500"         />,
  system:   <AlertCircle className="h-5 w-5 text-muted-foreground"  />,
  promo:    <Gift        className="h-5 w-5 text-rose-500"          />,
}

const bgMap: Record<NotifType, string> = {
  reminder: "bg-[#354d73]/10",
  booking:  "bg-emerald-50",
  message:  "bg-sky-50",
  payment:  "bg-amber-50",
  system:   "bg-muted",
  promo:    "bg-rose-50",
}

// ── Section label helper ──────────────────────────────────────────────────────

const DATE_LABELS: Record<"today" | "yesterday" | "earlier", string> = {
  today:     "Today",
  yesterday: "Yesterday",
  earlier:   "Earlier",
}

// ── Page component ────────────────────────────────────────────────────────────

export default function StudentNotificationsPage() {
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
    if (activeFilter === "booking") return n.type === "booking" || n.type === "reminder"
    if (activeFilter === "message") return n.type === "message"
    if (activeFilter === "payment") return n.type === "payment"
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
            href="/student"
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
