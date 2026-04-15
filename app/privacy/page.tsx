import Link from "next/link"
import { Shield, ArrowRight } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-(--light-blue) to-background pb-12 pt-12 md:pb-16 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Shield className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-(--navy) sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-muted-foreground">Last updated: 1 April 2024</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none text-muted-foreground">

            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              Welcome to My Language Plug (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are committed to protecting your personal
              information and your right to privacy. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website and use our platform.
            </p>
            <p className="leading-relaxed mt-4">
              Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.
            </p>

            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">2. Information We Collect</h2>
            <p className="leading-relaxed">We collect information you provide directly to us, including:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Account information: name, email address, password, and profile details.</li>
              <li>Payment information: billing address and payment method details (processed securely via our payment provider).</li>
              <li>Communications: messages sent between students and tutors, and any communications with our support team.</li>
              <li>Usage data: pages visited, features used, and lesson history.</li>
              <li>Technical data: IP address, browser type, device information, and cookies.</li>
            </ul>

            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">3. How We Use Your Information</h2>
            <p className="leading-relaxed">We use the information we collect to:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Provide, maintain, and improve our platform and services.</li>
              <li>Process transactions and send related information, including confirmations and receipts.</li>
              <li>Send you technical notices, updates, security alerts, and support messages.</li>
              <li>Respond to your comments, questions, and requests.</li>
              <li>Monitor and analyse usage trends to improve user experience.</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities.</li>
            </ul>

            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">4. Sharing of Information</h2>
            <p className="leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share information with:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Service providers who assist us in operating our platform (e.g., payment processors, hosting providers).</li>
              <li>Other users, such as tutors or students, only to the extent necessary for lesson delivery.</li>
              <li>Law enforcement or regulatory bodies if required by law.</li>
            </ul>

            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">5. Cookies</h2>
            <p className="leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our platform and hold certain information.
              You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. For more information,
              see our <Link href="/cookies" className="text-primary hover:underline">Cookie Policy</Link>.
            </p>

            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">6. Data Retention</h2>
            <p className="leading-relaxed">
              We retain your personal information for as long as your account is active or as needed to provide you with our
              services. You may request deletion of your account and associated data at any time by contacting us.
            </p>

            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">7. Security</h2>
            <p className="leading-relaxed">
              We use appropriate technical and organisational measures to protect your personal information against unauthorised
              access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100%
              secure and we cannot guarantee absolute security.
            </p>

            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">8. Your Rights</h2>
            <p className="leading-relaxed">Depending on your location, you may have the following rights:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>The right to access the personal data we hold about you.</li>
              <li>The right to request correction of inaccurate data.</li>
              <li>The right to request deletion of your data.</li>
              <li>The right to data portability.</li>
              <li>The right to object to processing of your data.</li>
            </ul>
            <p className="mt-4 leading-relaxed">
              To exercise any of these rights, please contact us using the details below.
            </p>

            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">9. Children's Privacy</h2>
            <p className="leading-relaxed">
              Our platform is not intended for children under the age of 13. We do not knowingly collect personal information
              from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.
            </p>

            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">10. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">11. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us at{" "}
              <Link href="/contact" className="text-primary hover:underline">our contact page</Link> or by email at{" "}
              <a href="mailto:privacy@mylanguageplug.com" className="text-primary hover:underline">
                privacy@mylanguageplug.com
              </a>.
            </p>
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/terms"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View Terms of Service <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/cookies"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View Cookie Policy <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
