import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-(--light-blue) to-background pb-12 pt-12 md:pb-16 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-primary/10 p-4">
                <FileText className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-(--navy) sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-muted-foreground">Last updated: 1 April 2024</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-muted-foreground space-y-0">

            <p className="leading-relaxed">
              Please read these Terms of Service (&quot;Terms&quot;) carefully before using the My Language Plug platform (&quot;Service&quot;) operated by My Language Plug Ltd (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
            </p>
            <p className="leading-relaxed mt-4">
              By accessing or using our Service, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not access the Service.
            </p>

            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">1. Accounts</h2>
            <p className="leading-relaxed">
              When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorised use of your account.
            </p>
            <p className="leading-relaxed mt-4">
              You must be at least 18 years old (or the age of majority in your jurisdiction) to create an account. Users under 18 may only use the Service with parental or guardian supervision and consent.
            </p>

            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">2. Use of the Platform</h2>
            <p className="leading-relaxed">By using My Language Plug, you agree to:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Use the Service only for lawful purposes and in accordance with these Terms.</li>
              <li>Not use the Service for any fraudulent or harmful activity.</li>
              <li>Not attempt to gain unauthorised access to any part of the Service.</li>
              <li>Not use the Service to harass, abuse, or harm another person.</li>
              <li>Not reproduce, duplicate, copy, sell, or exploit any part of the Service without our express written permission.</li>
            </ul>

            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">3. Tutor and Student Conduct</h2>
            <p className="leading-relaxed">
              All users — both students and tutors — are expected to treat each other with respect and professionalism. My Language Plug reserves the right to suspend or terminate accounts that engage in abusive, discriminatory, or inappropriate behaviour during lessons or on the platform.
            </p>
            <p className="leading-relaxed mt-4">
              Tutors agree to provide the services as described in their profiles and to maintain accurate availability and pricing information. Students agree to honour booked lessons and comply with our cancellation policy.
            </p>

            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">4. Payments and Fees</h2>
            <p className="leading-relaxed">
              All lesson payments are processed through our secure payment system. Lesson prices are set by tutors and displayed on their profiles. My Language Plug charges a platform service fee which is deducted from tutor earnings.
            </p>
            <p className="leading-relaxed mt-4">
              Students may purchase individual lessons or lesson packages. Lesson packages are non-refundable except as described in our refund policy. Refunds for individual lessons follow our cancellation policy as outlined in the Help Center.
            </p>

            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">5. Cancellation Policy</h2>
            <p className="leading-relaxed">
              Students may cancel a lesson up to 24 hours before the scheduled start time for a full lesson credit. Cancellations made within 24 hours of the lesson are generally non-refundable. If a tutor cancels a lesson, the student will receive a full refund or credit.
            </p>

            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">6. Intellectual Property</h2>
            <p className="leading-relaxed">
              The Service and its original content, features, and functionality are and will remain the exclusive property of My Language Plug and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of My Language Plug.
            </p>
            <p className="leading-relaxed mt-4">
              Lesson recordings are provided for personal educational use only and may not be distributed or published without the consent of all parties involved.
            </p>

            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">7. Disclaimer of Warranties</h2>
            <p className="leading-relaxed">
              The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>

            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">8. Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the maximum extent permitted by applicable law, My Language Plug shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising out of or in connection with your use of the Service.
            </p>

            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">9. Termination</h2>
            <p className="leading-relaxed">
              We may terminate or suspend your account at our sole discretion, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Service will cease immediately.
            </p>

            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">10. Governing Law</h2>
            <p className="leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>

            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">11. Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these Terms at any time. We will provide notice of significant changes by updating the &quot;Last updated&quot; date and, where appropriate, by sending you a notification. Continued use of the Service after such changes constitutes your acceptance of the new Terms.
            </p>

            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">12. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms, please contact us at{" "}
              <Link href="/contact" className="text-primary hover:underline">our contact page</Link> or by email at{" "}
              <a href="mailto:legal@mylanguageplug.com" className="text-primary hover:underline">
                legal@mylanguageplug.com
              </a>.
            </p>
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View Privacy Policy <ArrowRight className="h-4 w-4" />
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
