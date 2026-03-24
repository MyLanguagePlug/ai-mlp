import Image from "next/image"
import Link from "next/link"
import { 
  DollarSign, 
  Clock, 
  Globe, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Calendar,
  Laptop,
  Award,
  TrendingUp
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CTASection } from "@/components/cta-section"
import { StatsSection } from "@/components/stats-section"

const benefits = [
  {
    icon: DollarSign,
    title: "Earn $15-50+/hour",
    description: "Set your own rates and earn what you're worth. Top tutors earn over $5,000 per month.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Teach whenever suits you. Set your own hours and work from anywhere in the world.",
  },
  {
    icon: Globe,
    title: "Global Students",
    description: "Connect with motivated learners from 150+ countries who are eager to learn.",
  },
  {
    icon: Users,
    title: "Supportive Community",
    description: "Join a network of passionate educators with resources, training, and support.",
  },
]

const requirements = [
  "Native or fluent proficiency in the language you teach",
  "Teaching experience or relevant certification (preferred but not required)",
  "Reliable internet connection and quiet teaching environment",
  "Passion for teaching and helping students succeed",
  "Availability for at least 5 hours per week",
  "Professional attitude and strong communication skills",
]

const steps = [
  {
    number: "01",
    title: "Apply Online",
    description: "Fill out our application form with your qualifications, experience, and teaching philosophy.",
  },
  {
    number: "02",
    title: "Complete Verification",
    description: "Pass our screening process including language assessment and background verification.",
  },
  {
    number: "03",
    title: "Create Your Profile",
    description: "Build your tutor profile with a video introduction, schedule, and teaching specialties.",
  },
  {
    number: "04",
    title: "Start Teaching",
    description: "Go live on the platform and start connecting with students worldwide.",
  },
]

const stats = [
  { value: "$", label: "Reliable Monthly Earnings" },
  { value: "10,000+", label: "Active Students" },
  { value: "150+", label: "Countries Reached" },
  { value: "95%", label: "Tutor Satisfaction" },
]

const testimonials = [
  {
    name: "Elena Rodriguez",
    role: "Spanish Tutor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    content: "Teaching on My Language Plug has transformed my career. I now have a steady stream of students from around the world and earn twice what I made teaching locally.",
    earnings: "$4,200/month",
  },
  {
    name: "Kenji Yamamoto",
    role: "Japanese Tutor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    content: "The flexibility is incredible. I teach from home, set my own schedule, and have built genuine connections with students who share my passion for Japanese.",
    earnings: "$3,800/month",
  },
  {
    name: "Sophie Martin",
    role: "French Tutor",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    content: "I started as a part-time tutor while finishing my degree. Now I teach full-time and have the freedom to travel while maintaining my student base.",
    earnings: "$5,100/month",
  },
]

export default function BecomeTutorPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-(--light-blue) pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Join 500+ Expert Tutors
              </span>
              <h1 className="font-serif mt-6 text-balance text-4xl font-bold tracking-tight text-[#042230] sm:text-5xl md:text-6xl">
                Share Your Language,{" "}
                <span className="text-(--accent-blue)">Change <span className="text-[#5A8DA5]">Lives</span></span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
                Turn your language skills into a rewarding career. Set your own rates, 
                work from anywhere, and connect with motivated learners worldwide.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <Link href="#apply">
                    Become A Tutor
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#learn-more">Learn More</Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-8 lg:justify-start">
                <div>
                  <div className="text-2xl font-bold text-(--navy)">$15-50+</div>
                  <div className="text-sm text-muted-foreground">Per Hour</div>
                </div>
                <div className="h-10 w-px bg-border" />
                <div>
                  <div className="text-2xl font-bold text-(--navy)">10,000+</div>
                  <div className="text-sm text-muted-foreground">Active Students</div>
                </div>
                <div className="h-10 w-px bg-border" />
                <div>
                  <div className="text-2xl font-bold text-(--navy)">150+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
                <Image
                  src="https://github.com/user-attachments/assets/281e8164-786b-45a7-bc56-c07b92b4df33"
                  alt="Students learning languages online"
                  fill
                  className="rounded-2xl object-cover shadow-2xl"
                  priority
                />
                {/* Earnings Card */}
                <div className="absolute -left-8 bottom-12 rounded-xl bg-background p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">This month</p>
                      <p className="text-xl font-bold text-(--navy)">$4,250 earned</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── "How It Works" Get Started section – MLP branded ───────────────── */}
      <section className="border-b border-border bg-(--light-blue) py-14 md:py-20" id="apply">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section label */}
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              How it works
            </span>
          </div>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
            {/* Left: headline + numbered steps + CTA */}
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#042230] sm:text-4xl md:text-[2.6rem] leading-tight">
                Turn your language skills into a{" "}
                <span className="text-(--accent-blue)">rewarding career</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                Joining My Language Plug is simple. Follow three easy steps and start connecting
                with motivated learners from around the world.
              </p>

              {/* Numbered steps — MLP navy circles */}
              <div className="mt-8 flex items-start gap-0">
                {[
                  { n: "1", title: "Sign up",       sub: "to create your tutor profile" },
                  { n: "2", title: "Get approved",  sub: "by our team in 5 business days" },
                  { n: "3", title: "Start earning", sub: "by teaching students all over the world" },
                ].map((s, i, arr) => (
                  <div key={s.n} className="flex items-start">
                    <div className="flex flex-col items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#354d73] text-sm font-bold text-white shadow-sm">
                        {s.n}
                      </div>
                      <p className="mt-3 text-sm font-semibold text-[#042230] leading-tight">{s.title}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground leading-snug max-w-[110px]">{s.sub}</p>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="mx-3 mt-5 h-px w-16 shrink-0 bg-[#354d73]/30" />
                    )}
                  </div>
                ))}
              </div>

              <Button size="lg" className="mt-8" asChild>
                <Link href="/signup">
                  Create your tutor profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Right: image with brand overlay card */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=640&fit=crop"
                  alt="Tutor teaching online"
                  fill
                  className="object-cover"
                />
              </div>
              {/* MLP-branded stat overlay */}
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-[#354d73] px-5 py-4 text-white shadow-lg">
                <p className="text-xs font-medium opacity-80">Average monthly earnings</p>
                <p className="mt-0.5 text-2xl font-bold">$3,500 – $5,000</p>
              </div>
            </div>
          </div>

          {/* Three feature cards — MLP card style with icons */}
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: DollarSign,
                title: "Set your own rate",
                body: "Choose your hourly rate and change it anytime. On average, English tutors on our platform charge $15–25 per hour.",
              },
              {
                icon: Clock,
                title: "Teach anytime, anywhere",
                body: "Decide when and how many hours you want to teach. No minimum time commitment or fixed schedule — be your own boss.",
              },
              {
                icon: Globe,
                title: "Grow professionally",
                body: "Once approved, access our educator resources and dedicated support team to help you thrive and grow your student base.",
              },
            ].map(card => (
              <Card key={card.title} className="bg-white shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <card.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-[#042230]">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24" id="learn-more">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-(--navy) sm:text-4xl">
              Why Teach With Us?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Join our community of educators and enjoy the benefits of teaching online
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-(--navy)">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={stats} variant="blue" />

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-(--navy) sm:text-4xl">
              How to Get Started
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Join our platform in four simple steps
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-(--light-blue) text-2xl font-bold text-primary">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-[60%] top-8 hidden h-0.5 w-[80%] bg-border lg:block" />
                )}
                <h3 className="mt-6 text-lg font-semibold text-(--navy)">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="bg-(--light-blue) py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-(--navy) sm:text-4xl">
                What We Look For
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We welcome tutors of all backgrounds. Here&apos;s what makes a great tutor on our platform.
              </p>

              <ul className="mt-8 space-y-4">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" className="mt-8" asChild>
                <Link href="#apply">
                  Check If You Qualify
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                alt="Diverse group of language tutors"
                width={600}
                height={450}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-(--navy) sm:text-4xl">
              Hear From Our Tutors
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Join hundreds of successful tutors who have built rewarding careers with us
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="h-full">
                <CardContent className="flex h-full flex-col p-6">
                  <p className="flex-1 text-muted-foreground leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-4 border-t pt-6">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-(--navy)">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">{testimonial.earnings}</p>
                      <p className="text-xs text-muted-foreground">Avg. earnings</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-(--navy) sm:text-4xl">
              Everything You Need to Succeed
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We provide the tools and support to help you build a successful teaching career
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Laptop,
                title: "Professional Platform",
                description: "HD video calls, screen sharing, interactive whiteboard, and scheduling tools.",
              },
              {
                icon: Calendar,
                title: "Smart Scheduling",
                description: "Automated booking, reminders, and timezone management for seamless sessions.",
              },
              {
                icon: DollarSign,
                title: "Secure Payments",
                description: "Weekly payouts with multiple withdrawal options and transparent earnings.",
              },
              {
                icon: Award,
                title: "Certification Support",
                description: "Resources to help you earn teaching certifications and improve your skills.",
              },
              {
                icon: Users,
                title: "Community Access",
                description: "Connect with fellow tutors, share tips, and learn from experienced educators.",
              },
              {
                icon: TrendingUp,
                title: "Growth Tools",
                description: "Analytics, performance insights, and marketing support to grow your business.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-xl bg-background p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-(--navy)">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-(--navy) sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 space-y-6">
            {[
              {
                q: "How much can I earn as a tutor?",
                a: "Tutors set their own rates, typically ranging from $15-50+ per hour. Your earnings depend on your experience, language, and hours worked. Top tutors earn over $5,000 per month.",
              },
              {
                q: "Do I need teaching experience?",
                a: "While teaching experience is preferred, it's not required. We value passion, communication skills, and language proficiency. We provide resources to help new tutors succeed.",
              },
              {
                q: "How do I get paid?",
                a: "We offer weekly payouts via PayPal, bank transfer, or Payoneer. You'll receive 80% of your lesson fee, with the remainder covering platform costs.",
              },
              {
                q: "What equipment do I need?",
                a: "You'll need a computer with a webcam, stable internet connection, and a quiet space for teaching. We provide the video platform and teaching tools.",
              },
              {
                q: "How long does the application process take?",
                a: "Most applications are reviewed within 3-5 business days. If approved, you can complete your profile and start teaching within a week.",
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-lg border bg-background p-6">
                <h3 className="font-semibold text-(--navy)">{faq.q}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Teaching?"
        description="Join our community of expert tutors and build a rewarding career sharing your language skills with learners worldwide."
        primaryCTA={{ label: "Apply Now", href: "#apply" }}
        secondaryCTA={{ label: "Contact Us", href: "/contact" }}
        variant="navy"
      />
    </div>
  )
}
