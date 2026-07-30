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

const SITE_DOMAIN = "ai-mlp.com"

const signupSteps = [
  {
    number: "01",
    title: "Create Your Account",
    description: "Sign up and choose your role. Select 'I want to teach' to start your tutor journey on My Language Plug.",
  },
  {
    number: "02",
    title: "Build Your Profile",
    description: "Add your photo, languages, specialties, certifications, and set your availability and lesson pricing.",
  },
  {
    number: "03",
    title: "Go Live & Teach",
    description: "Once approved, your profile goes live. Students can find and book you — start earning right away.",
  },
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
          <h2 className="mb-4 text-center text-3xl font-bold text-(--navy)">How to Sign Up</h2>
          <p className="mb-12 text-center text-muted-foreground max-w-2xl mx-auto">
            Getting started as a tutor takes just a few minutes. Here&apos;s exactly what the process looks like.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Step 1 – Create Your Account */}
            <div className="flex flex-col">
              {/* Browser mockup */}
              <div className="rounded-2xl border bg-white shadow-md overflow-hidden mb-5">
                {/* Chrome bar */}
                <div className="bg-gray-100 px-3 py-2 flex items-center gap-2 border-b">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white rounded-md px-2 py-0.5 text-[10px] text-muted-foreground border truncate">
                    {SITE_DOMAIN}/signup
                  </div>
                </div>
                {/* Page */}
                <div className="bg-[#F0F6FA] px-4 pt-4 pb-5 select-none">
                  <p className="text-center text-[11px] font-bold text-[#042230] mb-1">My Language Plug</p>
                  <p className="text-center text-[9px] text-muted-foreground mb-3">
                    Welcome! Let&apos;s get you started 👋
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    {/* Student card – muted */}
                    <div className="rounded-xl border-2 border-gray-200 bg-white p-2.5 text-center opacity-50">
                      <div className="text-xl mb-1">🎓</div>
                      <div className="text-[9px] font-semibold text-gray-600">I want to learn</div>
                    </div>
                    {/* Tutor card – selected */}
                    <div className="relative rounded-xl border-2 border-[#5A8DA5] bg-[#5A8DA5] p-2.5 text-center shadow-md">
                      <div className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white">
                        <span className="text-[#5A8DA5] text-[8px] font-bold">✓</span>
                      </div>
                      <div className="text-xl mb-1">🧑‍🏫</div>
                      <div className="text-[9px] font-bold text-white">I want to teach</div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-[#5A8DA5] py-1.5 text-center text-[9px] font-semibold text-white">
                    Continue as Tutor →
                  </div>
                </div>
              </div>
              {/* Step info */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xs">
                  {signupSteps[0].number}
                </div>
                <div>
                  <h3 className="font-semibold text-(--navy)">{signupSteps[0].title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{signupSteps[0].description}</p>
                </div>
              </div>
            </div>

            {/* Step 2 – Build Your Profile */}
            <div className="flex flex-col">
              <div className="rounded-2xl border bg-white shadow-md overflow-hidden mb-5">
                <div className="bg-gray-100 px-3 py-2 flex items-center gap-2 border-b">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white rounded-md px-2 py-0.5 text-[10px] text-muted-foreground border truncate">
                    {SITE_DOMAIN}/tutor/profile
                  </div>
                </div>
                <div className="bg-white px-4 pt-4 pb-5 select-none">
                  {/* Avatar + name row */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-[#5A8DA5]/20 flex items-center justify-center text-lg flex-shrink-0">
                      🧑‍🏫
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="h-2.5 w-24 rounded bg-gray-200 mb-1.5" />
                      <div className="h-2 w-16 rounded bg-gray-100" />
                    </div>
                  </div>
                  {/* Language badges */}
                  <p className="text-[9px] font-semibold text-[#354d73] mb-1">Languages I teach</p>
                  <div className="flex gap-1 mb-3 flex-wrap">
                    {["🇬🇧 English", "🇵🇹 Portuguese", "🇪🇸 Spanish"].map((l) => (
                      <span key={l} className="rounded-full bg-[#354d73]/10 px-2 py-0.5 text-[8px] text-[#354d73] font-medium">
                        {l}
                      </span>
                    ))}
                  </div>
                  {/* Bio field */}
                  <p className="text-[9px] font-semibold text-[#354d73] mb-1">About me</p>
                  <div className="rounded-md border bg-gray-50 p-2 mb-3 space-y-1">
                    <div className="h-1.5 w-full rounded bg-gray-200" />
                    <div className="h-1.5 w-5/6 rounded bg-gray-200" />
                    <div className="h-1.5 w-4/6 rounded bg-gray-200" />
                  </div>
                  {/* Save button */}
                  <div className="rounded-lg bg-[#354d73] py-1.5 text-center text-[9px] font-semibold text-white">
                    Save Profile
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xs">
                  {signupSteps[1].number}
                </div>
                <div>
                  <h3 className="font-semibold text-(--navy)">{signupSteps[1].title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{signupSteps[1].description}</p>
                </div>
              </div>
            </div>

            {/* Step 3 – Go Live & Teach */}
            <div className="flex flex-col">
              <div className="rounded-2xl border bg-white shadow-md overflow-hidden mb-5">
                <div className="bg-gray-100 px-3 py-2 flex items-center gap-2 border-b">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white rounded-md px-2 py-0.5 text-[10px] text-muted-foreground border truncate">
                    {SITE_DOMAIN}/tutor
                  </div>
                </div>
                <div className="bg-[#F0F6FA] px-4 pt-4 pb-5 select-none">
                  {/* Welcome banner */}
                  <div className="rounded-xl bg-[#354d73] p-3 mb-3 text-white">
                    <p className="text-[10px] font-bold mb-0.5">Welcome back, Maria 👋</p>
                    <p className="text-[8px] text-white/70">You&apos;re live! Students can now book lessons with you.</p>
                  </div>
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-1.5 mb-3">
                    {[["3", "Upcoming"], ["214", "Students"], ["4.9★", "Rating"]].map(([val, label]) => (
                      <div key={label} className="rounded-lg bg-white border p-2 text-center">
                        <div className="text-[11px] font-bold text-[#354d73]">{val}</div>
                        <div className="text-[8px] text-muted-foreground">{label}</div>
                      </div>
                    ))}
                  </div>
                  {/* Lesson row */}
                  <div className="rounded-lg bg-white border p-2 flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-[#5A8DA5]/20 flex items-center justify-center text-xs flex-shrink-0">
                      📅
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="h-2 w-20 rounded bg-gray-200 mb-1" />
                      <div className="h-1.5 w-14 rounded bg-gray-100" />
                    </div>
                    <div className="rounded-md bg-green-100 px-1.5 py-0.5 text-[8px] font-medium text-green-700 flex-shrink-0">
                      Join
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xs">
                  {signupSteps[2].number}
                </div>
                <div>
                  <h3 className="font-semibold text-(--navy)">{signupSteps[2].title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{signupSteps[2].description}</p>
                </div>
              </div>
            </div>
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
