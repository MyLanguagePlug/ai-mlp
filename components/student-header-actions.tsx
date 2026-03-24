"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  MessageCircle,
  Bell,
  User,
  Send,
  Check,
  CheckCheck,
  AlertCircle,
  CreditCard,
  BookOpen,
  Heart,
  Gift,
  Settings,
  HelpCircle,
  LogOut,
  Home,
} from "lucide-react"

// ── Types ──────────────────────────────────────────────────────────────────────

type NotifType = "reminder" | "booking" | "message" | "payment" | "system"

type NotifItem = {
  id: number
  type: NotifType
  title: string
  body: string
  time: string
  read: boolean
}

type ConversationItem = {
  id: number
  tutor: string
  avatar: string
  language: string
  lastMessage: string
  time: string
  unread: number
  online: boolean
}

// ── Demo data (mirrors student page for visual consistency) ────────────────────

const INIT_NOTIFICATIONS: NotifItem[] = [
  { id: 1, type: "reminder", title: "Lesson in 1 hour",      body: "Your Spanish lesson with Maria Santos starts at 10:00 AM.",          time: "44 min ago", read: false },
  { id: 2, type: "message",  title: "New message from Yuki", body: "Hi Jane! Just a reminder about our session on Saturday. See you!",    time: "2 h ago",    read: false },
  { id: 3, type: "booking",  title: "Booking confirmed",     body: "Jean-Pierre Dubois accepted your French lesson on Mon, Mar 24.",       time: "Yesterday",  read: false },
  { id: 4, type: "payment",  title: "Payment receipt",       body: "Your payment of $30.00 for the Japanese lesson was successful.",       time: "2 days ago", read: true  },
  { id: 5, type: "system",   title: "30% off trial lessons", body: "Book a trial lesson this week and save 30%! No code needed.",          time: "3 days ago", read: true  },
  { id: 6, type: "reminder", title: "Rate your last lesson", body: "How was your German lesson with Hans Mueller? Leave a quick rating.",   time: "4 days ago", read: true  },
]

const DEMO_CONVERSATIONS: ConversationItem[] = [
  { id: 1, tutor: "Maria Santos",       avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop", language: "Spanish",  lastMessage: "See you at 10 AM tomorrow! 🌟",                        time: "2 min ago",  unread: 2, online: true  },
  { id: 2, tutor: "Yuki Tanaka",        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop", language: "Japanese", lastMessage: "Hi Jane! Just a reminder about our session Saturday.", time: "2 h ago",     unread: 1, online: true  },
  { id: 3, tutor: "Jean-Pierre Dubois", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop", language: "French",   lastMessage: "Booking confirmed for Monday. À bientôt!",            time: "Yesterday",   unread: 0, online: false },
  { id: 4, tutor: "Hans Mueller",       avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop", language: "German",   lastMessage: "Great work today! Keep practising the Dativ case.",   time: "2 days ago",  unread: 0, online: false },
]

// ── Nav links for profile dropdown (links to /student) ────────────────────────

const profileNavLinks = [
  { href: "/student", icon: Home,        label: "Home"          },
  { href: "/student", icon: MessageCircle, label: "Messages"    },
  { href: "/student", icon: BookOpen,    label: "My lessons"    },
  { href: "/student", icon: Heart,       label: "Saved tutors"  },
  { href: "/student", icon: Gift,        label: "Refer a friend"},
  { href: "/student/settings", icon: Settings, label: "Settings" },
  { href: "/student", icon: HelpCircle,  label: "Help"          },
]

// ── Component ─────────────────────────────────────────────────────────────────

export function StudentHeaderActions() {
  const [profileOpen,  setProfileOpen]  = useState(false)
  const [notifOpen,    setNotifOpen]    = useState(false)
  const [messagesOpen, setMessagesOpen] = useState(false)
  const [notifications, setNotifications] = useState<NotifItem[]>(INIT_NOTIFICATIONS)

  const unreadNotifCount   = notifications.filter(n => !n.read).length
  const unreadMessageCount = DEMO_CONVERSATIONS.reduce((sum, c) => sum + c.unread, 0)

  function markAllNotifsRead() {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })))
  }

  function markNotifRead(id: number) {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n))
  }

  const notifIconMap: Record<NotifType, React.ReactNode> = {
    reminder: <Bell         className="h-4 w-4 text-[#354d73]" />,
    booking:  <Check        className="h-4 w-4 text-emerald-600" />,
    message:  <MessageCircle className="h-4 w-4 text-sky-500" />,
    payment:  <CreditCard   className="h-4 w-4 text-amber-500" />,
    system:   <AlertCircle  className="h-4 w-4 text-muted-foreground" />,
  }

  const notifBgMap: Record<NotifType, string> = {
    reminder: "bg-[#354d73]/10",
    booking:  "bg-emerald-50",
    message:  "bg-sky-50",
    payment:  "bg-amber-50",
    system:   "bg-muted",
  }

  function closeAll() {
    setMessagesOpen(false)
    setNotifOpen(false)
    setProfileOpen(false)
  }

  return (
    <div className="flex items-center gap-2">

      {/* ── Messages ─────────────────────────────── */}
      <div className="relative">
        <button
          type="button"
          onClick={() => { setMessagesOpen(o => !o); setNotifOpen(false); setProfileOpen(false) }}
          className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-[#F0F6FA] hover:text-foreground"
          aria-label="Messages"
        >
          <MessageCircle className="h-5 w-5" />
          {unreadMessageCount > 0 && (
            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#354d73] text-[9px] font-bold text-white">
              {unreadMessageCount}
            </span>
          )}
        </button>

        {messagesOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setMessagesOpen(false)} />
            <div className="absolute right-0 top-11 z-50 w-80 overflow-hidden rounded-2xl border border-border bg-white shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <p className="text-sm font-bold text-[#042230]">Messages</p>
                {unreadMessageCount > 0 && (
                  <span className="rounded-full bg-[#354d73]/10 px-2 py-0.5 text-[11px] font-semibold text-[#354d73]">
                    {unreadMessageCount} unread
                  </span>
                )}
              </div>

              {/* Conversation list */}
              <div className="divide-y divide-border">
                {DEMO_CONVERSATIONS.map(conv => (
                  <button
                    key={conv.id}
                    type="button"
                    onClick={() => setMessagesOpen(false)}
                    className="flex w-full items-start gap-3 px-4 py-3 text-left hover:bg-[#F0F6FA] transition-colors"
                  >
                    <div className="relative mt-0.5 shrink-0">
                      <div className="h-10 w-10 rounded-full bg-[#F0F6FA] flex items-center justify-center overflow-hidden">
                        <img
                          src={conv.avatar}
                          alt={conv.tutor}
                          className="h-10 w-10 rounded-full object-cover"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
                        />
                        <span
                          className="absolute text-sm font-semibold text-[#354d73] select-none"
                          aria-hidden="true"
                        >
                          {conv.tutor.charAt(0)}
                        </span>
                      </div>
                      {conv.online && (
                        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-400" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className={`text-sm leading-tight ${conv.unread > 0 ? "font-bold text-[#042230]" : "font-medium text-[#042230]"}`}>
                          {conv.tutor}
                        </p>
                        <span className="shrink-0 text-[10px] text-muted-foreground">{conv.time}</span>
                      </div>
                      <p className="text-[10px] text-[#354d73]">{conv.language}</p>
                      <p className={`mt-0.5 truncate text-xs ${conv.unread > 0 ? "font-medium text-foreground" : "text-muted-foreground"}`}>
                        {conv.lastMessage}
                      </p>
                    </div>
                    {conv.unread > 0 && (
                      <span className="mt-1 shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-[#354d73] text-[10px] font-bold text-white">
                        {conv.unread}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-border px-4 py-3">
                <Link
                  href="/student"
                  onClick={() => setMessagesOpen(false)}
                  className="flex w-full items-center justify-center gap-1.5 text-sm font-medium text-[#354d73] hover:underline"
                >
                  <Send className="h-3.5 w-3.5" />
                  View all messages
                </Link>
              </div>
            </div>
          </>
        )}
      </div>

      {/* ── Notifications ────────────────────────── */}
      <div className="relative">
        <button
          type="button"
          onClick={() => { setNotifOpen(o => !o); setMessagesOpen(false); setProfileOpen(false) }}
          className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-[#F0F6FA] hover:text-foreground"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          {unreadNotifCount > 0 && (
            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[9px] font-bold text-white">
              {unreadNotifCount}
            </span>
          )}
        </button>

        {notifOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setNotifOpen(false)} />
            <div className="absolute right-0 top-11 z-50 w-80 overflow-hidden rounded-2xl border border-border bg-white shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <p className="text-sm font-bold text-[#042230]">Notifications</p>
                {unreadNotifCount > 0 && (
                  <button
                    type="button"
                    onClick={markAllNotifsRead}
                    className="flex items-center gap-1 text-xs text-[#354d73] hover:underline"
                  >
                    <CheckCheck className="h-3.5 w-3.5" />
                    Mark all read
                  </button>
                )}
              </div>

              {/* Notification list */}
              <div className="max-h-[360px] divide-y divide-border overflow-y-auto">
                {notifications.map(notif => (
                  <button
                    key={notif.id}
                    type="button"
                    onClick={() => { markNotifRead(notif.id); setNotifOpen(false) }}
                    className={`flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-[#F0F6FA] ${!notif.read ? "bg-[#F0F6FA]/60" : ""}`}
                  >
                    <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${notifBgMap[notif.type]}`}>
                      {notifIconMap[notif.type]}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className={`text-sm leading-tight ${!notif.read ? "font-semibold text-[#042230]" : "font-medium text-foreground"}`}>
                        {notif.title}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">{notif.body}</p>
                      <p className="mt-1 text-[10px] text-muted-foreground/70">{notif.time}</p>
                    </div>
                    {!notif.read && (
                      <span className="mt-1.5 shrink-0 h-2 w-2 rounded-full bg-[#354d73]" />
                    )}
                  </button>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-border px-4 py-3">
                <button
                  type="button"
                  onClick={() => setNotifOpen(false)}
                  className="flex w-full items-center justify-center gap-1.5 text-sm font-medium text-[#354d73] hover:underline"
                >
                  <Bell className="h-3.5 w-3.5" />
                  View all notifications
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* ── Profile ──────────────────────────────── */}
      <div className="relative">
        <button
          type="button"
          onClick={() => { setProfileOpen(o => !o); setNotifOpen(false); setMessagesOpen(false) }}
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
                {profileNavLinks.map(({ href, icon: Icon, label }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={closeAll}
                    className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-left text-foreground hover:bg-[#F0F6FA] transition-colors"
                  >
                    <Icon className="h-4 w-4 text-muted-foreground" />
                    {label}
                    {label === "Messages" && unreadMessageCount > 0 && (
                      <span className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-[#354d73] text-[9px] font-bold text-white">
                        {unreadMessageCount}
                      </span>
                    )}
                  </Link>
                ))}
              </nav>
              <div className="border-t border-border py-1">
                <Link
                  href="/login"
                  onClick={closeAll}
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
  )
}
