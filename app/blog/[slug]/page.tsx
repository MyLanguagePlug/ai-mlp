import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { CTASection } from "@/components/cta-section"
import { posts, categoryColor, type BlogSection } from "@/lib/blog-data"

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case "paragraph":
      return (
        <p key={index} className="leading-8 text-muted-foreground">
          {section.text}
        </p>
      )
    case "heading":
      return (
        <h2 key={index} className="mt-10 mb-3 text-xl font-bold text-(--navy)">
          {section.text}
        </h2>
      )
    case "subheading":
      return (
        <h3 key={index} className="mt-6 mb-2 text-lg font-semibold text-(--navy)">
          {section.text}
        </h3>
      )
    case "tip":
      return (
        <div
          key={index}
          className="my-6 flex gap-4 rounded-xl border border-primary/20 bg-(--light-blue) p-5"
        >
          <div className="mt-0.5 flex-shrink-0">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
              ✦
            </span>
          </div>
          <div>
            <p className="mb-1 text-sm font-semibold text-(--navy)">{section.label}</p>
            <p className="text-sm leading-7 text-muted-foreground">{section.text}</p>
          </div>
        </div>
      )
    case "quote":
      return (
        <blockquote
          key={index}
          className="my-8 border-l-4 border-primary pl-6"
        >
          <p className="text-lg font-medium italic leading-8 text-(--navy)">&ldquo;{section.text}&rdquo;</p>
          {section.attribution && (
            <cite className="mt-2 block text-sm text-muted-foreground not-italic">
              — {section.attribution}
            </cite>
          )}
        </blockquote>
      )
    case "list":
      return (
        <ul key={index} className="my-4 space-y-2 pl-6">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-muted-foreground leading-7">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      )
    case "numbered":
      return (
        <ol key={index} className="my-4 space-y-2 pl-6">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground leading-7">
              <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-(--navy)">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      )
    default:
      return null
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-(--light-blue) to-background pb-0 pt-10 md:pt-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          {/* Category + meta */}
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Badge className={`${categoryColor[post.category]} text-xs`}>
              {post.category}
            </Badge>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" /> {post.readTime} read
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" /> {post.date}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-(--navy) sm:text-4xl md:text-5xl">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{post.excerpt}</p>

          {/* Author */}
          <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
            <div className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-primary/20">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-(--navy)">{post.author.name}</p>
              <p className="text-xs text-muted-foreground">{post.author.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="mx-auto mt-10 w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl shadow-md">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Article body */}
      <article className="mx-auto mt-12 w-full max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="space-y-5">
          {post.content.map((section, i) => renderSection(section, i))}
        </div>

        {/* Bottom author card */}
        <div className="mt-16 flex items-center gap-5 rounded-2xl border border-border bg-(--light-blue)/50 p-6">
          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-primary/20">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Written by</p>
            <p className="mt-0.5 text-base font-bold text-(--navy)">{post.author.name}</p>
            <p className="text-sm text-muted-foreground">{post.author.role}</p>
          </div>
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="border-t border-border bg-(--light-blue)/30 py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-xl font-semibold text-(--navy)">More Articles</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {related.map((rel) => (
                <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group block">
                  <div className="overflow-hidden rounded-xl border border-border bg-background transition-shadow hover:shadow-md">
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <div className="mb-2 flex items-center gap-2">
                        <Badge className={`${categoryColor[rel.category]} text-xs`}>
                          {rel.category}
                        </Badge>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" /> {rel.readTime}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold leading-snug text-(--navy) group-hover:text-primary transition-colors line-clamp-2">
                        {rel.title}
                      </h3>
                      <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{rel.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Ready to Start Learning?"
        description="Find the perfect language tutor and begin your journey to fluency today."
        primaryCTA={{ label: "Find a Tutor", href: "/tutors" }}
        secondaryCTA={{ label: "Become a Tutor", href: "/become-tutor" }}
      />
    </div>
  )
}
