"use client"

import React, { useState, useRef } from "react"
import Link from "next/link"
import {
  ChevronLeft,
  Camera,
  Video,
  Globe,
  MapPin,
  BookOpen,
  Star,
  Users,
  Clock,
  Save,
  Sparkles,
  Upload,
  Play,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// ── Demo data ────────────────────────────────────────────────────────────────

const INITIAL = {
  firstName:    "Brazil",
  lastName:     "James",
  displayName:  "Brazil J.",
  email:        "brazil.james@email.com",
  phone:        "+1 (555) 234-5678",
  city:         "Miami, FL",
  country:      "United States",
  timezone:     "EST (UTC-5)",
  tagline:      "Passionate language educator with 8+ years of experience",
  bio:
    "I'm a dedicated language tutor specialising in English and Portuguese. My lessons are designed around your goals — whether that's conversational fluency, business communication, or exam preparation. I use a communicative approach that keeps things engaging and practical from day one.",
  languages:    ["English", "Portuguese", "Spanish"],
  specialties:  ["Business English", "IELTS Prep", "Conversation Practice", "Grammar"],
  education:    "M.A. Applied Linguistics — University of Miami",
  experience:   "8 years",
  totalStudents: 214,
  avgRating:    4.9,
  totalLessons: 1380,
}

const LANGUAGE_OPTIONS = [
  "English","Portuguese","Spanish","French","German","Italian",
  "Japanese","Mandarin","Arabic","Korean",
]

const SPECIALTY_OPTIONS = [
  "Business English","IELTS Prep","TOEFL Prep","Conversation Practice",
  "Grammar","Pronunciation","Kids & Teens","Academic Writing","Interview English",
]

const FUN_PROMPTS = [
  "What's your most memorable lesson?",
  "What inspired you to become a tutor?",
  "Share a fun fact about the language you teach!",
  "What's your teaching superpower?",
]

// ── Stat card ────────────────────────────────────────────────────────────────

function StatCard({ icon: Icon, value, label, color }: { icon: React.ElementType; value: string | number; label: string; color?: string }) {
  return (
    <div className={`flex flex-col items-center gap-1 rounded-xl border p-4 text-center shadow-sm ${color ?? "border-border bg-white"}`}>
      <Icon className="h-5 w-5 text-[#354d73]" />
      <p className="text-xl font-bold text-[#042230]">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  )
}

// ── Tag toggle ───────────────────────────────────────────────────────────────

function TagToggle({
  options,
  selected,
  onChange,
}: {
  options: string[]
  selected: string[]
  onChange: (val: string[]) => void
}) {
  const toggle = (opt: string) =>
    onChange(selected.includes(opt) ? selected.filter(s => s !== opt) : [...selected, opt])

  return (
    <div className="flex flex-wrap gap-2">
      {options.map(opt => (
        <button
          key={opt}
          type="button"
          onClick={() => toggle(opt)}
          className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
            selected.includes(opt)
              ? "border-[#354d73] bg-[#354d73] text-white"
              : "border-border bg-white text-muted-foreground hover:border-[#354d73] hover:text-[#354d73]"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function TutorProfilePage() {
  const [form, setForm]               = useState(INITIAL)
  const [saved, setSaved]             = useState(false)
  const [languages, setLanguages]     = useState(INITIAL.languages)
  const [specialties, setSpecialties] = useState(INITIAL.specialties)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [videoPreview, setVideoPreview] = useState<string | null>(null)
  const [videoName, setVideoName]       = useState<string | null>(null)
  const [funPrompt, setFunPrompt]       = useState(0)

  const photoInputRef = useRef<HTMLInputElement>(null)
  const videoInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSaved(false)
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (photoPreview) URL.revokeObjectURL(photoPreview)
      const url = URL.createObjectURL(file)
      setPhotoPreview(url)
    }
  }

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (videoPreview) URL.revokeObjectURL(videoPreview)
      const url = URL.createObjectURL(file)
      setVideoPreview(url)
      setVideoName(file.name)
    }
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="min-h-[calc(100vh-7rem)] bg-[#F7F9FB]">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Back */}
        <Link
          href="/tutor"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-[#354d73]"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>

        {/* Fun hero banner */}
        <div className="mb-6 rounded-2xl bg-gradient-to-br from-[#354d73] to-[#5A8DA5] p-6 text-white shadow-md">
          <div className="flex items-start gap-3">
            <Sparkles className="mt-0.5 h-6 w-6 shrink-0 text-yellow-300" />
            <div>
              <h1 className="text-lg font-bold">Your profile is your stage! 🌟</h1>
              <p className="mt-1 text-sm text-white/80">
                Students choose tutors based on personality as much as credentials.
                Upload a photo, add a short intro video, and let your authentic self shine through!
              </p>
            </div>
          </div>
        </div>

        {/* Header card */}
        <div className="mb-6 rounded-2xl border border-border bg-white p-6 shadow-sm">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
            {/* Avatar with photo upload */}
            <div className="relative shrink-0">
              {photoPreview ? (
                <img
                  src={photoPreview}
                  alt="Profile"
                  className="h-24 w-24 rounded-full object-cover shadow-md"
                />
              ) : (
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#354d73] to-[#5A8DA5] text-3xl font-bold text-white shadow-md">
                  {form.firstName[0]}
                </div>
              )}
              <button
                type="button"
                onClick={() => photoInputRef.current?.click()}
                className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-[#354d73] shadow-sm hover:bg-[#F0F6FA] transition-colors"
                aria-label="Change photo"
              >
                <Camera className="h-3.5 w-3.5 text-[#354d73]" />
              </button>
              <input
                ref={photoInputRef}
                type="file"
                accept="image/jpeg,image/png,image/gif,image/webp"                className="hidden"
                onChange={handlePhotoChange}
              />
            </div>

            {/* Name & stats */}
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-xl font-bold text-[#042230]">
                {form.firstName} {form.lastName}
              </h2>
              <p className="mt-0.5 text-sm text-muted-foreground">{form.tagline}</p>
              <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
                <Badge variant="secondary" className="gap-1 text-xs">
                  <Globe className="h-3 w-3" />
                  {languages[0]}
                </Badge>
                <Badge variant="secondary" className="gap-1 text-xs">
                  <MapPin className="h-3 w-3" />
                  {form.city}
                </Badge>
              </div>
              <p className="mt-3 text-xs text-[#354d73] font-medium">
                ✏️ Click the camera icon to upload your profile photo
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <StatCard icon={Star}  value={form.avgRating}     label="Avg rating" />
            <StatCard icon={Users} value={form.totalStudents} label="Students" />
            <StatCard icon={Clock} value={form.totalLessons}  label="Lessons" />
          </div>
        </div>

        {/* ── Intro video upload ──────────────────────────────── */}
        <div className="mb-6 rounded-2xl border border-border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <Video className="h-5 w-5 text-[#354d73]" />
            <h2 className="text-base font-semibold text-[#042230]">Intro Video</h2>
            <Badge variant="secondary" className="ml-auto text-emerald-700 bg-emerald-50 text-xs">Highly recommended ✨</Badge>
          </div>
          <p className="text-xs text-muted-foreground mb-4">
            A 30 seconds to a minute intro video dramatically increases your chances of getting booked.
            Say hello, share your teaching style, and let students know what to expect!
          </p>

          {videoPreview ? (
            <div className="relative rounded-xl overflow-hidden border border-border bg-black">
              <video
                src={videoPreview}
                controls
                className="w-full max-h-64 object-contain"
              />
              <button
                type="button"
                onClick={() => { setVideoPreview(null); setVideoName(null) }}
                className="absolute top-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                aria-label="Remove video"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => videoInputRef.current?.click()}
              className="flex w-full flex-col items-center gap-3 rounded-xl border-2 border-dashed border-[#354d73]/30 bg-[#F0F6FA] px-6 py-8 transition-colors hover:border-[#354d73]/60 hover:bg-[#E8F2FA]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#354d73]/10">
                <Play className="h-7 w-7 text-[#354d73]" />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-[#354d73]">Upload your intro video</p>
                <p className="mt-0.5 text-xs text-muted-foreground">MP4, MOV or WebM — max 100 MB · 30 seconds to a minute recommended</p>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-[#354d73] px-4 py-1.5 text-xs font-semibold text-white">
                <Upload className="h-3.5 w-3.5" />
                Choose video
              </div>
            </button>
          )}
          {videoName && (
            <p className="mt-2 text-xs text-muted-foreground">📹 {videoName}</p>
          )}
          <input
            ref={videoInputRef}
            type="file"
            accept="video/mp4,video/quicktime,video/webm"
            className="hidden"
            onChange={handleVideoChange}
          />
        </div>

        {/* ── Fun prompt / character section ─────────────────── */}
        <div className="mb-6 rounded-2xl border border-[#354d73]/20 bg-gradient-to-br from-[#F0F6FA] to-white p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-4 w-4 text-yellow-500" />
            <h2 className="text-base font-semibold text-[#042230]">Add some personality! 🎉</h2>
          </div>
          <p className="text-xs text-muted-foreground mb-4">
            Students love tutors who feel like real people. Answer a fun prompt to stand out:
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {FUN_PROMPTS.map((p, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setFunPrompt(i)}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                  funPrompt === i
                    ? "border-[#354d73] bg-[#354d73] text-white"
                    : "border-border bg-white text-muted-foreground hover:border-[#354d73]"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          <textarea
            rows={3}
            placeholder={`${FUN_PROMPTS[funPrompt]}…`}
            className="w-full rounded-xl border border-input bg-white px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#354d73] resize-none"
          />
        </div>

        {/* ── Form ─────────────────────────────────────────────── */}
        <div className="space-y-6">

          {/* Personal information */}
          <section className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-base font-semibold text-[#042230]">Personal Information</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#042230]">First name</label>
                <Input name="firstName" value={form.firstName} onChange={handleChange} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#042230]">Last name</label>
                <Input name="lastName" value={form.lastName} onChange={handleChange} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#042230]">Display name</label>
                <Input name="displayName" value={form.displayName} onChange={handleChange} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#042230]">Email</label>
                <Input name="email" type="email" value={form.email} onChange={handleChange} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#042230]">Phone</label>
                <Input name="phone" value={form.phone} onChange={handleChange} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#042230]">City / Location</label>
                <Input name="city" value={form.city} onChange={handleChange} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#042230]">Country</label>
                <Input name="country" value={form.country} onChange={handleChange} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#042230]">Timezone</label>
                <Input name="timezone" value={form.timezone} onChange={handleChange} />
              </div>
            </div>
          </section>

          {/* Profile bio */}
          <section className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-base font-semibold text-[#042230]">Public Profile</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#042230]">
                  Tagline <span className="text-muted-foreground font-normal">(shown under your name)</span>
                </label>
                <Input name="tagline" value={form.tagline} onChange={handleChange} maxLength={100} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#042230]">Bio</label>
                <textarea
                  name="bio"
                  rows={5}
                  value={form.bio}
                  onChange={handleChange}
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                />
              </div>
            </div>
          </section>

          {/* Teaching profile */}
          <section className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-base font-semibold text-[#042230]">Teaching Profile</h2>
            <div className="flex flex-col gap-5">
              <div>
                <p className="mb-2 text-xs font-medium text-[#042230]">Languages I teach</p>
                <TagToggle options={LANGUAGE_OPTIONS} selected={languages} onChange={setLanguages} />
              </div>
              <div>
                <p className="mb-2 text-xs font-medium text-[#042230]">Specialties</p>
                <TagToggle options={SPECIALTY_OPTIONS} selected={specialties} onChange={setSpecialties} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#042230]">
                    <BookOpen className="mb-0.5 inline h-3.5 w-3.5 mr-1" />
                    Education
                  </label>
                  <Input name="education" value={form.education} onChange={handleChange} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#042230]">Years of experience</label>
                  <Input name="experience" value={form.experience} onChange={handleChange} />
                </div>
              </div>
            </div>
          </section>

          {/* Save */}
          <div className="flex items-center justify-end gap-3">
            {saved && (
              <p className="text-sm text-emerald-600 font-medium">✓ Changes saved</p>
            )}
            <Button
              onClick={handleSave}
              className="gap-2 bg-[#354d73] hover:bg-[#2a3d5c] text-white"
            >
              <Save className="h-4 w-4" />
              Save profile
            </Button>
          </div>
        </div>

      </div>
    </div>
  )
}
