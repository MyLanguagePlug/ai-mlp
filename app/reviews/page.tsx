import Link from "next/link"
import Image from "next/image"
import { Star, ArrowRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CTASection } from "@/components/cta-section"

const reviews = [
  {
    id: 1,
    student: "Emily R.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&h=100&fit=crop",
    language: "Spanish",
    tutor: "Carlos M.",
    rating: 5,
    date: "March 2024",
    review:
      "I've tried several language apps and tutoring platforms, but My Language Plug is on a completely different level. My tutor Carlos is patient, engaging, and tailors every lesson to my needs. In just 3 months I went from barely saying 'hola' to holding full conversations!",
  },
  {
    id: 2,
    student: "James T.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    language: "French",
    tutor: "Sophie L.",
    rating: 5,
    date: "February 2024",
    review:
      "Sophie is an amazing French tutor. She makes the lessons fun and challenging at the same time. The video call quality is great and booking is so easy. I've recommended this platform to all my friends who want to learn a language.",
  },
  {
    id: 3,
    student: "Priya K.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
    language: "Japanese",
    tutor: "Hiroshi T.",
    rating: 5,
    date: "January 2024",
    review:
      "Learning Japanese always felt impossible to me — the three writing systems were so daunting. Hiroshi broke it all down brilliantly. He's a native speaker with incredible patience. My Language Plug made the whole experience seamless.",
  },
  {
    id: 4,
    student: "Michael B.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    language: "German",
    tutor: "Anna W.",
    rating: 5,
    date: "December 2023",
    review:
      "I needed to learn German fast for a work relocation. Anna created a completely custom curriculum focused on workplace German. Within 6 weeks I was navigating meetings and emails in German. Absolutely outstanding service.",
  },
  {
    id: 5,
    student: "Sarah O.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    language: "Mandarin Chinese",
    tutor: "Wei Z.",
    rating: 5,
    date: "November 2023",
    review:
      "Wei is one of the best tutors I've ever had — in any subject. Her teaching style is structured yet flexible. She adjusts the pace based on what I need, and her cultural insights make the language come alive. I look forward to every lesson.",
  },
  {
    id: 6,
    student: "Daniel F.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    language: "Italian",
    tutor: "Marco B.",
    rating: 4,
    date: "October 2023",
    review:
      "My Language Plug is great. The tutor search made it easy to find the right match. Marco is conversational, funny, and incredibly knowledgeable. The only small thing is I'd love more structured homework resources, but the lessons themselves are top notch.",
  },
  {
    id: 7,
    student: "Aisha N.",
    avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=100&fit=crop",
    language: "Arabic",
    tutor: "Fatima H.",
    rating: 5,
    date: "September 2023",
    review:
      "I grew up hearing Arabic at home but never formally learned it. Fatima has helped me connect with my heritage in a way I never expected. She's thoughtful, encouraging, and incredibly skilled at explaining Modern Standard Arabic alongside the dialect I grew up with.",
  },
  {
    id: 8,
    student: "Tom S.",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop",
    language: "Korean",
    tutor: "Ji-ho P.",
    rating: 5,
    date: "August 2023",
    review:
      "I started learning Korean because of K-dramas, but Ji-ho made it so much more than that. The platform is easy to use and I love how I can reschedule lessons without any fuss. I'm now preparing for my TOPIK test after just 5 months — incredible progress!",
  },
  {
    id: 9,
    student: "Olivia M.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    language: "Portuguese",
    tutor: "Lucas A.",
    rating: 5,
    date: "July 2023",
    review:
      "I was planning a trip to Brazil and wanted to go beyond the basics. Lucas taught me practical, real-world Portuguese that I actually used on my trip. People were genuinely impressed. The trial lesson sold me immediately — highly recommend!",
  },
]

const stats = [
  { value: "4.9/5", label: "Average Rating" },
  { value: "12,000+", label: "Reviews" },
  { value: "98%", label: "Recommend Us" },
  { value: "50+", label: "Languages Reviewed" },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-(--light-blue) to-background pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-(--navy) sm:text-5xl">
              What Our Students Say
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Real reviews from real learners. See how My Language Plug has helped thousands of students 
              achieve their language goals.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/tutors">
                  Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-(--navy)">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-(--navy)">Student Reviews</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <Card key={r.id} className="flex flex-col">
                <CardContent className="flex flex-1 flex-col pt-6">
                  <Quote className="mb-4 h-6 w-6 text-primary/40" />
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">"{r.review}"</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                    <Image
                      src={r.avatar}
                      alt={r.student}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-(--navy) text-sm">{r.student}</p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <StarRating rating={r.rating} />
                        <Badge variant="secondary" className="text-xs">{r.language}</Badge>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground whitespace-nowrap">{r.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
