import Image from "next/image"
import Link from "next/link"
import { Globe, Heart, Users, Award, Target, Lightbulb, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CTASection } from "@/components/cta-section"
import { StatsSection } from "@/components/stats-section"

const values = [
  {
    icon: Heart,
    title: "Passion for Learning",
    description: "We believe everyone deserves access to quality language education. Our platform connects passionate learners with dedicated tutors who share their love for languages.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "We're building more than a platform—we're creating a global community of language enthusiasts who support and inspire each other.",
  },
  {
    icon: Award,
    title: "Quality & Trust",
    description: "Every tutor is carefully vetted to ensure our students receive the highest quality instruction from qualified, professional educators.",
  },
  {
    icon: Globe,
    title: "Cultural Bridge",
    description: "Languages open doors to new cultures. We help students not just learn words, but understand the rich cultures behind them.",
  },
]

const milestones = [
  { year: "2019", title: "Founded", description: "Started with a vision to make language learning accessible to everyone." },
  { year: "2020", title: "1,000 Students", description: "Reached our first milestone of students on the platform." },
  { year: "2021", title: "Global Expansion", description: "Expanded to 50+ countries with tutors speaking 30+ languages." },
  { year: "2022", title: "10,000 Students", description: "Celebrated 10,000 active learners and 200+ verified tutors." },
  { year: "2023", title: "Award Winning", description: "Recognized as a leading online language learning platform." },
  { year: "2024", title: "The Future", description: "Continuing to innovate and expand our global community." },
]

const team = [
  {
    name: "Sarah Chen",
    role: "Co-Founder & CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Former language teacher with a passion for education technology.",
  },
  {
    name: "Marcus Johnson",
    role: "Co-Founder & CTO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Tech leader with 15+ years building educational platforms.",
  },
  {
    name: "Elena Rossi",
    role: "Head of Education",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Linguistics PhD leading our tutor training and curriculum programs.",
  },
  {
    name: "David Park",
    role: "Head of Community",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Building connections between tutors and students worldwide.",
  },
]

const stats = [
  { value: "10,000+", label: "Active Students" },
  { value: "500+", label: "Expert Tutors" },
  { value: "150+", label: "Countries" },
  { value: "50+", label: "Languages" },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-(--light-blue) to-background pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Our Story
            </span>
            <h1 className="font-serif mt-6 text-4xl font-bold tracking-tight text-(--navy) sm:text-5xl md:text-6xl">
              Connecting the World Through Language
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              We&apos;re on a mission to break down language barriers and help people 
              connect across cultures through personalized, accessible education.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection stats={stats} variant="white" />

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                alt="Diverse group of students learning together"
                width={600}
                height={450}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-primary p-6 text-primary-foreground shadow-lg md:block">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm opacity-90">Student Satisfaction</div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-primary">
                <Target className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">Our Mission</span>
              </div>
              <h2 className="font-serif mt-4 text-3xl font-bold tracking-tight text-(--navy) sm:text-4xl">
                Making Quality Language Education Accessible to Everyone
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We believe that language learning should be personal, affordable, and flexible. 
                That&apos;s why we&apos;ve built a platform that connects motivated learners with 
                expert tutors from around the world.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Our vetted tutors bring native fluency, cultural insights, and personalized 
                teaching approaches that traditional classroom settings can&apos;t match. Whether 
                you&apos;re preparing for a trip, advancing your career, or connecting with heritage, 
                we&apos;re here to help you succeed.
              </p>
              <div className="mt-8 flex gap-4">
                <Button asChild>
                  <Link href="/tutors">
                    Find Your Tutor
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/become-tutor">Become a Tutor</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-(--light-blue) py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-primary">
              <Lightbulb className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">Our Values</span>
            </div>
            <h2 className="font-serif mt-4 text-3xl font-bold tracking-tight text-(--navy) sm:text-4xl">
              What Drives Us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Our core values guide everything we do as we work to transform language education
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {values.map((value) => (
              <Card key={value.title} className="overflow-hidden">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-(--navy)">{value.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-(--navy) sm:text-4xl">
              Our Journey
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              From a small startup to a global language learning platform
            </p>
          </div>

          <div className="relative mt-12">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-border md:block" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex flex-col items-center gap-4 md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="rounded-lg bg-muted/50 p-6">
                      <div className="text-sm font-semibold text-primary">{milestone.year}</div>
                      <h3 className="mt-1 text-lg font-semibold text-(--navy)">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center Point */}
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </div>

                  <div className="hidden flex-1 md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-(--navy) sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Passionate educators and technologists working to transform language learning
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden text-center">
                <CardContent className="p-6">
                  <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-(--navy)">{member.name}</h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-(--navy) sm:text-4xl">
                A Truly Global Platform
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Our community spans 150+ countries, with tutors and students connecting 
                across every time zone. Whether you&apos;re in Tokyo, São Paulo, or New York, 
                you&apos;ll find the perfect tutor for your schedule.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary">150+</div>
                  <div className="text-muted-foreground">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-muted-foreground">Languages</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-muted-foreground">Availability</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">1M+</div>
                  <div className="text-muted-foreground">Lessons Taught</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
                alt="Global connections around the world"
                width={600}
                height={450}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Join Our Global Community"
        description="Whether you want to learn a new language or share your native tongue, we'd love to have you as part of our community."
        primaryCTA={{ label: "Start Learning", href: "/tutors" }}
        secondaryCTA={{ label: "Become a Tutor", href: "/become-tutor" }}
        variant="navy"
      />
    </div>
  )
}
