import Link from "next/link"
import { Check, HelpCircle, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { CTASection } from "@/components/cta-section"

const pricingPlans = [
  {
    name: "Pay As You Go",
    description: "Perfect for occasional learners",
    price: null,
    priceDescription: "From $15/hour",
    features: [
      "Access to all verified tutors",
      "Video lessons with screen sharing",
      "Lesson recordings (24hr access)",
      "Basic learning materials",
      "Email support",
    ],
    cta: "Find a Tutor",
    ctaHref: "/tutors",
    popular: false,
  },
  {
    name: "Lesson Packages",
    description: "Private lessons, 50 minutes each",
    price: "From $25.50",
    priceDescription: "/lesson",
    features: [
      "Free 20-minute trial lesson",
      "1 lesson — $30.00/lesson",
      "3 lessons — $28.50/lesson (5% off)",
      "5 lessons — $27.75/lesson (7.5% off)",
      "10 lessons — $27.00/lesson (10% off)",
      "20 lessons — $25.50/lesson (15% off)",
    ],
    cta: "Book a Lesson",
    ctaHref: "/tutors",
    popular: true,
  },
  {
    name: "Corporate",
    description: "For teams and organizations",
    price: "Custom",
    priceDescription: "Contact for pricing",
    features: [
      "Everything in Premium",
      "Volume discounts",
      "Dedicated account manager",
      "Custom learning programs",
      "Team progress reports",
      "API access",
      "SSO integration",
    ],
    cta: "Contact Sales",
    ctaHref: "/contact?inquiry=corporate",
    popular: false,
  },
]

const tutorRates = [
  { language: "Spanish", range: "$15 - $35", average: "$22" },
  { language: "French", range: "$18 - $40", average: "$26" },
  { language: "German", range: "$20 - $45", average: "$28" },
  { language: "Japanese", range: "$25 - $50", average: "$32" },
  { language: "Mandarin", range: "$25 - $50", average: "$30" },
  { language: "Italian", range: "$15 - $35", average: "$24" },
  { language: "Portuguese", range: "$15 - $35", average: "$22" },
  { language: "Korean", range: "$22 - $45", average: "$30" },
]

const faqs = [
  {
    q: "How does pricing work?",
    a: "Each tutor sets their own hourly rate based on their experience and qualifications. You only pay for the lessons you book. Save more by purchasing a lesson package — bundles of 3, 5, 10, or 20 lessons come with discounts of up to 15%.",
  },
  {
    q: "Is there a free trial?",
    a: "Many tutors offer a discounted or free trial lesson so you can experience their teaching style before committing. Look for the 'Trial Available' badge on tutor profiles.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Pre-purchased lesson packages have no expiry pressure — use them at your own pace. Individual lesson cancellations require 24-hour notice.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, PayPal, and Apple Pay. All payments are processed securely through Stripe.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No hidden fees. The per-lesson price shown in each package is the all-in price. Bigger bundles simply give you a better rate.",
  },
  {
    q: "Do you offer refunds?",
    a: "If you're not satisfied with a lesson, you can request a refund within 24 hours. Our satisfaction guarantee ensures you only pay for quality instruction.",
  },
]

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[--light-blue] to-background pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 px-4 py-1.5">
              Simple, Transparent Pricing
            </Badge>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-[--navy] sm:text-5xl md:text-6xl">
              Invest in Your Language Journey
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Choose from flexible pricing options that fit your budget and learning goals. 
              No hidden fees, no long-term commitments.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative flex flex-col ${
                  plan.popular 
                    ? "border-primary shadow-lg ring-1 ring-primary" 
                    : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary px-4 py-1">
                      <Sparkles className="mr-1 h-3 w-3" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="pt-8">
                  <CardTitle className="text-xl text-[--navy]">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <div className="mb-6">
                    {plan.price ? (
                      <>
                        <span className="text-4xl font-bold text-[--navy]">{plan.price}</span>
                        <span className="text-muted-foreground">{plan.priceDescription}</span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-[--navy]">{plan.priceDescription}</span>
                    )}
                  </div>

                  <ul className="mb-8 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link href={plan.ctaHref}>
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tutor Rates Section */}
      <section className="bg-[--light-blue] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[--navy] sm:text-4xl">
              Average Tutor Rates by Language
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Rates vary based on tutor experience, qualifications, and specializations
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-xl border bg-background">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[--navy]">
                    Language
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[--navy]">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="flex items-center gap-1">
                          Price Range
                          <HelpCircle className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Hourly rates set by individual tutors</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[--navy]">
                    Average Rate
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[--navy]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {tutorRates.map((rate, index) => (
                  <tr 
                    key={rate.language} 
                    className={index !== tutorRates.length - 1 ? "border-b" : ""}
                  >
                    <td className="px-6 py-4">
                      <span className="font-medium text-[--navy]">{rate.language}</span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{rate.range}</td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-primary">{rate.average}/hr</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/tutors?language=${rate.language.toLowerCase()}`}>
                          Find Tutors
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[--navy] sm:text-4xl">
              What&apos;s Included in Every Lesson
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              All lessons come with these features, regardless of your plan
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "HD Video Calls",
                description: "Crystal-clear video with screen sharing capabilities",
              },
              {
                title: "Interactive Whiteboard",
                description: "Collaborate in real-time with your tutor",
              },
              {
                title: "Chat & Messaging",
                description: "Communicate with your tutor before and after lessons",
              },
              {
                title: "Lesson Notes",
                description: "Access notes and materials shared during lessons",
              },
              {
                title: "Flexible Scheduling",
                description: "Book lessons that fit your schedule",
              },
              {
                title: "24hr Cancellation",
                description: "Free cancellation up to 24 hours before",
              },
              {
                title: "Progress Tracking",
                description: "Monitor your learning journey over time",
              },
              {
                title: "Satisfaction Guarantee",
                description: "Refund available if you're not satisfied",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border bg-background p-6 text-center"
              >
                <h3 className="font-semibold text-[--navy]">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[--navy] sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg border bg-background p-6">
                <h3 className="font-semibold text-[--navy]">{faq.q}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Still have questions?{" "}
              <Link href="/contact" className="font-medium text-primary hover:underline">
                Contact our support team
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Learning?"
        description="Join thousands of students who are achieving their language goals. Find your perfect tutor today."
        primaryCTA={{ label: "Find Your Tutor", href: "/tutors" }}
        secondaryCTA={{ label: "Book a Free Trial", href: "/tutors" }}
        variant="blue"
      />
    </div>
  )
}
