"use client"

import Image from "next/image"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Star,
  Globe,
  Clock,
  CheckCircle2,
  MessageCircle,
  BookOpen,
  Award,
  Users,
  ThumbsUp,
} from "lucide-react"

export interface TutorProfileData {
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
}

interface TutorProfileModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  tutor: TutorProfileData | null
  onBookTrial?: () => void
  onMessage?: () => void
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
]

const DEMO_CERTIFICATIONS = [
  "Certified Language Instructor",
  "DELE Examiner",
  "8+ Years Teaching Experience",
]

export function TutorProfileModal({
  open,
  onOpenChange,
  tutor,
  onBookTrial,
  onMessage,
}: TutorProfileModalProps) {
  if (!tutor) return null

  const responseRate = 98
  const avgResponseTime = "< 1 hour"

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
        {/* Hero banner */}
        <div className="relative h-36 w-full bg-gradient-to-br from-[#042230] to-[#0a4a6e]">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.4)_0%,transparent_60%)]" />
        </div>

        {/* Avatar + core info */}
        <div className="px-8 pb-6">
          {/* Top row: avatar left, price+CTAs right */}
          <div className="flex items-end justify-between -mt-12 mb-4">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border-4 border-white shadow-lg">
              <Image src={tutor.image} alt={tutor.name} fill className="object-cover" />
              {tutor.isVerified && (
                <div className="absolute bottom-1 right-1 rounded-full bg-white p-0.5 shadow">
                  <CheckCircle2 className="h-4 w-4 text-[#042230]" />
                </div>
              )}
            </div>
            {/* Price + CTAs */}
            <div className="flex flex-col items-end gap-2 pb-1">
              <div className="text-right">
                <span className="text-2xl font-bold text-[#042230]">${tutor.hourlyRate}</span>
                <span className="text-sm text-muted-foreground"> / hour</span>
              </div>
              <div className="flex gap-2">
                {onMessage && (
                  <Button variant="outline" size="sm" onClick={onMessage}>
                    <MessageCircle className="mr-1.5 h-4 w-4" />
                    Message
                  </Button>
                )}
                {onBookTrial && (
                  <Button size="sm" className="bg-[#042230] hover:bg-[#042230]/90 px-5" onClick={onBookTrial}>
                    Book Trial
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Name + badges + meta */}
          <div className="mb-4">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h2 className="text-2xl font-bold text-[#042230]">{tutor.name}</h2>
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
                <Globe className="h-3.5 w-3.5" />
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
          </div>

          {/* Languages */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tutor.languages.map((lang) => (
              <Badge key={lang} variant="outline" className="text-sm px-3 py-1">
                {lang}
              </Badge>
            ))}
          </div>

          <Separator />

          {/* Bio */}
          <div className="py-4">
            <h3 className="font-semibold text-[#042230] mb-2">About</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{tutor.bio}</p>
          </div>

          <Separator />

          {/* Specialties */}
          <div className="py-4">
            <h3 className="font-semibold text-[#042230] mb-3">Specialties</h3>
            <div className="flex flex-wrap gap-2">
              {tutor.specialties.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-[#e8f1f5] px-3 py-1 text-sm font-medium text-[#042230]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <Separator />

          {/* Stats row */}
          <div className="py-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCard icon={<BookOpen className="h-4 w-4" />} value={tutor.lessonsCompleted.toLocaleString()} label="Lessons" />
            <StatCard icon={<ThumbsUp className="h-4 w-4" />} value={`${responseRate}%`} label="Response Rate" />
            <StatCard icon={<Clock className="h-4 w-4" />} value={avgResponseTime} label="Avg. Response" />
            <StatCard icon={<Users className="h-4 w-4" />} value={tutor.reviews.toLocaleString()} label="Reviews" />
          </div>

          <Separator />

          {/* Certifications */}
          <div className="py-4">
            <h3 className="font-semibold text-[#042230] mb-3">Credentials</h3>
            <ul className="space-y-2">
              {DEMO_CERTIFICATIONS.map((cert) => (
                <li key={cert} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="h-4 w-4 text-[#042230] shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* Reviews */}
          <div className="py-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-[#042230]">Student Reviews</h3>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-[#042230]">{tutor.rating.toFixed(1)}</span>
                <span className="text-sm text-muted-foreground">({tutor.reviews})</span>
              </div>
            </div>
            <div className="space-y-4">
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
          </div>

          {/* Bottom CTA */}
          <div className="pt-2 flex gap-2">
            {onMessage && (
              <Button variant="outline" className="flex-1" onClick={onMessage}>
                <MessageCircle className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            )}
            {onBookTrial && (
              <Button className="flex-1 bg-[#042230] hover:bg-[#042230]/90" onClick={onBookTrial}>
                Book a Lesson
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-border bg-muted/30 p-3 text-center">
      <div className="text-[#042230] mb-1">{icon}</div>
      <p className="text-base font-bold text-[#042230]">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  )
}
