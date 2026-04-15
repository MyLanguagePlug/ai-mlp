import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CTASection } from "@/components/cta-section"

const posts = [
  {
    slug: "#",
    title: "10 Proven Techniques to Learn a New Language Faster",
    excerpt:
      "Discover the science-backed methods that polyglots use to pick up new languages in record time. From spaced repetition to immersion strategies, these tips will supercharge your learning.",
    category: "Learning Tips",
    readTime: "8 min",
    date: "April 10, 2024",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=450&fit=crop",
    featured: true,
  },
  {
    slug: "#",
    title: "Why 1-on-1 Tutoring Beats Language Apps for Fluency",
    excerpt:
      "Language apps are great for vocabulary, but when it comes to actual fluency, nothing beats a real human tutor. Here's why personalised instruction makes all the difference.",
    category: "Industry Insights",
    readTime: "6 min",
    date: "March 28, 2024",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop",
    featured: false,
  },
  {
    slug: "#",
    title: "How to Choose the Right Language Tutor for Your Goals",
    excerpt:
      "Not all tutors are the same. Learn how to evaluate teaching styles, qualifications, and experience to find the perfect match for your learning journey.",
    category: "Guides",
    readTime: "7 min",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop",
    featured: false,
  },
  {
    slug: "#",
    title: "The Best Languages to Learn for Business in 2024",
    excerpt:
      "Which languages offer the greatest career advantage? We analysed job market data and business trends to reveal the top languages for professional growth this year.",
    category: "Business",
    readTime: "9 min",
    date: "March 5, 2024",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=450&fit=crop",
    featured: false,
  },
  {
    slug: "#",
    title: "A Beginner's Guide to Learning Spanish: Where to Start",
    excerpt:
      "Spanish is one of the most accessible languages for English speakers. This comprehensive guide walks you through the essentials of getting started, from alphabet to basic conversations.",
    category: "Language Guides",
    readTime: "10 min",
    date: "February 22, 2024",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&h=450&fit=crop",
    featured: false,
  },
  {
    slug: "#",
    title: "How Our Tutors Are Changing Lives Across the Globe",
    excerpt:
      "From refugees learning English to executives mastering Mandarin, the stories of transformation on My Language Plug will inspire you. Meet five tutors making a real difference.",
    category: "Stories",
    readTime: "11 min",
    date: "February 10, 2024",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=450&fit=crop",
    featured: false,
  },
]

const categoryColor: Record<string, string> = {
  "Learning Tips": "bg-blue-100 text-blue-700",
  "Industry Insights": "bg-purple-100 text-purple-700",
  Guides: "bg-green-100 text-green-700",
  Business: "bg-orange-100 text-orange-700",
  "Language Guides": "bg-yellow-100 text-yellow-700",
  Stories: "bg-pink-100 text-pink-700",
}

export default function BlogPage() {
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-(--light-blue) to-background pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-(--navy) sm:text-5xl">
              The My Language Plug Blog
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Tips, stories, and insights from our community of tutors, students, and language experts. 
              Level up your language journey with our latest articles.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-xl font-semibold text-(--navy)">Featured Article</h2>
          <Link href={featured.slug} className="group block">
            <Card className="overflow-hidden transition-shadow hover:shadow-lg">
              <div className="md:flex">
                <div className="relative h-56 w-full flex-shrink-0 md:h-auto md:w-2/5">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="flex flex-col justify-center p-8">
                  <div className="mb-3 flex items-center gap-3">
                    <Badge className={categoryColor[featured.category]}>{featured.category}</Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" /> {featured.readTime} read
                    </span>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-(--navy) group-hover:text-primary transition-colors">
                    {featured.title}
                  </h3>
                  <p className="mb-6 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{featured.date}</span>
                    <Button variant="ghost" size="sm" className="gap-1 text-primary">
                      Read More <ArrowRight className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* More Articles */}
      <section className="bg-(--light-blue)/30 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-xl font-semibold text-(--navy)">Latest Articles</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link key={post.title} href={post.slug} className="group block">
                <Card className="h-full overflow-hidden transition-shadow hover:shadow-md">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="pt-5">
                    <div className="mb-3 flex items-center gap-2">
                      <Badge className={`${categoryColor[post.category]} text-xs`}>{post.category}</Badge>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="mb-2 font-semibold text-(--navy) leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Learning?"
        description="Find the perfect language tutor and begin your journey to fluency today."
        primaryCTA={{ label: "Find a Tutor", href: "/tutors" }}
        secondaryCTA={{ label: "Become a Tutor", href: "/teach" }}
      />
    </div>
  )
}
