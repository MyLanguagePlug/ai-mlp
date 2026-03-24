"use client"

import React, { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// ── Types ────────────────────────────────────────────────────────────────────

type TabId = "profile" | "teaching" | "pricing" | "notifications" | "account"

interface Tab {
  id: TabId
  label: string
  icon: React.ElementType
}

// ── Constants ────────────────────────────────────────────────────────────────

const TABS: Tab[] = [
  { id: "profile",       label: "Profile Information",  icon: User        },
  { id: "teaching",      label: "Teaching Preferences", icon: BookOpen    },
  { id: "pricing",       label: "Pricing and Rates",    icon: DollarSign  },
  { id: "notifications", label: "Notifications",         icon: Bell        },
  { id: "account",       label: "Account & Security",   icon: Shield      },
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

// ── TABS ─────────────────────────────────────────────────────────────────────

// 1. Profile Information — redirects to the full profile page
function ProfileTab() {
  const router = useRouter()
  useEffect(() => {
    router.replace("/tutor/profile")
  }, [router])
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-3">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#354d73] border-t-transparent" />
      <p className="text-sm text-muted-foreground">Redirecting to your profile…</p>
    </div>
  )
}

// 2. Teaching Preferences
function TeachingTab() {
  const [languages, setLanguages] = useState(["English", "Portuguese", "Spanish"])
  const [specialties, setSpecialties] = useState(["Business English", "IELTS Prep", "Conversation Practice"])
  const [lessonTypes, setLessonTypes] = useState(["Trial", "Regular"])
  const [form, setForm] = useState({ education: "M.A. Applied Linguistics — University of Miami", experience: "8 years", certificates: "CELTA, TEFL" })
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
        <Field label="Education"><Input name="education" value={form.education} onChange={update} /></Field>
        <Field label="Years of experience"><Input name="experience" value={form.experience} onChange={update} /></Field>
        <Field label="Certifications" hint="e.g. CELTA, TEFL, DELTA"><Input name="certificates" value={form.certificates} onChange={update} /></Field>
      </div>

      <SaveBanner saved={saved} onSave={() => { setSaved(true); setTimeout(() => setSaved(false), 3000) }} />
    </div>
  )
}

// 3. Pricing and Rates
function PricingTab() {
  const LANGUAGES = ["English", "Portuguese", "Spanish", "French", "German", "Italian", "Japanese", "Mandarin", "Arabic", "Korean"]

  const [form, setForm] = useState({ trial: "15", regular: "40", currency: "USD", minNotice: "24", maxAdvance: "30" })
  const [saved, setSaved] = useState(false)
  // Language-based pricing: map from language → price per hr
  const [langPrices, setLangPrices] = useState<Record<string, string>>({
    English:    "40",
    Portuguese: "35",
    Spanish:    "38",
  })
  const [selectedLang, setSelectedLang] = useState<string>("English")

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSaved(false)
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  }

  const updateLangPrice = (price: string) => {
    setSaved(false)
    setLangPrices(p => ({ ...p, [selectedLang]: price }))
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
        {rate("Trial lesson",   "trial",   "First lesson with a new student")}
        {rate("Regular lesson", "regular", "Standard 1-hour session")}
      </div>

      {/* Language-based pricing */}
      <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
        <p className="mb-1 text-sm font-semibold text-[#042230]">Price by language taught</p>
        <p className="mb-4 text-xs text-muted-foreground">Set a different hourly rate for each language you teach.</p>
        <div className="flex items-end gap-3">
          <div className="flex-1 flex flex-col gap-1.5">
            <label className="text-xs font-medium text-[#042230]">Language</label>
            <select
              value={selectedLang}
              onChange={e => setSelectedLang(e.target.value)}
              className="h-9 rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {LANGUAGES.map(l => <option key={l}>{l}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-[#042230]">Price per hour ($)</label>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-medium text-muted-foreground">$</span>
              <input
                type="number"
                min="1"
                value={langPrices[selectedLang] ?? ""}
                onChange={e => updateLangPrice(e.target.value)}
                placeholder="0"
                className="w-24 rounded-md border border-input bg-background px-3 py-1.5 text-sm font-semibold text-[#042230] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#354d73]"
              />
              <span className="text-xs text-muted-foreground">/ hr</span>
            </div>
          </div>
        </div>
        {/* Preview of all set prices */}
        <div className="mt-4 flex flex-wrap gap-2">
          {Object.entries(langPrices).map(([lang, price]) => Number(price) > 0 ? (
            <span
              key={lang}
              className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium ${
                lang === selectedLang
                  ? "border-[#354d73] bg-[#354d73] text-white"
                  : "border-border bg-[#F7F9FB] text-[#042230]"
              }`}
            >
              {lang} · ${price}/hr
            </span>
          ) : null)}
        </div>
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

// 4. Notifications
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

// 5. Account & Security
function AccountTab() {
  const [showOld, setShowOld] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [showConf, setShowConf] = useState(false)
  const [passwords, setPasswords] = useState({ old: "", newPw: "", confirm: "" })
  const [twoFA, setTwoFA] = useState(false)
  const [saved, setSaved] = useState(false)
  const [deleteInput, setDeleteInput] = useState("")

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
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">

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
          <nav className="shrink-0 md:w-52">
            <div className="rounded-xl border border-border bg-white overflow-hidden shadow-sm">
              {TABS.map((tab, i) => {
                const isActive = active === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActive(tab.id)}
                    className={`flex w-full items-center gap-3 px-4 py-3 text-sm font-medium transition-colors text-left ${
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
          <div className="flex-1 min-w-0 rounded-xl border border-border bg-white p-6 shadow-sm">
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
