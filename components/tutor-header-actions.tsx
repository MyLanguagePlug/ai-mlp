"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  MessageCircle,
  Bell,
  Settings,
  LogOut,
  ChevronDown,
  User,
  LayoutDashboard,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const TUTOR_NAME     = "Brazil James"
const TUTOR_INITIALS = "B"
const MESSAGE_BADGE  = 3
const NOTIF_BADGE    = 1

export function TutorHeaderActions() {
  const [messagesOpen, setMessagesOpen] = useState(false)
  const [notifOpen,    setNotifOpen]    = useState(false)

  return (
    <div className="flex items-center gap-1">
      {/* Messages */}
      <DropdownMenu open={messagesOpen} onOpenChange={setMessagesOpen}>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            aria-label="Messages"
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-[#F0F6FA] hover:text-[#354d73] focus-visible:outline-none"
          >
            <MessageCircle className="h-5 w-5" />
            {MESSAGE_BADGE > 0 && (
              <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#354d73] text-[9px] font-bold text-white">
                {MESSAGE_BADGE}
              </span>
            )}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-72 p-0">
          <div className="border-b border-border px-4 py-3 text-sm font-semibold text-[#042230]">
            Messages
          </div>
          <div className="py-1">
            {[
              { name: "Jane Cooper",    msg: "See you at 10 AM tomorrow! 🌟",            time: "2 min ago" },
              { name: "Marco Rossi",    msg: "Will the session be on video call?",        time: "1 h ago" },
              { name: "Amara Diallo",   msg: "Thank you for the last lesson!",            time: "Yesterday" },
            ].map(c => (
              <DropdownMenuItem key={c.name} asChild className="px-4 py-2.5 cursor-pointer">
                <Link href="/tutor" className="flex flex-col items-start gap-0.5">
                  <div className="flex w-full items-center justify-between">
                    <span className="text-sm font-medium text-[#042230]">{c.name}</span>
                    <span className="text-[10px] text-muted-foreground">{c.time}</span>
                  </div>
                  <span className="truncate text-xs text-muted-foreground">{c.msg}</span>
                </Link>
              </DropdownMenuItem>
            ))}
          </div>
          <div className="border-t border-border px-4 py-2">
            <Link href="/tutor" className="text-xs font-medium text-[#354d73] hover:underline">
              View all messages
            </Link>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Notifications */}
      <DropdownMenu open={notifOpen} onOpenChange={setNotifOpen}>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            aria-label="Notifications"
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-[#F0F6FA] hover:text-[#354d73] focus-visible:outline-none"
          >
            <Bell className="h-5 w-5" />
            {NOTIF_BADGE > 0 && (
              <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[9px] font-bold text-white">
                {NOTIF_BADGE}
              </span>
            )}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-80 p-0">
          <div className="border-b border-border px-4 py-3 text-sm font-semibold text-[#042230]">
            Notifications
          </div>
          <div className="py-1">
            <DropdownMenuItem className="px-4 py-3 cursor-pointer">
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-medium text-[#042230]">New booking request 📅</p>
                <p className="text-xs text-muted-foreground">Marco Rossi booked a Trial lesson for Tue Mar 25</p>
                <p className="text-[10px] text-muted-foreground">5 min ago</p>
              </div>
            </DropdownMenuItem>
          </div>
          <div className="border-t border-border px-4 py-2">
            <Link href="/tutor/notifications" className="text-xs font-medium text-[#354d73] hover:underline">
              View all notifications
            </Link>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Profile */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            aria-label="Profile menu"
            className="ml-1 flex items-center gap-2 rounded-full focus-visible:outline-none"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5A8DA5] text-sm font-bold text-white">
              {TUTOR_INITIALS}
            </div>
            <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-52">
          <div className="px-3 py-2">
            <p className="text-sm font-semibold text-[#042230]">{TUTOR_NAME}</p>
            <p className="text-xs text-muted-foreground">Tutor</p>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/tutor/profile" className="flex items-center gap-2 cursor-pointer">
              <User className="h-3.5 w-3.5" />
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/tutor" className="flex items-center gap-2 cursor-pointer">
              <LayoutDashboard className="h-3.5 w-3.5" />
              Dashboard
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/tutor/settings" className="flex items-center gap-2 cursor-pointer">
              <Settings className="h-3.5 w-3.5" />
              Settings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/login" className="flex items-center gap-2 cursor-pointer text-rose-600">
              <LogOut className="h-3.5 w-3.5" />
              Log out
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
