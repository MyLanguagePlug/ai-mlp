"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useSearchParams, useRouter } from "next/navigation"
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
  ArrowLeft,
  AlertTriangle,
  Ban,
  CalendarClock,
  Bot,
  Sparkles,
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { TutorCard } from "@/components/tutor-card"
import { BookTrialModal } from "@/components/book-trial-modal"

const ALL_LANGUAGES = "All languages"

// ── FAQ data (shared between the FAQ list and the AI chatbot) ─────────────
const FAQ_DATA = [
  {
    q: "How do I book a trial lesson?",
    a: "Find a tutor you like, click their profile and select \"Book a trial lesson\". Trial lessons are typically 25–30 minutes and discounted. Your first trial lesson always gets 30% off automatically.",
    keywords: ["book", "trial", "lesson", "schedule", "first", "new", "start"],
  },
  {
    q: "Can I cancel or reschedule a lesson?",
    a: "Yes. Go to My Lessons, find the upcoming lesson and click \"Reschedule\". Cancellations made more than 24 hours before the start time are free. Late cancellations may incur a fee as per the tutor's policy.",
    keywords: ["cancel", "reschedule", "change", "lesson", "upcoming", "refund", "policy", "late"],
  },
  {
    q: "How does the payment process work?",
    a: "You purchase lesson credits which are stored in your account. Credits are deducted when you book a lesson. Unused credits are fully refundable within 30 days.",
    keywords: ["payment", "pay", "credits", "billing", "refund", "charge", "money", "cost", "price"],
  },
  {
    q: "What if I'm unhappy with my tutor?",
    a: "We offer a satisfaction guarantee on trial lessons. If you're not happy, contact support within 72 hours and we'll issue a full credit. For regular lessons, credits are handled on a case-by-case basis.",
    keywords: ["unhappy", "unsatisfied", "tutor", "bad", "refund", "guarantee", "satisfaction", "complaint"],
  },
  {
    q: "How do I change my subscription plan?",
    a: "Go to Settings → Billing to view or upgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
    keywords: ["subscription", "plan", "upgrade", "downgrade", "billing", "settings", "change", "account"],
  },
  {
    q: "How do I find a tutor?",
    a: "Use the Home tab to browse tutors. You can filter by language, price, country, availability, and more. Click on any tutor card to view their full profile, video introduction, reviews, and pricing.",
    keywords: ["find", "search", "tutor", "browse", "filter", "language", "available"],
  },
  {
    q: "How do I message a tutor?",
    a: "Go to the Messages tab and click \"New message\" to start a conversation with any tutor. You can discuss your goals, schedule, and learning preferences before booking.",
    keywords: ["message", "chat", "contact", "tutor", "talk", "communicate", "inbox"],
  },
  {
    q: "Are lessons conducted via video call?",
    a: "Yes, all lessons are held via video call directly on the AI-MLP platform. You'll receive a link 15 minutes before your lesson starts. Ensure your camera and microphone are working beforehand.",
    keywords: ["video", "call", "online", "zoom", "platform", "link", "camera", "microphone", "how"],
  },
  {
    q: "How do I leave a review for my tutor?",
    a: "After a lesson is complete, you'll see a \"Leave a review\" prompt in your Past Lessons section. Ratings help other students find great tutors.",
    keywords: ["review", "rating", "rate", "feedback", "stars", "comment", "past"],
  },
  {
    q: "What languages can I learn?",
    a: "AI-MLP offers tutors for Spanish, French, German, Japanese, Mandarin Chinese, Portuguese, Italian, Arabic, Korean, and many more. Use the language filter on the Home tab to explore.",
    keywords: ["language", "learn", "spanish", "french", "german", "japanese", "mandarin", "chinese", "portuguese", "italian", "arabic", "korean"],
  },
  {
    q: "How do I refer a friend?",
    a: "Go to the Refer tab in your dashboard. Share your unique referral link and earn credits when friends sign up and book their first lesson.",
    keywords: ["refer", "referral", "friend", "invite", "share", "earn", "credits", "bonus"],
  },
  {
    q: "How do I update my profile?",
    a: "Click on your avatar in the top-right corner and select Settings. From there you can update your name, email, photo, language preferences, and notification settings.",
    keywords: ["profile", "update", "settings", "name", "email", "photo", "avatar", "edit", "account"],
  },
]

type FaqChatMessage = { role: "user" | "bot"; text: string }

// Scoring weights for FAQ keyword matching
const MIN_WORD_LENGTH = 2
const SCORE_CONTENT_MATCH = 1
const SCORE_QUESTION_MATCH = 1.5
const SCORE_KEYWORD_MATCH = 2
const MIN_MATCH_SCORE = 2

// Bot response delay range (ms) – slight variance feels more natural
const BOT_RESPONSE_DELAY_BASE = 900
const BOT_RESPONSE_DELAY_VARIANCE = 600

function getFaqBotResponse(question: string): string {
  const q = question.toLowerCase()
  const inputWords = q.split(/\W+/).filter(w => w.length > MIN_WORD_LENGTH)

  let bestScore = 0
  let bestAnswer = ""

  for (const faq of FAQ_DATA) {
    const targetText = (faq.q + " " + faq.a).toLowerCase()
    let score = 0

    for (const word of inputWords) {
      if (targetText.includes(word)) score += SCORE_CONTENT_MATCH
      if (faq.q.toLowerCase().includes(word)) score += SCORE_QUESTION_MATCH
      if (faq.keywords.includes(word)) score += SCORE_KEYWORD_MATCH
    }

    if (score > bestScore) {
      bestScore = score
      bestAnswer = faq.a
    }
  }

  if (bestScore >= MIN_MATCH_SCORE) return bestAnswer

  return "I'm sorry, I couldn't find a specific answer to that question. Please try rephrasing, or use the search bar above to browse help topics. You can also reach our support team directly using the options below."
}

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
    subject: "Bookings",
    classes: [
      {
        name: "Book a New Lesson",
        prefixes: [
          "I'd like to book a new lesson",
          "Can I schedule a session this week?",
          "I'd like to reserve a lesson slot for next week",
          "How do I book a lesson with you?",
          "I want to set up my first paid lesson",
        ],
      },
      {
        name: "Reschedule or Cancel",
        prefixes: [
          "I need to reschedule my upcoming lesson",
          "I'd like to cancel my booked session",
          "Can we move our lesson to a different time?",
          "Something came up — can we rearrange?",
          "What is your cancellation policy?",
        ],
      },
      {
        name: "Trial Lesson Booking",
        prefixes: [
          "I'd like to book a trial lesson",
          "How do I arrange a trial session with you?",
          "I'm new here — can we start with a trial?",
          "Can we do a short introductory class first?",
          "I'd love to try a session before committing",
        ],
      },
      {
        name: "Recurring Sessions",
        prefixes: [
          "Can we set up a regular weekly booking?",
          "I'd like to book multiple lessons in advance",
          "Can we have the same time slot each week?",
          "How do I set up a recurring schedule with you?",
          "I want to book a package of lessons",
        ],
      },
    ],
  },
  {
    subject: "Classes",
    classes: [
      {
        name: "My Current Class",
        prefixes: [
          "I'd like to discuss my progress in our current class",
          "Can we review what we've covered so far?",
          "I have a question about the content of our class",
          "I want to talk about what we're focusing on in lessons",
          "Can we adjust the pace of our classes?",
        ],
      },
      {
        name: "Class Materials",
        prefixes: [
          "Can you recommend materials for our class?",
          "I'd like resources to supplement our lessons",
          "What textbooks or exercises do you use?",
          "Can you share the materials from our last class?",
          "I need extra practice materials between lessons",
        ],
      },
      {
        name: "Class Level & Progression",
        prefixes: [
          "I think I'm ready to move to the next level",
          "Can we assess my current level?",
          "I'd like to start at beginner level",
          "I feel the class is too easy / too difficult",
          "Can we talk about my progression plan?",
        ],
      },
      {
        name: "Group vs Private Classes",
        prefixes: [
          "Do you offer group classes?",
          "What's the difference between your group and private lessons?",
          "I'd like to join a group class if available",
          "Can I switch from a group class to private lessons?",
          "I prefer one-on-one classes — is that available?",
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
    subject: "Homework & Assignments",
    classes: [
      {
        name: "Grammar Exercises",
        prefixes: [
          "Can you help me with this grammar exercise?",
          "I need to check my homework answers",
          "Can we review this grammar assignment together?",
          "I'm stuck on this grammar question from my homework",
          "Can you explain this grammar rule from my assignment?",
        ],
      },
      {
        name: "Writing Assignments",
        prefixes: [
          "Can you help me with a writing assignment?",
          "Can you review my essay draft?",
          "I need help structuring my writing",
          "Can we work on improving my writing style?",
          "I have a writing exercise I'd like feedback on",
        ],
      },
      {
        name: "Vocabulary Work",
        prefixes: [
          "Can you help me with vocabulary from my homework?",
          "I need to learn these new words for my assignment",
          "Can we practice using this vocabulary in sentences?",
          "I'm preparing for a vocabulary test, can you help?",
          "Can we go over the word list from my last lesson?",
        ],
      },
      {
        name: "Reading & Comprehension",
        prefixes: [
          "Can we go over a reading passage from my homework?",
          "I need help understanding this text",
          "Can you help with reading comprehension questions?",
          "I'm struggling with this reading exercise",
          "Can we discuss the main ideas of this text?",
        ],
      },
    ],
  },
  {
    subject: "Follow-Up Questions",
    classes: [
      {
        name: "Previous Lesson Questions",
        prefixes: [
          "I have a question from our last lesson",
          "I've been practising what we covered and have a question",
          "Can we revisit something from our previous session?",
          "I'm confused about something we discussed last time",
          "I want to follow up on the topic we studied",
        ],
      },
      {
        name: "Pronunciation Practice",
        prefixes: [
          "Can we practise pronunciation from our last lesson?",
          "I've been working on my pronunciation, can you check?",
          "I have questions about how to pronounce certain words",
          "Can we do a pronunciation follow-up session?",
          "I want to improve the pronunciation mistakes you noted",
        ],
      },
      {
        name: "Cultural & Language Questions",
        prefixes: [
          "I have a question about the culture behind a phrase we learned",
          "Can you explain more about the cultural context?",
          "I'm curious about cultural practices related to what we studied",
          "Can we discuss how this language is used in daily life?",
          "I have questions about language use and cultural nuance",
        ],
      },
      {
        name: "Exam Preparation",
        prefixes: [
          "I'd like to prepare for an upcoming language exam",
          "Can we review exam topics from previous lessons?",
          "I want to practise exam-style questions",
          "Can you quiz me on what we've covered so far?",
          "I need help with exam techniques and preparation",
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

// ─── Lesson action types & constants ─────────────────────────────────────────

type LessonModalType = "cancel" | "reschedule" | "rebook" | "unschedule" | "review" | null
type LessonEntry = { id: number; tutor: string; subject: string; date?: string; time?: string; rating?: number; credits?: number; reviewed?: boolean }

const INIT_UPCOMING_LESSONS: LessonEntry[] = [
  { id: 1, tutor: "Maria Santos",       subject: "Spanish",  date: "Thu, Mar 19", time: "10:00 AM" },
  { id: 2, tutor: "Yuki Tanaka",        subject: "Japanese", date: "Sat, Mar 21", time: "2:00 PM"  },
  { id: 3, tutor: "Jean-Pierre Dubois", subject: "French",   date: "Mon, Mar 24", time: "11:00 AM" },
]

const INIT_PAST_LESSONS: LessonEntry[] = [
  { id: 1,  tutor: "Maria Santos",       subject: "Spanish",    date: "Wed, Mar 12", rating: 5, reviewed: true  },
  { id: 2,  tutor: "Yuki Tanaka",        subject: "Japanese",   date: "Fri, Mar 14", rating: 4, reviewed: true  },
  { id: 3,  tutor: "Hans Mueller",       subject: "German",     date: "Mon, Mar 17", rating: 5, reviewed: true  },
  { id: 4,  tutor: "Wei Zhang",          subject: "Mandarin",   date: "Mon, Mar 10", rating: 5, reviewed: true  },
  { id: 5,  tutor: "Ana Silva",          subject: "Portuguese", date: "Fri, Mar 7",  rating: 4, reviewed: true  },
  { id: 6,  tutor: "Jean-Pierre Dubois", subject: "French",     date: "Mon, Mar 3",  reviewed: false },
  { id: 7,  tutor: "Maria Santos",       subject: "Spanish",    date: "Wed, Feb 26", reviewed: false },
  { id: 8,  tutor: "Yuki Tanaka",        subject: "Japanese",   date: "Fri, Feb 21", reviewed: false },
]

const INIT_UNSCHEDULED_LESSONS: LessonEntry[] = [
  { id: 1, tutor: "Ana Silva",    subject: "Portuguese", credits: 1 },
  { id: 2, tutor: "Wei Zhang",    subject: "Mandarin",   credits: 1 },
]

const LESSON_TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "19:00",
]
const CANCEL_REASONS = ["Schedule conflict", "Feeling unwell", "Personal emergency", "Tutor request", "Other"]

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

function StudentDashboardInner() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<TabId>(() => {
    const tab = searchParams.get("tab")
    if (tab === "messages" || tab === "lessons" || tab === "saved" || tab === "refer" || tab === "help") {
      return tab
    }
    return "home"
  })

  useEffect(() => {
    const tab = searchParams.get("tab")
    if (tab === "messages" || tab === "lessons" || tab === "saved" || tab === "refer" || tab === "help") {
      setActiveTab(tab)
    } else {
      setActiveTab("home")
    }
  }, [searchParams])
  const [conversations] = useState<ConversationItem[]>(DEMO_CONVERSATIONS)
  const [savedTutors, setSavedTutors] = useState<SavedTutor[]>(DEMO_SAVED_TUTORS)
  const [activeChatId, setActiveChatId] = useState<number>(1)
  const [chatInput, setChatInput] = useState("")
  const [chatThreads, setChatThreads] = useState<ChatThread[]>(DEMO_CHAT_THREADS)
  const [menuSubject, setMenuSubject] = useState<string | null>(null)
  const [menuClass, setMenuClass] = useState<string | null>(null)
  const [mobileChatOpen, setMobileChatOpen] = useState(false)
  const [copiedCode, setCopiedCode] = useState(false)
  const [search, setSearch] = useState("")
  const [helpSearch, setHelpSearch] = useState("")
  const [faqChatMessages, setFaqChatMessages] = useState<FaqChatMessage[]>([
    { role: "bot", text: "Hi! I'm your AI assistant 👋 Ask me anything about AI-MLP — lessons, payments, tutors, scheduling, and more!" },
  ])
  const [faqChatInput, setFaqChatInput] = useState("")
  const [faqChatTyping, setFaqChatTyping] = useState(false)
  const faqChatEndRef = useRef<HTMLDivElement>(null)
  const [calendarOpen, setCalendarOpen] = useState(false)
  const [lessonsOpen, setLessonsOpen] = useState(true)

  // ── Lesson lists state ────────────────────────────────────────────────────
  const [upcomingLessons, setUpcomingLessons] = useState<LessonEntry[]>(INIT_UPCOMING_LESSONS)
  const [unscheduledLessons, setUnscheduledLessons] = useState<LessonEntry[]>(INIT_UNSCHEDULED_LESSONS)
  const [pastLessons, setPastLessons] = useState<LessonEntry[]>(INIT_PAST_LESSONS)
  const PAST_PER_PAGE = 3
  const [pastLessonsPage, setPastLessonsPage] = useState(1)
  const pastLessonsTotalPages = Math.ceil(pastLessons.length / PAST_PER_PAGE)
  const pagedPastLessons = pastLessons.slice((pastLessonsPage - 1) * PAST_PER_PAGE, pastLessonsPage * PAST_PER_PAGE)

  // ── Lesson action modal state ─────────────────────────────────────────────
  const [lessonModalType, setLessonModalType] = useState<LessonModalType>(null)
  const [selectedLesson, setSelectedLesson] = useState<LessonEntry | null>(null)
  const [lessonActionDone, setLessonActionDone] = useState(false)
  const [cancelReason, setCancelReason] = useState("")
  const [rescheduleDate, setRescheduleDate] = useState<string>("")
  const [rescheduleTime, setRescheduleTime] = useState<string>("")
  const [reviewRating, setReviewRating] = useState(0)
  const [reviewText, setReviewText] = useState("")
  function openLessonModal(type: LessonModalType, lesson: LessonEntry) {
    setSelectedLesson(lesson)
    setLessonModalType(type)
    setLessonActionDone(false)
    setCancelReason("")
    setRescheduleDate("")
    setRescheduleTime("")
    setReviewRating(0)
    setReviewText("")
  }
  function closeLessonModal() {
    setLessonModalType(null)
    setSelectedLesson(null)
    setLessonActionDone(false)
  }
  function handleUnschedule() {
    if (!selectedLesson) return
    setUpcomingLessons(prev => prev.filter(l => l.id !== selectedLesson.id))
    setUnscheduledLessons(prev => [...prev, { id: selectedLesson.id, tutor: selectedLesson.tutor, subject: selectedLesson.subject, credits: 1 }])
    setLessonActionDone(true)
  }
  function handleReviewSubmit() {
    if (!selectedLesson || reviewRating === 0) return
    setPastLessons(prev => prev.map(l => l.id === selectedLesson.id ? { ...l, reviewed: true, rating: reviewRating } : l))
    setLessonActionDone(true)
  }

  // ── Tutor modal state ─────────────────────────────────────────────────────
  const [bookTrialTutor, setBookTrialTutor] = useState<typeof tutors[0] | null>(null)

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

  // ── FAQ AI chatbot helpers ────────────────────────────────────────────────
  function submitFaqChat(text: string) {
    const trimmed = text.trim()
    if (!trimmed || faqChatTyping) return
    setFaqChatMessages(prev => [...prev, { role: "user", text: trimmed }])
    setFaqChatInput("")
    setFaqChatTyping(true)
    setTimeout(() => {
      const response = getFaqBotResponse(trimmed)
      setFaqChatMessages(prev => [...prev, { role: "bot", text: response }])
      setFaqChatTyping(false)
    }, BOT_RESPONSE_DELAY_BASE + Math.random() * BOT_RESPONSE_DELAY_VARIANCE)
  }

  function handleFaqChatSubmit(e: React.FormEvent) {
    e.preventDefault()
    submitFaqChat(faqChatInput)
  }

  useEffect(() => {
    faqChatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [faqChatMessages, faqChatTyping])

  // ── Chat helpers ──────────────────────────────────────────────────────────
  const activeThread = chatThreads.find(t => t.convId === activeChatId)
  const activeConv   = conversations.find(c => c.id === activeChatId)
  const totalUnread  = conversations.reduce((s, c) => s + c.unread, 0)

  function openConversation(id: number) {
    setActiveChatId(id)
    setMobileChatOpen(true)
    setMenuSubject(null)
    setMenuClass(null)
  }

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

  function toggleSavedTutor(id: string) {
    const tutor = tutors.find(t => t.id === id)
    if (!tutor) return
    setSavedTutors(prev => {
      const alreadySaved = prev.some(t => t.id === id)
      if (alreadySaved) {
        return prev.filter(t => t.id !== id)
      }
      return [
        ...prev,
        {
          id: tutor.id,
          name: tutor.name,
          image: tutor.image,
          languages: tutor.languages,
          rating: tutor.rating,
          reviews: tutor.reviews,
          hourlyRate: tutor.hourlyRate,
          isVerified: tutor.isVerified,
          specialties: tutor.specialties,
          savedAt: "Just saved",
        },
      ]
    })
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
                                      <Star key={i} className={`h-3.5 w-3.5 ${i < (lesson.rating ?? 0) ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"}`} />
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
                      <TutorCard
                        key={tutor.id}
                        {...tutor}
                        isSaved={savedTutors.some(s => s.id === tutor.id)}
                        onToggleSave={toggleSavedTutor}
                        onBookTrial={(id) => {
                          const t = tutors.find(x => x.id === id) ?? null
                          setBookTrialTutor(t)
                        }}
                        onViewProfile={(id) => {
                          router.push(`/tutors/${id}`)
                        }}
                      />
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
            {/* Header – hidden when mobile chat is open to maximise screen space */}
            <div className={`mb-4 ${mobileChatOpen ? "hidden sm:block" : ""}`}>
              <h1 className="text-2xl font-bold text-[#042230] sm:text-3xl">Messages</h1>
              <p className="mt-1 text-muted-foreground">Your conversations with tutors</p>
            </div>

            <div
              className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
              style={{ height: "calc(100dvh - 13rem)", minHeight: 420 }}
            >
              <div className="flex h-full">

                {/* ── Conversation list (full-width on mobile, fixed sidebar on md+) ── */}
                <div className={`${mobileChatOpen ? "hidden" : "flex"} md:flex w-full md:w-72 shrink-0 border-r border-border flex-col`}>
                  <div className="px-4 py-3 border-b border-border flex items-center justify-between">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#354d73]">Conversations</p>
                    <span className="text-[11px] text-muted-foreground" aria-live="polite">{totalUnread > 0 ? `${totalUnread} unread` : "All read"}</span>
                  </div>
                  <div className="flex-1 overflow-y-auto divide-y divide-border">
                    {conversations.map(conv => {
                      const isActive = conv.id === activeChatId
                      return (
                        <button
                          key={conv.id}
                          type="button"
                          onClick={() => openConversation(conv.id)}
                          className={`flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors ${isActive ? "bg-[#354d73]/8 border-l-[3px] border-[#354d73]" : "hover:bg-[#F0F6FA] border-l-[3px] border-transparent"}`}
                        >
                          <div className="relative shrink-0">
                            <img
                              src={conv.avatar}
                              alt={conv.tutor}
                              className="h-11 w-11 rounded-full object-cover bg-[#F0F6FA]"
                              onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
                            />
                            {conv.online && <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-400" />}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-1 mb-0.5">
                              <p className={`text-sm leading-tight truncate ${isActive ? "font-bold text-[#354d73]" : conv.unread > 0 ? "font-bold text-[#042230]" : "font-medium text-[#042230]"}`}>{conv.tutor}</p>
                              <span className="shrink-0 text-[11px] text-muted-foreground">{conv.time}</span>
                            </div>
                            <p className="text-[11px] font-medium text-[#354d73] mb-0.5">{conv.language}</p>
                            <p className={`truncate text-xs ${conv.unread > 0 ? "font-medium text-[#042230]" : "text-muted-foreground"}`}>{conv.lastMessage}</p>
                          </div>
                          {conv.unread > 0 && (
                            <span className="shrink-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#354d73] text-[10px] font-bold text-white px-1">{conv.unread}</span>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* ── Chat area (full-screen on mobile when open, flex-1 on md+) ── */}
                <div className={`${mobileChatOpen ? "flex" : "hidden"} md:flex flex-1 flex-col min-w-0`}>
                  {/* Chat header */}
                  {activeConv ? (
                    <div className="flex items-center gap-3 border-b border-border px-4 py-3">
                      {/* Back button – mobile only */}
                      <button
                        type="button"
                        onClick={() => setMobileChatOpen(false)}
                        className="md:hidden -ml-1 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-[#F0F6FA]"
                        aria-label="Back to conversations"
                      >
                        <ArrowLeft className="h-4 w-4" />
                      </button>
                      <div className="relative shrink-0">
                        <img
                          src={activeConv.avatar}
                          alt={activeConv.tutor}
                          className="h-9 w-9 rounded-full object-cover bg-[#F0F6FA]"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
                        />
                        {activeConv.online && <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full border-2 border-white bg-emerald-400" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-[#042230] truncate">{activeConv.tutor}</p>
                        <p className="text-xs text-muted-foreground">{activeConv.language} · <span className={activeConv.online ? "text-emerald-500" : ""}>{activeConv.online ? "Online now" : "Offline"}</span></p>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button type="button" className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-[#F0F6FA] hover:text-[#354d73]" aria-label="Video call">
                          <Video className="h-4 w-4" />
                        </button>
                        <button type="button" className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-[#F0F6FA] hover:text-[#354d73]" aria-label="Voice call">
                          <PhoneCall className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 border-b border-border px-4 py-3">
                      <button
                        type="button"
                        onClick={() => setMobileChatOpen(false)}
                        className="md:hidden -ml-1 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-[#F0F6FA]"
                        aria-label="Back to conversations"
                      >
                        <ArrowLeft className="h-4 w-4" />
                      </button>
                    </div>
                  )}

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto space-y-3 px-4 py-4">
                    {(activeThread?.messages ?? []).map(msg => (
                      <div key={msg.id} className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[85%] sm:max-w-[70%] rounded-2xl px-4 py-2.5 ${msg.from === "me" ? "bg-[#354d73] text-white rounded-br-sm" : "bg-[#F0F6FA] text-[#042230] rounded-bl-sm"}`}>
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
                              className="rounded-full border border-[#354d73] px-3 py-1.5 text-xs font-medium text-[#354d73] hover:bg-[#354d73] hover:text-white transition-colors active:bg-[#354d73] active:text-white"
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
                          <div className="mb-2 flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => setMenuSubject(null)}
                              className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-[#F0F6FA]"
                              aria-label="Back to subjects"
                            >
                              <ChevronLeft className="h-4 w-4 text-[#354d73]" />
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
                                className="rounded-full border border-[#354d73] px-3 py-1.5 text-xs font-medium text-[#354d73] hover:bg-[#354d73] hover:text-white transition-colors active:bg-[#354d73] active:text-white"
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
                          <div className="mb-2 flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => setMenuClass(null)}
                              className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-[#F0F6FA]"
                              aria-label="Back to classes"
                            >
                              <ChevronLeft className="h-4 w-4 text-[#354d73]" />
                            </button>
                            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                              {menuSubject} › {menuClass}
                            </p>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            {classItem.prefixes.map(prefix => (
                              <button
                                key={prefix}
                                type="button"
                                onClick={() => sendChatMessage(prefix)}
                                className="w-full rounded-xl border border-border bg-[#F0F6FA] px-4 py-2.5 text-left text-sm text-[#042230] hover:border-[#354d73] hover:bg-[#354d73]/10 active:bg-[#354d73]/15 transition-colors"
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
              {upcomingLessons.length === 0 ? (
                <p className="text-sm text-muted-foreground">No upcoming lessons.</p>
              ) : (
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
                        <button
                          type="button"
                          onClick={() => openLessonModal("reschedule", lesson)}
                          className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground hover:bg-[#F0F6FA]"
                        >
                          <RotateCcw className="h-3.5 w-3.5" /> Reschedule
                        </button>
                        <button
                          type="button"
                          onClick={() => openLessonModal("unschedule", lesson)}
                          className="flex items-center gap-1.5 rounded-lg border border-amber-300 px-3 py-1.5 text-xs text-amber-700 hover:bg-amber-50"
                        >
                          <CalendarClock className="h-3.5 w-3.5" /> Unschedule
                        </button>
                        <button
                          type="button"
                          onClick={() => openLessonModal("cancel", lesson)}
                          className="flex items-center gap-1.5 rounded-lg border border-rose-200 px-3 py-1.5 text-xs text-rose-600 hover:bg-rose-50"
                        >
                          <Ban className="h-3.5 w-3.5" /> Cancel
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Unscheduled lessons */}
            <section className="mb-8">
              <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-amber-600">Un-scheduled Lessons</h2>
              {unscheduledLessons.length === 0 ? (
                <p className="text-sm text-muted-foreground">No unscheduled lessons.</p>
              ) : (
                <div className="space-y-4">
                  {unscheduledLessons.map(lesson => (
                    <div key={lesson.id} className="flex flex-col gap-4 rounded-2xl border border-amber-200 bg-amber-50/40 p-5 shadow-sm sm:flex-row sm:items-center">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100">
                        <CalendarClock className="h-6 w-6 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-[#042230]">{lesson.tutor}</p>
                        <p className="mt-0.5 text-sm text-muted-foreground">{lesson.subject} · {lesson.credits} lesson credit{lesson.credits !== 1 ? "s" : ""} remaining</p>
                        <span className="mt-1 inline-block rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700">Awaiting schedule</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          type="button"
                          onClick={() => openLessonModal("reschedule", lesson)}
                          className="flex items-center gap-1.5 rounded-lg bg-[#354d73] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#2a3d5e]"
                        >
                          <Calendar className="h-3.5 w-3.5" /> Schedule now
                        </button>
                        <button
                          type="button"
                          onClick={() => openLessonModal("cancel", lesson)}
                          className="flex items-center gap-1.5 rounded-lg border border-rose-200 px-3 py-1.5 text-xs text-rose-600 hover:bg-rose-50"
                        >
                          <Ban className="h-3.5 w-3.5" /> Cancel
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Past lessons */}
            <section>
              <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">Past Lessons</h2>
              <div className="space-y-4">
                {pagedPastLessons.map(lesson => (
                  <div key={lesson.id} className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm sm:flex-row sm:items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted">
                      <BookOpen className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-[#042230]">{lesson.tutor}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">{lesson.subject} · {lesson.date}</p>
                      {lesson.reviewed ? (
                        <div className="mt-1 flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < (lesson.rating ?? 0) ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"}`} />
                          ))}
                          <span className="ml-1.5 text-xs text-muted-foreground">{lesson.rating}/5</span>
                        </div>
                      ) : (
                        <span className="mt-1 inline-block rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700">Review pending</span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {!lesson.reviewed && (
                        <button
                          type="button"
                          onClick={() => openLessonModal("review", lesson)}
                          className="flex items-center gap-1.5 rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-amber-600"
                        >
                          <Star className="h-3.5 w-3.5" /> Leave Review
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => openLessonModal("rebook", lesson)}
                        className="flex items-center gap-1.5 rounded-lg border border-[#354d73] px-3 py-1.5 text-xs font-semibold text-[#354d73] hover:bg-[#F0F6FA]"
                      >
                        <RotateCcw className="h-3.5 w-3.5" /> Book again
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {/* Pagination */}
              {pastLessonsTotalPages > 1 && (
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">
                    Page {pastLessonsPage} of {pastLessonsTotalPages}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={pastLessonsPage === 1}
                      onClick={() => setPastLessonsPage(p => p - 1)}
                      className="flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-[#F0F6FA] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <ChevronLeft className="h-3.5 w-3.5" /> Previous
                    </button>
                    <button
                      type="button"
                      disabled={pastLessonsPage === pastLessonsTotalPages}
                      onClick={() => setPastLessonsPage(p => p + 1)}
                      className="flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-[#F0F6FA] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Next <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </section>

            {/* ── Cancel lesson modal ─────────────────────────────────────────── */}
            <Dialog open={lessonModalType === "cancel"} onOpenChange={open => { if (!open) closeLessonModal() }}>
              <DialogContent className="max-w-md rounded-2xl">
                <DialogHeader>
                  <DialogTitle className="text-[#042230]">
                    {lessonActionDone ? "Lesson Cancelled" : "Cancel Lesson"}
                  </DialogTitle>
                </DialogHeader>
                {!lessonActionDone ? (
                  <div className="space-y-5">
                    <div className="flex items-start gap-3 rounded-xl bg-rose-50 p-4">
                      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-rose-500" />
                      <div>
                        <p className="text-sm font-semibold text-rose-700">Are you sure you want to cancel?</p>
                        <p className="mt-0.5 text-xs text-rose-600">
                          {selectedLesson?.tutor} — {selectedLesson?.subject}
                          {selectedLesson?.date ? ` · ${selectedLesson.date}` : ""}
                          {selectedLesson?.time ? ` at ${selectedLesson.time}` : ""}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-semibold text-[#042230]">Reason for cancellation</p>
                      <div className="space-y-2">
                        {CANCEL_REASONS.map(reason => (
                          <button
                            key={reason}
                            type="button"
                            onClick={() => setCancelReason(reason)}
                            className={`w-full rounded-xl border px-4 py-2.5 text-left text-sm transition-colors ${cancelReason === reason ? "border-[#354d73] bg-[#354d73]/5 font-semibold text-[#354d73]" : "border-border text-muted-foreground hover:border-[#354d73]/40 hover:bg-[#F0F6FA]"}`}
                          >
                            {reason}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3 pt-1">
                      <button
                        type="button"
                        onClick={closeLessonModal}
                        className="flex-1 rounded-xl border border-border py-2.5 text-sm font-semibold text-muted-foreground hover:bg-[#F0F6FA]"
                      >
                        Keep lesson
                      </button>
                      <button
                        type="button"
                        disabled={!cancelReason}
                        onClick={() => setLessonActionDone(true)}
                        className="flex-1 rounded-xl bg-rose-500 py-2.5 text-sm font-semibold text-white hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        Confirm cancellation
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-5 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                      <Check className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-[#042230]">Lesson cancelled successfully</p>
                      <p className="mt-1 text-sm text-muted-foreground">Your lesson credit has been returned to your account.</p>
                    </div>
                    <button
                      type="button"
                      onClick={closeLessonModal}
                      className="w-full rounded-xl bg-[#354d73] py-2.5 text-sm font-semibold text-white hover:bg-[#2a3d5e]"
                    >
                      Done
                    </button>
                  </div>
                )}
              </DialogContent>
            </Dialog>

            {/* ── Reschedule / Schedule lesson modal ──────────────────────────── */}
            <Dialog open={lessonModalType === "reschedule"} onOpenChange={open => { if (!open) closeLessonModal() }}>
              <DialogContent className="max-w-md rounded-2xl">
                <DialogHeader>
                  <DialogTitle className="text-[#042230]">
                    {lessonActionDone ? "Lesson Scheduled!" : (selectedLesson?.date ? "Reschedule Lesson" : "Schedule Lesson")}
                  </DialogTitle>
                </DialogHeader>
                {!lessonActionDone ? (
                  <div className="space-y-5">
                    <div className="rounded-xl border border-border bg-[#F0F6FA] p-3">
                      <p className="text-sm font-semibold text-[#042230]">{selectedLesson?.tutor}</p>
                      <p className="text-xs text-muted-foreground">{selectedLesson?.subject}{selectedLesson?.date ? ` · currently ${selectedLesson.date} at ${selectedLesson.time}` : ""}</p>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-semibold text-[#042230]">Pick a new date</p>
                      <Input
                        type="date"
                        value={rescheduleDate}
                        onChange={e => setRescheduleDate(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full rounded-xl border-border"
                      />
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-semibold text-[#042230]">Pick a time</p>
                      <div className="grid grid-cols-4 gap-2">
                        {LESSON_TIME_SLOTS.map(slot => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setRescheduleTime(slot)}
                            className={`rounded-lg border py-1.5 text-xs font-medium transition-colors ${rescheduleTime === slot ? "border-[#354d73] bg-[#354d73] text-white" : "border-border text-muted-foreground hover:border-[#354d73]/40 hover:bg-[#F0F6FA]"}`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3 pt-1">
                      <button
                        type="button"
                        onClick={closeLessonModal}
                        className="flex-1 rounded-xl border border-border py-2.5 text-sm font-semibold text-muted-foreground hover:bg-[#F0F6FA]"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        disabled={!rescheduleDate || !rescheduleTime}
                        onClick={() => setLessonActionDone(true)}
                        className="flex-1 rounded-xl bg-[#354d73] py-2.5 text-sm font-semibold text-white hover:bg-[#2a3d5e] disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-5 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                      <Check className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-[#042230]">Lesson {selectedLesson?.date ? "rescheduled" : "scheduled"}!</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {selectedLesson?.tutor} · {selectedLesson?.subject}<br />
                        {rescheduleDate && new Date(rescheduleDate).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })} at {rescheduleTime}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={closeLessonModal}
                      className="w-full rounded-xl bg-[#354d73] py-2.5 text-sm font-semibold text-white hover:bg-[#2a3d5e]"
                    >
                      Done
                    </button>
                  </div>
                )}
              </DialogContent>
            </Dialog>

            {/* ── Re-book lesson modal ─────────────────────────────────────────── */}
            <Dialog open={lessonModalType === "rebook"} onOpenChange={open => { if (!open) closeLessonModal() }}>
              <DialogContent className="max-w-md rounded-2xl">
                <DialogHeader>
                  <DialogTitle className="text-[#042230]">
                    {lessonActionDone ? "Lesson Booked!" : "Book Again"}
                  </DialogTitle>
                </DialogHeader>
                {!lessonActionDone ? (
                  <div className="space-y-5">
                    <div className="rounded-xl border border-border bg-[#F0F6FA] p-3">
                      <p className="text-sm font-semibold text-[#042230]">{selectedLesson?.tutor}</p>
                      <p className="text-xs text-muted-foreground">{selectedLesson?.subject}{selectedLesson?.date ? ` · last lesson ${selectedLesson.date}` : ""}</p>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-semibold text-[#042230]">Pick a date</p>
                      <Input
                        type="date"
                        value={rescheduleDate}
                        onChange={e => setRescheduleDate(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full rounded-xl border-border"
                      />
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-semibold text-[#042230]">Pick a time</p>
                      <div className="grid grid-cols-4 gap-2">
                        {LESSON_TIME_SLOTS.map(slot => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setRescheduleTime(slot)}
                            className={`rounded-lg border py-1.5 text-xs font-medium transition-colors ${rescheduleTime === slot ? "border-[#354d73] bg-[#354d73] text-white" : "border-border text-muted-foreground hover:border-[#354d73]/40 hover:bg-[#F0F6FA]"}`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3 pt-1">
                      <button
                        type="button"
                        onClick={closeLessonModal}
                        className="flex-1 rounded-xl border border-border py-2.5 text-sm font-semibold text-muted-foreground hover:bg-[#F0F6FA]"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        disabled={!rescheduleDate || !rescheduleTime}
                        onClick={() => setLessonActionDone(true)}
                        className="flex-1 rounded-xl bg-[#354d73] py-2.5 text-sm font-semibold text-white hover:bg-[#2a3d5e] disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        Book lesson
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-5 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                      <Check className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-[#042230]">Lesson booked!</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {selectedLesson?.tutor} · {selectedLesson?.subject}<br />
                        {rescheduleDate && new Date(rescheduleDate).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })} at {rescheduleTime}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={closeLessonModal}
                      className="w-full rounded-xl bg-[#354d73] py-2.5 text-sm font-semibold text-white hover:bg-[#2a3d5e]"
                    >
                      Done
                    </button>
                  </div>
                )}
              </DialogContent>
            </Dialog>

            {/* ── Unschedule lesson modal ──────────────────────────────────────── */}
            <Dialog open={lessonModalType === "unschedule"} onOpenChange={open => { if (!open) closeLessonModal() }}>
              <DialogContent className="max-w-md rounded-2xl">
                <DialogHeader>
                  <DialogTitle className="text-[#042230]">
                    {lessonActionDone ? "Lesson Unscheduled" : "Unschedule Lesson"}
                  </DialogTitle>
                </DialogHeader>
                {!lessonActionDone ? (
                  <div className="space-y-5">
                    <div className="flex items-start gap-3 rounded-xl bg-amber-50 p-4">
                      <CalendarClock className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                      <div>
                        <p className="text-sm font-semibold text-amber-700">Remove this lesson from your schedule?</p>
                        <p className="mt-0.5 text-xs text-amber-600">
                          {selectedLesson?.tutor} — {selectedLesson?.subject}
                          {selectedLesson?.date ? ` · ${selectedLesson.date}` : ""}
                          {selectedLesson?.time ? ` at ${selectedLesson.time}` : ""}
                        </p>
                        <p className="mt-1 text-xs text-amber-600">The lesson will be moved to your unscheduled lessons and can be rescheduled at any time.</p>
                      </div>
                    </div>
                    <div className="flex gap-3 pt-1">
                      <button
                        type="button"
                        onClick={closeLessonModal}
                        className="flex-1 rounded-xl border border-border py-2.5 text-sm font-semibold text-muted-foreground hover:bg-[#F0F6FA]"
                      >
                        Keep lesson
                      </button>
                      <button
                        type="button"
                        onClick={handleUnschedule}
                        className="flex-1 rounded-xl bg-amber-500 py-2.5 text-sm font-semibold text-white hover:bg-amber-600"
                      >
                        Unschedule
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-5 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                      <Check className="h-8 w-8 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-[#042230]">Lesson unscheduled</p>
                      <p className="mt-1 text-sm text-muted-foreground">The lesson has been moved to your unscheduled lessons. You can schedule it again whenever you&apos;re ready.</p>
                    </div>
                    <button
                      type="button"
                      onClick={closeLessonModal}
                      className="w-full rounded-xl bg-[#354d73] py-2.5 text-sm font-semibold text-white hover:bg-[#2a3d5e]"
                    >
                      Done
                    </button>
                  </div>
                )}
              </DialogContent>
            </Dialog>

            {/* ── Leave Review modal ───────────────────────────────────────────── */}
            <Dialog open={lessonModalType === "review"} onOpenChange={open => { if (!open) closeLessonModal() }}>
              <DialogContent className="max-w-md rounded-2xl">
                <DialogHeader>
                  <DialogTitle className="text-[#042230]">
                    {lessonActionDone ? "Review Submitted!" : "Leave a Review"}
                  </DialogTitle>
                </DialogHeader>
                {!lessonActionDone ? (
                  <div className="space-y-5">
                    <div className="rounded-xl border border-border bg-[#F0F6FA] p-3">
                      <p className="text-sm font-semibold text-[#042230]">{selectedLesson?.tutor}</p>
                      <p className="text-xs text-muted-foreground">{selectedLesson?.subject}{selectedLesson?.date ? ` · ${selectedLesson.date}` : ""}</p>
                    </div>
                    <div>
                      <p className="mb-3 text-sm font-semibold text-[#042230]">Your rating</p>
                      <div className="flex items-center gap-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setReviewRating(i + 1)}
                            className="focus:outline-none"
                            aria-label={`Rate ${i + 1} star${i + 1 !== 1 ? "s" : ""}`}
                          >
                            <Star className={`h-8 w-8 transition-colors ${i < reviewRating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted hover:fill-amber-200 hover:text-amber-200"}`} />
                          </button>
                        ))}
                        {reviewRating > 0 && (
                          <span className="ml-1 text-sm font-semibold text-[#042230]">{reviewRating}/5</span>
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-semibold text-[#042230]">Comments <span className="font-normal text-muted-foreground">(optional)</span></p>
                      <textarea
                        value={reviewText}
                        onChange={e => setReviewText(e.target.value)}
                        placeholder="Share your experience with this tutor..."
                        rows={3}
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-[#042230] placeholder:text-muted-foreground focus:border-[#354d73] focus:outline-none focus:ring-1 focus:ring-[#354d73] resize-none"
                      />
                    </div>
                    <div className="flex gap-3 pt-1">
                      <button
                        type="button"
                        onClick={closeLessonModal}
                        className="flex-1 rounded-xl border border-border py-2.5 text-sm font-semibold text-muted-foreground hover:bg-[#F0F6FA]"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        disabled={reviewRating === 0}
                        onClick={handleReviewSubmit}
                        className="flex-1 rounded-xl bg-[#354d73] py-2.5 text-sm font-semibold text-white hover:bg-[#2a3d5e] disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        Submit Review
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-5 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                      <Check className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-[#042230]">Thank you for your review!</p>
                      <p className="mt-1 text-sm text-muted-foreground">Your feedback helps other students find great tutors.</p>
                    </div>
                    <button
                      type="button"
                      onClick={closeLessonModal}
                      className="w-full rounded-xl bg-[#354d73] py-2.5 text-sm font-semibold text-white hover:bg-[#2a3d5e]"
                    >
                      Done
                    </button>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        )}
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
                const filtered = FAQ_DATA.filter(item =>
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
                    <p className="mt-1 text-xs text-muted-foreground">Try different keywords or ask the AI assistant below.</p>
                  </div>
                )
              })()}
            </div>

            {/* AI Chat Assistant */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#354d73]">AI Support Assistant</h2>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#354d73]/10 px-2 py-0.5 text-xs font-semibold text-[#354d73]">
                  <Sparkles className="h-3 w-3" />
                  AI-powered
                </span>
              </div>
              <div className="overflow-hidden rounded-2xl border border-[#354d73]/20 bg-white shadow-sm">
                {/* Chat header */}
                <div className="flex items-center gap-3 bg-gradient-to-r from-[#354d73] to-[#2a3d5e] px-5 py-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-white text-sm">Ask AI anything</p>
                    <p className="text-xs text-white/70 truncate">Answers based on our FAQ &amp; help docs</p>
                  </div>
                  <div className="ml-auto flex shrink-0 items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-white/70">Online</span>
                  </div>
                </div>

                {/* Messages area */}
                <div className="h-72 overflow-y-auto bg-[#F8FAFC] p-4 space-y-3">
                  {faqChatMessages.map((msg, i) => (
                    <div key={i} className={`flex items-end gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                      {msg.role === "bot" && (
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#354d73]">
                          <Bot className="h-3.5 w-3.5 text-white" />
                        </div>
                      )}
                      <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "rounded-br-sm bg-[#354d73] text-white"
                          : "rounded-bl-sm border border-[#354d73]/15 bg-white text-[#042230] shadow-sm"
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {faqChatTyping && (
                    <div className="flex items-end gap-2">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#354d73]">
                        <Bot className="h-3.5 w-3.5 text-white" />
                      </div>
                      <div className="rounded-2xl rounded-bl-sm border border-[#354d73]/15 bg-white px-4 py-3 shadow-sm">
                        <div className="flex gap-1">
                          <span className="h-2 w-2 rounded-full bg-[#354d73]/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                          <span className="h-2 w-2 rounded-full bg-[#354d73]/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="h-2 w-2 rounded-full bg-[#354d73]/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={faqChatEndRef} />
                </div>

                {/* Suggested questions (only shown at the start) */}
                {faqChatMessages.length === 1 && !faqChatTyping && (
                  <div className="border-t border-[#354d73]/10 bg-white px-4 py-3">
                    <p className="mb-2 text-xs text-muted-foreground">Try asking:</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "How do I book a trial lesson?",
                        "Can I cancel a lesson?",
                        "How does payment work?",
                        "How do I find a tutor?",
                      ].map(q => (
                        <button
                          key={q}
                          type="button"
                          onClick={() => submitFaqChat(q)}
                          className="rounded-full border border-[#354d73]/25 bg-[#F0F6FA] px-3 py-1 text-xs text-[#354d73] transition-colors hover:bg-[#354d73]/10"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <form onSubmit={handleFaqChatSubmit} className="flex items-center gap-2 border-t border-[#354d73]/15 bg-white px-4 py-3">
                  <input
                    type="text"
                    value={faqChatInput}
                    onChange={e => setFaqChatInput(e.target.value)}
                    placeholder="Ask a question about AI-MLP…"
                    disabled={faqChatTyping}
                    className="flex-1 rounded-xl border border-[#354d73]/20 bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#042230] outline-none placeholder:text-muted-foreground focus:border-[#354d73] focus:ring-2 focus:ring-[#354d73]/20 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={!faqChatInput.trim() || faqChatTyping}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#354d73] text-white transition-colors hover:bg-[#2a3d5e] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>
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

      {/* ── Modals ──────────────────────────────────────────────────────── */}
      <BookTrialModal
        open={bookTrialTutor !== null}
        onOpenChange={(v) => { if (!v) setBookTrialTutor(null) }}
        tutor={bookTrialTutor}
      />
    </div>
  )
}

export default function StudentDashboard() {
  return (
    <React.Suspense fallback={null}>
      <StudentDashboardInner />
    </React.Suspense>
  )
}
