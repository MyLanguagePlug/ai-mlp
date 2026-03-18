"use client"

import { useState } from "react"
import Link from "next/link"
import {
  User,
  Lock,
  Mail,
  CreditCard,
  Clock,
  CalendarDays,
  Bell,
  Trash2,
  Upload,
  ChevronRight,
  Check,
  ArrowLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const sidebarItems = [
  { id: "account", label: "Account", icon: User },
  { id: "password", label: "Password", icon: Lock },
  { id: "email", label: "Email", icon: Mail },
  { id: "payment-methods", label: "Payment methods", icon: CreditCard },
  { id: "payment-history", label: "Payment history", icon: Clock },
  { id: "calendar", label: "Calendar", icon: CalendarDays },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "delete-account", label: "Delete account", icon: Trash2 },
]

const timezones = [
  "UTC (GMT +0:00)",
  "America/New_York (GMT -5:00)",
  "America/Chicago (GMT -6:00)",
  "America/Los_Angeles (GMT -8:00)",
  "Europe/London (GMT +0:00)",
  "Europe/Paris (GMT +1:00)",
  "Asia/Tokyo (GMT +9:00)",
  "Australia/Sydney (GMT +11:00)",
]

function AccountSection({ saved, onSave }: { saved: boolean; onSave: () => void }) {
  const [firstName, setFirstName] = useState("Jane")
  const [lastName, setLastName] = useState("Smith")
  const [phone, setPhone] = useState("")
  const [timezone, setTimezone] = useState("UTC (GMT +0:00)")

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold text-[#042230]">Account Settings</h2>
      </div>

      {/* Profile image */}
      <div>
        <Label className="mb-3 block text-sm font-medium text-foreground">Profile image</Label>
        <div className="flex items-start gap-6">
          <div className="flex h-28 w-28 items-center justify-center rounded-xl bg-[#F0F6FA]">
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 rounded-full bg-[#354d73]/20" />
              <div className="mt-1 h-3 w-16 rounded-sm bg-[#354d73]/20" />
            </div>
          </div>
          <div className="space-y-1">
            <Button variant="outline" size="sm" className="gap-2">
              <Upload className="h-4 w-4" />
              Upload photo
            </Button>
            <p className="text-xs text-muted-foreground">Maximum size – 2MB</p>
            <p className="text-xs text-muted-foreground">JPG or PNG format</p>
          </div>
        </div>
      </div>

      {/* First name */}
      <div className="space-y-1.5">
        <Label htmlFor="firstName">
          First name{" "}
          <span className="text-[#354d73] text-xs font-normal">· Required</span>
        </Label>
        <Input
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="max-w-md"
        />
      </div>

      {/* Last name */}
      <div className="space-y-1.5">
        <Label htmlFor="lastName">Last name</Label>
        <Input
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="max-w-md"
        />
      </div>

      {/* Phone */}
      <div className="space-y-1.5">
        <Label htmlFor="phone">Phone number</Label>
        <div className="flex max-w-md gap-2">
          <select
                aria-label="Country code"
                className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
            <option>🇺🇸 +1</option>
            <option>🇬🇧 +44</option>
            <option>🇦🇺 +61</option>
            <option>🇨🇦 +1</option>
            <option>🇩🇪 +49</option>
            <option>🇫🇷 +33</option>
          </select>
          <Input
            id="phone"
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-1"
          />
        </div>
      </div>

      {/* Timezone */}
      <div className="space-y-1.5">
        <Label htmlFor="timezone">Timezone</Label>
        <select
          id="timezone"
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
          className="flex h-10 w-full max-w-md rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          {timezones.map((tz) => (
            <option key={tz}>{tz}</option>
          ))}
        </select>
      </div>

      {/* Social networks */}
      <div className="space-y-3">
        <Label>Social networks</Label>
        <div className="space-y-3 max-w-md">
          <div className="flex items-center justify-between rounded-lg border border-border p-4">
            <div className="flex items-center gap-3">
              <svg className="h-5 w-5 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor" aria-label="Facebook">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-sm text-muted-foreground">Not connected to Facebook account</span>
            </div>
            <Button variant="outline" size="sm">Connect</Button>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border p-4">
            <div className="flex items-center gap-3">
              <svg className="h-5 w-5" viewBox="0 0 24 24" aria-label="Google">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm text-muted-foreground">Not connected to Google account</span>
            </div>
            <Button variant="outline" size="sm">Connect</Button>
          </div>
        </div>
      </div>

      {/* Save button */}
      <div className="max-w-md">
        <Button
          onClick={onSave}
          className="w-full bg-[#354d73] hover:bg-[#2a3d5e] text-white h-12 text-base font-semibold"
        >
          {saved ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Saved!
            </>
          ) : (
            "Save changes"
          )}
        </Button>
      </div>
    </div>
  )
}

function PasswordSection() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-[#042230]">Change Password</h2>
      <div className="space-y-1.5 max-w-md">
        <Label htmlFor="currentPassword">Current password</Label>
        <Input id="currentPassword" type="password" className="max-w-md" />
      </div>
      <div className="space-y-1.5 max-w-md">
        <Label htmlFor="newPassword">New password</Label>
        <Input id="newPassword" type="password" className="max-w-md" />
      </div>
      <div className="space-y-1.5 max-w-md">
        <Label htmlFor="confirmPassword">Confirm new password</Label>
        <Input id="confirmPassword" type="password" className="max-w-md" />
      </div>
      <Button className="max-w-md w-full bg-[#354d73] hover:bg-[#2a3d5e] h-12 font-semibold">
        Update password
      </Button>
    </div>
  )
}

function EmailSection() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-[#042230]">Email Settings</h2>
      <div className="space-y-1.5 max-w-md">
        <Label>Current email</Label>
        <p className="rounded-md border border-border bg-muted px-3 py-2 text-sm text-foreground">
          jane@example.com
        </p>
      </div>
    </div>
  )
}

function PlaceholderSection({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-[#042230]">{title}</h2>
      <div className="rounded-xl border border-border bg-[#F0F6FA] px-8 py-16 text-center">
        <p className="text-muted-foreground">This section is coming soon.</p>
      </div>
    </div>
  )
}

function DeleteSection() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-[#042230]">Delete Account</h2>
      <div className="rounded-xl border border-rose-200 bg-rose-50 p-6">
        <p className="font-medium text-rose-700">Warning: this action is permanent.</p>
        <p className="mt-1 text-sm text-rose-600">
          Deleting your account will remove all your data, bookings, and messages. This cannot be undone.
        </p>
      </div>
      <Button variant="destructive" className="max-w-xs">
        <Trash2 className="mr-2 h-4 w-4" />
        Delete my account
      </Button>
    </div>
  )
}

export default function StudentSettings() {
  const [active, setActive] = useState("account")
  const [saved, setSaved] = useState(false)

  function handleSave() {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#F0F6FA]">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back to dashboard */}
        <Link
          href="/student"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          {/* ── Sidebar ────────────────────────────────────────── */}
          <nav className="shrink-0 lg:w-52">
            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
              {sidebarItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActive(id)}
                  className={`flex w-full items-center gap-3 px-5 py-3 text-sm transition-colors
                    ${active === id
                      ? "border-l-4 border-[#354d73] bg-[#F0F6FA] font-semibold text-[#354d73]"
                      : "border-l-4 border-transparent text-foreground hover:bg-[#F0F6FA] hover:text-[#354d73]"
                    }
                    ${id === "delete-account" ? "text-rose-600 hover:text-rose-700" : ""}
                  `}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {label}
                </button>
              ))}
            </div>
          </nav>

          {/* ── Content ─────────────────────────────────────────── */}
          <div className="flex-1 rounded-2xl border border-border bg-white p-6 shadow-sm lg:p-8">
            {active === "account" && <AccountSection saved={saved} onSave={handleSave} />}
            {active === "password" && <PasswordSection />}
            {active === "email" && <EmailSection />}
            {active === "payment-methods" && <PlaceholderSection title="Payment Methods" />}
            {active === "payment-history" && <PlaceholderSection title="Payment History" />}
            {active === "calendar" && <PlaceholderSection title="Calendar" />}
            {active === "notifications" && <PlaceholderSection title="Notifications" />}
            {active === "delete-account" && <DeleteSection />}
          </div>
        </div>
      </div>
    </div>
  )
}
