import Link from "next/link"
import { Cookie, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const cookieTypes = [
  {
    name: "Strictly Necessary Cookies",
    required: true,
    description:
      "These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies as the website cannot function without them.",
    examples: ["Session ID cookie", "Authentication token", "CSRF protection cookie"],
  },
  {
    name: "Performance & Analytics Cookies",
    required: false,
    description:
      "These cookies collect information about how visitors use our website — for example, which pages are most frequently visited and any error messages received. This information helps us improve how our website works. All data collected by these cookies is aggregated and anonymous.",
    examples: ["Google Analytics", "Page view tracking", "Error logging"],
  },
  {
    name: "Functional Cookies",
    required: false,
    description:
      "These cookies allow the website to remember choices you make (such as your language preference or the region you are in) and provide enhanced, more personalised features. They may also be used to provide services you have requested, such as watching a video.",
    examples: ["Language preference", "Timezone setting", "Video player preferences"],
  },
  {
    name: "Targeting & Advertising Cookies",
    required: false,
    description:
      "These cookies are used to deliver adverts more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of advertising campaigns. They are usually placed by advertising networks with our permission.",
    examples: ["Facebook Pixel", "Google Ads tracking", "Retargeting cookies"],
  },
]

export default function CookiesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-(--light-blue) to-background pb-12 pt-12 md:pb-16 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Cookie className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-(--navy) sm:text-5xl">
              Cookie Policy
            </h1>
            <p className="mt-4 text-muted-foreground">Last updated: 1 April 2024</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-muted-foreground">
            <div>
              <h2 className="text-xl font-bold text-(--navy) mb-4">What Are Cookies?</h2>
              <p className="leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device by websites that you visit. They
                are widely used to make websites work more efficiently, as well as to provide information to the website owners.
                Cookies help us deliver a better and more personalised experience to you.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-(--navy) mb-4">How We Use Cookies</h2>
              <p className="leading-relaxed">
                My Language Plug uses cookies to understand how you use our platform, to keep you logged in between visits,
                to remember your preferences, and to improve the overall experience of using our service. We also use cookies
                for analytics and, with your consent, for advertising purposes.
              </p>
            </div>
          </div>

          {/* Cookie Types */}
          <div className="mt-12 space-y-6">
            <h2 className="text-xl font-bold text-(--navy)">Types of Cookies We Use</h2>
            {cookieTypes.map((type) => (
              <Card key={type.name}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-4">
                    <CardTitle className="text-base text-(--navy)">{type.name}</CardTitle>
                    <span
                      className={`flex-shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                        type.required
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {type.required ? "Always Active" : "Optional"}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">{type.description}</p>
                  <div>
                    <p className="text-xs font-medium text-(--navy) mb-1">Examples:</p>
                    <ul className="flex flex-wrap gap-2">
                      {type.examples.map((ex) => (
                        <li
                          key={ex}
                          className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground"
                        >
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 space-y-6 text-muted-foreground">
            <div>
              <h2 className="text-xl font-bold text-(--navy) mb-4">Managing Your Cookie Preferences</h2>
              <p className="leading-relaxed">
                You can control and manage cookies in your browser settings. Please be aware that removing or blocking some
                cookies may impact your user experience and certain features of the platform may not function correctly.
              </p>
              <p className="leading-relaxed mt-4">
                Most web browsers allow you to manage your cookie preferences via the browser settings. Here are links to
                instructions for popular browsers:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Google Chrome — Settings &gt; Privacy and Security &gt; Cookies and other site data</li>
                <li>Mozilla Firefox — Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
                <li>Safari — Preferences &gt; Privacy &gt; Manage Website Data</li>
                <li>Microsoft Edge — Settings &gt; Cookies and site permissions</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-(--navy) mb-4">Third-Party Cookies</h2>
              <p className="leading-relaxed">
                In some cases, we may use third-party services (such as Google Analytics or payment processors) that set
                their own cookies. These services have their own privacy policies and we encourage you to review them.
                We have no control over cookies set by third-party services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-(--navy) mb-4">Changes to This Cookie Policy</h2>
              <p className="leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our
                data practices. Any changes will be posted on this page with an updated &quot;Last updated&quot; date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-(--navy) mb-4">Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about our use of cookies, please contact us at{" "}
                <Link href="/contact" className="text-primary hover:underline">our contact page</Link> or by email at{" "}
                <a href="mailto:privacy@mylanguageplug.com" className="text-primary hover:underline">
                  privacy@mylanguageplug.com
                </a>.
              </p>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View Privacy Policy <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/terms"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View Terms of Service <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
