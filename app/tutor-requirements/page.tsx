import Link from "next/link"
import { CheckCircle, XCircle, ArrowRight, GraduationCap, Globe, Video, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CTASection } from "@/components/cta-section"

const requirements = [
  {
    category: "Language Proficiency",
    icon: Globe,
    required: [
      "Native speaker OR C2-level proficiency in the language you wish to teach",
      "Ability to explain grammar and structure clearly in English or the target language",
      "Clear pronunciation and strong verbal communication skills",
    ],
  },
  {
    category: "Education & Experience",
    icon: GraduationCap,
    required: [
      "Teaching qualification (TEFL, CELTA, DELTA, or equivalent) preferred but not mandatory",
      "Relevant university degree is a bonus",
      "At least 1 year of tutoring, teaching, or coaching experience recommended",
    ],
  },
  {
    category: "Technical Setup",
    icon: Video,
    required: [
      "Stable internet connection (minimum 10 Mbps download / 5 Mbps upload)",
      "Computer, laptop, or tablet with a working webcam",
      "Headset or microphone with good audio quality",
      "Well-lit, quiet background free from distractions",
    ],
  },
  {
    category: "Availability & Commitment",
    icon: Clock,
    required: [
      "Minimum 5 hours per week availability",
      "Consistent and punctual attendance for scheduled lessons",
      "Commitment to providing 24-hour advance notice for cancellations",
      "Willingness to prepare lesson materials and give homework/feedback",
    ],
  },
]

const mustHaves = [
  "Passion for teaching and helping students grow",
  "Patience, positivity, and an encouraging attitude",
  "Ability to adapt teaching style to different learning needs",
  "Professionalism and reliability",
  "Respect for student confidentiality and platform policies",
]

const notRequired = [
  "A formal teaching degree (though it helps)",
  "Full-time availability — part-time tutors are welcome",
  "Experience with every language level — you choose which you teach",
  "To be a citizen of any specific country",
]

const steps = [
  { number: "01", title: "Apply Online", description: "Fill out our tutor application with your background, qualifications, and teaching experience." },
  { number: "02", title: "Interview", description: "Have a short video interview with our team to assess your communication skills and enthusiasm." },
  { number: "03", title: "Trial Lesson", description: "Conduct a demo lesson so we can evaluate your teaching style and methodology." },
  { number: "04", title: "Profile Setup", description: "Once approved, set up your tutor profile, availability, and lesson pricing." },
  { number: "05", title: "Start Teaching", description: "Go live and start accepting students. Our support team is always here to help." },
]

export default function TutorRequirementsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-(--light-blue) to-background pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-(--navy) sm:text-5xl">
              Tutor Requirements
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We're looking for passionate, skilled educators who want to help students reach their language goals. 
              Here's everything you need to know before applying.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/become-tutor">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/tutor-resources">Tutor Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-(--navy)">What We Look For</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {requirements.map((req) => {
              const Icon = req.icon
              return (
                <Card key={req.category}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-(--navy)">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      {req.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {req.required.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Must Have / Not Required */}
      <section className="bg-(--light-blue)/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-(--navy)">Must-Have Qualities</h2>
              <ul className="space-y-3">
                {mustHaves.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-bold text-(--navy)">Not Required</h2>
              <ul className="space-y-3">
                {notRequired.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-(--navy)">The Application Process</h2>
          <div className="mx-auto max-w-3xl space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-(--navy)">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/become-tutor">
                Start Your Application <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
