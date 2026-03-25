"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  Search,
  Heart,
  Star,
  MessageCircle,
  Clock,
  DollarSign,
  User,
  BookOpen,
  Settings,
  HelpCircle,
  Home,
  Gift,
  SlidersHorizontal,
  CalendarDays,
  Calendar,
  ChevronDown,
  ChevronUp,
  X,
  Check,
  CreditCard,
  Send,
  Copy,
  Share2,
  Trophy,
  Users,
  Video,
  PhoneCall,
  RotateCcw,
  Trash2,
  ChevronRight,
  ChevronLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
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
  "Exam Prep",
  "Grammar",
  "Pronunciation",
  "Beginner Friendly",
]

const priceOptions = [
  { value: "any",    label: "Any price" },
  { value: "u25",    label: "Under $25/hr" },
  { value: "25-35",  label: "$25 – $35/hr" },
  { value: "35-50",  label: "$35 – $50/hr" },
  { value: "50plus", label: "$50+/hr" },
]

const countryOptions = [
  { value: "any",     label: "Any country" },
  { value: "brazil",  label: "Brazil" },
  { value: "china",   label: "China" },
  { value: "france",  label: "France" },
  { value: "germany", label: "Germany" },
  { value: "japan",   label: "Japan" },
  { value: "spain",   label: "Spain" },
]

const availabilityOptions = [
  { value: "any",       label: "Any time" },
  { value: "morning",   label: "Morning" },
  { value: "afternoon", label: "Afternoon" },
  { value: "evening",   label: "Evening" },
  { value: "weekends",  label: "Weekends" },
]

type MessageMenuItem = {
  subject: string
  classes: {
    name: string
    prefixes: string[]
  }[]
}

const MESSAGE_MENU: MessageMenuItem[] = [
  {
    subject: "General",
    classes: [
      {
        name: "First Contact",
        prefixes: [
          "I'd like to schedule a trial lesson",
          "I saw your profile and I'm interested in lessons",
          "What's your availability this week?",
          "Can you tell me more about your teaching methods?",
          "I have a question about your experience",
        ],
      },
      {
        name: "Scheduling",
        prefixes: [
          "Can we book a lesson for this week?",
          "I need to reschedule our upcoming session",
          "What times are you available next week?",
          "Can we set up a recurring weekly session?",
          "I'd like to book multiple lessons in advance",
        ],
      },
      {
        name: "Lesson Feedback",
        prefixes: [
          "I really enjoyed our last lesson!",
          "I'd like to focus on something different next time",
          "Could we review what we covered last session?",
          "I'm making great progress, thank you!",
          "I have some questions from our last lesson",
        ],
      },
    ],
  },
  {
    subject: "Languages",
    classes: [
      {
        name: "Spanish",
        prefixes: [
          "I'd like to practice Spanish conversation",
          "I need help with Spanish grammar",
          "Can we work on Spanish vocabulary?",
          "I want to prepare for a DELE/SIELE exam",
          "I'm struggling with Spanish verb conjugations",
        ],
      },
      {
        name: "French",
        prefixes: [
          "I'd like to practice French conversation",
          "I need help with French grammar",
          "Can we work on French pronunciation?",
          "I want to prepare for a DELF/DALF exam",
          "I'm struggling with French verb tenses",
        ],
      },
      {
        name: "Mandarin Chinese",
        prefixes: [
          "I'd like to practice Mandarin conversation",
          "I need help learning Chinese characters (Hanzi)",
          "Can we work on Mandarin tones?",
          "I want to prepare for the HSK exam",
          "I'm struggling with Mandarin grammar patterns",
        ],
      },
      {
        name: "Japanese",
        prefixes: [
          "I'd like to practice Japanese conversation",
          "I need help learning Hiragana / Katakana",
          "Can we work on reading Kanji?",
          "I want to prepare for the JLPT exam",
          "I'm struggling with Japanese sentence structure",
        ],
      },
      {
        name: "German",
        prefixes: [
          "I'd like to practice German conversation",
          "I need help with German grammar (cases)",
          "Can we work on German pronunciation?",
          "I want to prepare for a Goethe-Institut exam",
          "I'm struggling with German word order",
        ],
      },
      {
        name: "Italian",
        prefixes: [
          "I'd like to practice Italian conversation",
          "I need help with Italian grammar",
          "Can we work on Italian pronunciation?",
          "I want to prepare for a CILS/CELI exam",
          "I'm struggling with Italian verb moods",
        ],
      },
      {
        name: "Portuguese",
        prefixes: [
          "I'd like to practice Portuguese conversation",
          "I need help with Portuguese grammar",
          "Can we work on European vs Brazilian Portuguese differences?",
          "I want to prepare for a CELPE-Bras exam",
          "I'm struggling with Portuguese pronunciation",
        ],
      },
      {
        name: "Arabic",
        prefixes: [
          "I'd like to practice Arabic conversation",
          "I need help learning Arabic script",
          "Can we work on Modern Standard Arabic?",
          "I want to focus on a specific Arabic dialect",
          "I'm struggling with Arabic grammar",
        ],
      },
    ],
  },
  {
    subject: "Mathematics",
    classes: [
      {
        name: "Algebra",
        prefixes: [
          "I need help understanding algebra concepts",
          "Can we go over solving linear equations?",
          "I'm stuck on quadratic equations",
          "I need help with algebra for my upcoming exam",
          "Can we work through some algebra practice problems?",
        ],
      },
      {
        name: "Calculus",
        prefixes: [
          "I need help understanding calculus concepts",
          "Can we review differentiation techniques?",
          "I need help with integration methods",
          "I'm struggling with limits and continuity",
          "Can we work on calculus exam preparation?",
        ],
      },
      {
        name: "Statistics",
        prefixes: [
          "I need help with statistics concepts",
          "Can we go over probability theory?",
          "I need help with hypothesis testing",
          "I'm struggling with data analysis",
          "Can we work through statistics problems together?",
        ],
      },
      {
        name: "Geometry",
        prefixes: [
          "I need help with geometry proofs",
          "Can we work on coordinate geometry?",
          "I'm struggling with trigonometry",
          "I need help with geometry for my exam",
          "Can we review geometric theorems?",
        ],
      },
    ],
  },
  {
    subject: "Sciences",
    classes: [
      {
        name: "Biology",
        prefixes: [
          "I need help understanding biology concepts",
          "Can we review cell biology and genetics?",
          "I'm struggling with human anatomy topics",
          "I need help preparing for my biology exam",
          "Can we go over ecosystems and ecology?",
        ],
      },
      {
        name: "Chemistry",
        prefixes: [
          "I need help with chemistry concepts",
          "Can we go over balancing chemical equations?",
          "I'm struggling with organic chemistry",
          "I need help with my chemistry lab report",
          "Can we review the periodic table and elements?",
        ],
      },
      {
        name: "Physics",
        prefixes: [
          "I need help with physics problems",
          "Can we review Newton's laws of motion?",
          "I'm struggling with electricity and magnetism",
          "I need help with my physics exam preparation",
          "Can we work on thermodynamics concepts?",
        ],
      },
      {
        name: "Environmental Science",
        prefixes: [
          "I need help understanding environmental science",
          "Can we discuss climate change concepts?",
          "I'm struggling with environmental systems",
          "I need help preparing for an environmental science exam",
          "Can we go over sustainability topics?",
        ],
      },
    ],
  },
  {
    subject: "Humanities",
    classes: [
      {
        name: "English / Literature",
        prefixes: [
          "I need help with essay writing",
          "Can we discuss a literary work I'm studying?",
          "I need help with reading comprehension",
          "I'm struggling with literary analysis",
          "Can we review grammar and writing style?",
        ],
      },
      {
        name: "History",
        prefixes: [
          "I need help understanding historical events",
          "Can we discuss the causes and effects of a historical event?",
          "I need help with my history essay",
          "I'm struggling to remember important dates and facts",
          "Can we review a specific historical period?",
        ],
      },
      {
        name: "Geography",
        prefixes: [
          "I need help with geography concepts",
          "Can we review physical geography topics?",
          "I'm struggling with human geography",
          "I need help with map skills and reading",
          "Can we go over global issues for my exam?",
        ],
      },
      {
        name: "Philosophy",
        prefixes: [
          "I need help understanding philosophical concepts",
          "Can we discuss a particular philosophical argument?",
          "I'm struggling with writing a philosophy essay",
          "Can we explore ethics and moral philosophy?",
          "I need help with critical thinking skills",
        ],
      },
    ],
  },
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
    offersTrialLesson: true,
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
    offersTrialLesson: false,
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
    offersTrialLesson: true,
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
    offersTrialLesson: false,
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
    offersTrialLesson: true,
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
    offersTrialLesson: true,
    bio: "I make Mandarin accessible and enjoyable. From tones to characters — I've got you covered.",
  },
]

type TabId = "home" | "messages" | "lessons" | "saved" | "refer" | "help"

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

// ─── Messages demo data ───────────────────────────────────────────────────────

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

const DEMO_CONVERSATIONS: ConversationItem[] = [
  { id: 1, tutor: "Maria Santos",       avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop", language: "Spanish",  lastMessage: "See you at 10 AM tomorrow! 🌟",                        time: "2 min ago",   unread: 2, online: true  },
  { id: 2, tutor: "Yuki Tanaka",        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop", language: "Japanese", lastMessage: "Hi Jane! Just a reminder about our session Saturday.", time: "2 h ago",     unread: 1, online: true  },
  { id: 3, tutor: "Jean-Pierre Dubois", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop", language: "French",   lastMessage: "Booking confirmed for Monday. À bientôt!",            time: "Yesterday",   unread: 0, online: false },
  { id: 4, tutor: "Hans Mueller",       avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop", language: "German",   lastMessage: "Great work today! Keep practising the Dativ case.",   time: "2 days ago",  unread: 0, online: false },
]

// ─── Saved-tutors demo data ───────────────────────────────────────────────────

type SavedTutor = {
  id: string
  name: string
  image: string
  languages: string[]
  rating: number
  reviews: number
  hourlyRate: number
  isVerified: boolean
  specialties: string[]
  savedAt: string
}

const DEMO_SAVED_TUTORS: SavedTutor[] = [
  { id: "1", name: "Maria Santos",       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop", languages: ["Spanish", "English"],            rating: 4.9, reviews: 234, hourlyRate: 25, isVerified: true, specialties: ["Conversational", "DELE Prep"],    savedAt: "Saved 2 days ago" },
  { id: "3", name: "Yuki Tanaka",        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop", languages: ["Japanese", "English"],           rating: 5.0, reviews: 156, hourlyRate: 35, isVerified: true, specialties: ["JLPT Prep", "Beginner Friendly"], savedAt: "Saved 5 days ago" },
  { id: "5", name: "Ana Silva",          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop", languages: ["Portuguese", "Spanish"],         rating: 4.8, reviews: 142, hourlyRate: 22, isVerified: true, specialties: ["Conversational", "Travel"],       savedAt: "Saved 1 week ago" },
  { id: "6", name: "Wei Zhang",          image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop", languages: ["Mandarin", "English"],           rating: 4.9, reviews: 178, hourlyRate: 32, isVerified: true, specialties: ["HSK Prep", "Pronunciation"],      savedAt: "Saved 2 weeks ago" },
]

// ─── Chat messages demo data ──────────────────────────────────────────────────

type ChatMessage = {
  id: number
  from: "me" | "tutor"
  text: string
  time: string
}

type ChatThread = {
  convId: number
  messages: ChatMessage[]
}

const DEMO_CHAT_THREADS: ChatThread[] = [
  {
    convId: 1,
    messages: [
      { id: 1, from: "tutor", text: "Hola Jane! Ready for our Spanish session tomorrow? 🌟", time: "Yesterday 3:40 PM" },
      { id: 2, from: "me",    text: "Absolutely! Should I prepare any vocabulary list?",      time: "Yesterday 3:55 PM" },
      { id: 3, from: "tutor", text: "Yes, review the irregular verbs we covered last time.",  time: "Yesterday 4:02 PM" },
      { id: 4, from: "me",    text: "Will do! See you at 10 AM 😊",                           time: "Yesterday 4:10 PM" },
      { id: 5, from: "tutor", text: "See you at 10 AM tomorrow! 🌟",                          time: "2 min ago" },
    ],
  },
  {
    convId: 2,
    messages: [
      { id: 1, from: "tutor", text: "Hi Jane! Just a quick reminder — our session is Saturday at 2 PM.", time: "2 h ago" },
      { id: 2, from: "me",    text: "Thanks Yuki, I've got it on my calendar!",                          time: "1 h ago" },
      { id: 3, from: "tutor", text: "Great! See you Saturday — we'll focus on verb conjugations.",        time: "45 min ago" },
    ],
  },
  {
    convId: 3,
    messages: [
      { id: 1, from: "tutor", text: "Booking confirmed for Monday, Mar 24. À bientôt, Jane!", time: "Yesterday" },
      { id: 2, from: "me",    text: "Merci Jean-Pierre! Looking forward to it.",               time: "Yesterday" },
    ],
  },
  {
    convId: 4,
    messages: [
      { id: 1, from: "tutor", text: "Great work today! Keep practising the Dativ case.",    time: "2 days ago" },
      { id: 2, from: "me",    text: "Thank you Hans! I'll practice every day.",              time: "2 days ago" },
    ],
  },
]

// ─── Referral data ────────────────────────────────────────────────────────────

const REFERRAL_CODE = "JANE-MLP25"

const referralRewards = [
  { milestone: 1,  label: "First Referral",   reward: "$10 credit",     earned: true  },
  { milestone: 3,  label: "3 Friends",         reward: "$35 credit",     earned: true  },
  { milestone: 5,  label: "5 Friends",         reward: "1 Free Lesson",  earned: false },
  { milestone: 10, label: "Language Champion", reward: "$100 credit",    earned: false },
]

const referredFriends = [
  { name: "Sophie L.",  joined: "Mar 15, 2026", status: "Active",  reward: "$10" },
  { name: "Tom K.",     joined: "Mar 10, 2026", status: "Active",  reward: "$10" },
  { name: "Grace M.",   joined: "Feb 28, 2026", status: "Pending", reward: "—"   },
]


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

function HelpFaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="overflow-hidden rounded-xl border border-[#354d73]/15 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left hover:bg-[#F0F6FA] transition-colors"
      >
        <span className="text-sm font-semibold text-[#042230]">{question}</span>
        {open
          ? <ChevronUp className="h-4 w-4 shrink-0 text-muted-foreground" />
          : <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />}
      </button>
      {open && (
        <div className="border-t border-[#354d73]/10 px-5 py-4">
          <p className="text-sm text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState<TabId>("home")
  const [conversations] = useState<ConversationItem[]>(DEMO_CONVERSATIONS)
  const [savedTutors, setSavedTutors] = useState<SavedTutor[]>(DEMO_SAVED_TUTORS)
  const [activeChatId, setActiveChatId] = useState<number>(1)
  const [chatInput, setChatInput] = useState("")
  const [chatThreads, setChatThreads] = useState<ChatThread[]>(DEMO_CHAT_THREADS)
  const [menuSubject, setMenuSubject] = useState<string | null>(null)
  const [menuClass, setMenuClass] = useState<string | null>(null)
  const [copiedCode, setCopiedCode] = useState(false)
  const [search, setSearch] = useState("")
  const [helpSearch, setHelpSearch] = useState("")
  const [calendarOpen, setCalendarOpen] = useState(false)
  const [lessonsOpen, setLessonsOpen] = useState(true)

  // ── Filter state ──────────────────────────────────────────────────────────
  const [languageFilter, setLanguageFilter]     = useState("all")
  const [priceFilter, setPriceFilter]           = useState("any")
  const [countryFilter, setCountryFilter]       = useState("any")
  const [alsoSpeaksFilter, setAlsoSpeaksFilter] = useState("any")
  const [availFilter, setAvailFilter]           = useState("any")
  const [activeSpecialties, setActiveSpecialties] = useState<string[]>([])
  const [nativeSpeakerOnly, setNativeSpeakerOnly] = useState(false)
  const [verifiedOnly, setVerifiedOnly]         = useState(false)
  const [trialOnly, setTrialOnly]               = useState(false)
  const [sortBy, setSortBy]                     = useState("recommended")

  // ── Unique languages derived from tutor data ──────────────────────────────
  const allLanguages = [...new Set(tutors.flatMap(t => t.languages))].sort()
  // Display label for the active language filter (avoids array scan in render)
  const languageLabel = languageFilter === "all"
    ? "All languages"
    : allLanguages.find(l => l.toLowerCase() === languageFilter) ?? languageFilter

  // ── Price predicate map ───────────────────────────────────────────────────
  const pricePred: Record<string, (r: number) => boolean> = {
    any:     () => true,
    u25:     r => r < 25,
    "25-35":  r => r >= 25 && r < 35,
    "35-50":  r => r >= 35 && r <= 50,
    "50plus": r => r > 50,
  }

  // ── Filtered + sorted list ────────────────────────────────────────────────
  const filtered = tutors.filter((t) => {
    if (search && !t.name.toLowerCase().includes(search.toLowerCase()) &&
        !t.languages.some(l => l.toLowerCase().includes(search.toLowerCase()))) return false
    if (languageFilter !== "all" && !t.languages.map(l => l.toLowerCase()).includes(languageFilter)) return false
    if (!(pricePred[priceFilter] ?? (() => true))(t.hourlyRate)) return false
    if (countryFilter !== "any" && (t.country ?? "").toLowerCase() !== countryFilter) return false
    if (alsoSpeaksFilter !== "any" && !t.languages.map(l => l.toLowerCase()).includes(alsoSpeaksFilter)) return false
    if (activeSpecialties.length > 0 && !activeSpecialties.some(s =>
      t.specialties.some(ts => ts.toLowerCase().includes(s.toLowerCase()))
    )) return false
    if (nativeSpeakerOnly && !t.isNativeSpeaker) return false
    if (verifiedOnly && !t.isVerified) return false
    if (trialOnly && !t.offersTrialLesson) return false
    return true
  })

  const sortedFiltered = [...filtered].sort((a, b) => {
    if (sortBy === "rating")      return b.rating - a.rating
    if (sortBy === "price-low")   return a.hourlyRate - b.hourlyRate
    if (sortBy === "price-high")  return b.hourlyRate - a.hourlyRate
    if (sortBy === "reviews")     return b.reviews - a.reviews
    return 0
  })

  // ── Active filter count (for "Clear filters" badge) ───────────────────────
  // Note: availFilter is shown in UI but not yet applied to filter logic (no
  // time-of-day data on tutors), so it is excluded from the active count.
  const activeFilterCount = [
    languageFilter !== "all",
    priceFilter    !== "any",
    countryFilter  !== "any",
    alsoSpeaksFilter !== "any",
    activeSpecialties.length > 0,
    nativeSpeakerOnly,
    verifiedOnly,
    trialOnly,
  ].filter(Boolean).length

  function clearAllFilters() {
    setLanguageFilter("all")
    setPriceFilter("any")
    setCountryFilter("any")
    setAlsoSpeaksFilter("any")
    setAvailFilter("any")
    setActiveSpecialties([])
    setNativeSpeakerOnly(false)
    setVerifiedOnly(false)
    setTrialOnly(false)
  }

  function toggleSpecialty(s: string) {
    setActiveSpecialties(prev =>
      prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
    )
  }

  // ── Tab helpers ───────────────────────────────────────────────────────────
  function goToTab(tab: TabId) {
    setActiveTab(tab)
  }

  // ── Chat helpers ──────────────────────────────────────────────────────────
  const activeThread = chatThreads.find(t => t.convId === activeChatId)
  const activeConv   = conversations.find(c => c.id === activeChatId)

  function sendChatMessage(prefixText?: string) {
    const text = (prefixText ?? chatInput).trim()
    if (!text) return
    setChatThreads(prev => prev.map(t =>
      t.convId === activeChatId
        ? { ...t, messages: [...t.messages, { id: Date.now(), from: "me", text, time: "Just now" }] }
        : t
    ))
    setChatInput("")
    setMenuSubject(null)
    setMenuClass(null)
  }

  // ── Saved tutor helpers ───────────────────────────────────────────────────
  function removeSavedTutor(id: string) {
    setSavedTutors(prev => prev.filter(t => t.id !== id))
  }

  // ── Referral helpers ──────────────────────────────────────────────────────
  function copyReferralCode() {
    navigator.clipboard.writeText(REFERRAL_CODE).then(() => {
      setCopiedCode(true)
      setTimeout(() => setCopiedCode(false), 2000)
    }).catch(() => {
      setCopiedCode(true)
      setTimeout(() => setCopiedCode(false), 2000)
    })
  }

  const referredCount = referredFriends.filter(f => f.status === "Active").length

  return (
    <div className="min-h-screen bg-[#F0F6FA]">
      {/* ── Student-specific top bar ─────────────────────────────────────── */}
      <div className="sticky top-0 z-30 border-b border-border bg-white shadow-sm">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#354d73] hidden sm:block">
            Welcome back, Jane! 👋
          </p>


        </div>
      </div>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* ════════════════ HOME tab ════════════════ */}
        {activeTab === "home" && (
          <>
            {/* Page title */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-[#042230] sm:text-3xl">
                Find your perfect language tutor
              </h1>
              <p className="mt-1 text-muted-foreground">
                {tutors.length.toLocaleString()} tutors ready to help you today
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

            {/* ── Horizontal Filter Bar ──────────────────────────────────────── */}
            <div className="mb-6 overflow-hidden rounded-xl border border-[#354d73]/15 bg-white shadow-sm">

              {/* Row 1 — Primary dropdowns */}
              <div className="grid grid-cols-2 divide-x divide-[#354d73]/10 border-b border-[#354d73]/10 lg:grid-cols-5">

                {/* Language */}
                <div className="px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#354d73]">I want to learn</p>
                  <Select value={languageFilter} onValueChange={setLanguageFilter}>
                    <SelectTrigger className="mt-0.5 h-auto border-0 p-0 shadow-none text-sm font-medium text-[#042230] focus:ring-0 [&>svg]:text-[#354d73]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All languages</SelectItem>
                      {allLanguages.map(l => (
                        <SelectItem key={l} value={l.toLowerCase()}>{l}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {languageFilter !== "all" && (
                    <p className="mt-0.5 text-[10px] text-[#354d73]">
                      {languageLabel}
                      <button onClick={() => setLanguageFilter("all")} className="ml-1 hover:opacity-70"><X className="inline h-2.5 w-2.5" /></button>
                    </p>
                  )}
                </div>

                {/* Also speaks */}
                <div className="px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#354d73]">Also speaks</p>
                  <Select value={alsoSpeaksFilter} onValueChange={setAlsoSpeaksFilter}>
                    <SelectTrigger className="mt-0.5 h-auto border-0 p-0 shadow-none text-sm font-medium text-[#042230] focus:ring-0 [&>svg]:text-[#354d73]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any language</SelectItem>
                      {allLanguages.map(l => (
                        <SelectItem key={l} value={l.toLowerCase()}>{l}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price */}
                <div className="px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#354d73]">Price per lesson</p>
                  <Select value={priceFilter} onValueChange={setPriceFilter}>
                    <SelectTrigger className="mt-0.5 h-auto border-0 p-0 shadow-none text-sm font-medium text-[#042230] focus:ring-0 [&>svg]:text-[#354d73]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {priceOptions.map(o => (
                        <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Country of Birth */}
                <div className="px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#354d73]">Country of birth</p>
                  <Select value={countryFilter} onValueChange={setCountryFilter}>
                    <SelectTrigger className="mt-0.5 h-auto border-0 p-0 shadow-none text-sm font-medium text-[#042230] focus:ring-0 [&>svg]:text-[#354d73]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {countryOptions.map(o => (
                        <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Availability */}
                <div className="px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#354d73]">I&apos;m available</p>
                  <Select value={availFilter} onValueChange={setAvailFilter}>
                    <SelectTrigger className="mt-0.5 h-auto border-0 p-0 shadow-none text-sm font-medium text-[#042230] focus:ring-0 [&>svg]:text-[#354d73]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {availabilityOptions.map(o => (
                        <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Row 2 — Specialty pills + tutor-type chips + sort */}
              <div className="flex flex-wrap items-center gap-2 px-4 py-3">

                {/* Specialty pills */}
                {specialties.map(s => (
                  <div
                    key={s}
                    className={`rounded-lg border ${activeSpecialties.includes(s) ? "border-[#354d73] bg-[#354d73]" : "border-[#354d73]/25 bg-white hover:border-[#354d73]/60 hover:bg-[#F0F6FA]"}`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleSpecialty(s)}
                      className={`px-3 py-1.5 text-xs font-medium transition-colors ${activeSpecialties.includes(s) ? "text-white" : "text-[#354d73]"}`}
                    >
                      {s}
                    </button>
                  </div>
                ))}

                <div className="hidden h-5 w-px bg-[#354d73]/15 sm:block" />

                {([
                  { label: "Native Speaker", state: nativeSpeakerOnly, set: setNativeSpeakerOnly },
                  { label: "Verified Only",  state: verifiedOnly,      set: setVerifiedOnly      },
                  { label: "Trial Available",state: trialOnly,         set: setTrialOnly         },
                ] as const).map(({ label, state, set }) => (
                  <div
                    key={label}
                    className={`rounded-lg border ${state ? "border-[#042230] bg-[#042230]" : "border-[#354d73]/25 bg-white hover:border-[#354d73]/50 hover:bg-[#F0F6FA]"}`}
                  >
                    <button
                      type="button"
                      onClick={() => set(!state)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors ${state ? "text-white" : "text-[#042230]"}`}
                    >
                      {state && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                      {label}
                    </button>
                  </div>
                ))}

                <div className="ml-auto flex items-center gap-3">
                  {activeFilterCount > 0 && (
                    <button
                      type="button"
                      onClick={clearAllFilters}
                      className="flex items-center gap-1 text-xs text-[#354d73] hover:underline"
                    >
                      <X className="h-3 w-3" />
                      Clear {activeFilterCount} filter{activeFilterCount > 1 ? "s" : ""}
                    </button>
                  )}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="h-8 w-[190px] border-[#354d73]/25 text-xs text-[#042230] focus:ring-[#354d73]">
                      <SelectValue />
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
              </div>
            </div>

            {/* Search bar below filters */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search tutors or languages…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 h-10 bg-white border-[#354d73]/25 focus:border-[#354d73]"
              />
            </div>

            {/* Results count */}
            <p className="mb-4 text-sm text-muted-foreground">
              Showing <span className="font-medium text-foreground">{sortedFiltered.length}</span> of {tutors.length} tutors
            </p>

            <div className="flex flex-col gap-8 lg:flex-row">
              {/* Sidebar */}
              <aside className="w-full shrink-0 lg:w-64">
                <div className="sticky top-24 space-y-6">
                  {/* My Calendar */}
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
                      {calendarOpen ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
                    </button>
                    {calendarOpen && (
                      <div className="border-t border-border">
                        <StudentMiniCalendar />
                      </div>
                    )}
                  </div>

                  {/* My Lessons (mini) */}
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
                      {lessonsOpen ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
                    </button>
                    {lessonsOpen && (
                      <div className="divide-y divide-border border-t border-border">
                        <div className="px-4 py-3">
                          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#354d73]">Upcoming</p>
                          <div className="space-y-3">
                            {upcomingLessons.map(lesson => (
                              <div key={lesson.id} className="flex items-start gap-2">
                                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#354d73]/10">
                                  <Calendar className="h-3.5 w-3.5 text-[#354d73]" />
                                </div>
                                <div>
                                  <p className="text-sm font-semibold leading-tight text-[#042230]">{lesson.tutor}</p>
                                  <p className="text-xs text-muted-foreground">{lesson.subject} · {lesson.date}</p>
                                  <p className="text-xs text-muted-foreground">{lesson.time}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="px-4 py-3">
                          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Past Lessons</p>
                          <div className="space-y-3">
                            {pastLessons.map(lesson => (
                              <div key={lesson.id} className="flex items-start gap-2">
                                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted">
                                  <BookOpen className="h-3.5 w-3.5 text-muted-foreground" />
                                </div>
                                <div>
                                  <p className="text-sm font-semibold leading-tight text-[#042230]">{lesson.tutor}</p>
                                  <p className="text-xs text-muted-foreground">{lesson.subject} · {lesson.date}</p>
                                  <div className="mt-0.5 flex items-center gap-0.5">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                      <Star key={i} className={`h-3.5 w-3.5 ${i < lesson.rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"}`} />
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
                </div>
              </aside>

              {/* Tutor List */}
              <div className="flex-1">
                {sortedFiltered.length === 0 ? (
                  <div className="rounded-2xl border border-border bg-white p-12 text-center">
                    <p className="text-lg font-medium text-[#042230]">No tutors found</p>
                    <p className="mt-1 text-sm text-muted-foreground">Try adjusting your search or filters.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {sortedFiltered.map((tutor) => (
                      <TutorCard key={tutor.id} {...tutor} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* ════════════════ MESSAGES tab ════════════════ */}
        {activeTab === "messages" && (
          <div>
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-[#042230] sm:text-3xl">Messages</h1>
              <p className="mt-1 text-muted-foreground">Your conversations with tutors</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm" style={{ minHeight: 520 }}>
              <div className="flex h-full" style={{ minHeight: 520 }}>

                {/* Conversation list */}
                <div className="w-72 shrink-0 border-r border-border flex flex-col">
                  <div className="px-4 py-3 border-b border-border">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#354d73]">Conversations</p>
                  </div>
                  <div className="flex-1 overflow-y-auto divide-y divide-border">
                    {conversations.map(conv => {
                      const isActive = conv.id === activeChatId
                      return (
                        <button
                          key={conv.id}
                          type="button"
                          onClick={() => setActiveChatId(conv.id)}
                          className={`flex w-full items-start gap-3 px-4 py-3 text-left transition-colors ${isActive ? "bg-[#354d73]/8 border-l-2 border-[#354d73]" : "hover:bg-[#F0F6FA]"}`}
                        >
                          <div className="relative mt-0.5 shrink-0">
                            <img
                              src={conv.avatar}
                              alt={conv.tutor}
                              className="h-10 w-10 rounded-full object-cover bg-[#F0F6FA]"
                              onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
                            />
                            {conv.online && <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-400" />}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-1">
                              <p className={`text-sm leading-tight ${isActive ? "font-bold text-[#354d73]" : conv.unread > 0 ? "font-bold text-[#042230]" : "font-medium text-[#042230]"}`}>{conv.tutor}</p>
                              <span className="shrink-0 text-[10px] text-muted-foreground">{conv.time}</span>
                            </div>
                            <p className="text-[10px] text-[#354d73]">{conv.language}</p>
                            <p className={`mt-0.5 truncate text-xs ${conv.unread > 0 ? "font-medium text-foreground" : "text-muted-foreground"}`}>{conv.lastMessage}</p>
                          </div>
                          {conv.unread > 0 && (
                            <span className="mt-1 shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-[#354d73] text-[10px] font-bold text-white">{conv.unread}</span>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Chat area */}
                <div className="flex flex-1 flex-col">
                  {/* Chat header */}
                  {activeConv && (
                    <div className="flex items-center gap-3 border-b border-border px-5 py-3">
                      <div className="relative shrink-0">
                        <img
                          src={activeConv.avatar}
                          alt={activeConv.tutor}
                          className="h-9 w-9 rounded-full object-cover bg-[#F0F6FA]"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
                        />
                        {activeConv.online && <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full border-2 border-white bg-emerald-400" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-[#042230]">{activeConv.tutor}</p>
                        <p className="text-xs text-muted-foreground">{activeConv.language} · {activeConv.online ? "Online now" : "Offline"}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <button type="button" className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-[#F0F6FA] hover:text-[#354d73]" aria-label="Video call">
                          <Video className="h-4 w-4" />
                        </button>
                        <button type="button" className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-[#F0F6FA] hover:text-[#354d73]" aria-label="Voice call">
                          <PhoneCall className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto space-y-4 px-5 py-4" style={{ maxHeight: 360 }}>
                    {(activeThread?.messages ?? []).map(msg => (
                      <div key={msg.id} className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[70%] rounded-2xl px-4 py-2 ${msg.from === "me" ? "bg-[#354d73] text-white rounded-br-sm" : "bg-[#F0F6FA] text-[#042230] rounded-bl-sm"}`}>
                          <p className="text-sm leading-relaxed">{msg.text}</p>
                          <p className={`mt-1 text-[10px] ${msg.from === "me" ? "text-white/60 text-right" : "text-muted-foreground"}`}>{msg.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message menu – students choose from prefixes, no free typing */}
                  <div className="border-t border-border px-4 py-3">
                    {!menuSubject && (
                      <div>
                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                          Choose a subject
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {MESSAGE_MENU.map(item => (
                            <button
                              key={item.subject}
                              type="button"
                              onClick={() => { setMenuSubject(item.subject); setMenuClass(null) }}
                              className="rounded-full border border-[#354d73] px-3 py-1 text-xs font-medium text-[#354d73] hover:bg-[#354d73] hover:text-white transition-colors"
                            >
                              {item.subject}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {menuSubject && !menuClass && (() => {
                      const subjectItem = MESSAGE_MENU.find(s => s.subject === menuSubject)
                      if (!subjectItem) return null
                      return (
                        <div>
                          <div className="mb-2 flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => setMenuSubject(null)}
                              className="flex h-5 w-5 items-center justify-center rounded-full hover:bg-[#F0F6FA]"
                              aria-label="Back to subjects"
                            >
                              <ChevronLeft className="h-3.5 w-3.5 text-[#354d73]" />
                            </button>
                            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                              {menuSubject} – choose a class
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {subjectItem.classes.map(cls => (
                              <button
                                key={cls.name}
                                type="button"
                                onClick={() => setMenuClass(cls.name)}
                                className="rounded-full border border-[#354d73] px-3 py-1 text-xs font-medium text-[#354d73] hover:bg-[#354d73] hover:text-white transition-colors"
                              >
                                {cls.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      )
                    })()}

                    {menuSubject && menuClass && (() => {
                      const subjectItem = MESSAGE_MENU.find(s => s.subject === menuSubject)
                      const classItem = subjectItem?.classes.find(c => c.name === menuClass)
                      if (!subjectItem || !classItem) return null
                      return (
                        <div>
                          <div className="mb-2 flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => setMenuClass(null)}
                              className="flex h-5 w-5 items-center justify-center rounded-full hover:bg-[#F0F6FA]"
                              aria-label="Back to classes"
                            >
                              <ChevronLeft className="h-3.5 w-3.5 text-[#354d73]" />
                            </button>
                            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                              {menuSubject} › {menuClass}
                            </p>
                          </div>
                          <div className="flex flex-col gap-1">
                            {classItem.prefixes.map(prefix => (
                              <button
                                key={prefix}
                                type="button"
                                onClick={() => sendChatMessage(prefix)}
                                className="w-full rounded-lg border border-border bg-[#F0F6FA] px-3 py-2 text-left text-xs text-[#042230] hover:border-[#354d73] hover:bg-[#354d73]/10 transition-colors"
                              >
                                {prefix}
                              </button>
                            ))}
                          </div>
                        </div>
                      )
                    })()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ════════════════ MY LESSONS tab ════════════════ */}
        {activeTab === "lessons" && (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-[#042230] sm:text-3xl">My Lessons</h1>
                <p className="mt-1 text-muted-foreground">Manage your upcoming and past lessons</p>
              </div>
              <button
                type="button"
                onClick={() => goToTab("home")}
                className="flex items-center gap-2 rounded-lg bg-[#354d73] px-4 py-2 text-sm font-semibold text-white hover:bg-[#2a3d5e]"
              >
                + Book a Lesson
              </button>
            </div>

            {/* Upcoming lessons */}
            <section className="mb-8">
              <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#354d73]">Upcoming Lessons</h2>
              <div className="space-y-4">
                {upcomingLessons.map(lesson => (
                  <div key={lesson.id} className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm sm:flex-row sm:items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#354d73]/10">
                      <Calendar className="h-6 w-6 text-[#354d73]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-[#042230]">{lesson.tutor}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">{lesson.subject} · {lesson.date} at {lesson.time}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Confirmed</span>
                      <button type="button" className="flex items-center gap-1.5 rounded-lg border border-[#354d73] px-3 py-1.5 text-xs font-semibold text-[#354d73] hover:bg-[#F0F6FA]">
                        <Video className="h-3.5 w-3.5" /> Join lesson
                      </button>
                      <button type="button" className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground hover:bg-[#F0F6FA]">
                        <RotateCcw className="h-3.5 w-3.5" /> Reschedule
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Past lessons */}
            <section>
              <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">Past Lessons</h2>
              <div className="space-y-4">
                {[
                  ...pastLessons,
                  { id: 4, tutor: "Wei Zhang",    subject: "Mandarin", date: "Mon, Mar 10", rating: 5 },
                  { id: 5, tutor: "Ana Silva",    subject: "Portuguese", date: "Fri, Mar 7", rating: 4 },
                ].map(lesson => (
                  <div key={lesson.id} className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm sm:flex-row sm:items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted">
                      <BookOpen className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-[#042230]">{lesson.tutor}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">{lesson.subject} · {lesson.date}</p>
                      <div className="mt-1 flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < lesson.rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"}`} />
                        ))}
                        <span className="ml-1.5 text-xs text-muted-foreground">{lesson.rating}/5</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <button type="button" className="flex items-center gap-1.5 rounded-lg border border-[#354d73] px-3 py-1.5 text-xs font-semibold text-[#354d73] hover:bg-[#F0F6FA]">
                        <RotateCcw className="h-3.5 w-3.5" /> Book again
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ════════════════ SAVED TUTORS tab ════════════════ */}
        {activeTab === "saved" && (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-[#042230] sm:text-3xl">Saved Tutors</h1>
                <p className="mt-1 text-muted-foreground">
                  {savedTutors.length} tutor{savedTutors.length !== 1 ? "s" : ""} saved
                </p>
              </div>
              <button
                type="button"
                onClick={() => goToTab("home")}
                className="flex items-center gap-2 rounded-lg border border-[#354d73] px-4 py-2 text-sm font-semibold text-[#354d73] hover:bg-[#F0F6FA]"
              >
                Browse more tutors
              </button>
            </div>

            {savedTutors.length === 0 ? (
              <div className="rounded-2xl border border-border bg-white p-16 text-center">
                <Heart className="mx-auto mb-3 h-10 w-10 text-muted-foreground/40" />
                <p className="text-lg font-semibold text-[#042230]">No saved tutors yet</p>
                <p className="mt-1 text-sm text-muted-foreground">Browse tutors and tap the heart to save your favourites.</p>
                <button type="button" onClick={() => goToTab("home")} className="mt-5 rounded-lg bg-[#354d73] px-5 py-2 text-sm font-semibold text-white hover:bg-[#2a3d5e]">
                  Find Tutors
                </button>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {savedTutors.map(tutor => (
                  <div key={tutor.id} className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md">
                    {/* Remove button */}
                    <button
                      type="button"
                      onClick={() => removeSavedTutor(tutor.id)}
                      className="absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-rose-400 shadow hover:bg-white hover:text-rose-600"
                      aria-label="Remove from saved"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>

                    {/* Avatar */}
                    <div className="relative h-36 bg-gradient-to-br from-[#354d73]/10 to-[#354d73]/5">
                      <img
                        src={tutor.image}
                        alt={tutor.name}
                        className="h-full w-full object-cover object-top"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
                      />
                    </div>

                    {/* Details */}
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-bold text-[#042230]">{tutor.name}</p>
                          <p className="text-xs text-muted-foreground">{tutor.languages.join(" · ")}</p>
                        </div>
                        <span className="shrink-0 text-sm font-bold text-[#354d73]">${tutor.hourlyRate}/hr</span>
                      </div>

                      <div className="mt-2 flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-semibold text-[#042230]">{tutor.rating}</span>
                        <span className="text-xs text-muted-foreground">({tutor.reviews} reviews)</span>
                      </div>

                      <div className="mt-2 flex flex-wrap gap-1">
                        {tutor.specialties.slice(0, 2).map(s => (
                          <span key={s} className="rounded-full bg-[#354d73]/8 px-2 py-0.5 text-[10px] font-medium text-[#354d73]">{s}</span>
                        ))}
                      </div>

                      <p className="mt-2 text-[10px] text-muted-foreground">{tutor.savedAt}</p>

                      <button
                        type="button"
                        className="mt-3 w-full rounded-lg bg-[#354d73] py-2 text-sm font-semibold text-white hover:bg-[#2a3d5e] transition-colors"
                      >
                        Book a Lesson
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ════════════════ REFER A FRIEND tab ════════════════ */}
        {activeTab === "refer" && (
          <div className="max-w-2xl">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-[#042230] sm:text-3xl">Refer a Friend</h1>
              <p className="mt-1 text-muted-foreground">Invite friends and earn rewards together</p>
            </div>

            {/* Hero card */}
            <div className="mb-6 rounded-2xl bg-gradient-to-br from-[#354d73] to-[#042230] p-6 text-white shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-bold">Share the love of languages 🌍</p>
                  <p className="mt-1 text-sm text-white/80">
                    For every friend who joins and completes their first lesson, you both get <span className="font-semibold text-white">$10 credit</span>.
                  </p>
                </div>
                <Gift className="h-10 w-10 shrink-0 text-white/50" />
              </div>

              {/* Referral code */}
              <div className="mt-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/60">Your referral code</p>
                <div className="flex items-center gap-2 rounded-xl bg-white/15 px-4 py-3">
                  <span className="flex-1 text-lg font-bold tracking-widest">{REFERRAL_CODE}</span>
                  <button
                    type="button"
                    onClick={copyReferralCode}
                    className="flex items-center gap-1.5 rounded-lg bg-white/20 px-3 py-1.5 text-xs font-semibold hover:bg-white/30 transition-colors"
                  >
                    {copiedCode ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {copiedCode ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Share buttons */}
              <div className="mt-4 flex flex-wrap gap-2">
                <button type="button" className="flex items-center gap-2 rounded-lg bg-white/15 px-4 py-2 text-sm font-semibold hover:bg-white/25 transition-colors">
                  <Share2 className="h-4 w-4" /> Share link
                </button>
                <button type="button" className="flex items-center gap-2 rounded-lg bg-white/15 px-4 py-2 text-sm font-semibold hover:bg-white/25 transition-colors">
                  <Send className="h-4 w-4" /> Invite by email
                </button>
              </div>
            </div>

            {/* Progress toward milestones */}
            <div className="mb-6 rounded-2xl border border-border bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-bold text-[#042230]">Rewards Progress</p>
                <span className="text-sm text-muted-foreground">{referredCount} active referral{referredCount !== 1 ? "s" : ""}</span>
              </div>

              <div className="space-y-4">
                {referralRewards.map(r => (
                  <div key={r.milestone} className={`flex items-center gap-4 rounded-xl border p-3 ${r.earned ? "border-emerald-200 bg-emerald-50" : "border-border bg-[#F0F6FA]/50"}`}>
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${r.earned ? "bg-emerald-500" : "bg-[#354d73]/10"}`}>
                      {r.earned
                        ? <Check className="h-5 w-5 text-white" />
                        : <Trophy className={`h-5 w-5 ${referredCount >= r.milestone ? "text-[#354d73]" : "text-muted-foreground"}`} />}
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm font-semibold ${r.earned ? "text-emerald-700" : "text-[#042230]"}`}>{r.label}</p>
                      <p className={`text-xs ${r.earned ? "text-emerald-600" : "text-muted-foreground"}`}>
                        Refer {r.milestone} friend{r.milestone > 1 ? "s" : ""} → {r.reward}
                      </p>
                    </div>
                    {r.earned && <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">Earned!</span>}
                    {!r.earned && referredCount >= r.milestone && <span className="rounded-full bg-[#354d73]/10 px-2 py-0.5 text-xs font-semibold text-[#354d73]">Unlocked</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Referred friends list */}
            <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-bold text-[#042230]">Friends You&apos;ve Referred</p>
                <Users className="h-4 w-4 text-muted-foreground" />
              </div>
              {referredFriends.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-4">No referrals yet. Share your code above!</p>
              ) : (
                <div className="divide-y divide-border">
                  {referredFriends.map(f => (
                    <div key={f.name} className="flex items-center gap-3 py-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#354d73]/10 shrink-0">
                        <User className="h-4 w-4 text-[#354d73]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-[#042230]">{f.name}</p>
                        <p className="text-xs text-muted-foreground">Joined {f.joined}</p>
                      </div>
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${f.status === "Active" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
                        {f.status}
                      </span>
                      <span className="text-sm font-bold text-[#354d73] w-8 text-right">{f.reward}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ════════════════ HELP tab ════════════════ */}
        {activeTab === "help" && (
          <div className="max-w-3xl">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-[#042230] sm:text-3xl">Help &amp; Support</h1>
              <p className="mt-1 text-muted-foreground">Find answers, guides, and ways to contact our support team</p>
            </div>

            {/* Search bar */}
            <div className="mb-8 relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder={`Search for help topics, e.g. "cancel lesson" or "refund"…`}
                value={helpSearch}
                onChange={e => setHelpSearch(e.target.value)}
                className="w-full rounded-xl border border-[#354d73]/25 bg-white py-3.5 pl-12 pr-4 text-sm text-[#042230] shadow-sm outline-none placeholder:text-muted-foreground focus:border-[#354d73] focus:ring-2 focus:ring-[#354d73]/20"
              />
            </div>

            {/* Quick links */}
            <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                { icon: BookOpen,     label: "Getting started",      desc: "New to AI-MLP? Start here" },
                { icon: CalendarDays, label: "Booking & scheduling",  desc: "Manage your lessons" },
                { icon: CreditCard,   label: "Payments & billing",    desc: "Invoices, refunds, plans" },
                { icon: MessageCircle,label: "Messaging tutors",      desc: "Chat tips and etiquette" },
                { icon: Star,         label: "Reviews & ratings",     desc: "How ratings work" },
                { icon: Settings,     label: "Account settings",      desc: "Profile, notifications" },
              ]
                .filter(item =>
                  !helpSearch ||
                  item.label.toLowerCase().includes(helpSearch.toLowerCase()) ||
                  item.desc.toLowerCase().includes(helpSearch.toLowerCase())
                )
                .map(({ icon: Icon, label, desc }) => (
                  <button
                    key={label}
                    type="button"
                    className="flex flex-col items-start gap-2 rounded-xl border border-[#354d73]/15 bg-white p-4 text-left shadow-sm transition-shadow hover:shadow-md hover:border-[#354d73]/35"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#354d73]/10">
                      <Icon className="h-4 w-4 text-[#354d73]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#042230]">{label}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{desc}</p>
                    </div>
                  </button>
                ))}
            </div>

            {/* FAQ */}
            <div className="mb-8">
              <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#354d73]">Frequently Asked Questions</h2>
              {(() => {
                const faqs = [
                  {
                    q: "How do I book a trial lesson?",
                    a: "Find a tutor you like, click their profile and select \"Book a trial lesson\". Trial lessons are typically 25–30 minutes and discounted. Your first trial lesson always gets 30% off automatically.",
                  },
                  {
                    q: "Can I cancel or reschedule a lesson?",
                    a: "Yes. Go to My Lessons, find the upcoming lesson and click \"Reschedule\". Cancellations made more than 24 hours before the start time are free. Late cancellations may incur a fee as per the tutor's policy.",
                  },
                  {
                    q: "How does the payment process work?",
                    a: "You purchase lesson credits which are stored in your account. Credits are deducted when you book a lesson. Unused credits are fully refundable within 30 days.",
                  },
                  {
                    q: "What if I'm unhappy with my tutor?",
                    a: "We offer a satisfaction guarantee on trial lessons. If you're not happy, contact support within 72 hours and we'll issue a full credit. For regular lessons, credits are handled on a case-by-case basis.",
                  },
                  {
                    q: "How do I change my subscription plan?",
                    a: "Go to Settings → Billing to view or upgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
                  },
                ]
                const filtered = faqs.filter(item =>
                  !helpSearch ||
                  item.q.toLowerCase().includes(helpSearch.toLowerCase()) ||
                  item.a.toLowerCase().includes(helpSearch.toLowerCase())
                )
                return filtered.length > 0 ? (
                  <div className="space-y-2">
                    {filtered.map(({ q, a }) => (
                      <HelpFaqItem key={q} question={q} answer={a} />
                    ))}
                  </div>
                ) : (
                  <div className="rounded-xl border border-border bg-white p-6 text-center">
                    <HelpCircle className="mx-auto mb-2 h-8 w-8 text-muted-foreground/40" />
                    <p className="text-sm font-medium text-[#042230]">No results for &ldquo;{helpSearch}&rdquo;</p>
                    <p className="mt-1 text-xs text-muted-foreground">Try different keywords or contact support below.</p>
                  </div>
                )
              })()}
            </div>

            {/* Contact support */}
            <div className="rounded-2xl border border-[#354d73]/20 bg-gradient-to-br from-[#354d73]/5 to-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-bold text-[#042230]">Still need help?</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Our support team is available Mon–Fri, 9 AM – 6 PM (EST).
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-lg bg-[#354d73] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#2a3d5e] transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Live chat
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-lg border border-[#354d73] px-4 py-2.5 text-sm font-semibold text-[#354d73] hover:bg-[#F0F6FA] transition-colors"
                  >
                    <Send className="h-4 w-4" />
                    Email support
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  )
}
