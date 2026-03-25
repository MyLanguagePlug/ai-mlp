"use client"

import { useState } from "react"
import {
  Search,
  X,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { TutorCard } from "@/components/tutor-card"

// ── Constants ────────────────────────────────────────────────────────────────

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
  { value: "italy",   label: "Italy" },
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
    lessonsCompleted: 1250,
    isVerified: true,
    isNativeSpeaker: true,
    offersTrialLesson: true,
    bio: "Professional Spanish teacher with 10+ years of experience. I specialise in conversational Spanish and business communication. My lessons are interactive and tailored to your goals.",
  },
  {
    id: "2",
    name: "Jean-Pierre Dubois",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    country: "France",
    languages: ["French", "English", "Spanish"],
    specialties: ["Conversational", "Grammar", "Pronunciation"],
    rating: 4.8,
    reviews: 189,
    hourlyRate: 30,
    lessonsCompleted: 980,
    isVerified: true,
    isNativeSpeaker: true,
    offersTrialLesson: false,
    bio: "Native French tutor from Paris. I focus on helping students achieve natural pronunciation and confident speaking skills. Learn French the way locals speak it!",
  },
  {
    id: "3",
    name: "Yuki Tanaka",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    country: "Japan",
    languages: ["Japanese", "English"],
    specialties: ["JLPT Prep", "Business Japanese", "Beginner Friendly"],
    rating: 5.0,
    reviews: 156,
    hourlyRate: 35,
    lessonsCompleted: 720,
    isVerified: true,
    isNativeSpeaker: true,
    offersTrialLesson: true,
    bio: "Certified Japanese teacher specialising in JLPT preparation and business Japanese. I make learning kanji and grammar fun and accessible for all levels.",
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
    lessonsCompleted: 890,
    isVerified: true,
    isNativeSpeaker: true,
    offersTrialLesson: false,
    bio: "German language expert with a background in linguistics. I help students prepare for German language exams and achieve fluency through structured lessons.",
  },
  {
    id: "5",
    name: "Sofia Rossi",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    country: "Italy",
    languages: ["Italian", "English", "French"],
    specialties: ["Conversational", "Travel Italian", "Culture"],
    rating: 4.7,
    reviews: 142,
    hourlyRate: 22,
    lessonsCompleted: 560,
    isVerified: true,
    isNativeSpeaker: true,
    offersTrialLesson: true,
    bio: "Passionate Italian teacher who loves sharing Italian culture and language. My lessons combine grammar with real-life conversations and cultural insights.",
  },
  {
    id: "6",
    name: "Wei Chen",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    country: "China",
    languages: ["Mandarin", "English", "Cantonese"],
    specialties: ["HSK Prep", "Business Chinese", "Pronunciation"],
    rating: 4.8,
    reviews: 178,
    hourlyRate: 32,
    lessonsCompleted: 830,
    isVerified: true,
    isNativeSpeaker: true,
    offersTrialLesson: true,
    bio: "Experienced Mandarin teacher with expertise in HSK exam preparation and business Chinese. I use modern teaching methods to make Chinese accessible.",
  },
]

// ── Page component ────────────────────────────────────────────────────────────

export default function TutorsPage() {
  const [search, setSearch]                         = useState("")

  // ── Filter state ────────────────────────────────────────────────────────
  const [languageFilter, setLanguageFilter]         = useState("all")
  const [priceFilter, setPriceFilter]               = useState("any")
  const [countryFilter, setCountryFilter]           = useState("any")
  const [alsoSpeaksFilter, setAlsoSpeaksFilter]     = useState("any")
  const [availFilter, setAvailFilter]               = useState("any")
  const [activeSpecialties, setActiveSpecialties]   = useState<string[]>([])
  const [nativeSpeakerOnly, setNativeSpeakerOnly]   = useState(false)
  const [verifiedOnly, setVerifiedOnly]             = useState(false)
  const [trialOnly, setTrialOnly]                   = useState(false)
  const [sortBy, setSortBy]                         = useState("recommended")

  // ── Unique languages derived from tutor data ────────────────────────────
  const allLanguages = [...new Set(tutors.flatMap(t => t.languages))].sort()
  const languageLabel = languageFilter === "all"
    ? "All languages"
    : allLanguages.find(l => l.toLowerCase() === languageFilter) ?? languageFilter

  // ── Price predicate map ─────────────────────────────────────────────────
  const pricePred: Record<string, (r: number) => boolean> = {
    any:      () => true,
    u25:      r => r < 25,
    "25-35":  r => r >= 25 && r < 35,
    "35-50":  r => r >= 35 && r <= 50,
    "50plus": r => r > 50,
  }

  // ── Filtered + sorted list ──────────────────────────────────────────────
  const searchLower = search.toLowerCase()
  const filtered = tutors.filter((t) => {
    if (search && !t.name.toLowerCase().includes(searchLower) &&
        !t.languages.some(l => l.toLowerCase().includes(searchLower))) return false
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

  // ── Active filter count ─────────────────────────────────────────────────
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

  return (
    <div className="min-h-screen bg-[#F0F6FA]">

      {/* ── Main content ───────────────────────────────────────────────────── */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

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
                  <button onClick={() => setLanguageFilter("all")} aria-label="Clear language filter" className="ml-1 hover:opacity-70"><X className="inline h-2.5 w-2.5" /></button>
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

            {/* Specialty pills — each in its own box */}
            {specialties.map(s => (
              <div
                key={s}
                className={[
                  "rounded-lg border",
                  activeSpecialties.includes(s)
                    ? "border-[#354d73] bg-[#354d73]"
                    : "border-[#354d73]/25 bg-white hover:border-[#354d73]/60 hover:bg-[#F0F6FA]",
                ].join(" ")}
              >
                <button
                  type="button"
                  onClick={() => toggleSpecialty(s)}
                  className={[
                    "px-3 py-1.5 text-xs font-medium transition-colors",
                    activeSpecialties.includes(s) ? "text-white" : "text-[#354d73]",
                  ].join(" ")}
                >
                  {s}
                </button>
              </div>
            ))}

            {/* Divider */}
            <div className="hidden h-5 w-px bg-[#354d73]/15 sm:block" />

            {/* Tutor-type toggles — each in its own box */}
            {([
              { label: "Native Speaker", state: nativeSpeakerOnly, set: setNativeSpeakerOnly },
              { label: "Verified Only",  state: verifiedOnly,      set: setVerifiedOnly      },
              { label: "Trial Available",state: trialOnly,         set: setTrialOnly         },
            ] as const).map(({ label, state, set }) => (
              <div
                key={label}
                className={[
                  "rounded-lg border",
                  state
                    ? "border-[#042230] bg-[#042230]"
                    : "border-[#354d73]/25 bg-white hover:border-[#354d73]/50 hover:bg-[#F0F6FA]",
                ].join(" ")}
              >
                <button
                  type="button"
                  onClick={() => set(!state)}
                  className={[
                    "flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors",
                    state ? "text-white" : "text-[#042230]",
                  ].join(" ")}
                >
                  {state && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                  {label}
                </button>
              </div>
            ))}

            {/* Spacer + right-side controls */}
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

        {/* ── Search bar (below filter box) ────────────────────────────────── */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search tutors or languages…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 h-10 bg-white border-[#354d73]/25 focus:border-[#354d73]"
            />
          </div>
        </div>

        {/* Results count */}
        <p className="mb-4 text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">{sortedFiltered.length}</span> of {tutors.length} tutors
        </p>

        {/* Tutor cards */}
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
      </main>
    </div>
  )
}
