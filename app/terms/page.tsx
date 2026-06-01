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

            {/* Section 10 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">10. Prohibitions and Restrictions on Use</h2>
            <p className="leading-relaxed">
              (a) You acknowledge and agree that you must not misuse the MLP platform or its content. Without limiting the foregoing, you agree that you must not:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Provide false or misleading information to us;</li>
              <li>Authorise any third party to use the MLP platform through your MLP account;</li>
              <li>Schedule Language Service on behalf of anyone other than the person for whom the account was created (yourself or the 16 or 17 year old individual for whom you are the parent or guardian).</li>
              <li>Schedule and/or provide for any Language Service other than through the MLP platform;</li>
              <li>Make, accept, or receive payment in connection with Language Services other than through the MLP platform;</li>
              <li>Solicit and/or recruit Members to work or study on other software or language learning platforms; or</li>
              <li>Cause directly or indirectly in any way any of the events described in paragraphs 10(a)(i)–(vi).</li>
            </ul>
            <p className="leading-relaxed mt-4">
              (b) For the avoidance of doubt, Tutors are not permitted to provide Language Service to any Students other than through MLP. This prohibition survives termination of the agreement between you and MLP.
            </p>
            <p className="leading-relaxed mt-4">
              (c) In addition, to the maximum extent permitted by law, you acknowledge and agree that you will not:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Violate these Terms or any policies that appear on the MLP platform;</li>
              <li>Infringe upon our rights or the rights of others;</li>
              <li>Commit or encourage the commission of a criminal offence;</li>
              <li>Violate any applicable regulations, rules, laws, or local ordinances;</li>
              <li>Infringe upon or violate our Intellectual Property Rights or the Intellectual Property Rights of others;</li>
              <li>Harass, abuse, insult, harm, threaten, stalk, defame, slander, disparage, intimidate, promote bigotry or discrimination, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability;</li>
              <li>Solicit personal information from minors, or submit or transmit pornography;</li>
              <li>Upload any content that is indecent, libelous, defamatory, obscene, abusive, illegal or otherwise objectionable or otherwise invades on the rights of others;</li>
              <li>Submit false or misleading information;</li>
              <li>Record, process, mine, collect or track the personal information of others;</li>
              <li>Transmit or distribute a virus, trojan, worm or any other material which is malicious, technologically harmful, designed to interrupt, destroy or limit the functionality of the MLP platform, or in breach of confidence or in any way offensive or obscene;</li>
              <li>Hack into any aspect of the MLP Platform or otherwise access the MLP Platform other than via the public interfaces we make available to you; corrupt data; cause annoyance to other users;</li>
              <li>Maliciously interrupt the purchase of Language Services available through the MLP Platform;</li>
              <li>Infringe upon the rights (including without limitation proprietary rights) of any other person;</li>
              <li>Send any unsolicited advertising or promotional material, commonly referred to as &quot;spam&quot;, or phish, pharm, pretext, spider, crawl, or scrape;</li>
              <li>Interfere with or circumvent the security features of the MLP Platform or any related website, other websites, or the internet;</li>
              <li>Attempt to affect, or in any way interfere with the performance or functionality of any computer facilities of or accessed through the MLP Platform;</li>
              <li>Promote a business or other commercial venture or event, or otherwise use the MLP platform for commercial purposes;</li>
              <li>Modify, adapt, appropriate, reproduce, distribute, translate, create derivative works or adaptations of, publicly display, reformat or frame, sell, trade or in any way exploit the MLP platform, any of MLP&apos;s content or any Member Content, unless you have obtained our prior written consent;</li>
              <li>Reverse engineer any portion of the MLP platform; or</li>
              <li>Cause directly or indirectly in any way any of the events described in paragraphs 10(b)(i)–(xx) to occur.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              (d) You acknowledge that:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Breaching the prohibitions set out in paragraph 10(b) may constitute a criminal offence, and if so we may report any such breach to the relevant law enforcement authorities and disclose your identity to them.</li>
              <li>
                Irrespective of whether breach of any of the prohibitions set out in paragraph 10(b) constitutes a criminal offence, if:
                <ul className="mt-2 ml-4 space-y-1 list-disc list-inside">
                  <li>You breach any of the prohibitions set out in paragraphs 10(a) or 10(b);</li>
                  <li>We reasonably believe that your actions may cause liability for us, you, or our Members; or</li>
                  <li>We reasonably believe that you have otherwise acted in a manner that is inconsistent with the spirit of these Terms or any other policies that appear on the MLP platform</li>
                </ul>
                <p className="mt-2">we reserve the right to: suspend or terminate, in whole or in part, your Member account and/or your use of the MLP Platform or Language Services; or otherwise enforce any other rights available to us at law.</p>
              </li>
            </ul>
            <p className="leading-relaxed mt-4">
              (e) Once suspended or terminated, you are not permitted to use the MLP platform in any way or under a different Member account or re-register a new Member account, and you may no longer have access to any data, messages, files or any other content or material you post, upload, transmit or store on the MLP platform. Further, MLP reserves the right, in its sole and absolute discretion, to refuse to provide registration and membership, or to suspend or terminate any Member account for any reason in the future.
            </p>

            {/* Section 11 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">11. Disclaimer as to Language Services</h2>
            <p className="leading-relaxed">
              (a) Before accepting individuals to become Tutors who are able to provide Language Services via the MLP Platform, MLP uses reasonable endeavours to vet such individuals to check that they are professional and competent language instructors.
            </p>
            <p className="leading-relaxed mt-4">
              (b) Notwithstanding paragraph 11(a), you acknowledge and agree that to the maximum extent permitted by law, MLP:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Can not, and does not, provide any warranties, assurances or representations as to the qualities, competencies, professional accreditations, registrations, licences or the like, of Tutors, or the accuracy of the information they provide via the MLP Platform;</li>
              <li>Provides no warranties or representations, express or implied, as to any Language Services purchased by a Student via the MLP platform;</li>
              <li>Makes no recommendations to any particular Tutors.</li>
              <li>MLP is not obliged to, and may not, monitor, control or vet Member Content or any content from third parties.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              (c) Irrespective of any feature on the MLP platform a Student may use to select a Tutor, each Student is responsible for selecting their Tutor and negotiating a price for Language Services from that Tutor.
            </p>
            <p className="leading-relaxed mt-4">
              (d) Your use of the MLP platform is at your own discretion and risk, and you are responsible for the protection of your property and your personal safety when interacting with other Members via the MLP Platform. MLP and its related parties, affiliates, licensors, are not liable or otherwise responsible for any Claims or Losses incurred as a result of, arising from or connected with your use of the MLP Platform including without limitation as a result of the conduct of Members whether or not such conduct occurs via the MLP Platform or otherwise.
            </p>

            {/* Section 12 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">12. Disclaimer as to Ownership of Trademarks, Images of Personalities and Third-Party Copyright</h2>
            <p className="leading-relaxed">
              (a) Except where expressly stated to the contrary all persons (including their names and images), third party trademarks and content, services and/or locations featured on the MLP Platform are in no way associated, linked or affiliated with MLP and you should not rely on the existence of such a connection or affiliation.
            </p>
            <p className="leading-relaxed mt-4">
              (b) Any trademarks/names featured on the MLP Platform are owned by the respective trademark owners.
            </p>
            <p className="leading-relaxed mt-4">
              (c) Where a trademark or brand name is referred to it is used solely to describe or identify the products or services and is in no way an assertion that such products or services are endorsed by or connected to MLP.
            </p>

            {/* Section 13 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">13. Limitation of Liability</h2>
            <p className="leading-relaxed">
              Without limiting the foregoing:
            </p>
            <p className="leading-relaxed mt-4">
              (a) Subject to any non-excludable consumer guarantees and other consumer protection provisions set out in the Australian Consumer Law, the material displayed on the MLP Platform is provided without any guarantees, conditions or warranties, whether express or implied, as to its accuracy, completeness, reliability, suitability or availability.
            </p>
            <p className="leading-relaxed mt-4">
              (b) To the fullest extent permitted by law MLP hereby expressly excludes all warranties and other terms which might otherwise be implied by statute, common law or the law of equity.
            </p>
            <p className="leading-relaxed mt-4">
              (c) Without limiting the generality of the foregoing, in relation to the MLP Platform or the Services no warranties of any kind are provided, whether express or implied, including, without limitation, implied warranties of merchantability or fitness for a particular purpose. Further, MLP does not warrant that:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>the Website or any other part of the MLP Platform will function uninterrupted, timely, secure or error free, or be available at any particular time or location;</li>
              <li>any errors or defects will be corrected;</li>
              <li>the Website or MLP Platform is free of viruses or other harmful components; or</li>
              <li>the results of using the Website or MLP Platform will meet your requirements.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              (d) In no case shall MLP, its directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any damages, injury, loss or Claim whatsoever, including without limitation to any direct, indirect, special, consequential, punitive or incidental damages of any kind, including without limitation loss of use, profits, revenue, data or other intangibles, damage to goodwill or reputation, or the cost of procurement of substitute goods and services or any similar damages, arising out of or related to the use or inability to use the MLP Platform, performance errors or failures of the MLP Platform or any Linked Sites, any errors or omissions in any content on the MLP Platform or any Linked Sites, use of any content (or product) posted, transmitted, or otherwise made available via the MLP Platform, any Language Services procured using the MLP Platform, or the Linked Sites and any materials posted on those sites, irrespective of whether such damages were foreseeable or arise in contract, tort, equity, restitution, by statute, at common law or otherwise.
            </p>
            <p className="leading-relaxed mt-4">
              (e) We have no liability to the extent that our performance of the contract is prevented by force majeure. For these purposes, &quot;force majeure&quot; means any occurrence or omission as a direct or indirect result of which we are prevented from or delayed in performing any of our obligations, is beyond our reasonable control and which could not have been prevented or mitigated by reasonable diligence or precautionary measures, including forces of nature, natural disasters, acts of terrorism, riots, revolution, civil commotion, epidemic, industrial action and action or inaction by a government agency.
            </p>
            <p className="leading-relaxed mt-4">
              (f) We will not be liable for any loss or damage suffered by you as a result of your misuse of the MLP Platform, or as a result of a distributed denial-of-service attack, viruses or other technologically harmful material that may infect your computer equipment, computer programs, data or other proprietary material due to your use of the MLP Platform or to your downloading of any material posted on it, or on any Linked Sites.
            </p>
            <p className="leading-relaxed mt-4">
              (g) Our total liability for loss or damage of every kind, whether:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>arising under these Terms; or</li>
              <li>arising in any other way out of or in relation to the supply of the Language Services, their sale, delivery or the way they behave, and whether in tort or contract or in any other cause of action,</li>
            </ul>
            <p className="leading-relaxed mt-4">
              is limited to the amount of the sum paid by you to us for the Language Services.
            </p>
            <p className="leading-relaxed mt-4">
              (h) The above does not affect MLP&apos;s liability for death or personal injury arising from its negligence, fraudulent misrepresentation, misrepresentation as to a fundamental matter or any other liability which cannot be excluded or limited under applicable law.
            </p>

            {/* Section 14 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">14. Indemnity</h2>
            <p className="leading-relaxed">
              (a) You agree to indemnify, defend and hold harmless MLP and our successors and assigns, MLP directors, officers, employees, contractors, consultants, partners, agents, affiliates, licensors, service provider and suppliers, from any and all third party claims, liability, damages, Loss or costs (including without limitation legal fees) due to, arising from or otherwise connected with:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>your breach of these Terms or the policies and documents they incorporate by reference, or your violation of any law or rights of a third party; and</li>
              <li>any Member Content you provide or submit,</li>
            </ul>
            <p className="leading-relaxed mt-4">
              to the extent that you have caused or contributed towards such claims, liability, damages, Loss or costs.
            </p>
            <p className="leading-relaxed mt-4">
              (b) MLP must act reasonably to mitigate any Loss which it may incur as a consequence of any such claims, liability, damages, Loss or costs described in clause 14(a).
            </p>

            {/* Section 15 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">15. Linked Sites</h2>
            <p className="leading-relaxed">
              (a) This Website contains links to other websites (Linked Sites), which are not operated by us.
            </p>
            <p className="leading-relaxed mt-4">
              (b) In respect of all Linked Sites, you acknowledge and agree that:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>They have their own sets of terms and conditions, privacy policies and possibly other policies;</li>
              <li>We have no control over the Linked Sites. Accordingly, we do not accept or assume any liability or responsibility for Linked Sites or for any loss or damage whatsoever that may arise from or in connection with your access and/or use of any Linked Sites or for your reliance on any content, goods or services available on or through any Linked Sites;</li>
              <li>If/when you access/use Linked Sites, you do so at your own risk. Your use of the Linked Sites is subject to the terms and conditions of use and service, privacy policies and any other applicable policies contained within each such Linked Sites, and it is your responsibility to read the terms and conditions and privacy policies of those sites before using any Linked Sites.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              (c) You acknowledge and accept that some Linked Sites include websites which are necessary for the provision of Services and Language Services via the MLP Platform (&quot;Providers&quot;). In order to use the Services and obtain or give Language Services, you will be required to accept any terms and conditions of use and service, privacy policies and any other applicable policies in respect of those Providers.
            </p>
            <p className="leading-relaxed mt-4">
              (d) In respect of Linked Sites which are not necessary for the provision of Services and Language Services via the MLP Platform, you acknowledge and accept that we only provide links to those Linked Sites as a convenience, and the inclusion of such links does not imply or represent our endorsement of them or the resources or content products or services available from them.
            </p>

            {/* Section 16 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">16. Optional Tools</h2>
            <p className="leading-relaxed">
              (a) We may provide you with access to tools via the MLP Platform, including tools run by third parties.
            </p>
            <p className="leading-relaxed mt-4">
              (b) Access to such tools shall be subject to these Terms. However, where tools are run by third parties, access to those tools is provided without any warranties or representations of any kind and without any endorsement by us, and we shall have no liability whatsoever arising from or relating to your use of those tools. Your use of optional tools is at your own risk and subject to the terms on which those tools are provided by the relevant third party.
            </p>

            {/* Section 17 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">17. Linking to this Website</h2>
            <p className="leading-relaxed">
              You may link to the home page of the Website, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it, but you must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part where none exists. You must not establish a link from any website that is not owned by you. The Website and the MLP Platform must not be framed on any other site, nor may you create a link to any part of the Website other than the home page. We reserve the right to withdraw linking permission without notice.
            </p>

            {/* Section 18 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">18. Recording</h2>
            <p className="leading-relaxed">
              (a) You acknowledge and agree that all lessons conducted via the MLP Platform are recorded within MLP&apos;s zoom account, and you consent to such recording. This is done for various reasons, including without limitation for quality control, confirmation of completion of a lesson, and assistance in dispute resolution.
            </p>
            <p className="leading-relaxed mt-4">
              (b) Recordings will remain within MLP&apos;s zoom account and will be stored in accordance with the terms and conditions and privacy policies of zoom.us (
              <Link href="https://explore.zoom.us/en/terms/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://explore.zoom.us/en/terms/</Link>
              {" "}and{" "}
              <Link href="https://explore.zoom.us/en/privacy/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://explore.zoom.us/en/privacy/</Link>
              ).
            </p>

            {/* Section 19 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">19. Miscellaneous</h2>
            <p className="leading-relaxed">
              (a) <strong className="text-(--navy)">Entire agreement:</strong> These Terms, together with the other policies that appear on the Website, constitute the entire agreement of the parties and supersede any and all preceding and contemporaneous agreements between you and us.
            </p>
            <p className="leading-relaxed mt-4">
              (b) <strong className="text-(--navy)">Invalidity:</strong> If any part of the Terms is unenforceable (including any provision in which we exclude our liability to you) the enforceability of any other part of the Terms will not be affected and all other clauses remain in full force and effect. So far as possible, where any clause/sub-clause or part of a clause/sub-clause can be severed to render the remaining part valid, the clause must be interpreted accordingly. Alternatively, you agree that the clause must be rectified and interpreted in such a way that closely resembles the original meaning of the clause/sub-clause as is permitted by law.
            </p>
            <p className="leading-relaxed mt-4">
              (c) <strong className="text-(--navy)">Waiver:</strong> Any waiver of any provision of the Terms will be effective only if in writing and signed by us. Without limiting the foregoing, if you breach the Terms and we take no action, we will still be entitled to use our rights and remedies in any other situation where you breach the Terms.
            </p>
            <p className="leading-relaxed mt-4">
              (d) <strong className="text-(--navy)">Assignment:</strong> You are not permitted, at law or in equity, to assign, transfer or otherwise deal with any of your rights or obligations under these Terms without our prior written consent. MLP may assign or transfer its rights and obligations under these Terms without your consent, at its sole discretion and without restriction.
            </p>
            <p className="leading-relaxed mt-4">
              (e) <strong className="text-(--navy)">Governing Law:</strong> These Terms are governed by and construed in accordance with the laws for the time being in force in the State of Victoria, Australia without reference to any conflict of law principles, and you agree to submit to the jurisdiction of the courts and tribunals of the State of Victoria and any Courts that may hear appeals from those courts.
            </p>

            {/* Section 20 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">20. Dispute Resolution</h2>
            <p className="leading-relaxed">
              (a) If a dispute arises out of or relates to these Terms or the policies that appear on the Website/MLP platform, except where urgent interlocutory relief is sought, neither party may commence legal proceedings unless:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>The party claiming a dispute has given written notice of the dispute to the other; and</li>
              <li>The parties endeavour, in good faith, to resolve the dispute expeditiously by any means upon which they mutually agree.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              (b) If the dispute remains unresolved within fourteen (14) days after notice has been given under paragraph 19(a), and:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>
                All parties to the dispute are within Australia, then:
                <ul className="mt-2 ml-4 space-y-1 list-disc list-inside">
                  <li>The parties shall attend mediation with a mutually appointed mediator. If the parties cannot agree on a mediator, a mediator shall be appointed by the President of the Law Institute of Victoria or his/her nominee. The costs of the mediation shall be borne equally between the parties.</li>
                  <li>If the dispute is not resolved within 60 days of being referred to mediation, either party may institute legal proceedings concerning the subject matter of the dispute.</li>
                </ul>
              </li>
              <li>
                One or more parties to the dispute are outside of Australia, then:
                <ul className="mt-2 ml-4 space-y-1 list-disc list-inside">
                  <li>The parties must attempt to resolve the dispute by mediation in accordance with the Australian Centre for International Commercial Arbitration (&quot;ACICA&quot;) mediation rules that are current at the time of the dispute. The mediation shall take place in Melbourne, Australia and be administered by the ACICA.</li>
                  <li>If the dispute has not been settled pursuant to the said rules within 60 days following the written invitation to mediate or within such other period as the parties may agree in writing, the dispute shall be resolved by arbitration in accordance with the ACICA Arbitration Rules. The seat of arbitration shall be Melbourne, Australia. The language of the arbitration shall be English. The number of arbitrators shall be one.</li>
                </ul>
              </li>
            </ul>

            {/* Section 21 */}
            <h2 className="text-xl font-bold text-(--navy) mt-10 mb-4">21. Notices / Contact</h2>
            <p className="leading-relaxed">
              (a) MLP will communicate with you by posting communications on the Website/MLP platform or by email to the email address you provided when registering as a Member, and you consent to receiving communications from MLP in this way. You must keep your email address and residential and postal addresses up to date, and regularly check your emails and the Website/MLP platform for any communications from MLP. If you fail to respond to an email from MLP regarding any breach, dispute or complaint within five business days, MLP reserves the right to suspend or terminate your Member account.
            </p>
            <p className="leading-relaxed mt-4">
              (b) All notices to MLP intended to have a legal effect and which relate to your Member account, the Website/MLP platform, these Terms or the policies that appear on the Website/MLP platform must be in writing and delivered either in person, by post or via email to the corresponding address below:
            </p>
            <p className="leading-relaxed mt-4">
              Email Address:{" "}
              <Link href="mailto:contact@mylanguageplug.com" className="text-primary hover:underline">contact@mylanguageplug.com</Link>
            </p>
            <p className="leading-relaxed mt-4">
              (c) If you have any complaints or comments, or would like to contact us for anything else relating to your Member account, the Website/MLP platform, please send us an email to{" "}
              <Link href="mailto:contact@mylanguageplug.com" className="text-primary hover:underline">contact@mylanguageplug.com</Link>. If any complaints arise, we will attempt to resolve them as soon as practicable after we are notified of them.
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
