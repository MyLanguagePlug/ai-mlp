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
    <section className={`py-12 md:py-16 ${bgClasses[variant]}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className={`mb-8 text-center text-2xl font-bold ${valueClasses[variant]}`}>
            {title}
          </h2>
        )}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl font-bold md:text-5xl ${valueClasses[variant]}`}>
                {stat.value}
              </div>
              <div className={`mt-2 text-sm md:text-base ${labelClasses[variant]}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
