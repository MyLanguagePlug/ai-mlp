"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import {
  ArrowLeft,
  Star,
  Globe,
  Clock,
  CheckCircle2,
  MessageCircle,
  BookOpen,
  Award,
  Users,
  ThumbsUp,
  Play,
  Share2,
  Check,
  MapPin,
  DollarSign,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BookTrialModal } from "@/components/book-trial-modal"

// ── Demo tutor data (mirrors the student dashboard) ───────────────────────────

const TUTOR_DB: Record<string, {
  id: string
  name: string
  image: string
  country: string
  languages: string[]
  specialties: string[]
  rating: number
  reviews: number
  hourlyRate: number
  lessonsCompleted: number
  isVerified?: boolean
  isNativeSpeaker?: boolean
  bio: string
  offersTrialLesson?: boolean
  videoThumb?: string
  languagePricing: { lang: string; pricePerHour: number; trialPrice?: number }[]
}> = {
  "1": {
    id: "1",
    name: "Maria Santos",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop",
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
    videoThumb: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=1280&h=720&fit=crop",
    bio: "Hi! I'm Maria, a passionate Spanish teacher with 8+ years of experience. I hold a DELE examiner certification and have worked with students from beginners to advanced. My lessons are tailored to your goals — whether you want to ace an exam, travel with confidence, or thrive in a Spanish-speaking workplace. I'm known for creating a relaxed, motivating atmosphere where mistakes are welcomed as part of learning. 🌟",
    languagePricing: [
      { lang: "Spanish", pricePerHour: 25, trialPrice: 10 },
      { lang: "English", pricePerHour: 22, trialPrice: 10 },
    ],
  },
  "2": {
    id: "2",
    name: "Jean-Pierre Dubois",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop",
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
    videoThumb: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1280&h=720&fit=crop",
    bio: "Bonjour! Let's make French fun and practical. I specialise in conversational French and business language. With a background in corporate communications and 10+ years of teaching, I'll help you navigate everyday conversations as well as boardroom negotiations. Structured yet flexible lessons tailored to your schedule and goals.",
    languagePricing: [
      { lang: "French",  pricePerHour: 30, trialPrice: 15 },
      { lang: "English", pricePerHour: 28, trialPrice: 15 },
      { lang: "Spanish", pricePerHour: 26, trialPrice: 15 },
    ],
  },
  "3": {
    id: "3",
    name: "Yuki Tanaka",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=800&fit=crop",
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
    videoThumb: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1280&h=720&fit=crop",
    bio: "I teach all levels from absolute beginners to advanced. My lessons focus on natural conversation, reading, writing and cultural nuances. JLPT N1 holder with 6 years of teaching experience in Tokyo and online. Whether you're heading to Japan for travel or business, I'll make sure you feel confident.",
    languagePricing: [
      { lang: "Japanese", pricePerHour: 35, trialPrice: 15 },
      { lang: "English",  pricePerHour: 30, trialPrice: 15 },
    ],
  },
  "4": {
    id: "4",
    name: "Hans Mueller",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop",
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
    videoThumb: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1280&h=720&fit=crop",
    bio: "I help students achieve fluency through structured lessons and real-world German practice. My expertise spans A1 to C2 with particular strength in academic and TestDaF preparation. I believe in using authentic materials — news, films and literature — to make your German truly stick.",
    languagePricing: [
      { lang: "German",  pricePerHour: 28, trialPrice: 12 },
      { lang: "English", pricePerHour: 25, trialPrice: 12 },
    ],
  },
  "5": {
    id: "5",
    name: "Ana Silva",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop",
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
    videoThumb: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=1280&h=720&fit=crop",
    bio: "As a bilingual tutor I offer Portuguese and Spanish lessons. Fun, engaging and results-driven! I focus on practical conversation from day one so you can use the language in real situations immediately. Perfect for travel, expats, or anyone who just fell in love with Brazilian culture.",
    languagePricing: [
      { lang: "Portuguese", pricePerHour: 22, trialPrice: 10 },
      { lang: "Spanish",    pricePerHour: 20, trialPrice: 10 },
      { lang: "English",    pricePerHour: 18, trialPrice: 10 },
    ],
  },
  "6": {
    id: "6",
    name: "Wei Zhang",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=800&fit=crop",
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
    videoThumb: "https://images.unsplash.com/photo-1543269664-7eef42226a21?w=1280&h=720&fit=crop",
    bio: "I make Mandarin accessible and enjoyable. From tones to characters — I've got you covered. HSK examiner experience, specialising in business Chinese and formal correspondence. I use immersive techniques that have helped 1,000+ students confidently speak Mandarin.",
    languagePricing: [
      { lang: "Mandarin", pricePerHour: 32, trialPrice: 15 },
      { lang: "English",  pricePerHour: 28, trialPrice: 15 },
    ],
  },
}

const DEMO_REVIEWS = [
  {
    name: "Sophie L.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop",
    rating: 5,
    date: "2 weeks ago",
    text: "Amazing tutor! My Spanish improved so much in just a few sessions. Very patient and explains things clearly.",
  },
  {
    name: "James K.",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=60&h=60&fit=crop",
    rating: 5,
    date: "1 month ago",
    text: "Highly professional and engaging. I always look forward to our sessions!",
  },
  {
    name: "Priya M.",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=60&h=60&fit=crop",
    rating: 4,
    date: "2 months ago",
    text: "Great teacher. Really knows how to keep lessons interesting and relevant.",
  },
  {
    name: "Carlos B.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop",
    rating: 5,
    date: "3 months ago",
    text: "I went from zero to conversational in 3 months. Highly recommended!",
  },
]

const DEMO_CERTIFICATIONS = [
  "Certified Language Instructor",
  "DELE Examiner",
  "8+ Years Teaching Experience",
]

// ── Sub-components ────────────────────────────────────────────────────────────

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-border bg-muted/30 p-3 text-center">
      <div className="text-[#042230] mb-1">{icon}</div>
      <p className="text-base font-bold text-[#042230]">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function TutorProfilePage() {
  const params = useParams()
  const id = Array.isArray(params.id) ? params.id[0] : params.id
  const tutor = TUTOR_DB[id ?? ""]

  const [videoPlaying, setVideoPlaying] = useState(false)
  const [copied, setCopied] = useState(false)
  const [bookModalOpen, setBookModalOpen] = useState(false)

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
      })
    }
  }

  if (!tutor) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-lg text-muted-foreground">Tutor not found.</p>
        <Button asChild variant="outline">
          <Link href="/tutors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to tutors
          </Link>
        </Button>
      </div>
    )
  }

  const responseRate = 98
  const avgResponseTime = "< 1 hour"

  return (
    <div className="min-h-screen bg-[#f7f9fb]">
      {/* ── Hero banner ────────────────────────────────────────────────────── */}
      <div className="relative h-52 w-full bg-gradient-to-br from-[#042230] to-[#0a4a6e]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.4)_0%,transparent_60%)]" />
        {/* Back link */}
        <div className="absolute top-4 left-4">
          <Button variant="ghost" size="sm" asChild className="text-white/80 hover:text-white hover:bg-white/10">
            <Link href="/tutors">
              <ArrowLeft className="mr-1.5 h-4 w-4" />
              All tutors
            </Link>
          </Button>
        </div>
        {/* Share button */}
        <div className="absolute top-4 right-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleShare}
            className="text-white/80 hover:text-white hover:bg-white/10 gap-1.5"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Share2 className="h-4 w-4" />
                Share
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-16">
        {/* ── Avatar + core info ──────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between -mt-16 mb-6 gap-4">
          {/* Avatar */}
          <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border-4 border-white shadow-lg">
            <Image src={tutor.image} alt={tutor.name} fill className="object-cover" />
            {tutor.isVerified && (
              <div className="absolute bottom-1 right-1 rounded-full bg-white p-0.5 shadow">
                <CheckCircle2 className="h-4 w-4 text-[#042230]" />
              </div>
            )}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-2 sm:pb-1">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="gap-1.5"
            >
              <Link href="/student?tab=messages">
                <MessageCircle className="h-4 w-4" />
                Message
              </Link>
            </Button>
            <Button
              size="sm"
              className="bg-[#042230] hover:bg-[#042230]/90 px-5"
              onClick={() => setBookModalOpen(true)}
            >
              Book a Lesson
            </Button>
          </div>
        </div>

        {/* Name + meta */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h1 className="text-3xl font-bold text-[#042230]">{tutor.name}</h1>
            {tutor.isNativeSpeaker && (
              <Badge variant="secondary" className="text-xs">Native Speaker</Badge>
            )}
            {tutor.offersTrialLesson && (
              <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 text-xs">
                Trial Available
              </Badge>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {tutor.country}
            </span>
            <span className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <strong className="text-foreground">{tutor.rating.toFixed(1)}</strong>
              <span>({tutor.reviews} reviews)</span>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {tutor.lessonsCompleted.toLocaleString()} lessons
            </span>
          </div>
          {/* Language badges */}
          <div className="mt-3 flex flex-wrap gap-2">
            {tutor.languages.map((lang) => (
              <Badge key={lang} variant="outline" className="text-sm px-3 py-1">
                <Globe className="h-3.5 w-3.5 mr-1" />
                {lang}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ── Left / main column ─────────────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Video section */}
            <section className="rounded-2xl border border-border bg-white shadow-sm overflow-hidden">
              <div className="px-5 pt-5 pb-3">
                <h2 className="text-lg font-semibold text-[#042230]">Introduction Video</h2>
                <p className="text-sm text-muted-foreground">Watch {tutor.name}'s intro to get a feel for their teaching style.</p>
              </div>
              <div className="relative aspect-video w-full bg-[#042230]">
                {tutor.videoThumb && !videoPlaying && (
                  <>
                    <Image
                      src={tutor.videoThumb}
                      alt={`${tutor.name} video thumbnail`}
                      fill
                      className="object-cover opacity-70"
                    />
                    <button
                      onClick={() => setVideoPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center group"
                      aria-label="Play introduction video"
                    >
                      <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                        <Play className="h-7 w-7 text-[#042230] translate-x-0.5" />
                      </div>
                    </button>
                  </>
                )}
                {videoPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#042230]">
                    <p className="text-white/60 text-sm">Video player coming soon</p>
                  </div>
                )}
                {!tutor.videoThumb && !videoPlaying && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <Play className="h-10 w-10 text-white/30" />
                    <p className="text-white/40 text-sm">No video uploaded yet</p>
                  </div>
                )}
              </div>
            </section>

            {/* About */}
            <section className="rounded-2xl border border-border bg-white shadow-sm p-5">
              <h2 className="text-lg font-semibold text-[#042230] mb-3">About</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{tutor.bio}</p>
            </section>

            {/* Specialties */}
            <section className="rounded-2xl border border-border bg-white shadow-sm p-5">
              <h2 className="text-lg font-semibold text-[#042230] mb-3">Specialties</h2>
              <div className="flex flex-wrap gap-2">
                {tutor.specialties.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-[#e8f1f5] px-4 py-1.5 text-sm font-medium text-[#042230]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </section>

            {/* Stats */}
            <section className="rounded-2xl border border-border bg-white shadow-sm p-5">
              <h2 className="text-lg font-semibold text-[#042230] mb-4">Stats</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <StatCard icon={<BookOpen className="h-4 w-4" />} value={tutor.lessonsCompleted.toLocaleString()} label="Lessons" />
                <StatCard icon={<ThumbsUp className="h-4 w-4" />} value={`${responseRate}%`} label="Response Rate" />
                <StatCard icon={<Clock className="h-4 w-4" />} value={avgResponseTime} label="Avg. Response" />
                <StatCard icon={<Users className="h-4 w-4" />} value={tutor.reviews.toLocaleString()} label="Reviews" />
              </div>
            </section>

            {/* Credentials */}
            <section className="rounded-2xl border border-border bg-white shadow-sm p-5">
              <h2 className="text-lg font-semibold text-[#042230] mb-3">Credentials</h2>
              <ul className="space-y-2">
                {DEMO_CERTIFICATIONS.map((cert) => (
                  <li key={cert} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4 text-[#042230] shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </section>

            {/* Reviews */}
            <section className="rounded-2xl border border-border bg-white shadow-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-[#042230]">Student Reviews</h2>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-[#042230]">{tutor.rating.toFixed(1)}</span>
                  <span className="text-sm text-muted-foreground">({tutor.reviews})</span>
                </div>
              </div>
              <div className="space-y-5">
                {DEMO_REVIEWS.map((review) => (
                  <div key={review.name} className="flex gap-3">
                    <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
                      <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-[#042230]">{review.name}</p>
                        <p className="text-xs text-muted-foreground">{review.date}</p>
                      </div>
                      <div className="flex mt-0.5 mb-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">{review.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* ── Right / sidebar column ─────────────────────────────────────── */}
          <div className="space-y-5">

            {/* Pricing card */}
            <section className="rounded-2xl border border-border bg-white shadow-sm p-5 sticky top-4">
              <h2 className="text-lg font-semibold text-[#042230] mb-4 flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Lesson Pricing
              </h2>
              <div className="space-y-3">
                {tutor.languagePricing.map(({ lang, pricePerHour, trialPrice }) => (
                  <div key={lang} className="rounded-xl border border-border p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-[#042230] text-sm">{lang}</span>
                      <span className="text-lg font-bold text-[#042230]">${pricePerHour}<span className="text-xs font-normal text-muted-foreground">/hr</span></span>
                    </div>
                    {trialPrice !== undefined && (
                      <p className="text-xs text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Trial lesson from ${trialPrice}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <Button
                  className="w-full bg-[#042230] hover:bg-[#042230]/90"
                  onClick={() => setBookModalOpen(true)}
                >
                  Book a Lesson
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/student?tab=messages">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Send Message
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full text-muted-foreground"
                  onClick={handleShare}
                >
                  {copied ? (
                    <>
                      <Check className="mr-2 h-4 w-4 text-emerald-500" />
                      Link copied!
                    </>
                  ) : (
                    <>
                      <Share2 className="mr-2 h-4 w-4" />
                      Share this tutor
                    </>
                  )}
                </Button>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* Book trial modal */}
      <BookTrialModal
        open={bookModalOpen}
        onOpenChange={setBookModalOpen}
        tutor={tutor}
      />
    </div>
  )
}
