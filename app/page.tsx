import Link from "next/link"
import Image from "next/image"
import { Search, Globe, Users, Clock, Star, CheckCircle2, ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { TutorCardCompact } from "@/components/tutor-card"
import { CardCarousel } from "@/components/ui/card-carousel"
import { TestimonialCard, TestimonialCardFeatured } from "@/components/testimonial-card"
import { CTASection } from "@/components/cta-section"
import { StatsSection } from "@/components/stats-section"

const featuredTutors = [
  {
    id: "1",
    name: "Maria Santos",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    country: "Spain",
    languages: ["Spanish", "English"],
    rating: 4.9,
    reviews: 234,
    hourlyRate: 25,
    isVerified: true,
  },
  {
    id: "2",
    name: "Jean-Pierre Dubois",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    country: "France",
    languages: ["French", "English", "Spanish"],
    rating: 4.8,
    reviews: 189,
    hourlyRate: 30,
    isVerified: true,
  },
  {
    id: "3",
    name: "Yuki Tanaka",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    country: "Japan",
    languages: ["Japanese", "English"],
    rating: 5.0,
    reviews: 156,
    hourlyRate: 35,
    isVerified: true,
  },
  {
    id: "4",
    name: "Hans Mueller",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    country: "Germany",
    languages: ["German", "English"],
    rating: 4.9,
    reviews: 203,
    hourlyRate: 28,
    isVerified: true,
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
    role: "Marketing Manager",
    content: "I've been learning Spanish for 6 months now and the progress is incredible. My tutor Maria is patient, professional, and makes every lesson enjoyable.",
    rating: 5,
    language: "Spanish",
  },
  {
    name: "Michael Chen",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    role: "Software Engineer",
    content: "The flexibility to schedule lessons around my busy work schedule has been a game-changer. I can now hold business conversations in Japanese.",
    rating: 5,
    language: "Japanese",
  },
  {
    name: "Emma Williams",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
    role: "University Student",
    content: "My French tutor helped me prepare for my study abroad program. I felt confident from day one in Paris thanks to the conversational practice.",
    rating: 5,
    language: "French",
  },
]

const languages = [
  { name: "Spanish", flag: "🇪🇸", tutors: 520 },
  { name: "French", flag: "🇫🇷", tutors: 380 },
  { name: "German", flag: "🇩🇪", tutors: 290 },
  { name: "Japanese", flag: "🇯🇵", tutors: 210 },
  { name: "Chinese", flag: "🇨🇳", tutors: 340 },
  { name: "Italian", flag: "🇮🇹", tutors: 180 },
  { name: "Portuguese", flag: "🇧🇷", tutors: 220 },
  { name: "Korean", flag: "🇰🇷", tutors: 150 },
]

const stats = [
  { value: "10,000+", label: "Active Students" },
  { value: "500+", label: "Expert Tutors" },
  { value: "50+", label: "Languages" },
  { value: "98%", label: "Satisfaction Rate" },
]

const features = [
  {
    icon: Users,
    title: "Vetted Professionals",
    description: "Every tutor is carefully screened and verified for their teaching expertise and language proficiency.",
    image: "/images/features/vetted-professionals.jpg",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book lessons that fit your schedule. Available 24/7 with tutors across all time zones.",
    image: "/images/features/flexible-scheduling.jpg",
  },
  {
    icon: Globe,
    title: "Native Speakers",
    description: "Learn from native speakers who understand the cultural nuances and real-world usage.",
    image: "/images/features/native-speakers.jpg",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F0F6FA] pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-4 px-4 py-1.5">
                <Star className="mr-1 h-3 w-3 fill-amber-400 text-amber-400" />
                Rated 4.9/5 by 10,000+ students
              </Badge>
              <h1 className="font-serif text-balance text-4xl font-bold tracking-tight text-[#042230] sm:text-5xl md:text-6xl">
                Learn Any Language with{" "}
                <span>Expert </span>
                <span className="text-[#5A8DA5]">Tutors</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
                Flexible scheduling, affordable rates, and real results.
              </p>

              {/* Search Bar */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="What language do you want to learn?"
                    className="h-12 pl-10 pr-4"
                  />
                </div>
                <Button size="lg" className="h-12 px-16 text-base font-semibold">
                  Find Tutors
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Free trial lesson</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Verified tutors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Native speakers</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-square w-full max-w-lg mx-auto">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=800&fit=crop"
                  alt="Students learning languages online"
                  fill
                  className="rounded-2xl object-cover shadow-2xl"
                  priority
                />
                {/* Floating Card */}
                <div className="absolute -left-8 bottom-8 rounded-xl bg-background p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="h-8 w-8 rounded-full bg-primary ring-2 ring-background"
                        />
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">500+ Tutors Online</p>
                      <p className="text-xs text-muted-foreground">Ready to help you now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Stats Section */}
      <StatsSection stats={stats} variant="white" />



      {/* Languages Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Popular Languages
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Choose from over 50 languages taught by native speakers and certified professionals
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {languages.map((lang) => (
              <Link
                key={lang.name}
                href={`/tutors?language=${lang.name.toLowerCase()}`}
                className="group flex items-center justify-between rounded-xl border border-border bg-background p-4 transition-all hover:border-primary hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{lang.flag}</span>
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary">
                      {lang.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {lang.tutors} tutors
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/languages">View All Languages</Link>
            </Button>
          </div>
        </div>
      </section>



      {/* Features Section */}
      <section className="bg-[#F0F6FA] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose My Language Plug?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We&apos;re committed to providing the best language learning experience
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl bg-background shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Feature Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                {/* Feature Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Start learning in three simple steps
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Find Your Tutor",
                description: "Browse our vetted tutors, read reviews, and find the perfect match for your learning style and goals.",
              },
              {
                step: "02",
                title: "Book a Trial Lesson",
                description: "Schedule a free trial lesson to experience the teaching style and ensure it's the right fit for you.",
              },
              {
                step: "03",
                title: "Start Learning",
                description: "Begin your personalized language journey with flexible scheduling and ongoing support.",
              },
            ].map((item, index) => (
              <div key={item.step} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {item.step}
                </div>
                {index < 2 && (
                  <div className="absolute left-[60%] top-8 hidden h-0.5 w-[80%] bg-border md:block" />
                )}
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Featured Tutors */}
      <section className="bg-[#F0F6FA] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Featured Tutors
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Top-rated tutors ready to help you succeed
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/tutors">
                View All Tutors
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredTutors.map((tutor) => (
              <TutorCardCompact key={tutor.id} {...tutor} />
            ))}
          </div>

          <div className="mt-12">
            <CardCarousel
              images={featuredTutors.map((tutor) => ({
                src: tutor.image,
                alt: tutor.name,
              }))}
              autoplayDelay={3000}
              showPagination={true}
              showNavigation={true}
            />
          </div>
        </div>
      </section>



      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Our Students Say
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Join thousands of satisfied learners who achieved their language goals
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="mt-12">
            <TestimonialCardFeatured
              name="David Kim"
              image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
              role="Business Executive"
              content="After just 3 months of lessons, I was able to lead my first business meeting in Mandarin. The personalized approach and native-speaking tutors made all the difference. I couldn't recommend My Language Plug more highly."
              rating={5}
              language="Mandarin"
            />
          </div>

          {/* Testimonial Grid */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Language Journey?"
        description="Join thousands of learners who have achieved fluency with personalized tutoring. Book your free trial lesson today."
        primaryCTA={{ label: "Find Your Tutor", href: "/tutors" }}
        secondaryCTA={{ label: "Learn More", href: "/how-it-works" }}
        variant="navy"
      />
    </div>
  )
}
