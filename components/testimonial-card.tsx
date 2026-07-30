import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export interface TestimonialCardProps {
  name: string
  image: string
  role: string
  content: string
  rating: number
  language?: string
}

export function TestimonialCard({
  name,
  image,
  role,
  content,
  rating,
  language,
}: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col p-6">
        {/* Quote Icon */}
        <Quote className="h-8 w-8 text-(--cyan) opacity-50" />

        {/* Rating */}
        <div className="mt-4 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating
                  ? "fill-amber-400 text-amber-400"
                  : "fill-muted text-muted"
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          &ldquo;{content}&rdquo;
        </blockquote>

        {/* Language Badge */}
        {language && (
          <div className="mt-4">
            <span className="rounded-full bg-(--light-blue) px-3 py-1 text-xs font-medium text-(--navy)">
              Learning {language}
            </span>
          </div>
        )}

        {/* Author */}
        <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-(--navy)">{name}</p>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Large featured testimonial
export function TestimonialCardFeatured({
  name,
  image,
  role,
  content,
  rating,
  language,
}: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden bg-(--light-blue)">
      <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:gap-12">
        {/* Author Image */}
        <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full ring-4 ring-background md:h-40 md:w-40">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Rating */}
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < rating
                    ? "fill-amber-400 text-amber-400"
                    : "fill-muted text-muted"
                }`}
              />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="mt-4 text-lg leading-relaxed text-(--navy) md:text-xl">
            &ldquo;{content}&rdquo;
          </blockquote>

          {/* Author Info */}
          <div className="mt-6 flex items-center gap-4">
            <div>
              <p className="font-semibold text-(--navy)">{name}</p>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
            {language && (
              <span className="rounded-full bg-background px-4 py-1.5 text-sm font-medium text-primary">
                Learning {language}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
