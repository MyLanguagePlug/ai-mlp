import Link from "next/link"
import { CreditCard, ArrowRight } from "lucide-react"

export default function PaymentPolicyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-(--light-blue) to-background pb-12 pt-12 md:pb-16 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-primary/10 p-4">
                <CreditCard className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-(--navy) sm:text-5xl">
              Payment Policy
            </h1>
            <p className="mt-2 text-lg font-semibold text-(--navy)">MY LANGUAGE PLUG</p>
            <p className="mt-4 text-muted-foreground">
              This Payment Policy sets out the terms and conditions that govern payments made via the MLP Platform.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none text-muted-foreground">

            {/* Section 1 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">1. Definitions</h2>
            <p className="leading-relaxed">
              (a) In these Terms, unless the contrary intention appears:
            </p>
            <ul className="mt-3 space-y-3 list-none pl-0">
              <li>
                <strong className="text-(--navy)">Lesson</strong> means the provision of Language Services by a Tutor to a
                Student pursuant to a LSC in exchange for payment of the Lesson Fee by the Student to the Tutor.
              </li>
              <li>
                <strong className="text-(--navy)">Lesson Fee</strong> means the fee charged by a Tutor and payable by a
                Student for a confirmed Lesson. MLP may give suggestions or recommendations as to what a reasonable
                Lesson Fee could be. However, the Tutor has the sole discretion to set the Lesson Fee for Lessons the
                Tutor provides.
              </li>
              <li>
                <strong className="text-(--navy)">LSC</strong> or &quot;Language Services Contract&quot; is as defined in clause
                2(a) of this Policy.
              </li>
              <li>
                <strong className="text-(--navy)">MLP Share</strong> means 15% of the Lesson Fee which is payable to MLP.
              </li>
              <li>
                <strong className="text-(--navy)">Stripe</strong> means the platform through which MLP accepts payments from
                Members for access to the MLP Platform, and/or to purchase Language Services available via the MLP Platform.
              </li>
              <li>
                <strong className="text-(--navy)">Terms</strong> means the MLP Website Terms of Use (as may be amended from
                time to time), accessible at{" "}
                <a
                  href="https://mlp-policy-documents.s3.eu-north-1.amazonaws.com/TermsOfUse.pdf"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Use
                </a>.
              </li>
              <li>
                <strong className="text-(--navy)">Tutor Share</strong> means 85% of the Lesson Fee which is payable to the
                Tutor.
              </li>
            </ul>

            <p className="leading-relaxed mt-4">
              (b) Unless otherwise defined in this Policy, all other capitalised terms used in this Policy have the
              same meaning as in our Terms.
            </p>
            <p className="leading-relaxed mt-4">
              (c) In this Policy, unless the contrary intention appears:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>words in the singular include the plural and vice versa;</li>
              <li>
                words importing a natural person include corporations, firms, unincorporated associations, bodies
                corporate, authorities and agencies;
              </li>
              <li>headings are inserted for convenience and do not affect the interpretation of this Policy;</li>
              <li>a reference to the whole of a thing includes a reference to a part of that thing;</li>
              <li>the words &quot;include&quot; or &quot;including&quot; are to be construed without limitation; and</li>
              <li>
                where a word or phrase is given a defined meaning another grammatical form of that word or phrase
                has a corresponding meaning.
              </li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">2. Language Services Contract</h2>
            <p className="leading-relaxed">
              (a) When a Student and a Tutor connect via the MLP Platform and agree:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>that the Tutor will provide certain Language Services to the Student;</li>
              <li>to the date and time when the Lesson will be provided; and</li>
              <li>to the Lesson Fee that will be payable in respect of the Lesson,</li>
            </ul>
            <p className="leading-relaxed mt-3">
              the Student and Tutor are deemed to have entered into a contract pursuant to which the Student agrees to
              purchase and the Tutor agrees to deliver a Lesson (&quot;LSC&quot; or &quot;Language Services Contract&quot;).
            </p>

            <p className="leading-relaxed mt-4">
              (b) The Student and Tutor who are party to a LSC, agree that each LSC:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>
                contains a requirement for the Student and Tutor to act in good faith in the performance of the LSC; and
              </li>
              <li>must not be made subject to any provisions that breach or could breach the Terms.</li>
            </ul>

            <p className="leading-relaxed mt-4">
              (c) Members acknowledge and agree that the due and proper performance of the LSC and compliance with the
              terms described in clause 2(b) is crucial for MLP as it impacts upon the goodwill, value and reputation of
              MLP and the MLP Platform. Accordingly, the Student and Tutor acknowledge and agree that MLP may in its
              sole discretion take any action it deems appropriate in respect of any LSC in order to grow, improve and/or
              protect the goodwill, value and reputation of MLP and the MLP Platform, including without limitation,
              suspension or termination of the LSC or instigating legal proceedings or other dispute resolution measures.
            </p>

            {/* Section 3 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">3. Payment – Lesson Fee</h2>
            <p className="leading-relaxed">
              (a) Once a LSC has been entered into between a Student and a Tutor, the Student must pay the agreed Lesson
              Fee for the Lesson the subject of the LSC upfront via Stripe or via such other payment method or facility
              available via the MLP Platform from time to time (&quot;Payment Facility&quot;).
            </p>
            <p className="leading-relaxed mt-4">
              (b) The payment shall be held within the Payment Facility until such time as:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>
                the said Lesson has been provided by the Tutor to the Student via Zoom (or such other online video
                conferencing system available via the MLP Platform from time to time) (&quot;Lesson Platform&quot;); and
              </li>
              <li>the Lesson has registered as complete in the MLP Platform; and</li>
              <li>
                MLP has approved distribution of the Lesson Fee to the Tutor and to MLP in accordance with the Tutor
                Share and MLP Share;
              </li>
            </ul>
            <p className="leading-relaxed mt-3">
              or until the Lesson Fee is refunded as permitted under this Payment Policy.
            </p>

            <p className="leading-relaxed mt-4">
              (c) The Tutor agrees to pay MLP a commission for each confirmed Lesson equal to the MLP Share and
              irrevocably authorises MLP to deduct the MLP Share from each payment made under clause 3(a) to pay the
              commission in the manner set out in clause 3(e).
            </p>
            <p className="leading-relaxed mt-4">
              (d) The provision of the Lesson shall be deemed to have been completed in the MLP Platform once the Lesson
              Platform utilised for the Lesson has been closed at the end of the Lesson, or once the Student confirms the
              Lesson has been completed when asked to do so by MLP.
            </p>
            <p className="leading-relaxed mt-4">
              (e) Once a Lesson is complete, the Tutor Share of the Lesson Fee shall be released to the Tutor and the MLP
              Share of the Lesson Fee shall be released to MLP.
            </p>
            <p className="leading-relaxed mt-4">
              (f) The Tutor acknowledges that there may be a delay in the payment reaching their nominated account. This
              may be due to processing times of Stripe or any other Payment Facility used to process payments, or due to
              government or other authority restrictions. Such delays are beyond the control of MLP and MLP shall not be
              responsible for such delays.
            </p>
            <p className="leading-relaxed mt-4">
              (g) If there is a change in Lesson Fees, the Lesson Fee applicable at the time of booking the Lesson shall
              apply.
            </p>

            {/* Section 4 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">4. Cancellations and Refunds</h2>
            <p className="leading-relaxed">
              (a) If a Student wishes to cancel a Lesson:
            </p>
            <ul className="mt-3 space-y-3 list-disc list-inside">
              <li>
                <strong>Before the scheduled start time:</strong> the Lesson Fee for the Lesson will be credited to the
                &quot;unscheduled&quot; section of the Student&apos;s Member account, and they can book in another Lesson with any
                Tutor, or cancel the Lesson altogether and have the Lesson Fee refunded to them in full.
              </li>
              <li>
                <strong>After the scheduled start time:</strong> the Student acknowledges and accepts that they forfeit
                the Lesson Fee, and the Lesson Fee will be distributed to the Tutor and to MLP in accordance with the
                Tutor Share and the MLP Share respectively.
              </li>
            </ul>

            <p className="leading-relaxed mt-4">
              (b) If a Tutor wishes to cancel a Lesson:
            </p>
            <ul className="mt-3 space-y-3 list-disc list-inside">
              <li>
                <strong>Before the scheduled start time:</strong> the Lesson Fee for the Lesson will be credited to the
                &quot;unscheduled&quot; section of the Student&apos;s Member account, and the Student can then either book in another
                Lesson with the same Tutor or a different Tutor, or cancel the Lesson altogether and have the Lesson Fee
                refunded to them in full.
              </li>
              <li>
                <strong>After the scheduled start time:</strong> the Student acknowledges and accepts that the Lesson Fee
                for the Lesson will be credited to the &quot;unscheduled&quot; section of the Student&apos;s Member account, and the
                Student can then either book in another Lesson with the same Tutor or a different Tutor, or cancel the
                Lesson altogether and have the Lesson Fee refunded to them in full.
              </li>
            </ul>

            {/* Section 5 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">5. GST</h2>
            <p className="leading-relaxed">To the extent applicable:</p>

            <p className="leading-relaxed mt-4 font-semibold text-(--navy)">(a) Definitions</p>
            <p className="leading-relaxed mt-2">In this clause:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>
                <strong>GST</strong> has the same meaning as in the GST Law.
              </li>
              <li>
                <strong>GST Law</strong> includes the <em>A New Tax System (Goods and Services Tax) Act 1999</em> (Cth)
                and any other Act of the Parliament of Australia and any other Law that introduces, imposes, deals with
                or is related to a GST.
              </li>
              <li>
                <strong>GST Rate</strong> means the GST rate from time to time provided for in the GST Law.
              </li>
              <li>
                Words and expressions used in this clause have a particular meaning in the GST Law (as defined in the
                GST Act and also including any applicable legislative determinations and Australian Taxation Office
                public rulings) have the same meaning, unless the contrary intention appears.
              </li>
              <li>
                Any reference to GST payable by a party includes any corresponding GST payable by the representative
                member of any GST group of which that Party is a member.
              </li>
              <li>
                If the GST Law treats part of a supply as a separate supply for the purposes of determining whether GST
                is payable on that part of the supply or for the purpose of determining the tax period to which that
                part of the supply is attributable, such part of the supply is to be treated as a separate supply.
              </li>
            </ul>

            <p className="leading-relaxed mt-4 font-semibold text-(--navy)">(b) GST on Supplies</p>
            <p className="leading-relaxed mt-2">
              If GST is imposed on a supply made by MLP and/or a Tutor under or in connection with a LSC or Services
              provided by MLP in accordance with the Terms, then in addition to the consideration payable or to be
              provided by the recipient of the supply (&quot;GST Exclusive Consideration&quot;), the recipient must pay the
              supplier an amount:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>
                calculated by multiplying the GST Exclusive Consideration for the relevant supply by the prevailing GST
                Rate; and
              </li>
              <li>
                at the same time and in the same manner as the GST Exclusive Consideration for the actual supply is
                paid or provided,
              </li>
            </ul>
            <p className="leading-relaxed mt-3">
              so that the supplier is in the same financial position after payment of the GST for that supply as it would
              have been but for the imposition of the GST.
            </p>

            <p className="leading-relaxed mt-4 font-semibold text-(--navy)">(c) Tax Invoice</p>
            <p className="leading-relaxed mt-2">
              The supplier must provide the recipient of the supply with a tax invoice in respect of any payment the
              recipient is required to make under clause 5(b).
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
              href="/terms"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View Terms of Use <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
