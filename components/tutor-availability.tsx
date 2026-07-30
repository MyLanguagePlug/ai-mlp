"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  addDays,
  addWeeks,
  format,
  isBefore,
  isToday,
  startOfDay,
  startOfWeek,
} from "date-fns"

interface TutorAvailabilityProps {
  tutorId: string
}

/** Deterministic pseudo-random value in [0, 1) from an integer seed. */
function seededRandom(seed: number): number {
  const x = Math.sin(seed + 1) * 10000
  return x - Math.floor(x)
}

const ALL_SLOTS = Array.from({ length: 24 }, (_, h) =>
  `${String(h).padStart(2, "0")}:00`,
)

/** Maximum number of weeks ahead a student can browse. */
const MAX_WEEK_OFFSET = 3

/** Returns sorted available time slot strings for a given tutor + day. */
function getDaySlots(tutorId: string, date: Date): string[] {
  // No availability on past days or weekends
  if (isBefore(startOfDay(date), startOfDay(new Date()))) return []
  const dow = date.getDay()
  if (dow === 0 || dow === 6) return []

  const numId = parseInt(tutorId, 10) || 1
  // Use YYYYMMDD integer as the date component to avoid collisions across years
  const dateKey =
    date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate()
  const seed = numId * 1_000_000 + dateKey

  const count = Math.floor(seededRandom(seed) * 9) // 0–8 slots per day
  const slots: string[] = []
  for (let i = 0; i < count; i++) {
    const idx = Math.floor(seededRandom(seed + i * 23 + 11) * ALL_SLOTS.length)
    const slot = ALL_SLOTS[idx]
    if (!slots.includes(slot)) slots.push(slot)
  }
  return slots.sort()
}

export function TutorAvailability({ tutorId }: TutorAvailabilityProps) {
  const [weekOffset, setWeekOffset] = useState(0)
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)

  const weekStart = startOfWeek(addWeeks(new Date(), weekOffset), {
    weekStartsOn: 1,
  })
  const days = Array.from({ length: 5 }, (_, i) => addDays(weekStart, i))

  return (
    <div className="flex h-full flex-col gap-3 p-4">
      {/* Header */}
      <div className="flex items-center justify-between gap-1">
        <span className="text-xs font-semibold uppercase tracking-wide text-(--navy)">
          Availability
        </span>
        <div className="flex items-center gap-0.5">
          <button
            onClick={() => setWeekOffset((w) => w - 1)}
            disabled={weekOffset <= 0}
            className="rounded p-0.5 hover:bg-muted disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Previous week"
          >
            <ChevronLeft className="h-3 w-3" />
          </button>
          <span className="min-w-[5.5rem] text-center text-[10px] text-muted-foreground">
            {format(weekStart, "MMM d")}–{format(addDays(weekStart, 4), "MMM d")}
          </span>
          <button
            onClick={() => setWeekOffset((w) => w + 1)}
            disabled={weekOffset >= MAX_WEEK_OFFSET}
            className="rounded p-0.5 hover:bg-muted disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Next week"
          >
            <ChevronRight className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* Day columns */}
      <div className="grid grid-cols-5 gap-1">
        {days.map((day) => {
          const slots = getDaySlots(tutorId, day)
          const today = isToday(day)

          return (
            <div key={day.toISOString()} className="flex flex-col items-center gap-1">
              {/* Day label */}
              <div
                className={cn(
                  "w-full rounded-sm py-1 text-center",
                  today ? "bg-(--navy)" : "bg-muted",
                )}
              >
                <p
                  className={cn(
                    "text-[9px] font-medium uppercase leading-none",
                    today ? "text-white/80" : "text-muted-foreground",
                  )}
                >
                  {format(day, "EEE")}
                </p>
                <p
                  className={cn(
                    "mt-0.5 text-xs font-bold leading-none",
                    today ? "text-white" : "text-(--navy)",
                  )}
                >
                  {format(day, "d")}
                </p>
              </div>

              {/* All hour tabs – scrollable column */}
              <div className="flex w-full flex-col gap-0.5 overflow-y-auto max-h-[260px]">
                {slots.length > 0 ? (
                  slots.map((slot) => {
                    const key = `${format(day, "yyyy-MM-dd")}-${slot}`
                    const selected = selectedSlot === key
                    return (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(selected ? null : key)}
                        className={cn(
                          "w-full rounded py-1 text-[10px] font-medium leading-none transition-colors",
                          selected
                            ? "bg-(--navy) text-white"
                            : "bg-(--light-blue) text-(--navy) hover:bg-(--navy) hover:text-white",
                        )}
                      >
                        {slot}
                      </button>
                    )
                  })
                ) : (
                  <p className="py-1 text-center text-[10px] leading-none text-muted-foreground">
                    —
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* CTA */}
      <div className="mt-auto border-t pt-4">
        <Button size="sm" className="w-full" asChild>
          <Link href={`/tutors/${tutorId}/book`}>
            {selectedSlot ? "Book selected time" : "Book a lesson"}
          </Link>
        </Button>
        <Link
          href={`/tutors/${tutorId}`}
          className="mt-1.5 block text-center text-[10px] text-primary hover:underline"
        >
          See all times →
        </Link>
      </div>
    </div>
  )
}
