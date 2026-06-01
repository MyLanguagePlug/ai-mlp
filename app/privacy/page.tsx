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
            <p className="mt-2 text-lg font-semibold text-(--navy)">MY LANGUAGE PLUG</p>
            <p className="mt-4 text-muted-foreground">
              This policy applies to{" "}
              <a href="https://www.mylanguageplug.com.au" className="text-primary hover:underline">
                www.mylanguageplug.com.au
              </a>{" "}
              and the MLP platform.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none text-muted-foreground">

            {/* Section 1 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">
              1. This Privacy Policy and the Australian Privacy Principles
            </h2>
            <p className="leading-relaxed">
              (a) This privacy policy (&quot;Policy&quot;) applies to all Personal Information collected by My Language Plug
              (&quot;MLP&quot;) via the Website{" "}
              <a href="https://www.mylanguageplug.com.au" className="text-primary hover:underline">
                www.mylanguageplug.com.au
              </a>{" "}
              / MLP platform and outlines our ongoing obligations in respect of how we manage your Personal
              Information, including how we collect, use, and share such information when you visit or make a
              purchase from our Website / MLP platform.
            </p>
            <p className="leading-relaxed mt-4">
              (b) We have adopted the Australian Privacy Principles (&quot;APPs&quot;) contained in the Privacy Act 1988
              (Cth) (&quot;Privacy Act&quot;). The APPs govern the way in which we collect, use, disclose, store, secure and
              dispose of your Personal Information. A copy of the APPs may be obtained from the website of The
              Office of the Australian Information Commissioner at{" "}
              <a href="https://www.oaic.gov.au" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                www.oaic.gov.au
              </a>.
            </p>
            <p className="leading-relaxed mt-4">
              (c) By using or accessing the Website, you agree to the collection and use of information in
              accordance with this Policy. Unless otherwise defined in this Policy, terms used in this Policy have
              the same meanings as in our Terms, accessible at{" "}
              <a
                href="https://mlp-policy-documents.s3.eu-north-1.amazonaws.com/TermsOfUse.pdf"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Use
              </a>.
            </p>

            {/* Section 2 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">
              2. What is Personal Information?
            </h2>
            <p className="leading-relaxed">
              (a) The Privacy Act currently defines &quot;personal information&quot; as information or an opinion about an
              identified individual, or an individual who is reasonably identifiable:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>whether the information or opinion is true or not; and</li>
              <li>whether the information or opinion is recorded in a material form or not.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              (&quot;Personal Information&quot;)
            </p>
            <p className="leading-relaxed mt-4">
              (b) If information does not disclose your identity or enable your identity to be identified, it will in
              most cases not be classified as &quot;Personal Information&quot; as defined in the Privacy Act.
            </p>

            {/* Section 3 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">
              3. What Personal Information We Collect, How We Collect It and Why We Collect It
            </h2>
            <p className="leading-relaxed">
              (a) The kind of information we collect from you depends on how you use our Website and your
              interactions with us. The information we collect is generally in one of the following two categories:
            </p>

            <p className="leading-relaxed mt-4 font-semibold text-(--navy)">(i) Information about or from your device:</p>
            <p className="leading-relaxed mt-2">
              This is information we automatically collect about your device when you access our Website and
              includes information about your web browser, IP address, time zone, what Language Services or web
              pages you view, the websites or search terms and information about how you interact with the
              Website. Such information is collected via the following technologies:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>
                &quot;Log files&quot; – these track actions occurring on the Website, and collect data such as date/time stamps.
              </li>
            </ul>
            <p className="leading-relaxed mt-3">
              The above information enables us to tell when you use the Website (and the applicable time zone)
              and helps to customise your Website experience. Generally, however, it is not possible to identify
              you personally from such information.
            </p>

            <p className="leading-relaxed mt-4 font-semibold text-(--navy)">
              (ii) Information required to process your purchase of Language Services via our Website / MLP platform or to provide you with customer support:
            </p>
            <p className="leading-relaxed mt-2">
              This is information necessary to process your purchase of Language Services via our Website and /
              or to provide customer support to you, and is collected for either or both of those purposes. It is
              collected directly from you via your interactions with us by telephone, email or via our Website.
              Such information includes your name, date of birth, location, billing address, shipping address,
              email address, phone number, credit card or other payment details, gender, professional and
              educational background, government identification, languages you know and / or have an interest in.
            </p>

            <p className="leading-relaxed mt-4">
              (b) We may also collect information from media and publications, from other publicly available
              sources and from third parties to assist with our marketing activities.
            </p>
            <p className="leading-relaxed mt-4">
              (c) We collect your Personal Information and other information (e.g. information about or from your
              device) for the primary purpose of selling our Language Services to you, to provide you with the best
              service experience possible on the Website, as well as providing information to you and for
              marketing. We may also use your Personal Information and other information for secondary purposes
              closely related to the primary purpose, in circumstances where you would reasonably expect such
              use or disclosure.
            </p>
            <p className="leading-relaxed mt-4">
              (d) As noted in clause 7(f) of the Terms, you acknowledge and accept that:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>
                Students will have the option to, and will be encouraged by MLP to, leave anonymous reviews
                and/or testimonials for Tutors based on their experience in taking lessons from the Tutors;
              </li>
              <li>
                MLP may rank Tutors based on Student reviews and may publish those rankings and/or
                testimonials on the Website or MLP Platform;
              </li>
              <li>
                Rankings and testimonials may be accessible by anyone who accesses the Website or MLP
                Platform, irrespective of whether they are a Member.
              </li>
            </ul>
            <p className="leading-relaxed mt-3">You further acknowledge and accept that:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Students may leave reviews based on a star system, giving a written review together with a ranking for the Tutor out of 5;</li>
              <li>MLP reserves the right to filter reviews (e.g. to remove those with inappropriate language) or leave them as is, as it deems appropriate;</li>
              <li>MLP is not responsible for the reviews, testimonials or opinions of Students.</li>
            </ul>

            {/* Section 4 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">
              4. Disclosure of Personal Information
            </h2>
            <p className="leading-relaxed">
              (a) We customarily only disclose Personal Information to our service providers who assist us in
              operating the Website.
            </p>
            <p className="leading-relaxed mt-4">
              (b) Your Personal Information may also be disclosed or exposed from time to time:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>to maintenance and support personnel acting in the normal course of their duties;</li>
              <li>to third parties where you consent to the use or disclosure; and</li>
              <li>where required or authorised by law.</li>
            </ul>

            {/* Section 5 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">5. Marketing</h2>
            <p className="leading-relaxed">
              (a) By using our Website, you consent to the receipt of direct marketing material. We will only use
              your Personal Information for this purpose if we have collected such information directly from you,
              and if it is material of a type which you would reasonably expect to receive from us.
            </p>
            <p className="leading-relaxed mt-4">
              (b) We do not use sensitive Personal Information in direct marketing activity. Our direct marketing
              material will include a simple means by which you can request not to receive further communications
              of this nature. Further, you may unsubscribe from our mailing/marketing lists at any time by
              contacting us in writing by email to{" "}
              <a href="mailto:contact@mylanguageplug.com" className="text-primary hover:underline">
                contact@mylanguageplug.com
              </a>.
            </p>

            {/* Section 6 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">6. Sensitive Personal Information</h2>
            <p className="leading-relaxed">
              (a) Sensitive information is defined in the Privacy Act to include information or opinion about such
              things as an individual&apos;s racial or ethnic origin, political opinions, membership of a political
              association, religious or philosophical beliefs, membership of a trade union or other professional
              body, criminal record, or health information.
            </p>
            <p className="leading-relaxed mt-4">
              (b) We will not collect sensitive information about you.
            </p>

            {/* Section 7 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">
              7. Security of Personal Information, Retention and Deletion
            </h2>
            <p className="leading-relaxed">
              (a) The security of your Personal Information is important to us. Your Personal Information will be
              stored on the MLP platform in the MLP database in a manner that reasonably protects it from misuse
              and loss and from unauthorised access, modification or disclosure, including but not limited to,
              restricted key access and password encryption. However, you acknowledge that no method of
              transmission over the internet, or method of electronic storage is 100% secure and we cannot
              guarantee its absolute security.
            </p>
            <p className="leading-relaxed mt-4">
              (b) Most of the Personal Information is or will be stored in Member files in our MLP database. We
              will retain Personal Information for as long as we need it to comply with our legal obligations, to
              protect our interests and to protect the interests of others – typically for the period during which
              you are a member, and for at least 7 years after you cease to be a Member.
            </p>
            <p className="leading-relaxed mt-4">
              (c) Subject to our need to retain information as described in clause 7(b) above:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>
                When your Personal Information is no longer needed for the purpose for which it was obtained,
                we will take reasonable steps to delete, destroy or permanently de-identify your Personal
                Information. Records of inactive Member accounts may also be deleted 7 years after their last
                use by the Member, unless we need to retain it longer.
              </li>
              <li>
                If you have registered with any of our supported login systems, you may request that your
                Personal Information be deleted. To request the deletion of your account and all associated data,
                please contact our support team via email:{" "}
                <a href="mailto:contact@mylanguageplug.com" className="text-primary hover:underline">
                  contact@mylanguageplug.com
                </a>{" "}
                with subject line <em>&quot;Data Deletion Request&quot;</em> and include your registered email address and User ID.
              </li>
              <li>
                Upon verification of your request, we will delete all your data from our database, provided we
                determine that it is not required for the information retention reasons described in clause 7(b)
                above. Your request will be processed within 7 business days, and a confirmation email will be
                sent upon completion of the deletion process.
              </li>
            </ul>
            <p className="leading-relaxed mt-4">
              (d) In relation to tutorial recordings, as noted in clause 18 of the Terms, you acknowledge and agree that:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>
                All lessons conducted via the MLP Platform are recorded within MLP&apos;s Zoom account, and you
                consent to such recording. This is done for various reasons, including without limitation for
                quality control, confirmation of completion of a lesson, and assistance in dispute resolution.
              </li>
              <li>
                Recordings will remain within MLP&apos;s business Zoom account and will be stored in accordance
                with the terms and conditions and privacy policies of{" "}
                <a href="https://explore.zoom.us/en/terms/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  zoom.us
                </a>.
              </li>
              <li>
                MLP does not store the recordings separately, and is not liable for any loss or damage arising
                from or in connection with storage of the recordings by Zoom.
              </li>
              <li>
                MLP may download any tutorial recording to assist in dealing with any dispute with Members, or
                between Members, if MLP considers it appropriate to do so, or if MLP is otherwise compelled to
                do so by law.
              </li>
            </ul>

            {/* Section 8 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">8. Overseas Transfer</h2>
            <p className="leading-relaxed">
              Your Personal Information may be transferred overseas or stored overseas for a variety of reasons.
              It is not possible to identify each and every country to which your Personal Information may be sent.
              If your Personal Information is sent to a recipient in a country with data protection laws which are
              at least substantially similar to the APPs, and where there are mechanisms available to you to
              enforce protection of your Personal Information under that overseas law, we will not be liable for a
              breach of the APPs if your Personal Information is mishandled in that jurisdiction. If your Personal
              Information is transferred to a jurisdiction which does not have data protection laws as
              comprehensive as Australia&apos;s, we will take reasonable steps to secure a contractual commitment from
              the recipient to handle your information in accordance with the APPs.
            </p>

            {/* Section 9 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">9. GDPR</h2>
            <p className="leading-relaxed">
              In some circumstances, the European Union General Data Protection Regulation (&quot;GDPR&quot;) provides
              additional protection to individuals located in Europe. Where this is the case, there may be
              additional rights and remedies available to you under the GDPR if your Personal Information is
              handled in a manner inconsistent with that law.
            </p>

            {/* Section 10 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">
              10. Access to your Personal Information and Correction
            </h2>
            <p className="leading-relaxed">
              (a) You may access the Personal Information we hold about you, and also update and/or correct it,
              subject to certain exceptions. If you wish to access your Personal Information, please contact us in
              writing as set out below.
            </p>
            <p className="leading-relaxed mt-4">
              (b) We will not charge any fee for your access request, but may charge an administrative fee for
              providing a copy of your Personal Information.
            </p>
            <p className="leading-relaxed mt-4">
              (c) Please note in order to protect your Personal Information we may require identification from you
              before releasing the requested information.
            </p>

            {/* Section 11 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">11. Policy Updates</h2>
            <p className="leading-relaxed">
              This Policy may change from time to time and the most current version of the Policy is available on
              this page of our Website.
            </p>

            {/* Section 12 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">
              12. Privacy Policy Complaints and Enquiries
            </h2>
            <p className="leading-relaxed">
              (a) If you have a complaint concerning the manner in which we maintain the privacy of your Personal
              Information, please contact us as set out below. We will consider all such complaints and we may
              seek further information from you to clarify your concerns. If we agree that your complaint is well
              founded, we will, in consultation with you, take appropriate steps to rectify the problem. If you
              remain dissatisfied with the outcome, you may refer the matter to the Office of the Australian
              Information Commissioner.
            </p>
            <p className="leading-relaxed mt-4">
              (b) If you have any queries or complaints about this Policy please contact us by email at{" "}
              <a href="mailto:contact@mylanguageplug.com" className="text-primary hover:underline">
                contact@mylanguageplug.com
              </a>.
            </p>

          </div>

          <div className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/terms"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View Terms of Use <ArrowRight className="h-4 w-4" />
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
