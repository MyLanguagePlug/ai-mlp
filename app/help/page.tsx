import Link from "next/link"
import { Search, MessageSquare, BookOpen, Video, ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaqChatbox } from "@/components/faq-chatbox"

const helpCategories = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "New to My Language Plug? Learn the basics and set up your account.",
    articles: [
      "How to create a student account",
      "How to search for tutors",
      "Booking your first trial lesson",
      "Understanding lesson pricing",
    ],
    href: "/faq",
  },
  {
    icon: Video,
    title: "Lessons & Scheduling",
    description: "Everything about booking, joining, rescheduling, and managing your lessons.",
    articles: [
      "How to join a video lesson",
      "How to reschedule a lesson",
      "How to cancel a lesson",
      "What happens if my tutor doesn't show up?",
    ],
    href: "/faq",
  },
  {
    icon: MessageSquare,
    title: "Messaging & Communication",
    description: "Learn how to communicate with your tutor before and after lessons.",
    articles: [
      "How to message your tutor",
      "Setting lesson goals with your tutor",
      "Sharing files and resources",
      "Reporting a communication issue",
    ],
    href: "/faq",
  },
  {
    icon: Search,
    title: "Payments & Billing",
    description: "Understand how payments work, refunds, and lesson packages.",
    articles: [
      "How to purchase a lesson package",
      "Payment methods accepted",
      "Requesting a refund",
      "Understanding our cancellation policy",
    ],
    href: "/faq",
  },
]

const popularArticles = [
  { title: "How to join a video lesson", href: "/faq" },
  { title: "How to reschedule or cancel a lesson", href: "/faq" },
  { title: "What happens if I miss a lesson?", href: "/faq" },
  { title: "How do refunds work?", href: "/faq" },
  { title: "How to write a review for my tutor", href: "/faq" },
  { title: "Why can't I connect to the video call?", href: "/faq" },
  { title: "How do I change my email or password?", href: "/student/settings" },
  { title: "How do lesson packages work?", href: "/pricing" },
]

export default function HelpPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-(--light-blue) to-background pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-(--navy) sm:text-5xl">
              Help Center
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Find answers to your questions, learn how to use the platform, or get in touch with our support team.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/faq">
                  Browse FAQs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-(--navy)">Browse by Topic</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {helpCategories.map((cat) => {
              const Icon = cat.icon
              return (
                <Card key={cat.title} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base text-(--navy)">{cat.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{cat.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {cat.articles.map((article) => (
                        <li key={article}>
                          <Link
                            href={cat.href}
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ChevronRight className="h-3 w-3 flex-shrink-0" />
                            {article}
                          </Link>
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

      {/* Popular Articles */}
      <section className="bg-(--light-blue)/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-(--navy)">Popular Articles</h2>
            <div className="space-y-2">
              {popularArticles.map((article) => (
                <Link
                  key={article.title}
                  href={article.href}
                  className="flex items-center justify-between rounded-lg border border-border bg-background p-4 hover:bg-muted/50 transition-colors"
                >
                  <span className="text-sm font-medium text-(--navy)">{article.title}</span>
                  <ChevronRight className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Chatbox */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FaqChatbox />
        </div>
      </section>

      {/* Still need help */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-(--navy)">Still Need Help?</h2>
            <p className="mt-4 text-muted-foreground">
              Can't find what you're looking for? Our support team is available Monday–Friday, 9am–6pm (GMT).
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contact Support <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
