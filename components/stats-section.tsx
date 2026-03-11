"use client"

import CountUp from './CountUp'

interface Stat {
  value: string
  label: string
}

interface StatsSectionProps {
  title?: string
  stats: Stat[]
  variant?: "default" | "blue" | "white"
}

export function StatsSection({ title, stats, variant = "default" }: StatsSectionProps) {
  const bgClasses = {
    default: "bg-[--light-blue]",
    blue: "bg-primary",
    white: "bg-background",
  }

  const valueClasses = {
    default: "text-[--navy]",
    blue: "text-primary-foreground",
    white: "text-[--navy]",
  }

  const labelClasses = {
    default: "text-muted-foreground",
    blue: "text-primary-foreground/80",
    white: "text-muted-foreground",
  }

  return (
    <section className={`py-4 md:py-6 ${bgClasses[variant]}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className={`mb-6 text-center text-2xl font-bold ${valueClasses[variant]}`}>
            {title}
          </h2>
        )}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const match = stat.value.match(/^([^\d]*)(\d[\d,]*)(.*)$/)
            const numericPart = match ? parseInt(match[2].replace(/,/g, ""), 10) : null
            const prefix = match ? match[1] : ""
            const suffix = match ? match[3] : stat.value
            return (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold md:text-4xl ${valueClasses[variant]}`}>
                  {numericPart !== null ? (
                    <>
                      {prefix}
                      <CountUp to={numericPart} />
                      {suffix}
                    </>
                  ) : (
                    stat.value
                  )}
                </div>
                <div className={`mt-1 text-sm md:text-base ${labelClasses[variant]}`}>
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
