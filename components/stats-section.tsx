"use client"

import { cn } from '@/lib/utils'
import CountUp from './CountUp'

interface Stat {
  value: string
  label: string
  mobileHidden?: boolean
}

interface StatsSectionProps {
  title?: string
  stats: Stat[]
  variant?: "default" | "blue" | "white"
}

export function StatsSection({ title, stats, variant = "default" }: StatsSectionProps) {
  const bgClasses = {
    default: "bg-(--light-blue)",
    blue: "bg-primary",
    white: "bg-background",
  }

  const valueClasses = {
    default: "text-(--navy)",
    blue: "text-primary-foreground",
    white: "text-black",
  }

  const labelClasses = {
    default: "text-muted-foreground",
    blue: "text-primary-foreground/80",
    white: "text-black",
  }

  return (
    <section className={`py-8 md:py-12 ${bgClasses[variant]}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className={`mb-6 text-center text-2xl font-bold ${valueClasses[variant]}`}>
            {title}
          </h2>
        )}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const match = stat.value.match(/^([^\d]*)(\d[\d,]*)(.*)$/)
            const numericPart = match ? parseInt(match[2].replace(/,/g, ""), 10) : null
            const prefix = match ? match[1] : ""
            const suffix = match ? match[3] : stat.value
            return (
              <div key={index} className={cn("flex flex-col items-center text-center", stat.mobileHidden && "hidden sm:flex")}>
                <div className="flex items-center justify-center rounded-2xl bg-(--navy) px-8 py-5 mb-3 min-w-[130px] shadow-md">
                  <div className="text-3xl font-bold md:text-4xl text-white">
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
                </div>
                <div className={`mt-1 text-sm md:text-base font-medium ${labelClasses[variant]}`}>
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
