import Link from "next/link"
import { ArrowRight, BookOpen, Video, FileText, Users, Lightbulb, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const resourceCategories = [
  {
    icon: Video,
    title: "Getting Started",
    description: "Everything you need to know to set up your profile and run your first lesson.",
    resources: [
      { title: "Setting Up Your Tutor Profile", type: "Guide", time: "10 min read" },
      { title: "How to Configure Your Availability", type: "Guide", time: "5 min read" },
      { title: "Running Your First Video Lesson", type: "Video", time: "8 min watch" },
      { title: "Pricing Your Lessons Competitively", type: "Guide", time: "7 min read" },
    ],
  },
  {
    icon: BookOpen,
    title: "Teaching Techniques",
    description: "Expert strategies to make your lessons engaging, effective, and memorable.",
    resources: [
      { title: "The 5 Principles of Effective Language Teaching", type: "Article", time: "12 min read" },
      { title: "Adapting Your Style for Different Learners", type: "Guide", time: "9 min read" },
      { title: "Using Real-World Materials in Lessons", type: "Article", time: "8 min read" },
      { title: "Giving Constructive Feedback to Students", type: "Guide", time: "6 min read" },
    ],
  },
  {
    icon: FileText,
    title: "Lesson Planning",
    description: "Templates, frameworks, and tools to plan structured and goal-focused lessons.",
    resources: [
      { title: "Lesson Plan Template (Beginner)", type: "Template", time: "Download" },
      { title: "Lesson Plan Template (Intermediate)", type: "Template", time: "Download" },
      { title: "Lesson Plan Template (Advanced)", type: "Template", time: "Download" },
      { title: "Setting Student Goals Framework", type: "Guide", time: "7 min read" },
    ],
  },
  {
    icon: Users,
    title: "Student Relations",
    description: "Build lasting relationships with your students and handle difficult situations professionally.",
    resources: [
      { title: "How to Handle Cancellations & No-Shows", type: "Guide", time: "5 min read" },
      { title: "Building Long-Term Student Relationships", type: "Article", time: "8 min read" },
      { title: "Managing Student Expectations", type: "Guide", time: "6 min read" },
      { title: "Requesting and Responding to Reviews", type: "Guide", time: "4 min read" },
    ],
  },
  {
    icon: Lightbulb,
    title: "Growing Your Business",
    description: "Tips on how to increase your bookings, grow your student base, and earn more.",
    resources: [
      { title: "Optimising Your Profile for Search", type: "Guide", time: "10 min read" },
      { title: "How Tutors Increase Their Bookings by 3x", type: "Article", time: "11 min read" },
      { title: "Upselling Lesson Packages to Students", type: "Guide", time: "6 min read" },
      { title: "Building Your Personal Teaching Brand", type: "Article", time: "9 min read" },
    ],
  },
  {
    icon: Download,
    title: "Tools & Downloads",
    description: "Downloadable assets, worksheets, and checklists to support your teaching.",
    resources: [
      { title: "Pre-Lesson Student Needs Assessment", type: "Template", time: "Download" },
      { title: "Progress Tracker Spreadsheet", type: "Template", time: "Download" },
      { title: "Tutor Best Practices Checklist", type: "Checklist", time: "Download" },
      { title: "Platform Quick-Start Reference Card", type: "Checklist", time: "Download" },
    ],
  },
]

const typeColor: Record<string, string> = {
  Guide: "bg-blue-100 text-blue-700",
  Article: "bg-purple-100 text-purple-700",
  Video: "bg-red-100 text-red-700",
  Template: "bg-green-100 text-green-700",
  Checklist: "bg-yellow-100 text-yellow-700",
}

export default function TutorResourcesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-(--light-blue) to-background pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-(--navy) sm:text-5xl">
              Tutor Resources
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Everything you need to become an outstanding tutor on My Language Plug. 
              From lesson planning to growing your business, we've got you covered.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/become-tutor">
                  Become a Tutor <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/tutor-requirements">View Requirements</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {resourceCategories.map((cat) => {
              const Icon = cat.icon
              return (
                <Card key={cat.title} className="flex flex-col">
                  <CardHeader>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-(--navy)">{cat.title}</CardTitle>
                    <CardDescription>{cat.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {cat.resources.map((res) => (
                        <li
                          key={res.title}
                          className="flex items-start justify-between gap-3 rounded-lg border border-border p-3 hover:bg-muted/50 transition-colors cursor-pointer"
                        >
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-(--navy) truncate">{res.title}</p>
                            <p className="mt-0.5 text-xs text-muted-foreground">{res.time}</p>
                          </div>
                          <Badge className={`flex-shrink-0 ${typeColor[res.type] ?? "bg-gray-100 text-gray-700"}`}>
                            {res.type}
                          </Badge>
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

      {/* CTA */}
      <section className="bg-(--light-blue)/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-(--navy)">Ready to Start Teaching?</h2>
            <p className="mt-4 text-muted-foreground">
              Join hundreds of tutors already earning on My Language Plug. Apply today and start sharing your language skills with the world.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/become-tutor">
                  Apply to Teach <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
