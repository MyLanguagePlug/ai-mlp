// components/ui/product-carousel.tsx
"use client"

import * as React from "react"
import { motion } from "motion/react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import NextImage from "next/image"
import { cn } from "@/lib/utils"

// --- TYPE DEFINITIONS ---
export interface Tutor {
  id: string | number
  name: string
  specialty: string
  hourlyRate: number
  rating: number
  reviews: number
  badge?: string
  availability: string
  imageUrl: string
}

interface TutorCardProps {
  tutor: Tutor
}

interface TutorCarouselProps {
  title?: string
  tutors: Tutor[]
  viewAllHref?: string
  className?: string
}

// --- SUB-COMPONENTS ---

const TutorCard: React.FC<TutorCardProps> = ({ tutor }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="group relative w-48 flex-shrink-0"
    >
      <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground transition-all duration-300 hover:shadow-md">
        {/* Image and Badge */}
        <div className="relative h-40 overflow-hidden bg-muted">
          <NextImage
            src={tutor.imageUrl}
            alt={`${tutor.name} profile photo`}
            fill
            sizes="192px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {tutor.badge && (
            <div className="absolute left-2 top-2 rounded-md bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
              {tutor.badge}
            </div>
          )}
        </div>

        {/* Tutor Details */}
        <div className="flex flex-col space-y-3 p-4">
          <div className="flex items-center space-x-1 text-xs">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="font-medium text-foreground">{tutor.rating.toFixed(1)}</span>
            <span className="text-muted-foreground">({tutor.reviews})</span>
          </div>
          <h3 className="truncate text-sm font-semibold text-foreground">{tutor.name}</h3>
          <p className="text-xs text-muted-foreground">{tutor.specialty}</p>

          {/* Pricing and Book Button */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-base font-semibold text-foreground">${tutor.hourlyRate}</span>
              <span className="text-xs text-muted-foreground">per hour</span>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              aria-label={`Book a lesson with ${tutor.name}`}
              className="rounded-lg border border-primary bg-background px-4 py-2 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Book
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// --- MAIN COMPONENT ---
export const TutorCarousel = React.forwardRef<HTMLDivElement, TutorCarouselProps>(
  ({ title, tutors, viewAllHref = "/tutors", className }, ref) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null)
    const [isScrollable, setIsScrollable] = React.useState(false)
    const [isAtStart, setIsAtStart] = React.useState(true)
    const [isAtEnd, setIsAtEnd] = React.useState(false)

    const handleScroll = (direction: "left" | "right") => {
      if (scrollContainerRef.current) {
        const scrollAmount = scrollContainerRef.current.clientWidth * 0.8
        scrollContainerRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        })
      }
    }

    const checkScrollState = React.useCallback(() => {
      const el = scrollContainerRef.current
      if (!el) return
      const scrollable = el.scrollWidth > el.clientWidth
      setIsScrollable(scrollable)
      setIsAtStart(el.scrollLeft === 0)
      setIsAtEnd(Math.abs(el.scrollWidth - el.scrollLeft - el.clientWidth) < 1)
    }, [])

    React.useEffect(() => {
      checkScrollState()
      const el = scrollContainerRef.current
      el?.addEventListener("scroll", checkScrollState)
      window.addEventListener("resize", checkScrollState)
      return () => {
        el?.removeEventListener("scroll", checkScrollState)
        window.removeEventListener("resize", checkScrollState)
      }
    }, [checkScrollState])

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
      },
    }

    return (
      <section className={cn("relative w-full space-y-4 py-8", className)} ref={ref}>
        {/* Header — only rendered when a title is provided */}
        {title && (
          <div className="flex items-center justify-between px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-foreground">{title}</h2>
            <a
              href={viewAllHref}
              className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              See all
            </a>
          </div>
        )}

        <div className="relative">
          {/* Tutor List */}
          <motion.div
            ref={scrollContainerRef}
            className="scrollbar-hide flex space-x-4 overflow-x-auto px-4 sm:px-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {tutors.map((tutor) => (
              <TutorCard key={tutor.id} tutor={tutor} />
            ))}
          </motion.div>

          {/* Navigation Controls */}
          {isScrollable && (
            <>
              <button
                onClick={() => handleScroll("left")}
                disabled={isAtStart}
                aria-label="Scroll left"
                className={cn(
                  "absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-background p-2 shadow-md transition-opacity duration-300 disabled:opacity-0",
                  "hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                )}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                disabled={isAtEnd}
                aria-label="Scroll right"
                className={cn(
                  "absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-background p-2 shadow-md transition-opacity duration-300 disabled:opacity-0",
                  "hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                )}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>
      </section>
    )
  }
)

TutorCarousel.displayName = "TutorCarousel"
