"use client"

import React, { useState, useEffect, useRef, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import {
  ChevronLeft,
  User,
  BookOpen,
  DollarSign,
  Bell,
  Shield,
  Save,
  Eye,
  EyeOff,
  Check,
  Smartphone,
  Mail,
  CreditCard,
  Trash2,
  AlertTriangle,
  Plus,
  X,
  Wallet,
  TrendingUp,
  ArrowDownToLine,
  Clock,
  Download,
  Camera,
  Video,
  Globe,
  MapPin,
  Star,
  Users,
  Sparkles,
  Upload,
  Play,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

// ── Types ────────────────────────────────────────────────────────────────────

type TabId = "profile" | "teaching" | "pricing" | "wallet" | "notifications" | "account"

interface Tab {
  id: TabId
  label: string
  icon: React.ElementType
}

interface LangEntry {
  language: string
  price: string
}

// ── Constants ────────────────────────────────────────────────────────────────

const TABS: Tab[] = [
  { id: "profile",       label: "Profile Information",  icon: User        },
  { id: "teaching",      label: "Teaching Preferences", icon: BookOpen    },
  { id: "pricing",       label: "Pricing & Rates",      icon: DollarSign  },
  { id: "wallet",        label: "Wallet & Earnings",    icon: Wallet      },
  { id: "notifications", label: "Notifications",         icon: Bell        },
  { id: "account",       label: "Account & security",   icon: Shield      },
]

// ── Save banner ──────────────────────────────────────────────────────────────

function SaveBanner({ onSave, saved }: { onSave: () => void; saved: boolean }) {
  return (
    <div className="flex items-center justify-end gap-3 pt-2 border-t border-border mt-6">
      {saved && <p className="text-sm text-emerald-600 font-medium">✓ Saved successfully</p>}
      <Button onClick={onSave} className="gap-2 bg-[#354d73] hover:bg-[#2a3d5c] text-white">
        <Save className="h-4 w-4" />
        Save changes
      </Button>
    </div>
  )
}

// ── Toggle ───────────────────────────────────────────────────────────────────

function Toggle({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-4">
      <span className="text-sm text-[#042230]">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={onChange}
        className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors ${
          checked ? "bg-[#354d73]" : "bg-gray-200"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-4" : "translate-x-0.5"
          }`}
        />
      </button>
    </label>
  )
}

// ── TagToggle ────────────────────────────────────────────────────────────────

function TagToggle({
  options,
  selected,
  onChange,
}: {
  options: string[]
  selected: string[]
  onChange: (v: string[]) => void
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

// ── Field wrapper ────────────────────────────────────────────────────────────

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-[#042230]">{label}</label>
      <p className="text-xs text-muted-foreground -mt-1 min-h-[1rem]">{hint ?? "\u00A0"}</p>
      {children}
    </div>
  )
}

// ── Multi-entry field ────────────────────────────────────────────────────────

function MultiEntryField({
  label,
  hint,
  values,
  onChange,
  placeholder,
  maxEntries = 5,
}: {
  label: string
  hint?: string
  values: string[]
  onChange: (values: string[]) => void
  placeholder?: string
  maxEntries?: number
}) {
  const addEntry = () => {
    if (values.length < maxEntries) onChange([...values, ""])
  }
  const updateEntry = (i: number, v: string) => {
    const next = [...values]; next[i] = v; onChange(next)
  }
  const removeEntry = (i: number) => onChange(values.filter((_, idx) => idx !== i))

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-[#042230]">{label}</label>
      {hint && <p className="text-xs text-muted-foreground -mt-1">{hint}</p>}
      <div className="flex flex-col gap-2">
        {values.map((val, i) => (
          <div key={i} className="flex items-center gap-2">
            <Input
              value={val}
              onChange={e => updateEntry(i, e.target.value)}
              placeholder={placeholder}
              className="flex-1"
            />
            {values.length > 1 && (
              <button
                type="button"
                onClick={() => removeEntry(i)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground hover:border-red-300 hover:bg-red-50 hover:text-red-500 transition-colors"
                aria-label="Remove entry"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        ))}
        {values.length < maxEntries && (
          <button
            type="button"
            onClick={addEntry}
            className="flex w-fit items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-[#354d73] hover:bg-[#F0F6FA] transition-colors"
          >
            <Plus className="h-3.5 w-3.5" />
            Add {label.toLowerCase()}
          </button>
        )}
      </div>
    </div>
  )
}

// ── TABS ─────────────────────────────────────────────────────────────────────

// ── Profile stat card ─────────────────────────────────────────────────────────

function StatCard({ icon: Icon, value, label }: { icon: React.ElementType; value: string | number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-xl border border-border bg-[#F7F9FB] p-4 text-center shadow-sm">
      <Icon className="h-5 w-5 text-[#354d73]" />
      <p className="text-xl font-bold text-[#042230]">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  )
}

const FUN_PROMPTS = [
  "What's your most memorable lesson?",
  "What inspired you to become a tutor?",
  "Share a fun fact about the language you teach!",
  "What's your teaching superpower?",
]

// 1. Profile Information — inline form (no redirect)
function ProfileTab() {
  const [form, setForm] = useState({
    firstName: "Brazil", lastName: "James", displayName: "Brazil J.",
    email: "brazil.james@email.com", phone: "+1 (555) 234-5678",
    city: "Miami, FL", country: "United States", timezone: "EST (UTC-5)",
    tagline: "Passionate language educator with 8+ years of experience",
    bio: "I'm a dedicated language tutor specialising in English and Portuguese. My lessons are designed around your goals — whether that's conversational fluency, business communication, or exam preparation. I use a communicative approach that keeps things engaging and practical from day one.",
  })
  const [saved, setSaved] = useState(false)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [videoPreview, setVideoPreview] = useState<string | null>(null)
  const [videoName, setVideoName] = useState<string | null>(null)
  const [funPrompt, setFunPrompt] = useState(0)
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
      setPhotoPreview(URL.createObjectURL(file))
    }
  }

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (videoPreview) URL.revokeObjectURL(videoPreview)
      setVideoPreview(URL.createObjectURL(file))
      setVideoName(file.name)
    }
  }

  const FLabel = ({ children }: { children: React.ReactNode }) => (
    <label className="text-xs font-medium text-[#042230]">{children}</label>
  )

  return (
    <div className="space-y-6">
      {/* Avatar + stats */}
      <div className="rounded-xl border border-border bg-[#F7F9FB] p-5">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
          <div className="relative shrink-0">
            {photoPreview ? (
              <img src={photoPreview} alt="Profile" className="h-20 w-20 rounded-full object-cover shadow-md" />
            ) : (
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#354d73] to-[#5A8DA5] text-2xl font-bold text-white shadow-md">
                {form.firstName[0]}
              </div>
            )}
            <button
              type="button"
              onClick={() => photoInputRef.current?.click()}
              className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-white border-2 border-[#354d73] shadow-sm hover:bg-[#F0F6FA] transition-colors"
              aria-label="Change photo"
            >
              <Camera className="h-3 w-3 text-[#354d73]" />
            </button>
            <input ref={photoInputRef} type="file" accept="image/jpeg,image/png,image/gif,image/webp" className="hidden" onChange={handlePhotoChange} />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <p className="text-base font-bold text-[#042230]">{form.firstName} {form.lastName}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{form.tagline}</p>
            <p className="mt-2 text-xs text-[#354d73] font-medium">✏️ Click the camera icon to update your photo</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <StatCard icon={Star}  value={4.9}  label="Avg rating" />
          <StatCard icon={Users} value={214}  label="Students" />
          <StatCard icon={Clock} value={1380} label="Lessons" />
        </div>
      </div>

      {/* Intro video */}
      <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-1">
          <Video className="h-4 w-4 text-[#354d73]" />
          <p className="text-sm font-semibold text-[#042230]">Intro Video</p>
          <span className="ml-auto text-xs font-medium text-emerald-700 bg-emerald-50 rounded-full px-2 py-0.5">Highly recommended ✨</span>
        </div>
        <p className="text-xs text-muted-foreground mb-3">
          A short intro video dramatically increases your booking rate. Say hello and let students know what to expect!
        </p>
        {videoPreview ? (
          <div className="relative rounded-xl overflow-hidden border border-border bg-black">
            <video src={videoPreview} controls className="w-full max-h-52 object-contain" />
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
            className="flex w-full flex-col items-center gap-2 rounded-xl border-2 border-dashed border-[#354d73]/30 bg-[#F0F6FA] px-6 py-6 transition-colors hover:border-[#354d73]/60 hover:bg-[#E8F2FA]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#354d73]/10">
              <Play className="h-6 w-6 text-[#354d73]" />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-[#354d73]">Upload your intro video</p>
              <p className="mt-0.5 text-xs text-muted-foreground">MP4, MOV or WebM — max 100 MB</p>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-[#354d73] px-4 py-1.5 text-xs font-semibold text-white">
              <Upload className="h-3.5 w-3.5" />
              Choose video
            </div>
          </button>
        )}
        {videoName && <p className="mt-2 text-xs text-muted-foreground">📹 {videoName}</p>}
        <input ref={videoInputRef} type="file" accept="video/mp4,video/quicktime,video/webm" className="hidden" onChange={handleVideoChange} />
      </div>

      {/* Fun prompt */}
      <div className="rounded-xl border border-[#354d73]/20 bg-gradient-to-br from-[#F0F6FA] to-white p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-4 w-4 text-yellow-500" />
          <p className="text-sm font-semibold text-[#042230]">Add some personality! 🎉</p>
        </div>
        <p className="text-xs text-muted-foreground mb-3">Answer a fun prompt to stand out:</p>
        <div className="flex flex-wrap gap-2 mb-3">
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
          className="w-full rounded-xl border border-input bg-white px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#354d73] resize-none"
        />
      </div>

      {/* Personal information */}
      <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
        <p className="mb-4 text-sm font-semibold text-[#042230]">Personal Information</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {(["firstName","lastName","displayName","email","phone","city","country","timezone"] as const).map(name => (
            <div key={name} className="flex flex-col gap-1.5">
              <FLabel>
                {name === "firstName" ? "First name"
                  : name === "lastName" ? "Last name"
                  : name === "displayName" ? "Display name"
                  : name === "email" ? "Email"
                  : name === "phone" ? "Phone"
                  : name === "city" ? "City / Location"
                  : name === "country" ? "Country"
                  : "Timezone"}
              </FLabel>
              <input
                name={name}
                type={name === "email" ? "email" : "text"}
                value={form[name]}
                onChange={handleChange}
                className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#354d73]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Public profile */}
      <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
        <p className="mb-4 text-sm font-semibold text-[#042230]">Public Profile</p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <FLabel>Tagline <span className="text-muted-foreground font-normal">(shown under your name)</span></FLabel>
            <input
              name="tagline"
              value={form.tagline}
              onChange={handleChange}
              maxLength={100}
              className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#354d73]"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <FLabel>Bio</FLabel>
            <textarea
              name="bio"
              rows={5}
              value={form.bio}
              onChange={handleChange}
              className="rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#354d73] resize-none"
            />
          </div>
        </div>
      </div>

      <SaveBanner saved={saved} onSave={() => { setSaved(true); setTimeout(() => setSaved(false), 3000) }} />
    </div>
  )
}

// 2. Teaching Preferences
function TeachingTab() {
  const [languages, setLanguages] = useState(["English", "Portuguese", "Spanish"])
  const [specialties, setSpecialties] = useState(["Business English", "IELTS Prep", "Conversation Practice"])
  const [lessonTypes, setLessonTypes] = useState(["Trial", "Regular"])
  const [educations, setEducations] = useState(["M.A. Applied Linguistics — University of Miami"])
  const [certifications, setCertifications] = useState(["CELTA", "TEFL"])
  const [form, setForm] = useState({ experience: "8 years" })
  const [saved, setSaved] = useState(false)

  const update = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSaved(false)
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-xs font-semibold text-[#042230]">Languages I teach</p>
        <TagToggle
          options={["English","Portuguese","Spanish","French","German","Italian","Japanese","Mandarin","Arabic","Korean"]}
          selected={languages}
          onChange={v => { setLanguages(v); setSaved(false) }}
        />
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold text-[#042230]">Specialties</p>
        <TagToggle
          options={["Business English","IELTS Prep","TOEFL Prep","Conversation Practice","Grammar","Pronunciation","Kids & Teens","Academic Writing","Interview English"]}
          selected={specialties}
          onChange={v => { setSpecialties(v); setSaved(false) }}
        />
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold text-[#042230]">Lesson types offered</p>
        <TagToggle
          options={["Trial","Regular","Group"]}
          selected={lessonTypes}
          onChange={v => { setLessonTypes(v); setSaved(false) }}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Years of experience"><Input name="experience" value={form.experience} onChange={update} /></Field>
      </div>

      <MultiEntryField
        label="Education"
        hint="Add each qualification on a separate line"
        values={educations}
        onChange={v => { setEducations(v); setSaved(false) }}
        placeholder="e.g. M.A. Applied Linguistics — University of Miami"
        maxEntries={4}
      />

      <MultiEntryField
        label="Certifications"
        hint="e.g. CELTA, TEFL, DELTA — add each separately"
        values={certifications}
        onChange={v => { setCertifications(v); setSaved(false) }}
        placeholder="e.g. CELTA"
        maxEntries={5}
      />

      <SaveBanner saved={saved} onSave={() => { setSaved(true); setTimeout(() => setSaved(false), 3000) }} />
    </div>
  )
}

// 3. Pricing and Rates
function PricingTab() {
  const ALL_LANG_OPTIONS = ["English", "Portuguese", "Spanish", "French", "German", "Italian", "Japanese", "Mandarin", "Arabic", "Korean"]

  const [form, setForm] = useState({ trial: "15", regular: "40", currency: "USD", minNotice: "24", maxAdvance: "30" })
  const [saved, setSaved] = useState(false)
  // Language-based pricing: one entry per language taught, pre-populated from teaching languages
  const [langEntries, setLangEntries] = useState<LangEntry[]>([
    { language: "English",    price: "40" },
    { language: "Portuguese", price: "35" },
    { language: "Spanish",    price: "38" },
  ])

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSaved(false)
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  }

  const updateLangEntry = (i: number, key: keyof LangEntry, val: string) => {
    setSaved(false)
    setLangEntries(prev => prev.map((e, idx) => idx === i ? { ...e, [key]: val } : e))
  }

  const removeLangEntry = (i: number) => {
    setSaved(false)
    setLangEntries(prev => prev.filter((_, idx) => idx !== i))
  }

  const addLangEntry = () => {
    setSaved(false)
    const used = new Set(langEntries.map(e => e.language))
    const next = ALL_LANG_OPTIONS.find(l => !used.has(l))
    if (next) setLangEntries(prev => [...prev, { language: next, price: "" }])
  }

  const rate = (label: string, name: keyof typeof form, hint: string) => (
    <div className="flex items-center justify-between rounded-xl border border-border bg-[#F7F9FB] px-4 py-4">
      <div>
        <p className="text-sm font-semibold text-[#042230]">{label}</p>
        <p className="text-xs text-muted-foreground">{hint}</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-muted-foreground">$</span>
        <input
          name={name}
          value={form[name]}
          onChange={update}
          type="number"
          min="1"
          className="w-20 rounded-md border border-input bg-white px-3 py-1.5 text-sm text-right font-semibold text-[#042230] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#354d73]"
        />
        <span className="text-xs text-muted-foreground">/ hr</span>
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
        ⚠️ Rate changes take effect for new bookings only. Existing sessions are unaffected.
      </div>

      <div className="space-y-3">
        <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-800">
          ℹ️ <span className="font-semibold">Trial lesson pricing:</span> We recommend setting your trial lesson price at roughly <span className="font-semibold">50% of your regular lesson rate</span>. All trial lessons are capped at <span className="font-semibold">20 minutes</span>.
        </div>
        {rate("Trial lesson",   "trial",   "First lesson with a new student")}
        {rate("Regular lesson", "regular", "Standard 1-hour session")}
      </div>

      {/* Language-based pricing */}
      <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
        <p className="mb-1 text-sm font-semibold text-[#042230]">Price by language taught</p>
        <p className="mb-4 text-xs text-muted-foreground">Set a different hourly rate for each language you teach.</p>
        <div className="mb-2 flex items-center gap-3 px-0.5">
          <p className="flex-1 text-xs font-medium text-[#042230]">Language</p>
          <p className="w-40 text-xs font-medium text-[#042230]">Price per hour ($)</p>
          <div className="w-9" />
        </div>
        <div className="flex flex-col gap-2">
          {langEntries.map((entry, i) => {
            const used = new Set(langEntries.map(e => e.language))
            const options = ALL_LANG_OPTIONS.filter(l => l === entry.language || !used.has(l))
            return (
              <div key={i} className="flex items-center gap-3">
                <select
                  value={entry.language}
                  onChange={e => updateLangEntry(i, "language", e.target.value)}
                  className="flex-1 h-9 rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {options.map(l => <option key={l}>{l}</option>)}
                </select>
                <div className="flex w-40 items-center gap-1.5">
                  <span className="text-sm font-medium text-muted-foreground">$</span>
                  <input
                    type="number"
                    min="1"
                    value={entry.price}
                    onChange={e => updateLangEntry(i, "price", e.target.value)}
                    placeholder="0"
                    className="w-full rounded-md border border-input bg-background px-3 py-1.5 text-sm font-semibold text-[#042230] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#354d73]"
                  />
                  <span className="text-xs text-muted-foreground">/ hr</span>
                </div>
                {langEntries.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeLangEntry(i)}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground hover:border-red-300 hover:bg-red-50 hover:text-red-500 transition-colors"
                    aria-label="Remove language"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            )
          })}
        </div>
        {langEntries.length < ALL_LANG_OPTIONS.length && (
          <button
            type="button"
            onClick={addLangEntry}
            className="mt-3 flex w-fit items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-[#354d73] hover:bg-[#F0F6FA] transition-colors"
          >
            <Plus className="h-3.5 w-3.5" />
            Add language
          </button>
        )}
      </div>

      {/* Booking window */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Currency">
          <select
            name="currency"
            value={form.currency}
            onChange={update}
            className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {["USD","EUR","GBP","CAD","AUD"].map(c => <option key={c}>{c}</option>)}
          </select>
        </Field>
        <Field label="Min notice" hint="Hours before booking">
          <Input name="minNotice" type="number" value={form.minNotice} onChange={update} />
        </Field>
        <Field label="Max advance" hint="Days ahead for booking">
          <Input name="maxAdvance" type="number" value={form.maxAdvance} onChange={update} />
        </Field>
      </div>

      {/* Payout section */}
      <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-[#042230]">Payout method</p>
            <p className="text-xs text-muted-foreground mt-0.5">Earnings are transferred every Friday</p>
          </div>
          <Button variant="outline" size="sm" className="gap-1.5">
            <CreditCard className="h-3.5 w-3.5" />
            Manage
          </Button>
        </div>
        <div className="mt-3 flex items-center gap-3 rounded-lg border border-border bg-[#F7F9FB] px-4 py-3">
          <CreditCard className="h-4 w-4 text-[#354d73]" />
          <div>
            <p className="text-xs font-medium text-[#042230]">PayPal — brazil.james@email.com</p>
            <p className="text-[11px] text-muted-foreground">Connected · Last payout $320</p>
          </div>
          <Badge variant="secondary" className="ml-auto text-emerald-700 bg-emerald-50">Active</Badge>
        </div>
      </div>

      <SaveBanner saved={saved} onSave={() => { setSaved(true); setTimeout(() => setSaved(false), 3000) }} />
    </div>
  )
}

// 4. Wallet & Earnings
type EarningTransaction = {
  id: string
  date: string
  student: string
  language: string
  lessonType: "Trial" | "Regular" | "Group"
  duration: string
  gross: number
  fee: number
  net: number
  status: "paid" | "pending" | "held"
}

type Payout = {
  id: string
  date: string
  amount: number
  method: string
  status: "completed" | "processing" | "failed"
  ref: string
}

const DEMO_EARNINGS: EarningTransaction[] = [
  { id: "e1",  date: "2026-04-18", student: "James Liu",        language: "English",    lessonType: "Regular", duration: "60 min", gross: 40, fee: 8,  net: 32, status: "paid"    },
  { id: "e2",  date: "2026-04-17", student: "Sofia Rodrigues",  language: "Portuguese", lessonType: "Trial",   duration: "30 min", gross: 20, fee: 4,  net: 16, status: "paid"    },
  { id: "e3",  date: "2026-04-15", student: "Emma Johnson",     language: "English",    lessonType: "Regular", duration: "60 min", gross: 40, fee: 8,  net: 32, status: "paid"    },
  { id: "e4",  date: "2026-04-12", student: "Luca Ferrari",     language: "Spanish",    lessonType: "Regular", duration: "60 min", gross: 38, fee: 7.60, net: 30.40, status: "paid" },
  { id: "e5",  date: "2026-04-10", student: "Priya Nair",       language: "English",    lessonType: "Regular", duration: "60 min", gross: 40, fee: 8,  net: 32, status: "paid"    },
  { id: "e6",  date: "2026-04-08", student: "Carlos Mendez",    language: "Spanish",    lessonType: "Trial",   duration: "30 min", gross: 20, fee: 4,  net: 16, status: "paid"    },
  { id: "e7",  date: "2026-04-05", student: "Yuna Park",        language: "English",    lessonType: "Regular", duration: "90 min", gross: 60, fee: 12, net: 48, status: "paid"    },
  { id: "e8",  date: "2026-04-03", student: "Marco Bianchi",    language: "Portuguese", lessonType: "Regular", duration: "60 min", gross: 35, fee: 7,  net: 28, status: "paid"    },
  { id: "e9",  date: "2026-04-01", student: "Ana Ferreira",     language: "English",    lessonType: "Regular", duration: "60 min", gross: 40, fee: 8,  net: 32, status: "paid"    },
  { id: "e10", date: "2026-03-28", student: "David Chen",       language: "English",    lessonType: "Regular", duration: "60 min", gross: 40, fee: 8,  net: 32, status: "paid"    },
  { id: "e11", date: "2026-03-25", student: "Isabella Costa",   language: "Spanish",    lessonType: "Regular", duration: "60 min", gross: 38, fee: 7.60, net: 30.40, status: "paid" },
  { id: "e12", date: "2026-03-21", student: "Thomas Weber",     language: "Portuguese", lessonType: "Trial",   duration: "30 min", gross: 20, fee: 4,  net: 16, status: "paid"    },
  { id: "e13", date: "2026-04-19", student: "Ria Sharma",       language: "English",    lessonType: "Regular", duration: "60 min", gross: 40, fee: 8,  net: 32, status: "pending" },
  { id: "e14", date: "2026-04-20", student: "Omar Hassan",      language: "English",    lessonType: "Regular", duration: "60 min", gross: 40, fee: 8,  net: 32, status: "pending" },
]

const DEMO_PAYOUTS: Payout[] = [
  { id: "p1",  date: "2026-04-18", amount: 192.40, method: "PayPal", status: "completed",  ref: "PP-4821-WXYZ" },
  { id: "p2",  date: "2026-04-11", amount: 158.00, method: "PayPal", status: "completed",  ref: "PP-4720-ABCD" },
  { id: "p3",  date: "2026-04-04", amount: 188.00, method: "PayPal", status: "completed",  ref: "PP-4614-EFGH" },
  { id: "p4",  date: "2026-03-28", amount: 128.80, method: "PayPal", status: "completed",  ref: "PP-4510-IJKL" },
  { id: "p5",  date: "2026-03-21", amount: 176.40, method: "PayPal", status: "completed",  ref: "PP-4410-MNOP" },
  { id: "p6",  date: "2026-03-14", amount: 144.00, method: "PayPal", status: "completed",  ref: "PP-4311-QRST" },
  { id: "p7",  date: "2026-03-07", amount: 160.00, method: "PayPal", status: "completed",  ref: "PP-4207-UVWX" },
  { id: "p8",  date: "2026-02-28", amount: 136.00, method: "PayPal", status: "completed",  ref: "PP-4103-YZA1" },
  { id: "p9",  date: "2026-02-21", amount: 112.00, method: "PayPal", status: "completed",  ref: "PP-3998-B2C3" },
  { id: "p10", date: "2026-02-14", amount: 152.80, method: "PayPal", status: "completed",  ref: "PP-3892-D4E5" },
  { id: "p11", date: "2026-02-07", amount: 96.00,  method: "PayPal", status: "completed",  ref: "PP-3789-F6G7" },
  { id: "p12", date: "2026-01-31", amount: 184.00, method: "PayPal", status: "completed",  ref: "PP-3682-H8I9" },
]

function WalletTab() {
  const [earningsPage, setEarningsPage] = useState(0)
  const [payoutsPage, setPayoutsPage] = useState(0)
  const [showPayoutEditor, setShowPayoutEditor] = useState(false)
  const [payoutMethod, setPayoutMethod] = useState<"paypal" | "bank" | "wise" | "stripe">("paypal")
  const [payoutEmail, setPayoutEmail] = useState("brazil.james@email.com")
  const [payoutSaved, setPayoutSaved] = useState(false)
  const PAGE_SIZE = 5
  const PAYOUT_PAGE_SIZE = 5

  const totalEarned   = DEMO_EARNINGS.filter(e => e.status === "paid").reduce((s, e) => s + e.net, 0)
  const pendingAmount = DEMO_EARNINGS.filter(e => e.status === "pending").reduce((s, e) => s + e.net, 0)
  const thisMonth     = DEMO_EARNINGS.filter(e => e.status === "paid" && e.date.startsWith("2026-04")).reduce((s, e) => s + e.net, 0)
  const lastPayout    = DEMO_PAYOUTS[0]?.amount ?? 0

  const totalPages        = Math.ceil(DEMO_EARNINGS.length / PAGE_SIZE)
  const pageEarnings      = DEMO_EARNINGS.slice(earningsPage * PAGE_SIZE, (earningsPage + 1) * PAGE_SIZE)
  const totalPayoutPages  = Math.ceil(DEMO_PAYOUTS.length / PAYOUT_PAGE_SIZE)
  const pagePayouts       = DEMO_PAYOUTS.slice(payoutsPage * PAYOUT_PAGE_SIZE, (payoutsPage + 1) * PAYOUT_PAGE_SIZE)

  const PAYOUT_METHOD_OPTIONS = [
    { id: "paypal",  label: "PayPal",         desc: "Transfer to your PayPal account",        icon: "💳" },
    { id: "bank",    label: "Bank Transfer",   desc: "Direct deposit to your bank account",    icon: "🏦" },
    { id: "wise",    label: "Wise",            desc: "Multi-currency transfer via Wise",        icon: "🌍" },
    { id: "stripe",  label: "Stripe",          desc: "Transfer via Stripe Connect",             icon: "⚡" },
  ] as const

  const currentMethod = PAYOUT_METHOD_OPTIONS.find(m => m.id === payoutMethod) ?? PAYOUT_METHOD_OPTIONS[0]

  function handleSavePayoutMethod() {
    setPayoutSaved(true)
    setShowPayoutEditor(false)
    setTimeout(() => setPayoutSaved(false), 3000)
  }

  const statusBadge = (status: EarningTransaction["status"]) => {
    const map: Record<EarningTransaction["status"], { label: string; cls: string }> = {
      paid:    { label: "Paid",    cls: "bg-emerald-50 text-emerald-700" },
      pending: { label: "Pending", cls: "bg-amber-50 text-amber-700"    },
      held:    { label: "Held",    cls: "bg-rose-50 text-rose-700"      },
    }
    const { label, cls } = map[status]
    return <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${cls}`}>{label}</span>
  }

  const payoutStatusBadge = (status: Payout["status"]) => {
    const map: Record<Payout["status"], { label: string; cls: string }> = {
      completed:  { label: "Completed",  cls: "bg-emerald-50 text-emerald-700" },
      processing: { label: "Processing", cls: "bg-blue-50 text-blue-700"       },
      failed:     { label: "Failed",     cls: "bg-rose-50 text-rose-700"       },
    }
    const { label, cls } = map[status]
    return <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${cls}`}>{label}</span>
  }

  return (
    <div className="space-y-6">

      {/* Summary cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: TrendingUp,        label: "Total Earned",    value: `$${totalEarned.toFixed(2)}`,   sub: "All time (after fees)",    color: "text-emerald-600", bg: "bg-emerald-50" },
          { icon: DollarSign,        label: "This Month",      value: `$${thisMonth.toFixed(2)}`,     sub: "April 2026",               color: "text-[#354d73]",   bg: "bg-[#354d73]/10" },
          { icon: Clock,             label: "Pending",         value: `$${pendingAmount.toFixed(2)}`, sub: "Awaiting completion",      color: "text-amber-600",   bg: "bg-amber-50" },
          { icon: ArrowDownToLine,   label: "Last Payout",     value: `$${lastPayout.toFixed(2)}`,    sub: "Fri 18 Apr 2026",          color: "text-[#354d73]",   bg: "bg-[#354d73]/10" },
        ].map(({ icon: Icon, label, value, sub, color, bg }) => (
          <div key={label} className="rounded-xl border border-border bg-white p-5 shadow-sm">
            <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg ${bg}`}>
              <Icon className={`h-4 w-4 ${color}`} />
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
            <p className={`mt-1 text-2xl font-bold ${color}`}>{value}</p>
            <p className="mt-0.5 text-[11px] text-muted-foreground">{sub}</p>
          </div>
        ))}
      </div>

      {/* Platform fee note */}
      <div className="rounded-xl border border-[#354d73]/20 bg-[#354d73]/5 px-4 py-3 text-sm text-[#354d73]">
        <strong>Platform fee:</strong> 20% is deducted from each lesson. As you complete more lessons your fee decreases as part of our loyalty programme.
      </div>

      {/* Payout method */}
      <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-semibold text-[#042230]">Payout method</p>
          <button
            type="button"
            onClick={() => setShowPayoutEditor(v => !v)}
            className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-[#354d73] hover:bg-[#F0F6FA] transition-colors"
          >
            <CreditCard className="h-3.5 w-3.5" />
            {showPayoutEditor ? "Cancel" : "Change method"}
          </button>
        </div>

        {/* Current method display */}
        <button
          type="button"
          onClick={() => setShowPayoutEditor(v => !v)}
          className="w-full text-left flex items-center gap-3 rounded-lg border border-border bg-[#F7F9FB] px-4 py-3 hover:border-[#354d73] hover:bg-[#F0F6FA] transition-colors"
        >
          <CreditCard className="h-4 w-4 text-[#354d73] shrink-0" />
          <div className="flex-1">
            <p className="text-xs font-medium text-[#042230]">{currentMethod.label} — {payoutEmail}</p>
            <p className="text-[11px] text-muted-foreground">Connected · Payouts every Friday</p>
          </div>
          <Badge variant="secondary" className="text-emerald-700 bg-emerald-50 shrink-0">Active</Badge>
        </button>

        {payoutSaved && (
          <div className="mt-3 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-700">
            <Check className="h-3.5 w-3.5 shrink-0" />
            Payout method updated successfully.
          </div>
        )}

        {/* Payout method editor */}
        {showPayoutEditor && (
          <div className="mt-4 rounded-xl border border-[#354d73]/20 bg-[#F7F9FB] p-4 space-y-4">
            <p className="text-xs font-semibold text-[#042230]">Choose a payout method</p>

            <div className="grid gap-2 sm:grid-cols-2">
              {PAYOUT_METHOD_OPTIONS.map(opt => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setPayoutMethod(opt.id)}
                  className={`flex items-start gap-3 rounded-lg border p-3 text-left transition-colors ${
                    payoutMethod === opt.id
                      ? "border-[#354d73] bg-[#354d73]/5"
                      : "border-border bg-white hover:border-[#354d73]/50"
                  }`}
                >
                  <span className="text-lg leading-none">{opt.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-[#042230]">{opt.label}</p>
                    <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">{opt.desc}</p>
                  </div>
                  {payoutMethod === opt.id && (
                    <Check className="h-3.5 w-3.5 text-[#354d73] shrink-0 mt-0.5" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#042230]">
                {payoutMethod === "bank" ? "Account / IBAN" : payoutMethod === "wise" ? "Wise email or account" : "Email address"}
              </label>
              <Input
                value={payoutEmail}
                onChange={e => setPayoutEmail(e.target.value)}
                placeholder={payoutMethod === "bank" ? "IBAN or account number" : "email@example.com"}
                className="text-sm"
              />
            </div>

            <div className="flex items-center gap-3 pt-1">
              <Button
                type="button"
                onClick={handleSavePayoutMethod}
                className="gap-1.5 bg-[#354d73] hover:bg-[#2a3d5c] text-white text-xs"
                size="sm"
              >
                <Save className="h-3.5 w-3.5" />
                Save payout method
              </Button>
              <button
                type="button"
                onClick={() => setShowPayoutEditor(false)}
                className="text-xs text-muted-foreground hover:text-[#042230] transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Payout history */}
      <div className="rounded-xl border border-border bg-white shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <p className="text-sm font-semibold text-[#042230]">Payout History</p>
          <button
            type="button"
            className="flex items-center gap-1.5 text-xs text-[#354d73] hover:underline"
          >
            <Download className="h-3.5 w-3.5" />
            Export CSV
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F7F9FB] border-b border-border">
                <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Date</th>
                <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Amount</th>
                <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Method</th>
                <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Reference</th>
                <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {pagePayouts.map(p => (
                <tr key={p.id} className="hover:bg-[#F7F9FB] transition-colors">
                  <td className="px-5 py-3.5 text-xs text-[#042230] font-medium">{new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</td>
                  <td className="px-5 py-3.5 text-sm font-bold text-[#042230]">${p.amount.toFixed(2)}</td>
                  <td className="px-5 py-3.5 text-xs text-muted-foreground">{p.method}</td>
                  <td className="px-5 py-3.5 text-xs font-mono text-muted-foreground">{p.ref}</td>
                  <td className="px-5 py-3.5">{payoutStatusBadge(p.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Payout history pagination */}
        {totalPayoutPages > 1 && (
          <div className="flex items-center justify-between border-t border-border px-5 py-3">
            <p className="text-xs text-muted-foreground">
              Showing {payoutsPage * PAYOUT_PAGE_SIZE + 1}–{Math.min((payoutsPage + 1) * PAYOUT_PAGE_SIZE, DEMO_PAYOUTS.length)} of {DEMO_PAYOUTS.length}
            </p>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                disabled={payoutsPage === 0}
                onClick={() => setPayoutsPage(p => p - 1)}
                className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-[#354d73] hover:text-[#354d73] disabled:cursor-not-allowed disabled:opacity-40"
              >
                ‹
              </button>
              {Array.from({ length: totalPayoutPages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPayoutsPage(i)}
                  className={`flex h-7 w-7 items-center justify-center rounded-md border text-xs font-medium transition-colors ${
                    payoutsPage === i
                      ? "border-[#354d73] bg-[#354d73] text-white"
                      : "border-border text-muted-foreground hover:border-[#354d73] hover:text-[#354d73]"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                type="button"
                disabled={payoutsPage === totalPayoutPages - 1}
                onClick={() => setPayoutsPage(p => p + 1)}
                className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-[#354d73] hover:text-[#354d73] disabled:cursor-not-allowed disabled:opacity-40"
              >
                ›
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Lesson earnings breakdown */}
      <div className="rounded-xl border border-border bg-white shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <p className="text-sm font-semibold text-[#042230]">Lesson Earnings</p>
          <span className="text-[11px] text-muted-foreground">{DEMO_EARNINGS.length} lessons</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F7F9FB] border-b border-border">
                <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Date</th>
                <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Student</th>
                <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Language</th>
                <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Type</th>
                <th className="px-5 py-3 text-right text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Gross</th>
                <th className="px-5 py-3 text-right text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Fee</th>
                <th className="px-5 py-3 text-right text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Net</th>
                <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {pageEarnings.map(e => (
                <tr key={e.id} className="hover:bg-[#F7F9FB] transition-colors">
                  <td className="px-5 py-3.5 text-xs text-[#042230] font-medium whitespace-nowrap">{new Date(e.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</td>
                  <td className="px-5 py-3.5 text-xs text-[#042230]">{e.student}</td>
                  <td className="px-5 py-3.5 text-xs text-muted-foreground">{e.language}</td>
                  <td className="px-5 py-3.5">
                    <span className="rounded-full border border-border px-2 py-0.5 text-[11px] font-medium text-muted-foreground">{e.lessonType}</span>
                  </td>
                  <td className="px-5 py-3.5 text-xs text-right text-[#042230]">${e.gross.toFixed(2)}</td>
                  <td className="px-5 py-3.5 text-xs text-right text-rose-500">−${e.fee.toFixed(2)}</td>
                  <td className="px-5 py-3.5 text-xs text-right font-bold text-[#042230]">${e.net.toFixed(2)}</td>
                  <td className="px-5 py-3.5">{statusBadge(e.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between border-t border-border px-5 py-3">
            <p className="text-xs text-muted-foreground">
              Showing {earningsPage * PAGE_SIZE + 1}–{Math.min((earningsPage + 1) * PAGE_SIZE, DEMO_EARNINGS.length)} of {DEMO_EARNINGS.length}
            </p>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                disabled={earningsPage === 0}
                onClick={() => setEarningsPage(p => p - 1)}
                className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-[#354d73] hover:text-[#354d73] disabled:cursor-not-allowed disabled:opacity-40"
              >
                ‹
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setEarningsPage(i)}
                  className={`flex h-7 w-7 items-center justify-center rounded-md border text-xs font-medium transition-colors ${
                    earningsPage === i
                      ? "border-[#354d73] bg-[#354d73] text-white"
                      : "border-border text-muted-foreground hover:border-[#354d73] hover:text-[#354d73]"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                type="button"
                disabled={earningsPage === totalPages - 1}
                onClick={() => setEarningsPage(p => p + 1)}
                className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-[#354d73] hover:text-[#354d73] disabled:cursor-not-allowed disabled:opacity-40"
              >
                ›
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// 5. Notifications
function NotificationsTab() {
  const [email, setEmail] = useState({ bookings: true,  messages: true,  reviews: true,  reminders: true,  marketing: false })
  const [push,  setPush]  = useState({ bookings: true,  messages: true,  reviews: false, reminders: true,  marketing: false })
  const [sms,   setSms]   = useState({ bookings: false, messages: false, reminders: true })
  const [saved, setSaved] = useState(false)

  const toggle = <K extends string>(
    setter: React.Dispatch<React.SetStateAction<Record<K, boolean>>>,
    key: K
  ) => {
    setSaved(false)
    setter(p => ({ ...p, [key]: !p[key] }))
  }

  const Section = ({ icon: Icon, title, items }: { icon: React.ElementType; title: string; items: React.ReactNode }) => (
    <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <Icon className="h-4 w-4 text-[#354d73]" />
        <p className="text-sm font-semibold text-[#042230]">{title}</p>
      </div>
      <div className="space-y-3">{items}</div>
    </div>
  )

  return (
    <div className="space-y-5">
      <Section icon={Mail} title="Email notifications" items={<>
        <Toggle checked={email.bookings}   onChange={() => toggle(setEmail as any, "bookings")}   label="New booking requests" />
        <Toggle checked={email.messages}   onChange={() => toggle(setEmail as any, "messages")}   label="New messages from students" />
        <Toggle checked={email.reviews}    onChange={() => toggle(setEmail as any, "reviews")}    label="New reviews & ratings" />
        <Toggle checked={email.reminders}  onChange={() => toggle(setEmail as any, "reminders")}  label="Lesson reminders (24 h before)" />
        <Toggle checked={email.marketing}  onChange={() => toggle(setEmail as any, "marketing")}  label="Tips, updates & promotions" />
      </>} />

      <Section icon={Smartphone} title="Push notifications" items={<>
        <Toggle checked={push.bookings}   onChange={() => toggle(setPush as any, "bookings")}   label="New booking requests" />
        <Toggle checked={push.messages}   onChange={() => toggle(setPush as any, "messages")}   label="New messages from students" />
        <Toggle checked={push.reviews}    onChange={() => toggle(setPush as any, "reviews")}    label="New reviews & ratings" />
        <Toggle checked={push.reminders}  onChange={() => toggle(setPush as any, "reminders")}  label="Lesson reminders" />
        <Toggle checked={push.marketing}  onChange={() => toggle(setPush as any, "marketing")}  label="Tips, updates & promotions" />
      </>} />

      <Section icon={Smartphone} title="SMS notifications" items={<>
        <Toggle checked={sms.bookings}   onChange={() => toggle(setSms as any, "bookings")}   label="New booking requests" />
        <Toggle checked={sms.messages}   onChange={() => toggle(setSms as any, "messages")}   label="New messages from students" />
        <Toggle checked={sms.reminders}  onChange={() => toggle(setSms as any, "reminders")}  label="Lesson reminders" />
      </>} />

      <SaveBanner saved={saved} onSave={() => { setSaved(true); setTimeout(() => setSaved(false), 3000) }} />
    </div>
  )
}

// 6. Account and Security
function AccountTab() {
  const [showOld, setShowOld] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [showConf, setShowConf] = useState(false)
  const [passwords, setPasswords] = useState({ old: "", newPw: "", confirm: "" })
  const [twoFA, setTwoFA] = useState(false)
  const [saved, setSaved] = useState(false)
  const [deleteInput, setDeleteInput] = useState("")
  const [accountActive, setAccountActive] = useState(true)

  const update = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPasswords(p => ({ ...p, [e.target.name]: e.target.value }))

  const PwField = ({
    name, label, show, onToggle,
  }: { name: string; label: string; show: boolean; onToggle: () => void }) => (
    <Field label={label}>
      <div className="relative">
        <Input
          name={name}
          type={show ? "text" : "password"}
          value={(passwords as any)[name === "newPw" ? "newPw" : name]}
          onChange={update}
          className="pr-10"
        />
        <button
          type="button"
          onClick={onToggle}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-[#354d73]"
        >
          {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
    </Field>
  )

  const match = passwords.newPw === passwords.confirm && passwords.confirm.length > 0

  return (
    <div className="space-y-6">
      {/* Change password */}
      <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
        <p className="mb-4 text-sm font-semibold text-[#042230]">Change password</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <PwField name="old" label="Current password" show={showOld} onToggle={() => setShowOld(v => !v)} />
          </div>
          <PwField name="newPw"   label="New password"     show={showNew}  onToggle={() => setShowNew(v => !v)} />
          <PwField name="confirm" label="Confirm password" show={showConf} onToggle={() => setShowConf(v => !v)} />
        </div>
        {passwords.confirm.length > 0 && (
          <p className={`mt-2 text-xs font-medium ${match ? "text-emerald-600" : "text-rose-600"}`}>
            {match ? "✓ Passwords match" : "✗ Passwords do not match"}
          </p>
        )}
        <div className="mt-4 flex items-center justify-end gap-3">
          {saved && <p className="text-sm text-emerald-600 font-medium">✓ Password updated</p>}
          <Button
            onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 3000) }}
            disabled={!match || !passwords.old}
            className="gap-2 bg-[#354d73] hover:bg-[#2a3d5c] text-white"
          >
            <Save className="h-4 w-4" />
            Update password
          </Button>
        </div>
      </div>

      {/* Two-factor */}
      <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-[#042230]">Two-factor authentication</p>
            <p className="mt-0.5 text-xs text-muted-foreground">Add an extra layer of security to your account</p>
          </div>
          <Toggle checked={twoFA} onChange={() => setTwoFA(v => !v)} label="" />
        </div>
        {twoFA && (
          <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs text-emerald-800 flex items-center gap-2">
            <Check className="h-4 w-4 shrink-0" />
            Two-factor authentication is enabled. You'll be asked for a code when signing in from a new device.
          </div>
        )}
      </div>

      {/* Connected accounts */}
      <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
        <p className="mb-4 text-sm font-semibold text-[#042230]">Connected accounts</p>
        {[
          { name: "Google",   connected: true  },
          { name: "Facebook", connected: false },
          { name: "Apple",    connected: false },
        ].map(acc => (
          <div key={acc.name} className="flex items-center justify-between py-2.5 border-b border-border last:border-0">
            <p className="text-sm text-[#042230]">{acc.name}</p>
            {acc.connected ? (
              <Badge variant="secondary" className="text-emerald-700 bg-emerald-50">Connected</Badge>
            ) : (
              <Button variant="outline" size="sm">Connect</Button>
            )}
          </div>
        ))}
      </div>

      {/* Account Status */}
      <div className="rounded-xl border border-orange-200 bg-orange-50 p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-orange-800">Account Status</p>
            <p className="text-xs text-orange-700 mt-1">
              {accountActive
                ? "Your account is active and visible to students."
                : "Your account is inactive and hidden from students."}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className={`text-xs font-medium ${accountActive ? "text-orange-400" : "text-orange-700"}`}>
              Inactive
            </span>
            <Switch
              checked={accountActive}
              onCheckedChange={setAccountActive}
              className="data-[state=checked]:bg-orange-500"
            />
            <span className={`text-xs font-medium ${accountActive ? "text-orange-700" : "text-orange-400"}`}>
              Active
            </span>
          </div>
        </div>
      </div>

      {/* WARNING zone */}
      <div className="rounded-xl border border-rose-200 bg-rose-50 p-5">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="h-4 w-4 text-rose-600" />
          <p className="text-sm font-semibold text-rose-700">⚠️ WARNING</p>
        </div>
        <p className="text-xs text-rose-600 mb-4">
          Deleting your account is permanent. All your data, lessons, and earnings history will be erased.
          Type <strong>DELETE</strong> to confirm.
        </p>
        <div className="flex items-center gap-3">
          <Input
            value={deleteInput}
            onChange={e => setDeleteInput(e.target.value)}
            placeholder='Type "DELETE"'
            className="max-w-[180px] border-rose-300 focus-visible:ring-rose-400"
          />
          <Button
            variant="destructive"
            disabled={deleteInput !== "DELETE"}
            className="gap-1.5"
          >
            <Trash2 className="h-4 w-4" />
            Delete account
          </Button>
        </div>
      </div>
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

const TAB_CONTENT: Record<TabId, React.ReactNode> = {
  profile:       <ProfileTab />,
  teaching:      <TeachingTab />,
  pricing:       <PricingTab />,
  wallet:        <WalletTab />,
  notifications: <NotificationsTab />,
  account:       <AccountTab />,
}

function TutorSettingsPageInner() {
  const searchParams = useSearchParams()
  const [active, setActive] = useState<TabId>("teaching")

  useEffect(() => {
    const tab = searchParams.get("tab") as TabId | null
    if (tab && TABS.some(t => t.id === tab)) setActive(tab)
  }, [searchParams])

  return (
    <div className="min-h-[calc(100vh-7rem)] bg-[#F7F9FB]">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Back */}
        <Link
          href="/tutor"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-[#354d73]"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>

        <h1 className="mb-6 text-2xl font-bold text-[#042230]">Settings</h1>

        <div className="flex flex-col gap-6 md:flex-row">
          {/* Sidebar tabs */}
          <nav className="shrink-0 md:w-60">
            <div className="rounded-xl border border-border bg-white overflow-hidden shadow-sm">
              {TABS.map((tab, i) => {
                const isActive = active === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActive(tab.id)}
                    className={`flex w-full items-center gap-3 px-5 py-3.5 text-sm font-medium transition-colors text-left ${
                      i < TABS.length - 1 ? "border-b border-border" : ""
                    } ${
                      isActive
                        ? "bg-[#354d73]/10 text-[#354d73]"
                        : "text-muted-foreground hover:bg-[#F0F6FA] hover:text-[#042230]"
                    }`}
                  >
                    <tab.icon className={`h-4 w-4 shrink-0 ${isActive ? "text-[#354d73]" : ""}`} />
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </nav>

          {/* Content */}
          <div className="flex-1 min-w-0 rounded-xl border border-border bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-base font-bold text-[#042230] border-b border-border pb-4">
              {TABS.find(t => t.id === active)?.label}
            </h2>
            {TAB_CONTENT[active]}
          </div>
        </div>

      </div>
    </div>
  )
}

export default function TutorSettingsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F7F9FB]" />}>
      <TutorSettingsPageInner />
    </Suspense>
  )
}
