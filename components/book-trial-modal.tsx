"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import {
  Star,
  CheckCircle2,
  Clock,
  ChevronLeft,
  ChevronRight,
  Zap,
  BookOpen,
  Package,
  Check,
  Download,
  XCircle,
  Loader2,
  CalendarClock,
} from "lucide-react"

export interface BookTrialTutor {
  id: string
  name: string
  image: string
  languages: string[]
  rating: number
  reviews: number
  hourlyRate: number
  isNativeSpeaker?: boolean
  offersTrialLesson?: boolean
}

interface BookTrialModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  tutor: BookTrialTutor | null
}

type Step = "lesson-type" | "schedule" | "confirm"

interface LessonOption {
  id: string
  icon: React.ReactNode
  label: string
  sublabel: string
  price: string
  priceNote: string
  badge?: string
  color: string
}

const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "19:00",
]

const PACKAGES = [
  { count: 1,  discount: 0,    label: "1 lesson"   },
  { count: 3,  discount: 5,    label: "3 lessons"  },
  { count: 5,  discount: 7.5,  label: "5 lessons"  },
  { count: 10, discount: 10,   label: "10 lessons" },
  { count: 20, discount: 15,   label: "20 lessons" },
]

// Demo-only constants — not used in production payment flow
const MOCK_PAYMENT_PROCESSING_DELAY = 1500
const MOCK_PAYMENT_FAILURE_RATE = 0.2

export function BookTrialModal({ open, onOpenChange, tutor }: BookTrialModalProps) {
  const [step, setStep] = useState<Step>("lesson-type")
  const [lessonType, setLessonType] = useState<"trial" | "single" | "package">("trial")
  const [selectedPackage, setSelectedPackage] = useState(PACKAGES[0])
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [confirmed, setConfirmed] = useState(false)
  const [paymentFailed, setPaymentFailed] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  function reset() {
    setStep("lesson-type")
    setLessonType("trial")
    setSelectedPackage(PACKAGES[0])
    setSelectedDate(undefined)
    setSelectedTime(null)
    setConfirmed(false)
    setPaymentFailed(false)
    setIsProcessing(false)
  }

  function handleClose(v: boolean) {
    onOpenChange(v)
    if (!v) setTimeout(reset, 300)
  }

  if (!tutor) return null

  const lessonOptions: LessonOption[] = [
    {
      id: "trial",
      icon: <Zap className="h-5 w-5" />,
      label: "Trial Lesson",
      sublabel: "20-minute intro session",
      price: "Free",
      priceNote: "No commitment required",
      badge: "Popular",
      color: "bg-emerald-50 border-emerald-200 text-emerald-700",
    },
    {
      id: "single",
      icon: <BookOpen className="h-5 w-5" />,
      label: "Single Lesson",
      sublabel: "50-minute lesson",
      price: `$${tutor.hourlyRate}`,
      priceNote: "per lesson",
      color: "bg-blue-50 border-blue-200 text-blue-700",
    },
    {
      id: "package",
      icon: <Package className="h-5 w-5" />,
      label: "Lesson Package",
      sublabel: "Save up to 15%",
      price: `From $${(tutor.hourlyRate * 0.85).toFixed(2)}`,
      priceNote: "per lesson",
      badge: "Best Value",
      color: "bg-purple-50 border-purple-200 text-purple-700",
    },
  ]

  // Compute total price for package step
  const pkgPricePerLesson = tutor.hourlyRate * (1 - selectedPackage.discount / 100)
  const pkgTotal = pkgPricePerLesson * selectedPackage.count

  const canProceedToSchedule =
    lessonType === "trial" || lessonType === "single" || lessonType === "package"

  const canConfirm = selectedDate && selectedTime

  // ── Step: lesson type ──────────────────────────────────────────────────────
  const renderLessonType = () => (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Choose the type of lesson you'd like to book with {tutor.name}
      </p>
      <div className="space-y-3">
        {lessonOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setLessonType(opt.id as typeof lessonType)}
            className={cn(
              "w-full rounded-xl border-2 p-4 text-left transition-all",
              lessonType === opt.id
                ? "border-[#042230] bg-[#042230]/5 ring-2 ring-[#042230]/20"
                : "border-border hover:border-[#042230]/40 hover:bg-muted/30"
            )}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={cn("rounded-lg p-2 border", opt.color)}>
                  {opt.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#042230]">{opt.label}</span>
                    {opt.badge && (
                      <Badge className="bg-amber-100 text-amber-700 border-amber-200 text-xs px-1.5 py-0">
                        {opt.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{opt.sublabel}</p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="font-bold text-[#042230]">{opt.price}</p>
                <p className="text-xs text-muted-foreground">{opt.priceNote}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Package selector */}
      {lessonType === "package" && (
        <div className="rounded-xl border border-border bg-muted/30 p-4 space-y-3">
          <p className="text-sm font-medium text-[#042230]">Select package size</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {PACKAGES.map((pkg) => {
              const pricePerLesson = tutor.hourlyRate * (1 - pkg.discount / 100)
              const total = pricePerLesson * pkg.count
              return (
                <button
                  key={pkg.count}
                  onClick={() => setSelectedPackage(pkg)}
                  className={cn(
                    "rounded-lg border-2 p-3 text-center text-sm transition-all",
                    selectedPackage.count === pkg.count
                      ? "border-[#042230] bg-[#042230] text-white"
                      : "border-border hover:border-[#042230]/50"
                  )}
                >
                  <p className="font-semibold">{pkg.label}</p>
                  {pkg.discount > 0 && (
                    <p className={cn("text-xs", selectedPackage.count === pkg.count ? "text-white/80" : "text-emerald-600")}>
                      {pkg.discount}% off
                    </p>
                  )}
                  <p className={cn("text-xs mt-1", selectedPackage.count === pkg.count ? "text-white/80" : "text-muted-foreground")}>
                    ${total.toFixed(2)}
                  </p>
                </button>
              )
            })}
          </div>
        </div>
      )}

      <Button
        className="w-full bg-[#042230] hover:bg-[#042230]/90"
        onClick={() => setStep("schedule")}
        disabled={!canProceedToSchedule}
      >
        Continue
        <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  )

  // ── Step: schedule ─────────────────────────────────────────────────────────
  const renderSchedule = () => (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Pick a date and time that works for you
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="rounded-xl border border-border overflow-hidden">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            disabled={(date) => date < new Date()}
            className="p-0"
          />
        </div>
        {selectedDate && (
          <div className="flex-1 space-y-2">
            <p className="text-sm font-medium text-[#042230]">Available times</p>
            <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-1">
              {TIME_SLOTS.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTime(t)}
                  className={cn(
                    "rounded-lg border-2 py-2 text-sm font-medium transition-all",
                    selectedTime === t
                      ? "border-[#042230] bg-[#042230] text-white"
                      : "border-border hover:border-[#042230]/50"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-2">
        <Button variant="outline" className="flex-1" onClick={() => setStep("lesson-type")}>
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back
        </Button>
        <Button
          className="flex-1 bg-[#042230] hover:bg-[#042230]/90"
          disabled={!canConfirm}
          onClick={() => setStep("confirm")}
        >
          Review Booking
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  )

  // ── Step: confirm ──────────────────────────────────────────────────────────
  const renderConfirm = () => {
    // ── Payment failed screen ──────────────────────────────────────────────
    if (paymentFailed) {
      return (
        <div className="flex flex-col items-center gap-4 py-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
            <XCircle className="h-8 w-8 text-red-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#042230]">Payment Failed</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              We couldn't process your payment. Please check your card details and try again.
            </p>
          </div>
          <div className="w-full rounded-xl border border-red-100 bg-red-50 p-4 text-left space-y-2">
            <p className="text-sm font-medium text-red-700">Possible reasons:</p>
            <ul className="space-y-1 text-sm text-red-600 list-disc list-inside">
              <li>Insufficient funds</li>
              <li>Card declined by issuing bank</li>
              <li>Incorrect card details</li>
              <li>Card expired or blocked for online use</li>
            </ul>
          </div>
          <div className="w-full space-y-2">
            <Button
              className="w-full bg-[#042230] hover:bg-[#042230]/90"
              onClick={() => { setPaymentFailed(false) }}
            >
              Try Again
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => handleClose(false)}
            >
              Cancel
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Need help?{" "}
            <a href="/help" className="underline hover:text-[#042230]">Contact support</a>
          </p>
        </div>
      )
    }

    // ── Booking confirmed screen ───────────────────────────────────────────
    if (confirmed) {
      const remainingLessons = lessonType === "package" ? selectedPackage.count - 1 : 0

      function downloadInvoice() {
        const invoiceId = `MLP-${Date.now()}`
        const date = selectedDate?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) ?? ""
        const invoiceLines = [
          "================================================",
          "         MY LANGUAGE PLUG — INVOICE",
          "================================================",
          `Invoice #: ${invoiceId}`,
          `Date:      ${new Date().toLocaleDateString()}`,
          "------------------------------------------------",
          `Tutor:     ${tutor?.name ?? ""}`,
          `Type:      ${lessonTypeLabel()}`,
          `Date:      ${date}`,
          `Time:      ${selectedTime ?? ""}`,
          `Duration:  ${lessonType === "trial" ? "20 minutes" : "50 minutes"}`,
          "------------------------------------------------",
          `TOTAL:     ${totalPrice()}`,
          "================================================",
          "Thank you for booking with My Language Plug!",
        ].join("\n")
        const blob = new Blob([invoiceLines], { type: "text/plain" })
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = `${invoiceId}.txt`
        a.click()
        URL.revokeObjectURL(url)
      }

      return (
        <div className="flex flex-col items-center gap-4 py-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
            <CheckCircle2 className="h-8 w-8 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#042230]">Booking Confirmed!</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Your lesson with {tutor.name} has been scheduled
            </p>
          </div>
          <div className="w-full rounded-xl border border-border bg-muted/30 p-4 text-left space-y-2">
            <BookingSummaryLine label="Tutor" value={tutor.name} />
            <BookingSummaryLine label="Type" value={lessonTypeLabel()} />
            <BookingSummaryLine
              label="Date"
              value={selectedDate?.toLocaleDateString("en-US", { weekday: "short", month: "long", day: "numeric" }) ?? ""}
            />
            <BookingSummaryLine label="Time" value={selectedTime ?? ""} />
            <BookingSummaryLine label="Total" value={totalPrice()} bold />
          </div>

          {/* Package remaining-lessons notice */}
          {lessonType === "package" && remainingLessons > 0 && (
            <div className="w-full flex items-start gap-2 rounded-xl border border-[#354d73]/20 bg-[#354d73]/5 p-3 text-left">
              <CalendarClock className="h-4 w-4 text-[#354d73] mt-0.5 shrink-0" />
              <p className="text-xs text-[#354d73]">
                <span className="font-semibold">
                  {remainingLessons} remaining lesson{remainingLessons !== 1 ? "s" : ""} added to Unscheduled Lessons.
                </span>{" "}
                Head to <span className="font-semibold">My Lessons → Unscheduled</span> to schedule them at your convenience.
              </p>
            </div>
          )}

          <div className="flex w-full gap-2">
            <Button
              variant="outline"
              className="flex-1 gap-1.5"
              onClick={downloadInvoice}
            >
              <Download className="h-4 w-4" />
              Download Invoice
            </Button>
            <Button
              className="flex-1 bg-[#042230] hover:bg-[#042230]/90"
              onClick={() => handleClose(false)}
            >
              Done
            </Button>
          </div>
        </div>
      )
    }

    // ── Processing payment screen ──────────────────────────────────────────
    if (isProcessing) {
      return (
        <div className="flex flex-col items-center gap-4 py-10 text-center">
          <Loader2 className="h-12 w-12 animate-spin text-[#354d73]" />
          <div>
            <h3 className="text-lg font-bold text-[#042230]">Processing Payment…</h3>
            <p className="mt-1 text-sm text-muted-foreground">Please wait while we confirm your booking.</p>
          </div>
        </div>
      )
    }

    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">Review your booking details before confirming</p>

        {/* Tutor summary */}
        <div className="flex items-center gap-3 rounded-xl border border-border p-3">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
            <Image src={tutor.image} alt={tutor.name} fill className="object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-[#042230] truncate">{tutor.name}</p>
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span className="text-sm">{tutor.rating.toFixed(1)}</span>
              <span className="text-xs text-muted-foreground">({tutor.reviews} reviews)</span>
            </div>
          </div>
        </div>

        {/* Booking details */}
        <div className="rounded-xl border border-border bg-muted/30 p-4 space-y-2.5">
          <BookingSummaryLine label="Lesson type" value={lessonTypeLabel()} />
          <BookingSummaryLine
            label="Date"
            value={selectedDate?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) ?? ""}
          />
          <BookingSummaryLine label="Time" value={selectedTime ?? ""} />
          <BookingSummaryLine
            label="Duration"
            value={lessonType === "trial" ? "20 minutes" : "50 minutes"}
          />
          <div className="border-t border-border pt-2">
            <BookingSummaryLine label="Total" value={totalPrice()} bold />
          </div>
        </div>

        {/* Package unscheduled-lessons notice */}
        {lessonType === "package" && selectedPackage.count > 1 && (
          <div className="flex items-start gap-2 rounded-lg border border-[#354d73]/20 bg-[#354d73]/5 p-3">
            <CalendarClock className="h-4 w-4 text-[#354d73] mt-0.5 shrink-0" />
            <p className="text-xs text-[#354d73]">
              You are booking 1 lesson now.{" "}
              <span className="font-semibold">
                The remaining {selectedPackage.count - 1} lesson{selectedPackage.count - 1 !== 1 ? "s" : ""} will be added to
                your Unscheduled Lessons
              </span>{" "}
              and can be scheduled at any time from your dashboard.
            </p>
          </div>
        )}

        {/* Mock payment note */}
        <div className="flex items-start gap-2 rounded-lg bg-blue-50 border border-blue-100 p-3">
          <Clock className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
          <p className="text-xs text-blue-700">
            Payment is processed securely via Stripe. You won't be charged until you confirm.
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" className="flex-1" onClick={() => setStep("schedule")}>
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back
          </Button>
          <Button
            className="flex-1 bg-[#042230] hover:bg-[#042230]/90"
            onClick={() => {
              setIsProcessing(true)
              setTimeout(() => {
                setIsProcessing(false)
                // Simulate ~20% payment failure rate for demo
                if (Math.random() < MOCK_PAYMENT_FAILURE_RATE) {
                  setPaymentFailed(true)
                } else {
                  setConfirmed(true)
                }
              }, MOCK_PAYMENT_PROCESSING_DELAY)
            }}
          >
            <Check className="mr-1 h-4 w-4" />
            Confirm Booking
          </Button>
        </div>
      </div>
    )
  }

  function lessonTypeLabel() {
    if (lessonType === "trial") return "Free Trial (20 min)"
    if (lessonType === "single") return "Single Lesson (50 min)"
    return `Package – ${selectedPackage.label}`
  }

  function totalPrice() {
    if (lessonType === "trial") return "Free"
    if (lessonType === "single") return `$${(tutor?.hourlyRate ?? 0).toFixed(2)}`
    return `$${pkgTotal.toFixed(2)}`
  }

  const stepTitles: Record<Step, string> = {
    "lesson-type": "Book a Lesson",
    schedule: "Choose Date & Time",
    confirm: "Confirm Booking",
  }

  const stepNumbers: Record<Step, number> = {
    "lesson-type": 1,
    schedule: 2,
    confirm: 3,
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-[#042230]/20">
              <Image src={tutor.image} alt={tutor.name} fill className="object-cover" />
            </div>
            <div className="min-w-0">
              <DialogTitle className="text-lg leading-tight">{stepTitles[step]}</DialogTitle>
              <p className="text-xs text-muted-foreground">with {tutor.name}</p>
            </div>
          </div>
          {/* Step indicator */}
          {!confirmed && (
            <div className="flex items-center gap-2 pt-1">
              {(["lesson-type", "schedule", "confirm"] as Step[]).map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={cn(
                      "flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition-colors",
                      stepNumbers[step] > i + 1
                        ? "bg-emerald-500 text-white"
                        : step === s
                        ? "bg-[#042230] text-white"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {stepNumbers[step] > i + 1 ? <Check className="h-3.5 w-3.5" /> : i + 1}
                  </div>
                  {i < 2 && (
                    <div
                      className={cn(
                        "h-0.5 w-8 rounded-full transition-colors",
                        stepNumbers[step] > i + 1 ? "bg-emerald-500" : "bg-muted"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </DialogHeader>

        <div className="mt-2">
          {step === "lesson-type" && renderLessonType()}
          {step === "schedule" && renderSchedule()}
          {step === "confirm" && renderConfirm()}
        </div>
      </DialogContent>
    </Dialog>
  )
}

function BookingSummaryLine({
  label,
  value,
  bold,
}: {
  label: string
  value: string
  bold?: boolean
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className={cn("text-right", bold && "font-bold text-[#042230]")}>{value}</span>
    </div>
  )
}
