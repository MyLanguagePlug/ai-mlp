"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  ChevronLeft,
  Camera,
  Globe,
  MapPin,
  BookOpen,
  Star,
  Users,
  Clock,
  Save,
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

// ── Stat card ────────────────────────────────────────────────────────────────

function StatCard({ icon: Icon, value, label }: { icon: React.ElementType; value: string | number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-xl border border-border bg-white p-4 text-center shadow-sm">
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
  const [form, setForm]           = useState(INITIAL)
  const [saved, setSaved]         = useState(false)
  const [languages, setLanguages] = useState(INITIAL.languages)
  const [specialties, setSpecialties] = useState(INITIAL.specialties)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSaved(false)
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSave = () => {
    // In production this would call an API
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

        {/* Header card */}
        <div className="mb-6 rounded-2xl border border-border bg-white p-6 shadow-sm">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#354d73] text-3xl font-bold text-white shadow-md">
                {form.firstName[0]}
              </div>
              <button
                type="button"
                className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-white border border-border shadow-sm hover:bg-[#F0F6FA] transition-colors"
                aria-label="Change photo"
              >
                <Camera className="h-3.5 w-3.5 text-[#354d73]" />
              </button>
            </div>

            {/* Name & stats */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-xl font-bold text-[#042230]">
                {form.firstName} {form.lastName}
              </h1>
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
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <StatCard icon={Star}  value={form.avgRating} label="Avg rating" />
            <StatCard icon={Users} value={form.totalStudents} label="Students" />
            <StatCard icon={Clock} value={form.totalLessons} label="Lessons" />
          </div>
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
                <label className="text-xs font-medium text-[#042230]">Tagline <span className="text-muted-foreground font-normal">(shown under your name)</span></label>
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
