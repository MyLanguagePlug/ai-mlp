import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CTASectionProps {
  title: string
  description: string
  primaryCTA: {
    label: string
    href: string
  }
  secondaryCTA?: {
    label: string
    href: string
  }
  variant?: "default" | "blue" | "navy"
}

export function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  variant = "default",
}: CTASectionProps) {
  const bgClasses = {
    default: "bg-[--light-blue]",
    blue: "bg-primary",
    navy: "bg-[--navy]",
  }

  const textClasses = {
    default: "text-[--navy]",
    blue: "text-primary-foreground",
    navy: "text-white",
  }

  const descClasses = {
    default: "text-muted-foreground",
    blue: "text-primary-foreground/80",
    navy: "text-white/80",
  }

  return (
    <section className={`py-16 md:py-24 ${bgClasses[variant]}`}>
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className={`font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl ${textClasses[variant]}`}>
          {title}
        </h2>
        <p className={`mx-auto mt-4 max-w-2xl text-lg leading-relaxed ${descClasses[variant]}`}>
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            variant={variant === "default" ? "default" : "secondary"}
            asChild
            className="min-w-[200px]"
          >
            <Link href={primaryCTA.href}>
              {primaryCTA.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          {secondaryCTA && (
            <Button
              size="lg"
              variant={variant === "default" ? "outline" : "ghost"}
              asChild
              className={`min-w-[200px] ${variant !== "default" ? "text-white hover:bg-white/10" : ""}`}
            >
              <Link href={secondaryCTA.href}>{secondaryCTA.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
