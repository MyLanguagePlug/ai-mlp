import Link from "next/link"
import Image from "next/image"
import {
  Building2,
  Globe,
  Users,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Headphones,
  Shield,
  TrendingUp,
  Clock,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CTASection } from "@/components/cta-section"

const benefits = [
  {
    icon: Globe,
    title: "Global-Ready Workforce",
    description:
      "Equip your teams with the language skills they need to close deals, lead meetings, and build relationships in international markets.",
  },
  {
    icon: Users,
    title: "Expert Native Tutors",
    description:
      "All our tutors are verified native or near-native speakers with professional teaching credentials and business language expertise.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Lessons fit around your team's calendar — mornings, evenings, weekends. One-on-one or small-group formats available.",
  },
  {
    icon: BarChart3,
    title: "Progress Reporting",
    description:
      "Receive detailed monthly reports on each employee's progress, attendance, and proficiency milestones.",
  },
  {
    icon: Shield,
    title: "Dedicated Account Manager",
    description:
      "Your organisation gets a single point of contact to handle onboarding, scheduling changes, and ongoing programme management.",
  },
  {
    icon: TrendingUp,
    title: "Measurable ROI",
    description:
      "Companies that invest in language training report higher employee retention, faster deal cycles, and stronger client relationships.",
  },
]

const languages = [
  "Spanish",
  "French",
  "German",
  "Mandarin",
  "Japanese",
  "Portuguese",
  "Arabic",
  "Italian",
  "Korean",
  "Russian",
  "Dutch",
  "Polish",
]

const howItWorks = [
  {
    step: "1",
    title: "Tell Us About Your Needs",
    description:
      "Fill in a short brief — which languages, how many employees, preferred lesson format, and your timeline.",
  },
  {
    step: "2",
    title: "We Match Your Team",
    description:
      "Our team handpicks tutors based on your industry, language goals, and employee level — from complete beginner to advanced.",
  },
  {
    step: "3",
    title: "Lessons Begin",
    description:
      "Employees book lessons directly through their personal dashboard. Live video lessons with recordings for review.",
  },
  {
    step: "4",
    title: "Track & Scale",
    description:
      "Monitor team progress with your corporate dashboard and easily add new employees or languages as your business grows.",
  },
]

const testimonials = [
  {
    quote:
      "Since partnering with My Language Plug, our sales team&apos;s Spanish has improved dramatically. We&apos;ve closed three new Latin American accounts in six months.",
    author: "James Whitfield",
    role: "VP of Sales",
    company: "TechScale Ltd",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop",
  },
  {
    quote:
      "The flexible scheduling and dedicated account manager made rolling out French training across our Paris and London offices completely seamless.",
    author: "Natalie Bower",
    role: "Head of L&D",
    company: "Meridian Group",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop",
  },
  {
    quote:
      "Our engineers needed technical Mandarin for client calls. The tutors understood the context immediately and tailored every lesson to our workflow.",
    author: "David Park",
    role: "Engineering Director",
    company: "Nexora Systems",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
  },
]

const stats = [
  { value: "500+", label: "Corporate Clients" },
  { value: "50+", label: "Languages Available" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Tutor Availability" },
]

export default function CorporatePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-(--light-blue) pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge className="mb-4">Corporate Language Training</Badge>
              <h1 className="font-serif text-4xl font-bold tracking-tight text-(--navy) sm:text-5xl md:text-6xl">
                Language Training Built for Business
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
                Partner with My Language Plug to upskill your workforce with personalised
                1-on-1 language lessons delivered by expert tutors — on your schedule, at
                your pace.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact?inquiry=corporate">
                    Get a Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/tutors">Browse Our Tutors</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
                alt="Corporate team in a meeting room"
                width={600}
                height={450}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-primary p-6 text-primary-foreground shadow-lg md:block">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-90">Enterprise Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border bg-background py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="text-3xl font-bold text-primary">{stat.value}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-primary">
              <Briefcase className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Why My Language Plug
              </span>
            </div>
            <h2 className="font-serif mt-4 text-3xl font-bold tracking-tight text-(--navy) sm:text-4xl">
              Everything Your Organisation Needs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We handle the tutor matching, scheduling, and reporting so your L&amp;D team
              can focus on what matters most.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="overflow-hidden">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-(--navy)">{benefit.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="bg-(--light-blue) py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-primary">
              <Globe className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Languages We Offer
              </span>
            </div>
            <h2 className="font-serif mt-4 text-3xl font-bold tracking-tight text-(--navy) sm:text-4xl">
              50+ Languages for Every Market
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              From the world&apos;s most spoken business languages to specialist regional
              dialects — we have a verified tutor for every need.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {languages.map((lang) => (
              <Link
                key={lang}
                href={`/tutors?language=${lang.toLowerCase()}`}
                className="rounded-full bg-background px-5 py-2 text-sm font-medium text-(--navy) shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {lang}
              </Link>
            ))}
            <span className="rounded-full bg-background px-5 py-2 text-sm font-medium text-muted-foreground shadow-sm">
              + more
            </span>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-(--navy) sm:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              From first enquiry to first lesson in as little as 48 hours
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-(--navy)">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-primary">
              <Star className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Client Stories
              </span>
            </div>
            <h2 className="font-serif mt-4 text-3xl font-bold tracking-tight text-(--navy) sm:text-4xl">
              Trusted by Leading Businesses
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.author} className="flex flex-col justify-between">
                <CardContent className="p-6">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 leading-relaxed text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-3">
                    <Image
                      src={t.avatar}
                      alt={t.author}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-(--navy)">{t.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {t.role}, {t.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Callout */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 text-primary">
                <Headphones className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Custom Pricing
                </span>
              </div>
              <h2 className="font-serif mt-4 text-3xl font-bold tracking-tight text-(--navy) sm:text-4xl">
                Pricing Tailored to Your Team
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Whether you have 5 employees or 500, we build a package around your headcount,
                lesson frequency, and budget. Volume discounts available for teams of 10+.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Volume discounts for teams of 10 or more",
                  "Mix and match languages across your organisation",
                  "Flexible contract lengths — monthly or annual",
                  "Centralised billing and invoicing",
                  "Free trial lessons for new starters",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact?inquiry=corporate">
                    Request a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">View Individual Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop"
                alt="Business team collaborating"
                width={600}
                height={450}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Build a Language-Ready Team?"
        description="Talk to our corporate team today and get a custom programme designed for your business."
        primaryCTA={{ label: "Get a Free Consultation", href: "/contact?inquiry=corporate" }}
        secondaryCTA={{ label: "Browse Our Tutors", href: "/tutors" }}
        variant="navy"
      />
    </div>
  )
}
