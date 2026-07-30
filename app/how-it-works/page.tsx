import Link from "next/link"
import Image from "next/image"
import {
  Search,
  Calendar,
  Video,
  Star,
  UserPlus,
  BookOpen,
  Globe,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  CreditCard,
  ShieldCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CTASection } from "@/components/cta-section"

const studentSteps = [
  {
    icon: Search,
    step: "1",
    title: "Find Your Perfect Tutor",
    description:
      "Browse hundreds of verified tutors filtered by language, price, availability, and teaching style. Read real student reviews and watch intro videos to find the right match.",
  },
  {
    icon: Calendar,
    step: "2",
    title: "Book a Free Trial Lesson",
    description:
      "Start with a free 20-minute trial lesson — no credit card required. Get a feel for the tutor's style before committing to a full package.",
  },
  {
    icon: Video,
    step: "3",
    title: "Learn Live, 1-on-1",
    description:
      "Join your lesson via our built-in video classroom. Share your screen, use the interactive whiteboard, and enjoy a personalised lesson tailored to your goals.",
  },
  {
    icon: Star,
    step: "4",
    title: "Track Progress & Keep Going",
    description:
      "After each lesson, review notes, replay recordings, and set goals for next time. Purchase lesson packages to save money and stay consistent.",
  },
]

const tutorSteps = [
  {
    icon: UserPlus,
    step: "1",
    title: "Create Your Profile",
    description:
      "Sign up, complete your tutor profile, and record a short intro video. Showcase your qualifications, teaching experience, and languages.",
  },
  {
    icon: ShieldCheck,
    step: "2",
    title: "Get Verified",
    description:
      "Our team reviews your application and verifies your identity and qualifications. Most tutors are approved within 1–3 business days.",
  },
  {
    icon: BookOpen,
    step: "3",
    title: "Set Your Schedule & Rates",
    description:
      "Choose when you want to teach and how much to charge per hour. You have full control — teach as little or as much as you like.",
  },
  {
    icon: CreditCard,
    step: "4",
    title: "Teach & Get Paid",
    description:
      "Hold your lessons and get paid automatically every week. Withdraw earnings to your bank account or PayPal with no hidden fees.",
  },
]

const features = [
  {
    icon: Video,
    title: "Integrated Video Classroom",
    description:
      "No need to download anything. Our built-in video platform includes HD video, screen sharing, an interactive whiteboard, and lesson recording.",
  },
  {
    icon: MessageCircle,
    title: "Direct Messaging",
    description:
      "Communicate with your tutor before and after lessons. Share files, homework, and notes directly in the app.",
  },
  {
    icon: Globe,
    title: "150+ Languages",
    description:
      "From Spanish and Mandarin to less-commonly-taught languages like Swahili or Catalan — we have expert tutors for almost any language.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure Payments",
    description:
      "All payments are processed securely. Funds are held in escrow and only released after your lesson is completed.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description:
      "Lessons fit your schedule. Book same-day or plan weeks ahead — your tutor's live availability is always up to date.",
  },
  {
    icon: Star,
    title: "Verified Reviews",
    description:
      "Every review on the platform comes from a real, verified student who completed a lesson. No fake ratings.",
  },
]

const faqs = [
  {
    question: "Is the trial lesson really free?",
    answer:
      "Yes — your first 20-minute trial lesson with any tutor is completely free. No credit card is required to book. If you love the lesson, you can book a full package afterwards.",
  },
  {
    question: "What technology do I need?",
    answer:
      "Just a device with a modern web browser (Chrome, Firefox, Safari, or Edge), a webcam, and a microphone. Our classroom runs entirely in your browser — no downloads needed.",
  },
  {
    question: "What if I don't like my tutor?",
    answer:
      "No problem. Simply try a different tutor. We have hundreds of options, and our trial lesson is designed to help you find the right fit before committing.",
  },
  {
    question: "Can I reschedule a lesson?",
    answer:
      "Yes. You can reschedule or cancel a lesson up to 12 hours before it starts without any charge. Cancellations within 12 hours may be subject to a partial fee.",
  },
  {
    question: "How do lesson packages work?",
    answer:
      "Lesson packages let you pre-purchase multiple lessons at a discounted rate. Credits are stored in your account and used automatically when you book lessons with your tutor.",
  },
  {
    question: "Are tutors background-checked?",
    answer:
      "All tutors go through our identity verification and qualification review process before they can teach on the platform. Many also hold recognised teaching certifications.",
  },
]

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-(--light-blue) to-background pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-(--navy) sm:text-5xl">
              How My Language Plug Works
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Whether you want to learn a new language or teach one, getting started is quick and
              easy. Here's everything you need to know.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/tutors">
                  Find a Tutor <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/become-tutor">Become a Tutor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* For Students */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-(--navy) sm:text-4xl">For Students</h2>
            <p className="mt-4 text-muted-foreground">
              Start learning a language in four simple steps.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {studentSteps.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="relative flex flex-col items-start">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
                    Step {item.step}
                  </span>
                  <h3 className="mb-2 text-lg font-semibold text-(--navy)">{item.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/tutors">
                Browse Tutors <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Divider image */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative h-56 overflow-hidden rounded-2xl shadow-md sm:h-72 md:h-80">
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&h=500&fit=crop"
            alt="Student on a video call with a language tutor"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-(--navy)/60 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 sm:px-16">
            <div className="max-w-sm">
              <p className="text-xl font-bold leading-snug text-white sm:text-2xl">
                &ldquo;I went from zero to conversational Spanish in just 3 months.&rdquo;
              </p>
              <p className="mt-3 text-sm text-white/80">— James T., student from the UK</p>
            </div>
          </div>
        </div>
      </div>

      {/* For Tutors */}
      <section className="bg-(--light-blue)/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-(--navy) sm:text-4xl">For Tutors</h2>
            <p className="mt-4 text-muted-foreground">
              Share your language skills and earn on your own schedule.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {tutorSteps.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="relative flex flex-col items-start">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
                    Step {item.step}
                  </span>
                  <h3 className="mb-2 text-lg font-semibold text-(--navy)">{item.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/become-tutor">
                Start Teaching <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-(--navy) sm:text-4xl">
              Everything You Need in One Place
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our platform is built to make language learning seamless, safe, and effective.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feat) => {
              const Icon = feat.icon
              return (
                <Card key={feat.title} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mb-2 font-semibold text-(--navy)">{feat.title}</h3>
                    <p className="text-sm leading-7 text-muted-foreground">{feat.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-(--light-blue)/30 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-primary/20 bg-background p-8 text-center shadow-sm sm:p-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-(--navy) sm:text-3xl">
                Our Satisfaction Guarantee
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
                Not happy with your first paid lesson? We&apos;ll refund it — no questions asked.
                We want you to find the perfect tutor, and we&apos;ll make it right if you don&apos;t.
              </p>
            </div>
            <Button size="lg" asChild>
              <Link href="/tutors">
                Book Your Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-(--navy)">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="font-semibold text-(--navy)">{faq.question}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-muted-foreground">
              Still have questions?{" "}
              <Link href="/faq" className="font-medium text-primary hover:underline">
                Visit our full FAQ
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="font-medium text-primary hover:underline">
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Your Language Journey?"
        description="Find your perfect tutor today and book a free 20-minute trial lesson — no credit card needed."
        primaryCTA={{ label: "Find a Tutor", href: "/tutors" }}
        secondaryCTA={{ label: "Become a Tutor", href: "/become-tutor" }}
      />
    </div>
  )
}
