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
              Terms of Use
            </h1>
            <p className="mt-2 text-lg font-semibold text-(--navy)">MY LANGUAGE PLUG</p>
            <p className="mt-4 text-muted-foreground">ABN 98 667 640 799</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none text-muted-foreground">

            <p className="leading-relaxed">
              My Language Plug (ABN 98 667 640 799) (MLP) owns and operates this website (&quot;Website&quot;) and the MLP
              Platform as defined in clause 1 below. Throughout the Website, the terms &quot;we&quot;, &quot;us&quot; and &quot;our&quot; refer to MLP.
              Access to and use of the MLP Platform is subject to the following terms, conditions and notices, including any
              additional terms, conditions and / or policies referenced and / or available in / or from these terms of use
              (&quot;Terms&quot;). This is the case whether you become a registered user of the Website or not.
            </p>
            <p className="leading-relaxed mt-4">
              MLP may revise these Terms from time to time. Please read the current Terms carefully each time before
              accessing or using the Website and/or MLP Platform its contents and applications, and / or the services available
              through the Website. By using or accessing the Website and/or MLP Platform, you agree to be legally bound by
              the Terms that are current at the time of your use or access, and you agree and consent to the collection,
              processing and use of your information in accordance with our{" "}
              <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>{" "}
              and to the terms and conditions applicable to payments set out in our{" "}
              <Link href="/payment-policy" className="text-primary hover:underline">Payment Policy</Link>.
            </p>
            <p className="leading-relaxed mt-4">
              If any of the Terms are not acceptable to you or you are unwilling to be bound by them, you should not or should
              not continue to (as the case may be), use or access the Website and/or MLP Platform.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">1. Definitions and Interpretation</h2>
            <p className="leading-relaxed">
              (a) In these Terms, unless the contrary intention appears:
            </p>
            <p className="leading-relaxed mt-4">
              (i) <strong className="text-(--navy)">Applications</strong> means any applications for mobile, tablet and other smart devices provided by MLP
              for the provision of Services;
            </p>
            <p className="leading-relaxed mt-4">
              (ii) <strong className="text-(--navy)">Claims</strong> includes any claim, notice, demand, costs, expenses, debts, dues, liabilities, damages,
              losses, action, proceeding, litigation, judgment or order, however it arises, past, present or future,
              fixed or unascertained, actual or contingent.
            </p>
            <p className="leading-relaxed mt-4">
              (iii) <strong className="text-(--navy)">Intellectual Property Rights</strong> means all present and future rights conferred by statute, common law
              or equity in or in relation to any copyright, trademarks, designs, patents, circuit layouts, business and
              domain names, inventions and other results of intellectual activity in the wellness, health, scientific,
              commercial, industrial, literary or artistic fields.
            </p>
            <p className="leading-relaxed mt-4">
              (iv) <strong className="text-(--navy)">Language Services</strong> means language teaching services available for purchase by Students via the
              Website and delivered by Tutors.
            </p>
            <p className="leading-relaxed mt-4">
              (v) <strong className="text-(--navy)">Loss</strong> means, with respect to a person, the loss suffered or expense or liability incurred by the person
              or the damages or costs to which the person is entitled;
            </p>
            <p className="leading-relaxed mt-4">
              (vi) <strong className="text-(--navy)">Member</strong> means a registered user of the Website who is a Student and / or a Tutor.
            </p>
            <p className="leading-relaxed mt-4">
              (vii) <strong className="text-(--navy)">Member Content</strong> means all content, including without limitation text, photographs, audio, video, or
              other materials and information, that a Member posts, uploads, publishes, submits and / or transmits,
              and includes their Member profile.
            </p>
            <p className="leading-relaxed mt-4">
              (viii) <strong className="text-(--navy)">MLP Platform</strong> means the system through which the Services are provided by MLP, which includes
              without limitation the Website and all of its contents, access to MLP&apos;s zoom account, access to the
              payment systems used for the purposes of accepting and processing payments for Language
              Services, and the software and systems used to operate the MLP Platform.
            </p>
            <p className="leading-relaxed mt-4">
              (ix) <strong className="text-(--navy)">Services</strong> means the provision of the MLP Platform that allows:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Tutors to advertise their Language Services;</li>
              <li>Students to obtain reviews about Tutors;</li>
              <li>Students and Tutors to connect for the purposes of arranging and the giving and taking of Language Services;</li>
              <li>Access to MLP&apos;s zoom account to enable the provision of Language Services to be provided by Tutors to Students;</li>
              <li>Payment by Students for Language Services via the payment systems utilized by the MLP Platform.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              (x) <strong className="text-(--navy)">Student</strong> means a Member who purchases Language Services.
            </p>
            <p className="leading-relaxed mt-4">
              (xi) <strong className="text-(--navy)">Tutor</strong> means a Member who offers and delivers Services.
            </p>

            <p className="leading-relaxed mt-6">
              (b) In these Terms, unless the contrary intention appears:
            </p>
            <p className="leading-relaxed mt-4">
              (i) a reference to &quot;you&quot; or &quot;your&quot; in these Terms is a reference to any person who uses or access this
              Website, the MLP Platform and / or the Services, whether or not that person is a Member.
            </p>
            <p className="leading-relaxed mt-4">
              (ii) words in the singular include the plural and vice versa.
            </p>
            <p className="leading-relaxed mt-4">
              (iii) words importing a natural person include corporations, firms, unincorporated associations, bodies
              corporate, authorities and agencies.
            </p>
            <p className="leading-relaxed mt-4">
              (iv) headings are inserted for convenience and do not affect the interpretation of these Terms.
            </p>
            <p className="leading-relaxed mt-4">
              (v) a reference to the whole of a thing includes a reference to a part of that thing.
            </p>
            <p className="leading-relaxed mt-4">
              (vi) the words &quot;include&quot; or &quot;including&quot; are to be construed without limitation.
            </p>
            <p className="leading-relaxed mt-4">
              (vii) where a word or phrase is given a defined meaning another grammatical form of that word or phrase
              has a corresponding meaning.
            </p>

            {/* Section 2 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">2. Amendments to Terms</h2>
            <p className="leading-relaxed">
              (a) We reserve the right, in our absolute discretion, to amend the Terms at any time. Where practicable we will
              endeavor to notify you of any amendment.
            </p>
            <p className="leading-relaxed mt-4">
              (b) Any amendment of the Terms will appear on this page of the Website and will be effective immediately from
              the time it appears on the Website. Accordingly, you can view the most current version of the Terms at any
              time on this page.
            </p>
            <p className="leading-relaxed mt-4">
              (c) Your continued use of and or access to the Website, the MLP Platform and/or the Services following any
              amendment of the Terms being published on the Website constitutes an agreement by you to be bound by
              the Terms as amended. It is your responsibility to regularly check these Terms to ensure you are aware of
              the most up to date Terms.
            </p>
            <p className="leading-relaxed mt-4">
              (d) For the avoidance of doubt, where Language Services have been purchased but not yet delivered before
              notification of a change to these Terms, the Privacy Policy or the Payment Policy, the Terms as at the time
              of payment apply.
            </p>

            {/* Section 3 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">3. Website</h2>
            <p className="leading-relaxed">
              (a) Access to the MLP Platform is permitted on a temporary and limited basis.
            </p>
            <p className="leading-relaxed mt-4">
              (b) We reserve the right to remove or amend all or any part of the MLP Platform or any Services without notice.
              From time to time, we may restrict access to some parts or all of the MLP Platform or the Services. We will
              not be liable if for any reason the MLP Platform or Services are unavailable at any time or for any period.
            </p>
            <p className="leading-relaxed mt-4">
              (c) Your use of the MLP Platform and / or Services is at your own risk. The MLP Platform and Services (except
              as expressly stated otherwise by us) are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis.
            </p>

            {/* Section 4 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">4. Age Requirement</h2>
            <p className="leading-relaxed">
              (a) The Services and the Language Services available through the MLP Platform are available:
            </p>
            <p className="leading-relaxed mt-4">
              (i) to you if you are at least 18 years of age; and
            </p>
            <p className="leading-relaxed mt-2">
              (ii) to a person who is 16 or 17 years of age, if you are consenting to their access in your capacity as a
              parent or guardian of that person.
            </p>
            <p className="leading-relaxed mt-4">
              (b) By agreeing to these terms, you represent that you are 18 years of age or older and:
            </p>
            <p className="leading-relaxed mt-4">
              (i) you are accessing or using the MLP Platform, the Services and/or the Language Services available via
              the MLP Platform yourself; or
            </p>
            <p className="leading-relaxed mt-2">
              (ii) in your capacity as the parent or guardian of a person who is 16 or 17 years of age, you are consenting
              to the use and access of the MLP Platform, the Services and/or the Language Services available via
              the Website by that person.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">5. Connecting Tutors and Students</h2>
            <p className="leading-relaxed">
              (a) MLP, through the MLP Platform, enables Members to give and/or receive Language Services online.
              Through the MLP Platform, MLP enables the following to occur:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Members to upload, submit, store, send and receive content related to language learning;</li>
              <li>Members to conduct searches, connect with, choose, and engage each other for the purposes of language learning and language practice;</li>
              <li>Students to conduct searches, connect with, choose, and engage Tutors for Language Services;</li>
              <li>Tutors to advertise their capabilities, respond to inquiries, connect with and engage Students to provide them with their Language Services.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              (b) MLP does not provide Language Services. MLP provides access to an online venue for the events described
              in paragraph 5(a) to occur, and you acknowledge and agree that MLP&apos;s responsibility with respect to
              Language Services is limited to facilitating their availability via the MLP Platform.
            </p>
            <p className="leading-relaxed mt-4">
              (c) You acknowledge and agree that:
            </p>
            <p className="leading-relaxed mt-4">
              (i) MLP:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>is not a broker or agent for Language Services;</li>
              <li>is not a party to any agreements entered into between Tutors and Students;</li>
              <li>does not participate in any direct interactions between Tutors and Students;</li>
              <li>has no control over Member conduct or over any Language Services provided through the MLP Platform;</li>
              <li>does not control, and has no right to control, Tutor profiles, including without limitation details as to services described on Tutor profiles and the provision of services by Tutors;</li>
              <li>records via MLP&apos;s zoom account, all lessons that occur via the MLP Platform.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              (ii) Tutors:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>are independent, third-party contractors of MLP, and nothing in these Terms or elsewhere shall constitute Tutors as employees, agents, joint venturers, partners (or the like) of MLP, and any such relationships are expressly denied;</li>
              <li>have no authority to incur, and will not incur, any obligation on behalf of MLP except with the prior written approval of MLP;</li>
              <li>act exclusively on their own behalf and for their own benefit, and not on behalf of or for the benefit of MLP;</li>
              <li>are solely responsible for delivering Language Services for which they have been paid through the MLP Platform;</li>
            </ul>
            <p className="leading-relaxed mt-4">
              and to the maximum extent permitted by law, MLP is not liable for any Loss incurred as a result of:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>any interactions between Members (including in respect of the provision of Language Services by Tutors to Students); or</li>
              <li>any content uploaded, submitted, stored, sent, received or posted on or through the MLP Platform or between Members.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              (d) You agree to not to take or omit to take any action that would result in the creation of a false impression that
              you are endorsed by, partnering with, or acting on behalf of or for the benefit of MLP, including by using any
              MLP intellectual property in an unauthorised or in appropriate manner.
            </p>

            {/* Section 6 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">6. Member Accounts</h2>
            <p className="leading-relaxed">
              (a) In order to be able to take and/or provide Language Services, you must create an MLP account and become
              a Member.
            </p>
            <p className="leading-relaxed mt-4">
              (b) To create an MLP account:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>you must not impersonate another person;</li>
              <li>you must satisfy the age requirement in accordance with clause 4;</li>
              <li>you must provide a valid email address, mobile phone number, date of birth, location, gender, occupation, education background, valid government identification, languages and the information you provide must be complete and accurate;</li>
              <li>you must create a username and password. The username must be unique and not infringe upon any third party rights, be otherwise illegal or be vulgar or offensive. MLP reserves the right to amend or delete any username, at any time and without prior notice to you, if for any reason in MLP&apos;s sole discretion, a username you select violates this clause.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              (c) If you create an MLP account, then in relation to that account, you acknowledge and agree that:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>you satisfy the age requirement in accordance with clause 4;</li>
              <li>you are solely responsible for keeping your account secure and confidential;</li>
              <li>you will not disclose your account details to any person;</li>
              <li>all information you provide is complete and accurate;</li>
              <li>you must promptly advise us of any update to the information in your account;</li>
              <li>you are solely responsible for the activity that occurs on your account;</li>
              <li>you agree that you may be charged for all Language Services purchased using your login and password through the MLP Platform;</li>
              <li>you will not use the Services to breach any applicable laws; and</li>
              <li>you are responsible for keeping your account information up to date.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              (d) Once you become a member, you must use your real name, and not a pseudonym, when representing
              yourself via the MLP Platform, including without limitation when communicating with other Members.
            </p>
            <p className="leading-relaxed mt-4">
              (e) You must notify us immediately of any breach of security or unauthorised use of your account. MLP is not
              liable for any Loss caused by any unauthorised use of your account.
            </p>
            <p className="leading-relaxed mt-4">
              (f) You agree that MLP is not responsible for any misuse of your account, and you release MLP from all Claims,
              Loss and / or damage suffered by you which has been caused by your failure to comply with these Terms.
            </p>
            <p className="leading-relaxed mt-4">
              (g) MLP, acting reasonably, reserves the right to suspend or terminate your account if:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>any information provided during the registration process or thereafter proves to be inaccurate, fraudulent, out of date, or incomplete or we are otherwise unable to verify or authenticate any information you provide to us;</li>
              <li>we discover unauthorised use of your account;</li>
              <li>we reasonably believe you have misused your account, committed a material breach of these Terms or used or are using the Website in a fraudulent or improper manner; or</li>
              <li>we otherwise have a legitimate interest to do so, such as complying with a legal or regulatory obligation.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              (h) You may cancel your member account at any time by closing the account, and ceasing all use of the
              Website / MLP platform. Despite such cancellation, you acknowledge and agree that any provision or part of
              these Terms and the policies that appear on the Website / MLP Platform which is capable of continuing to
              have effect, will remain in full force and effect.
            </p>

            {/* Section 7 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">7. Tutors</h2>
            <p className="leading-relaxed font-semibold text-(--navy)">(a) Tutor Applications</p>
            <p className="leading-relaxed mt-4">
              (i) Members who would like to provide Language Services via the MLP Platform must submit
              an application, together with a copy of their passport and other official government issued
              identification, through the MLP Platform (&quot;Tutor Application&quot;).
            </p>
            <p className="leading-relaxed mt-4">
              (ii) Upon receipt of a Tutor Application, MLP will use reasonable endeavors to assess the Tutor Application
              in any way it deems appropriate.
            </p>
            <p className="leading-relaxed mt-4">
              (iii) MLP reserves the right in its sole discretion, to accept or reject any Tutor Application.
            </p>
            <p className="leading-relaxed mt-4">
              (iv) To the extent permitted by law, as part of its assessment of Tutor Applications, MLP may:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>conduct identity verification checks; and/or</li>
              <li>run background checks from public records and/or through third party suppliers, including without limitation criminal record checks and sex offender registers.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              (v) You agree and authorize MLP to:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>supply copies of, or details of, your identification documentation to any applicable third party supplier to enable the checks described in clause 7(a)(iv) to be made; and/or</li>
              <li>use your personal information, including without limitation your full name and date of birth, to obtain any reports we require,</li>
            </ul>
            <p className="leading-relaxed mt-2">in order to assess your Tutor Application.</p>

            <p className="leading-relaxed mt-6 font-semibold text-(--navy)">(b) Tutor Profile</p>
            <p className="leading-relaxed mt-4">
              (i) If we approve your Tutor Application, you will then be required to create a Tutor profile setting out specific
              details of the Language Services you are able to provide, as well as your availability to provide Language
              Services. Personal contact information must not be included in your Tutor profile.
            </p>
            <p className="leading-relaxed mt-4">
              (ii) You acknowledge and accept that your Tutor profile will be visible to anyone who accesses the MLP
              Platform, whether or not they are a member.
            </p>
            <p className="leading-relaxed mt-4">
              (iii) Once your Tutor profile is complete, you may commence providing Language Services to Students via
              the MLP Platform.
            </p>

            <p className="leading-relaxed mt-6 font-semibold text-(--navy)">(c) Tutor Subscription Fee</p>
            <p className="leading-relaxed mt-4">
              (i) Tutors are required to pay a monthly subscription fee of AUD$10 plus GST. The fee shall be due and
              payable on the first business day of each month.
            </p>
            <p className="leading-relaxed mt-4">
              (ii) MLP reserves the right to vary the subscription fee at any time by written notice to you.
            </p>

            <p className="leading-relaxed mt-6 font-semibold text-(--navy)">(d) Tutor Standards</p>
            <p className="leading-relaxed mt-4">
              (i) Tutors acknowledge and agree that they must comply with the following standards:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Commit to all confirmed language lessons;</li>
              <li>Reschedule or cancel lessons only if it is absolutely necessary and there is no reasonably available alternative;</li>
              <li>Notify students well in advance of any known periods of absence and update your Tutor Profile to reflect this;</li>
              <li>Be punctual in commencing and ending each lesson. Tutors ought to give the student a polite warning (approximately 5 minutes before the end of the lesson) that the end of the lesson is approaching. If a Student is late for a lesson, the Tutor must remain available for at least the first half of the period for the scheduled lesson;</li>
              <li>Conduct yourself professionally, and be respectful and polite when providing Language Services;</li>
              <li>Provide regular feedback to Students;</li>
              <li>Keep all lessons confidential;</li>
              <li>Other than a student&apos;s name do not request from the Student any personally identifiable information, and other than your name do not provide your personally identifiable information to a Student;</li>
              <li>Maintain records of all communications with Students, as well as all invoices and payments in relation to Language Services provided. You acknowledge and agree that in the event of a dispute between a Tutor and Student, you must if requested to do so by MLP, provide such records to MLP to enable MLP to assist in the dispute resolution process.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              (ii) MLP reserves the right to set or vary the standards with which Tutors must comply with at any time by
              written notice to you.
            </p>

            <p className="leading-relaxed mt-6 font-semibold text-(--navy)">(e) Tutor Content</p>
            <p className="leading-relaxed mt-4">
              (i) Any Member Content you use to provide Language Services, or related to your provision of Language
              Services via the MLP Platform (&quot;Tutor Content&quot;) is subject to clauses 8, 9 and 10 of these Terms.
            </p>
            <p className="leading-relaxed mt-4">
              (ii) For the avoidance of doubt:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>You grant to each Student to whom you provide Language Services, a licence to use, view and copy any Tutor Content you use in providing Language Services solely for their personal, non-commercial and educational purpose;</li>
              <li>You acknowledge and agree that Tutor Content is part of Member Content and that MLP&apos;s rights in respect of Member Content set out in clause 9 apply to Tutor Content;</li>
              <li>You otherwise retain all Intellectual Property Rights in respect of your Member Content (including Tutor Content).</li>
            </ul>

            <p className="leading-relaxed mt-6 font-semibold text-(--navy)">(f) Reviews and Rankings</p>
            <p className="leading-relaxed mt-4">You acknowledge and accept that:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Students will have the option to, and will be encouraged by MLP to, leave reviews and/or testimonials for Tutors based on their experience in taking lessons from the Tutors;</li>
              <li>MLP may rank Tutors based on Student reviews, and may publish those rankings and/or testimonials on the Website or MLP Platform;</li>
              <li>Rankings and testimonials may be accessible by anyone who accesses the Website or MLP Platform, irrespective of whether they are a member.</li>
            </ul>

            {/* Section 8 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">8. MLP Content and Intellectual Property</h2>
            <p className="leading-relaxed">
              (a) You acknowledge and agree that all content available or accessible from or via the MLP Platform, including
              without limitation all images, videos, visual interfaces, interactive features, graphics, design, computer code,
              software, aggregate review ratings, and all other elements and components of the MLP Platform and all
              Intellectual Property Rights relating to such content, but excluding Member Content, are and remain the
              property of MLP or its licensors or contractors, and are protected by applicable laws and treaties around the
              world. All such rights are reserved by MLP and its licensors and contractors (as appropriate).
            </p>
            <p className="leading-relaxed mt-4">
              (b) You may store, print and display the content supplied to you or which appears on the MLP Platform solely
              for your own personal use and solely in connection with using the Services. You are not permitted to publish,
              manipulate, distribute or otherwise reproduce, in any format, any of the content or copies of the content
              supplied to you or which appears on the MLP Platform, nor may you use any such content in connection with
              any business or commercial enterprise.
            </p>

            {/* Section 9 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">9. Member Content</h2>
            <p className="leading-relaxed">
              (a) We may permit you to post, submit, link, store, share and otherwise make publicly available on the MLP
              Platform certain information, text, graphics, images, videos, or other material including feedback (&quot;Member
              Content&quot;). For the avoidance of doubt, Member Content does not include information submitted for the
              purposes of registering as a Member unless you post it in the public portions of the MLP Platform.
            </p>
            <p className="leading-relaxed mt-4">
              (b) You acknowledge and agree that:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>All Member Content you provide on the MLP Platform will be publicly available and you bear the risks associated with it being publicly available.</li>
              <li>By posting Member Content to the MLP Platform you grant us the right and worldwide, irrevocable, perpetual, non-exclusive, transferable, royalty-free licence, and with the right to sub-licence, to use, view, modify, publicly display, reproduce, transmit, stream, broadcast, distribute and otherwise exploit your Member Content on and through the Website, by means of, and to market and promote MLP, and that as a result, other users of the MLP Platform may use that Member Content subject to these Terms. You otherwise retain all your rights in relation to such Member Content.</li>
              <li>We reserve the right to modify or remove any Member Content at any time for any reason.</li>
              <li>We are under no obligation to monitor the accuracy or reliability of your Member Content.</li>
              <li>We take no responsibility and assume no liability for any Member Content posted by you or any third party.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              (c) You represent and warrant that:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>You own the Member Content or you have the right to use it, and you grant us the right and licence as provided in this clause;</li>
              <li>The posting of your Member Content on or through the MLP Platform does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person;</li>
              <li>The Member Content will not cause you or us to breach any law, regulation, rule, code or other legal obligation;</li>
              <li>The Member Content will not or could not be reasonably considered to be obscene, inappropriate, defamatory, disparaging, indecent, seditious, offensive, pornographic, threatening, abusive, liable to incite racial hatred, discriminatory, blasphemous, in breach of confidence or in breach of privacy;</li>
              <li>The Member Content will not be unsolicited, undisclosed or unauthorised advertising;</li>
              <li>the Member Content does not contain software viruses or any other computer code, files, or programs designed to interrupt, destroy, or limit the functionality of any computer software, hardware or telecommunications equipment; and</li>
              <li>The Member Content does not bring us or the MLP Platform into disrepute.</li>
              <li>If applicable, you will keep all records necessary to establish that your Member Content does not violate any of the requirements of this clause and make such records available upon our reasonable request.</li>
            </ul>

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
