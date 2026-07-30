import Link from "next/link"
import { Globe, ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CTASection } from "@/components/cta-section"

const featuredLanguages = [
  {
    name: "Spanish",
    speakers: "500M+",
    tutors: 120,
    flag: "🇪🇸",
    difficulty: "Moderate",
    description: "The second most spoken language in the world. Essential for travel, business, and culture across Latin America and Spain.",
  },
  {
    name: "French",
    speakers: "300M+",
    tutors: 95,
    flag: "🇫🇷",
    difficulty: "Moderate",
    description: "The language of love, diplomacy and culture. Spoken across Europe, Africa, and Canada.",
  },
  {
    name: "Mandarin Chinese",
    speakers: "1B+",
    tutors: 80,
    flag: "🇨🇳",
    difficulty: "Challenging",
    description: "The most spoken language in the world by native speakers. Critical for business in East Asia.",
  },
  {
    name: "German",
    speakers: "130M+",
    tutors: 70,
    flag: "🇩🇪",
    difficulty: "Moderate",
    description: "The most widely spoken language in the European Union. Vital for engineering, science, and commerce.",
  },
  {
    name: "Japanese",
    speakers: "130M+",
    tutors: 65,
    flag: "🇯🇵",
    difficulty: "Challenging",
    description: "A fascinating language with three writing systems. Gateway to Japanese culture, anime, and business.",
  },
  {
    name: "Arabic",
    speakers: "420M+",
    tutors: 55,
    flag: "🇸🇦",
    difficulty: "Challenging",
    description: "The fifth most spoken language worldwide. Crucial for the Middle East, North Africa, and Islamic studies.",
  },
  {
    name: "Portuguese",
    speakers: "260M+",
    tutors: 60,
    flag: "🇧🇷",
    difficulty: "Moderate",
    description: "Spoken across Brazil and Portugal. Growing in global business importance, especially in South America.",
  },
  {
    name: "Italian",
    speakers: "85M+",
    tutors: 50,
    flag: "🇮🇹",
    difficulty: "Moderate",
    description: "The language of art, music, and cuisine. Perfect for travel, culture, and understanding Romance languages.",
  },
  {
    name: "Korean",
    speakers: "80M+",
    tutors: 45,
    flag: "🇰🇷",
    difficulty: "Moderate",
    description: "Surging in popularity thanks to K-pop and Korean culture. A phonetically regular and logical language.",
  },
  {
    name: "Russian",
    speakers: "260M+",
    tutors: 40,
    flag: "🇷🇺",
    difficulty: "Challenging",
    description: "Widely spoken across Eastern Europe and Central Asia. Important for literature, science, and geopolitics.",
  },
  {
    name: "Dutch",
    speakers: "25M+",
    tutors: 30,
    flag: "🇳🇱",
    difficulty: "Moderate",
    description: "Closely related to English and German, making it accessible for English speakers. Spoken in the Netherlands and Belgium.",
  },
  {
    name: "English",
    speakers: "1.5B+",
    tutors: 110,
    flag: "🇬🇧",
    difficulty: "Easy",
    description: "The global lingua franca of business, science, and travel. Improve your fluency or learn from scratch.",
  },
]

const difficultyColor: Record<string, string> = {
  Easy: "bg-green-100 text-green-700",
  Moderate: "bg-yellow-100 text-yellow-700",
  Challenging: "bg-red-100 text-red-700",
}

const benefits = [
  {
    title: "Native-speaking tutors",
    description: "Learn from tutors who grew up speaking the language, with authentic accents and cultural insight.",
  },
  {
    title: "Flexible scheduling",
    description: "Book lessons around your life — mornings, evenings, or weekends. Your schedule, your pace.",
  },
  {
    title: "Personalised curriculum",
    description: "Whether you're a beginner or advanced, tutors adapt lessons to your exact goals and learning style.",
  },
  {
    title: "Real conversation practice",
    description: "Move beyond textbooks. Practice real dialogue that you'd actually use in daily life or at work.",
  },
]

export default function LanguagesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-(--light-blue) to-background pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Globe className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-(--navy) sm:text-5xl">
              Learn Any Language
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Explore our library of languages and connect with expert native-speaking tutors. 
              Whether you're a complete beginner or looking to polish advanced skills, we have the right tutor for you.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/tutors">
                  Find a Tutor <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-(--navy)">Why Learn with My Language Plug?</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <Card key={b.title}>
                <CardContent className="pt-6">
                  <h3 className="mb-2 font-semibold text-(--navy)">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Grid */}
      <section className="bg-(--light-blue)/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold text-(--navy)">Available Languages</h2>
          <p className="mb-12 text-center text-muted-foreground">
            Browse all languages we offer and find a tutor today.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredLanguages.map((lang) => (
              <Card key={lang.name} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{lang.flag}</span>
                      <div>
                        <h3 className="font-semibold text-(--navy)">{lang.name}</h3>
                        <p className="text-xs text-muted-foreground">{lang.speakers} speakers</p>
                      </div>
                    </div>
                    <Badge className={difficultyColor[lang.difficulty]}>{lang.difficulty}</Badge>
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground">{lang.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{lang.tutors} tutors available</span>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/tutors?language=${lang.name.toLowerCase()}`}>
                        Find Tutors <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
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
