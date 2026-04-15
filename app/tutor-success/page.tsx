import Image from "next/image"
import Link from "next/link"
import { Star, Quote, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CTASection } from "@/components/cta-section"

const stories = [
  {
    id: 1,
    name: "Maria González",
    role: "Spanish Tutor",
    location: "Madrid, Spain",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    earnings: "$3,200/month",
    students: "45 active students",
    yearsOnPlatform: "2 years",
    quote:
      "Before joining My Language Plug, I was teaching at a local school with a fixed salary and no flexibility. Now I work from home on my own schedule, earning three times what I used to. The platform handles all the admin, so I can focus on what I love — teaching.",
    highlights: ["Left full-time school teaching", "Built a 45-student roster in 8 months", "Now earns £3,200/month on her own schedule"],
  },
  {
    id: 2,
    name: "Jean-Pierre Lefebvre",
    role: "French & English Tutor",
    location: "Paris, France",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    earnings: "$2,800/month",
    students: "38 active students",
    yearsOnPlatform: "3 years",
    quote:
      "I started as a part-time tutor while working at a café. Within 6 months I was earning enough to quit and teach full-time. My Language Plug's vetting process means students trust you from the start, which makes getting bookings so much easier.",
    highlights: ["Transitioned from part-time to full-time in 6 months", "Teaches both French and English", "One of our highest-rated tutors for 2 consecutive years"],
  },
  {
    id: 3,
    name: "Yuki Tanaka",
    role: "Japanese Tutor",
    location: "Tokyo, Japan",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    earnings: "$2,100/month",
    students: "29 active students",
    yearsOnPlatform: "1.5 years",
    quote:
      "As a native Japanese speaker, I always wanted to share my language and culture with the world. My Language Plug gave me the platform, the tools, and the students. The support team is amazing, and the video technology makes it feel like we're in the same room.",
    highlights: ["Specialises in beginners and JLPT preparation", "Hosts weekly conversation circles", "4.9-star average rating across 500+ lessons"],
  },
  {
    id: 4,
    name: "Amara Diallo",
    role: "French & Wolof Tutor",
    location: "Dakar, Senegal",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    earnings: "$1,900/month",
    students: "22 active students",
    yearsOnPlatform: "1 year",
    quote:
      "I'm one of the only Wolof tutors on any platform in the world. My Language Plug supported me in setting up my profile and finding students interested in African languages. It's opened doors I never thought possible and I'm proud to represent my culture.",
    highlights: ["Unique Wolof and Francophone African language specialist", "Grew to 22 students in first year", "Featured in platform's cultural diversity spotlight"],
  },
]

const stats = [
  { value: "500+", label: "Active Tutors" },
  { value: "$2,400", label: "Average Monthly Earnings" },
  { value: "4.8/5", label: "Tutor Satisfaction" },
  { value: "150+", label: "Countries Represented" },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
      ))}
    </div>
  )
}

export default function TutorSuccessPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-(--light-blue) to-background pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-(--navy) sm:text-5xl">
              Tutor Success Stories
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Meet the tutors who have built thriving businesses on My Language Plug. 
              Real stories, real earnings, real impact.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/become-tutor">
                  Join Them <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/tutor-requirements">View Requirements</Link>
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

      {/* Stories */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {stories.map((story, idx) => (
              <div
                key={story.id}
                className={`grid items-center gap-12 md:grid-cols-2 ${idx % 2 === 1 ? "md:[direction:rtl]" : ""}`}
              >
                <div className={idx % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src={story.avatar}
                      alt={story.name}
                      width={80}
                      height={80}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-(--navy)">{story.name}</h3>
                      <p className="text-sm text-muted-foreground">{story.role} · {story.location}</p>
                      <StarRating rating={5} />
                    </div>
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <div className="rounded-lg bg-(--light-blue)/60 p-3 text-center">
                      <p className="text-sm font-semibold text-(--navy)">{story.earnings}</p>
                      <p className="text-xs text-muted-foreground">Monthly</p>
                    </div>
                    <div className="rounded-lg bg-(--light-blue)/60 p-3 text-center">
                      <p className="text-sm font-semibold text-(--navy)">{story.students}</p>
                      <p className="text-xs text-muted-foreground">Students</p>
                    </div>
                    <div className="rounded-lg bg-(--light-blue)/60 p-3 text-center">
                      <p className="text-sm font-semibold text-(--navy)">{story.yearsOnPlatform}</p>
                      <p className="text-xs text-muted-foreground">On Platform</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {story.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <Card className={idx % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  <CardContent className="pt-6">
                    <Quote className="mb-4 h-8 w-8 text-primary/30" />
                    <p className="text-muted-foreground leading-relaxed">"{story.quote}"</p>
                    <p className="mt-4 font-semibold text-(--navy)">— {story.name}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Tutor CTA */}
      <section className="bg-(--light-blue)/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-(--navy)">Your Story Could Be Next</h2>
            <p className="mt-4 text-muted-foreground">
              Join hundreds of successful tutors and start building your language teaching business today.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/become-tutor">
                  Apply to Teach <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/tutor-resources">Explore Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
