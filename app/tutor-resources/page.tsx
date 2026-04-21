"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight, BookOpen, Video, FileText, Users, Lightbulb, Download, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Resource {
  title: string
  type: string
  time: string
  content: string[]
}

interface ResourceCategory {
  icon: React.ElementType
  title: string
  description: string
  resources: Resource[]
}

const resourceCategories: ResourceCategory[] = [
  {
    icon: Video,
    title: "Getting Started",
    description: "Everything you need to know to set up your profile and run your first lesson.",
    resources: [
      {
        title: "Setting Up Your Tutor Profile",
        type: "Guide",
        time: "10 min read",
        content: [
          "Your profile is your shop window — it's the first thing students see before booking a trial. A complete, professional profile can increase your bookings significantly.",
          "**Profile Photo:** Use a clear, friendly headshot with a neutral background. Smile! Students want to feel comfortable before their first lesson.",
          "**Headline & Bio:** Write a short headline that mentions your language(s) and teaching style (e.g. 'Conversational Spanish Tutor | DELE Exam Preparation'). Your bio should cover your background, qualifications, why you love teaching, and what students can expect from your lessons.",
          "**Languages:** Add all languages you teach and set your proficiency level. Be accurate — overstating your level leads to poor reviews.",
          "**Intro Video:** Record a 1–2 minute video introducing yourself. Speak the target language for at least 30 seconds. Videos dramatically increase booking rates.",
          "**Specialities:** Tag the skills you focus on — conversation, grammar, exam prep, business language, etc. These help students find you when searching for specific goals.",
          "**Tip:** Ask a friend or family member to read your bio and give feedback before publishing.",
        ],
      },
      {
        title: "How to Configure Your Availability",
        type: "Guide",
        time: "5 min read",
        content: [
          "Setting your availability correctly ensures students can book at times that genuinely work for you, and prevents last-minute conflicts.",
          "**Weekly Schedule:** Block out your regular teaching hours in the availability calendar. Be realistic — don't open every slot if you can only reliably teach 10 hours per week.",
          "**Time Zones:** My Language Plug shows your availability in each student's local time zone automatically. Always set your hours in your own local time to avoid confusion.",
          "**Buffer Time:** Leave at least 10–15 minutes between lessons for notes, bio breaks, and preparation.",
          "**Advance Notice:** Set a minimum booking notice of at least 24 hours so you have time to prepare for each student.",
          "**Blocking Time Off:** Update your availability before holidays and busy periods. Students who can't find a slot will simply book another tutor.",
          "**Tip:** Consistency wins — tutors who keep their availability up to date receive more repeat bookings than those who appear unpredictable.",
        ],
      },
      {
        title: "Running Your First Video Lesson",
        type: "Video",
        time: "8 min watch",
        content: [
          "Your first lesson sets the tone for the entire student relationship. Here's how to make it a great experience.",
          "**Before the lesson:** Test your camera, microphone, and internet connection at least 15 minutes before. Have your lesson plan and any materials open and ready.",
          "**Opening (5 min):** Start with a warm welcome. Ask the student to tell you about themselves and their goals. Listen carefully — this shapes everything that follows.",
          "**Needs Assessment:** Ask: What's your current level? What do you find most difficult? What would success look like for you in 3 months? Take brief notes.",
          "**Core Activity (30–40 min):** For trial lessons, focus on conversation so the student can experience your teaching style. Correct errors gently and explain why, don't just give the right answer.",
          "**Closing (5 min):** Summarise what you covered, give one clear take-away, and outline what you'd work on in future lessons. End positively.",
          "**After the lesson:** Send a follow-up message through the platform thanking the student and recapping your lesson summary. This builds trust and encourages rebooking.",
        ],
      },
      {
        title: "Pricing Your Lessons Competitively",
        type: "Guide",
        time: "7 min read",
        content: [
          "Pricing is one of the most important decisions you'll make as a tutor. Price too low and you undervalue your expertise; price too high without the profile to match and students won't convert.",
          "**Research the market:** Browse other tutors on the platform who teach the same language and have a similar experience level. Note the range and where the majority cluster.",
          "**Factor in your experience:** New tutors with no reviews typically start 20–30% below mid-market rates and raise prices after their first 10–15 positive reviews.",
          "**Trial lesson pricing:** Many tutors price their trial lesson slightly lower (10–20%) than their regular rate to reduce the barrier for first-time students.",
          "**Don't race to the bottom:** Extremely low prices can actually deter students who associate price with quality. A rate that's too low may signal inexperience.",
          "**Review annually:** As your reviews grow and your demand increases, raise your rates. Most established tutors review their pricing every 6–12 months.",
          "**Tip:** Tutors who clearly explain what students get for their price in their profile bio tend to convert at higher rates, regardless of their rate.",
        ],
      },
    ],
  },
  {
    icon: BookOpen,
    title: "Teaching Techniques",
    description: "Expert strategies to make your lessons engaging, effective, and memorable.",
    resources: [
      {
        title: "The 5 Principles of Effective Language Teaching",
        type: "Article",
        time: "12 min read",
        content: [
          "Decades of language acquisition research point to five core principles that distinguish great language tutors from average ones.",
          "**1. Comprehensible Input First:** Students learn best when they are exposed to language that is just slightly above their current level — not too easy, not overwhelming. Tailor your vocabulary and sentence complexity to the individual learner.",
          "**2. Meaningful Output:** Don't just speak at students. Create opportunities for them to produce the language — ask open questions, roleplay scenarios, have them explain topics back to you. Production cements acquisition.",
          "**3. Spaced Repetition:** Revisit key vocabulary and grammar points across multiple lessons at increasing intervals. A word seen once is forgotten; a word revisited five times across two weeks becomes part of long-term memory.",
          "**4. Affective Filter:** Students learn less when anxious or embarrassed. Create a low-pressure, supportive environment. Celebrate progress. Correct errors constructively without interrupting flow.",
          "**5. Authentic Context:** Language learned in context sticks better than isolated grammar drills. Use real news articles, songs, podcasts, or conversations relevant to the student's life and interests.",
          "**Reflection exercise:** After each lesson, ask yourself: Did each student produce meaningful output? Was the material just the right level of challenge? Did I create a safe space for mistakes?",
        ],
      },
      {
        title: "Adapting Your Style for Different Learners",
        type: "Guide",
        time: "9 min read",
        content: [
          "No two students are the same. The best tutors quickly identify how each student learns and flex their approach accordingly.",
          "**Visual learners:** Use written notes, diagrams, colour-coded grammar tables, and on-screen text. Share your screen to display vocabulary lists or grammar summaries during lessons.",
          "**Auditory learners:** Focus on listening exercises, pronunciation drills, and verbal explanations. Read passages aloud together. Use music and podcasts as teaching materials.",
          "**Kinaesthetic learners:** These students learn by doing. Roleplay real-life scenarios — ordering food, making phone calls, giving directions. Keep the pace active and interactive.",
          "**Introverted students:** Give thinking time before expecting an answer. Don't rush. Some students need a moment to formulate their response — silence doesn't mean confusion.",
          "**Perfectionist students:** Gently encourage them to speak even when unsure. Remind them that mistakes are data, not failures.",
          "**How to identify learning style:** In the first lesson, try different activities and notice where the student is most engaged. Ask directly: 'Do you prefer to see things written down, or is listening enough?'",
        ],
      },
      {
        title: "Using Real-World Materials in Lessons",
        type: "Article",
        time: "8 min read",
        content: [
          "Authentic materials — created for native speakers rather than language learners — can dramatically improve engagement and accelerate progress.",
          "**Why authentic materials work:** They expose students to real vocabulary, natural rhythm, cultural nuance, and slang that textbooks often omit. Students also feel more motivated when learning with content that relates to their lives.",
          "**News articles:** Sites like BBC, Le Monde, El País, and Deutsche Welle all have learner editions. Use a current article relevant to the student's interests. Read together, define key vocabulary, discuss the content.",
          "**TV clips & YouTube:** Short clips (2–3 minutes) with subtitles work well. Watch once with subtitles, once without. Ask comprehension questions. Discuss vocabulary and phrases.",
          "**Music:** Choose a song the student likes. Analyse the lyrics — grammar structures, idioms, cultural references. Songs with repetitive choruses are particularly effective for vocabulary retention.",
          "**Podcasts:** Recommend level-appropriate podcasts for homework listening. Discuss in the next lesson.",
          "**Student-generated material:** Ask the student to bring something in their target language that interests them — a recipe, a news story, a social media post. This increases personal investment in the lesson.",
        ],
      },
      {
        title: "Giving Constructive Feedback to Students",
        type: "Guide",
        time: "6 min read",
        content: [
          "How you correct errors matters as much as whether you correct them. Poor error correction can damage confidence; great feedback accelerates progress.",
          "**The sandwich method:** Start with something genuine and positive, give the correction clearly, end with encouragement. E.g. 'That was a great sentence structure — just remember it's 'he goes' not 'he go' — but the vocabulary you used there was excellent.'",
          "**Delayed correction:** During conversation practice, note errors mentally (or on paper) and address them at the end of the activity rather than interrupting flow. This preserves fluency.",
          "**Recasting:** Repeat the student's sentence correctly without explicitly saying 'that was wrong'. E.g. Student: 'Yesterday I go to the shop.' Tutor: 'Oh nice, you went to the shop — what did you buy?' This models correct usage naturally.",
          "**Error logs:** Keep a simple note of each student's recurring errors. Revisit these in future lessons. Students appreciate that you remember their specific challenges.",
          "**What not to correct:** Not every error needs addressing. Focus on errors that impede communication or that are recurring patterns. Correcting every minor mistake discourages speaking.",
          "**Ask before correcting:** In a first lesson, ask: 'Do you prefer me to correct you immediately or at the end? How much correction feels helpful?' Different students have very different preferences.",
        ],
      },
    ],
  },
  {
    icon: FileText,
    title: "Lesson Planning",
    description: "Templates, frameworks, and tools to plan structured and goal-focused lessons.",
    resources: [
      {
        title: "Lesson Plan Template (Beginner)",
        type: "Template",
        time: "Download",
        content: [
          "Use this framework for students at A1–A2 level. Beginners need clear structure, slower pace, and lots of visual support.",
          "**Lesson Objective:** Write one clear, measurable goal. E.g. 'By the end of this lesson, the student will be able to introduce themselves and ask basic questions about someone else.'",
          "**Warm-Up (5 min):** A simple recall activity — show 5 vocabulary flashcards from the previous lesson. Keep it low-stakes and positive.",
          "**New Input (15 min):** Introduce new vocabulary or a simple grammar structure using pictures, gestures, and written examples. Check understanding with simple yes/no or multiple-choice questions.",
          "**Guided Practice (15 min):** Controlled exercises where the student practises the new language with your support. Fill-in-the-blank, matching exercises, or highly scaffolded conversation.",
          "**Free Practice (10 min):** A short roleplay or open question activity where the student uses the new language more independently. Provide gentle support but let them attempt it first.",
          "**Wrap-Up (5 min):** Review what was covered. Ask the student to summarise in their own words. Set one homework task — a short vocabulary review or listening activity.",
          "**Homework suggestion:** 5–10 vocabulary flashcards to review using a free app like Anki or Quizlet.",
        ],
      },
      {
        title: "Lesson Plan Template (Intermediate)",
        type: "Template",
        time: "Download",
        content: [
          "Use this framework for students at B1–B2 level. Intermediate learners need to push beyond comfort zones and encounter more complex, authentic language.",
          "**Lesson Objective:** Set a specific, challenging goal. E.g. 'Student will be able to express opinions and agree/disagree politely in a discussion about a current event.'",
          "**Warm-Up (5 min):** Quick conversation starter — 'What did you do this week?' or a topical question. This builds fluency and establishes a comfortable atmosphere.",
          "**Input & Analysis (15 min):** Introduce a short text, audio clip, or grammar focus. Ask comprehension questions, highlight key language patterns. Encourage the student to notice and analyse structure rather than just receive information.",
          "**Language Focus (10 min):** Drill or practise a specific grammar point or vocabulary set that emerged from the input. Use gap fills, sentence transformation, or error correction exercises.",
          "**Extended Practice (15 min):** Discussion, debate, roleplay, or presentation task. The student should be doing most of the talking. Your role is to listen, support, and take notes on errors.",
          "**Feedback & Wrap-Up (5 min):** Review errors noted during free practice. Highlight two or three specific improvements. Set a meaningful homework task.",
          "**Homework suggestion:** Write a short paragraph (100–150 words) on the lesson topic, or listen to a 5-minute podcast and prepare to summarise it next session.",
        ],
      },
      {
        title: "Lesson Plan Template (Advanced)",
        type: "Template",
        time: "Download",
        content: [
          "Use this framework for students at C1–C2 level. Advanced learners benefit from nuance, precision, and sophisticated authentic materials.",
          "**Lesson Objective:** Focus on specific refinements — register, idiomatic expression, precision, or a specialist vocabulary area. E.g. 'Student will be able to discuss complex ethical dilemmas using nuanced hedging language.'",
          "**Warm-Up (5 min):** Topical discussion starter — a news headline, a quote, an opinion. Advanced students thrive with spontaneous conversation.",
          "**Authentic Material (20 min):** A longer text, podcast, video, or article. The student reads/listens independently, then you discuss together — comprehension, vocabulary, style, register, cultural context.",
          "**Language Refinement (10 min):** Focus on precision — collocations, idiomatic phrases, register shifts, avoiding literal translation errors. Advanced errors are often subtle but important.",
          "**Extended Output (15 min):** Debate, presentation, mock interview, or essay planning. Push the student to produce sophisticated, well-structured language.",
          "**Feedback (5 min):** At this level, students appreciate detailed, analytical feedback. Note register issues, word choice, fluency patterns. Discuss not just what was wrong but why.",
          "**Homework suggestion:** Read a full article, write a 300-word opinion piece, or prepare a 3-minute presentation to deliver at the start of the next lesson.",
        ],
      },
      {
        title: "Setting Student Goals Framework",
        type: "Guide",
        time: "7 min read",
        content: [
          "Students who set clear, specific goals make faster progress and stay motivated longer. Help your students define their goals using this framework in your first or second lesson.",
          "**Why goals matter:** Vague goals ('I want to improve my French') lead to unfocused lessons and student disengagement. Specific goals give both tutor and student a shared purpose.",
          "**The SMART framework:** Help students set goals that are Specific, Measurable, Achievable, Relevant, and Time-bound. E.g. 'I want to pass DELF B2 in June' rather than 'I want to be better at French.'",
          "**Short-term goals (1–4 weeks):** Concrete mini-milestones — 'Learn 50 business vocabulary words', 'Hold a 5-minute conversation without switching to English.'",
          "**Medium-term goals (1–3 months):** Tangible progress markers — 'Watch a 15-minute TV episode without subtitles', 'Write a professional email in Spanish.'",
          "**Long-term goals (6+ months):** Major milestones — exam certifications, job interviews, moving abroad, fluency for travel.",
          "**Revisit regularly:** Check in on goals every 4–6 lessons. Celebrate progress. Adjust goals if life circumstances change. Written goal reminders in your lesson notes keep both of you accountable.",
          "**Goal-setting questions to ask:** 'Why are you learning this language?' / 'What would you love to be able to do that you can't do right now?' / 'Is there a specific event or deadline driving your learning?'",
        ],
      },
    ],
  },
  {
    icon: Users,
    title: "Student Relations",
    description: "Build lasting relationships with your students and handle difficult situations professionally.",
    resources: [
      {
        title: "How to Handle Cancellations & No-Shows",
        type: "Guide",
        time: "5 min read",
        content: [
          "Cancellations and no-shows are an unavoidable part of tutoring. How you handle them professionally protects your income, your time, and your relationship with the student.",
          "**Set a clear cancellation policy upfront:** Communicate your policy during or just after the first lesson. Most tutors require 24 hours' notice for a full reschedule, and may charge for shorter notice cancellations.",
          "**Late cancellations:** Send a brief, friendly message acknowledging the cancellation and reminding the student of your policy. Keep the tone warm — life happens. Reserve a firm response for repeat offenders.",
          "**No-shows:** Wait 10–15 minutes, then send a message through the platform: 'Hi [Name], I'm here for our lesson — are you on your way? Let me know if you need to reschedule.' Document the no-show.",
          "**Prevent cancellations:** Send a friendly reminder 24 hours before each lesson. A simple 'Looking forward to our lesson tomorrow at 6pm!' dramatically reduces no-shows.",
          "**Recurring cancellations:** If a student repeatedly cancels at short notice, have an honest conversation about their availability. It may be better to reschedule their regular slot to one that suits them better.",
          "**Platform policy:** Always refer to and follow the My Language Plug cancellation and refund policy, which protects both you and your students.",
        ],
      },
      {
        title: "Building Long-Term Student Relationships",
        type: "Article",
        time: "8 min read",
        content: [
          "Long-term students are the backbone of a thriving tutoring business. They provide stable income, enthusiastic referrals, and deeply rewarding teaching relationships.",
          "**Remember personal details:** Note students' names, hobbies, profession, family situation. Ask follow-up questions across lessons. Students feel valued when their tutor remembers what they discussed last week.",
          "**Track and celebrate progress:** Keep a simple record of each student's progress. Every few months, reflect back on how far they've come. Hearing 'Three months ago you couldn't hold a conversation — listen to you now!' is powerfully motivating.",
          "**Consistency breeds trust:** Show up on time, prepared, and engaged for every lesson. Consistent quality is the single biggest driver of student retention.",
          "**Be a learning partner, not just an instructor:** Share your own language learning experiences. Show curiosity about your student's life and culture. The best tutor relationships feel like a collaboration.",
          "**Proactive communication:** If you notice a student seems unmotivated or hasn't booked in a while, send a brief check-in message. This small gesture shows you care and often brings students back.",
          "**Handle difficult moments gracefully:** If a student is disappointed with their progress, listen, validate, and work together on a plan. Never be defensive. Students who feel heard become loyal, long-term learners.",
        ],
      },
      {
        title: "Managing Student Expectations",
        type: "Guide",
        time: "6 min read",
        content: [
          "Mismatched expectations are the primary source of student dissatisfaction. Setting realistic expectations early prevents disappointment and protects your relationship.",
          "**At the first lesson:** Be honest about what is achievable in their timeframe. Many students dramatically underestimate how long language learning takes. A gentle, encouraging explanation at the start saves frustration later.",
          "**Progress timelines:** Share a realistic roadmap. E.g. 'Most students reach B1 in 12–18 months with weekly lessons and daily practice. Here's what that could look like for you...'",
          "**The homework factor:** Be clear that progress depends on what happens between lessons. Students who practice 30 minutes a day between weekly sessions advance three to four times faster than those who don't.",
          "**Lesson scope:** Explain what you will and won't cover. Some students expect every grammar rule covered in lesson one. Guide them toward the most impactful focus areas.",
          "**Feedback on progress:** Schedule regular check-ins — every 8–10 lessons — to review goals and adjust the plan. This shows you're invested and gives students a structured sense of their trajectory.",
          "**Avoid overpromising:** It's tempting to tell a student what they want to hear to secure a booking. In the long run, honesty about timelines builds more trust than false optimism.",
        ],
      },
      {
        title: "Requesting and Responding to Reviews",
        type: "Guide",
        time: "4 min read",
        content: [
          "Reviews are one of the most powerful factors in attracting new students. A profile with 10+ positive reviews receives significantly more bookings than one with none.",
          "**When to ask:** After a particularly good lesson, or after a student achieves a milestone (passed an exam, held their first conversation). Timing matters — ask when the student is feeling positive.",
          "**How to ask:** Keep it simple and genuine. 'I'm so glad you're finding the lessons helpful. If you have a moment, a brief review on my profile would mean a lot to me — it helps other students find tutors who are a good fit for them.'",
          "**What to suggest they include:** Their language level when they started, a specific thing they've found most helpful, and how the lessons have impacted them. This guides the student and results in more detailed, useful reviews.",
          "**Responding to positive reviews:** Always respond warmly and specifically. 'Thank you, [Name] — it's been wonderful following your progress from beginner to confident conversationalist!'",
          "**Responding to critical reviews:** Stay professional. Thank the reviewer, acknowledge their experience, and briefly explain what you've taken on board. Never be defensive in public. Offer to discuss privately if appropriate.",
          "**Tip:** Never offer incentives for reviews — this violates platform guidelines. Simply ask sincerely at the right moment.",
        ],
      },
    ],
  },
  {
    icon: Lightbulb,
    title: "Growing Your Business",
    description: "Tips on how to increase your bookings, grow your student base, and earn more.",
    resources: [
      {
        title: "Optimising Your Profile for Search",
        type: "Guide",
        time: "10 min read",
        content: [
          "Most students find their tutor through search. A well-optimised profile ensures you appear prominently for the right search terms and convert browsers into bookers.",
          "**Use keywords naturally:** Think about what students type when searching. Include phrases like 'Spanish for beginners', 'IELTS preparation', 'business French', or 'conversational Italian' in your bio and specialities.",
          "**Complete every section:** Profiles with all fields completed rank higher in search results. Don't leave anything blank — even optional fields make a difference.",
          "**Headline matters most:** Your headline is displayed in search results before anyone clicks your profile. Make it descriptive and specific. 'Spanish Tutor' is generic; 'Conversational Spanish & DELE Exam Preparation | 5 Years Experience' is much stronger.",
          "**Profile completeness score:** Check your profile completion indicator. Aim for 100%.",
          "**Activity signals:** Tutors who are regularly active on the platform — responding quickly to messages, keeping availability up to date — tend to rank higher. Log in regularly.",
          "**Photo and video:** Profiles with a professional photo receive significantly more clicks. Profiles with an intro video receive more bookings. Both are essential.",
          "**Specialities and tags:** Select every relevant speciality and student level you can genuinely teach. More tags means you appear in more search results.",
        ],
      },
      {
        title: "How Tutors Increase Their Bookings by 3x",
        type: "Article",
        time: "11 min read",
        content: [
          "The tutors on My Language Plug who grow fastest share a set of common habits. Here are the strategies that make the biggest difference.",
          "**1. Respond within 1 hour:** Students send enquiries to multiple tutors. The first to respond with a personalised, friendly message almost always gets the booking. Turn on notifications and reply quickly.",
          "**2. Personalise your first message:** Reference something specific from the student's message. 'I saw you're preparing for DELF B2 in June — that's a great goal, and it's very achievable with focused preparation. Here's how I'd approach it with you...'",
          "**3. Offer a flexible first lesson:** A trial lesson that's easy to book — flexible in timing, clearly priced, with no pressure — converts far better than a rigid offering.",
          "**4. Follow up after a trial:** If a student attended a trial but hasn't rebooked, send a brief follow-up 48 hours later. 'It was great to meet you — let me know if you'd like to continue. I've kept some slots free that might suit your schedule.'",
          "**5. Consistency builds word of mouth:** Existing students who rave about you are your best marketing. Deliver outstanding lessons every time and referrals follow naturally.",
          "**6. Update your profile regularly:** Add new testimonial quotes (with permission), update your bio with any new qualifications, and keep your intro video current. Fresh profiles perform better.",
          "**7. Teach at peak times:** Evening and weekend slots (in the student's time zone) are highest demand. If you can offer these, you'll see more bookings.",
        ],
      },
      {
        title: "Retaining Students for Long-Term Learning",
        type: "Guide",
        time: "6 min read",
        content: [
          "Student retention is the most sustainable way to grow your income as a tutor. A student who books weekly for a year is worth far more than dozens of one-off trial lessons.",
          "**Structured learning paths:** At the start of the relationship, map out a learning journey with the student. 'Here's what we'll cover in the next 3 months to get you to B1.' Having a roadmap keeps students engaged and committed.",
          "**Regular progress check-ins:** Every 8–12 lessons, schedule a brief review. Reflect on how far the student has come, revisit their goals, and set new milestones. Progress visibility motivates continued booking.",
          "**Celebrate milestones:** When a student reaches a goal — passes an exam, holds their first conversation, travels and uses the language — acknowledge it warmly. A brief 'Congratulations message' and a small token of recognition go a long way.",
          "**Offer continuity after gaps:** Students sometimes stop for a few weeks due to work or life pressures. Reach out with a friendly 'Ready to pick up where we left off whenever you are' message. Most come back.",
          "**Varied lesson formats:** Keep things fresh by varying your lesson format — conversation one week, grammar focus the next, a fun listening activity the week after. Variety prevents fatigue.",
          "**Make them feel invested:** Students who see their own progress, feel known by their tutor, and feel part of a learning journey will keep coming back. Focus on the relationship as much as the content.",
        ],
      },
      {
        title: "Building Your Personal Teaching Brand",
        type: "Article",
        time: "9 min read",
        content: [
          "Your brand is what makes you memorable — and memorable tutors get more referrals, better reviews, and higher rates. Here's how to develop a distinct and authentic teaching identity.",
          "**Define your niche:** The most bookable tutors are known for something specific. 'Spanish for expats moving to Latin America', 'French for business professionals', 'Conversational Japanese for anime fans'. Niching feels limiting but actually expands your reach among the right students.",
          "**Your teaching philosophy:** What do you believe about how languages are best learned? Write two or three sentences that capture this. Include it in your bio. Students who share your philosophy will self-select toward you.",
          "**Consistent voice:** Whether you're writing your bio, responding to messages, or sending lesson recaps — maintain a consistent tone. Warm, professional, encouraging? Precise and analytical? Choose a style and own it.",
          "**Visual consistency:** If you use a profile photo, video background, or any lesson materials students can see — keep them clean, consistent, and professional.",
          "**Build social proof:** With permission, use student success quotes in your bio. 'Maria went from A2 to B2 in 9 months. Here's what she says...' Social proof is the most persuasive element of any profile.",
          "**Share your story:** What drove you to teaching? Why this language? Authentic personal stories create emotional connection. Students choose tutors they feel they can trust — and a genuine story builds that trust before you've even met.",
        ],
      },
    ],
  },
  {
    icon: Download,
    title: "Tools & Downloads",
    description: "Downloadable assets, worksheets, and checklists to support your teaching.",
    resources: [
      {
        title: "Pre-Lesson Student Needs Assessment",
        type: "Template",
        time: "Download",
        content: [
          "Use this needs assessment in your first lesson or send it to the student beforehand. Understanding their background, goals, and learning style from the start saves multiple lessons of guesswork.",
          "**Section 1 – Background:** Current level (self-assessed) | Previous study experience | Time studied so far | Languages already spoken",
          "**Section 2 – Goals:** Primary motivation for learning | Specific goal or deadline (exam, trip, job) | What success looks like in 3 / 6 / 12 months",
          "**Section 3 – Challenges:** What feels most difficult (speaking, grammar, vocabulary, listening, writing) | Common errors or patterns noticed | Any previous frustrations with learning this language",
          "**Section 4 – Preferences:** Preferred lesson style (structured / conversational / mixed) | Preference for correction (immediate / delayed / minimal) | Time available for practice between lessons | Topics of personal interest to incorporate in lessons",
          "**Section 5 – Logistics:** Available days and times | Preferred lesson length | Any scheduling constraints in coming months",
          "**How to use it:** Review responses before the first lesson and design your lesson plan accordingly. Keep a copy in each student's file and revisit every 3 months to track how goals have evolved.",
        ],
      },
      {
        title: "Progress Tracker Spreadsheet",
        type: "Template",
        time: "Download",
        content: [
          "Track each student's progress across key language skills over time. Sharing this with students gives them tangible evidence of improvement and keeps motivation high.",
          "**Column headers:** Date | Lesson number | Topic covered | Grammar focus | Vocabulary learned | Speaking confidence (1–5) | Listening comprehension (1–5) | Tutor notes | Homework set | Homework completed (Y/N)",
          "**Skills tracking (review every 4–6 lessons):** Speaking fluency | Vocabulary range | Grammar accuracy | Listening comprehension | Reading ability | Writing ability — each rated 1–5 or Beginner / Developing / Competent / Confident",
          "**Milestone log:** Record when the student achieved a notable goal — first 5-minute conversation, first correct use of subjunctive, first time watching a TV show without subtitles.",
          "**Monthly summary:** One sentence per month capturing the key progress. Students love looking back over this after 6 months.",
          "**How to use it:** Update the tracker after each lesson. Share the skills rating section with the student every month or so. Celebrate the numbers going up — it's powerful motivation.",
          "**Tip:** Even a simple Google Sheet works perfectly. Keep one tab per student and share view access with them so they can see their own progress in real time.",
        ],
      },
      {
        title: "Tutor Best Practices Checklist",
        type: "Checklist",
        time: "Download",
        content: [
          "Review this checklist monthly to ensure you're consistently delivering an outstanding student experience.",
          "**Before each lesson:** ☐ Reviewed student notes from last lesson | ☐ Prepared lesson plan with clear objective | ☐ Materials ready and tested | ☐ Tech (camera, mic, internet) checked | ☐ Sent reminder to student 24 hours before",
          "**During each lesson:** ☐ Started on time | ☐ Opened with a warm-up or brief review | ☐ Checked student's mood / energy | ☐ Student produced meaningful output (spoke, not just listened) | ☐ Corrected errors constructively | ☐ Ended with a clear summary and homework",
          "**After each lesson:** ☐ Updated student progress notes | ☐ Sent lesson recap message | ☐ Logged homework set | ☐ Reviewed any recurring errors to address next time",
          "**Weekly:** ☐ Availability calendar up to date | ☐ Responded to all messages within 24 hours | ☐ Profile information current and accurate",
          "**Monthly:** ☐ Reviewed student goals and progress | ☐ Requested reviews from suitable students | ☐ Reflected on your own teaching — what's working, what to improve | ☐ Checked for any new platform features or updates",
          "**Tip:** Print this checklist and tick it off each week. The habits that separate top-rated tutors from average ones are almost always small, consistent actions performed over months.",
        ],
      },
      {
        title: "Platform Quick-Start Reference Card",
        type: "Checklist",
        time: "Download",
        content: [
          "A handy reference for new tutors covering the essential actions and features on My Language Plug.",
          "**Account setup checklist:** ☐ Profile photo uploaded | ☐ Intro video recorded and uploaded | ☐ Bio written (minimum 150 words) | ☐ All teaching languages added | ☐ Specialities selected | ☐ Availability set for the next 4 weeks | ☐ Lesson rate set | ☐ Payment method connected | ☐ Cancellation policy reviewed",
          "**Lesson workflow:** 1. Student books → you receive a notification | 2. Confirm the lesson (auto-confirmed if your settings allow) | 3. Send a welcome message with any prep instructions | 4. Join the video lesson room 5 minutes early | 5. After the lesson, send a recap message | 6. Mark lesson as complete in your dashboard",
          "**Key platform features:** Messages tab — communicate with students | Calendar — manage availability and lesson schedule | Earnings — track completed lessons and payments | Profile — edit your public tutor profile | Reviews — view and respond to student feedback | Settings — manage notifications, payout preferences, cancellation policy",
          "**Getting support:** Help Centre: help.ailanguageplug.com | Email support: support@ailanguageplug.com | Tutor community forum: community.ailanguageplug.com",
          "**First 30 days tips:** Respond to every message within 2 hours | Keep your trial lesson clearly priced and easy to book | After your first 3 lessons, ask students for a review | Update your availability weekly so it always shows the next 4+ weeks",
        ],
      },
    ],
  },
]

const typeColor: Record<string, string> = {
  Guide: "bg-blue-100 text-blue-700",
  Article: "bg-purple-100 text-purple-700",
  Video: "bg-red-100 text-red-700",
  Template: "bg-green-100 text-green-700",
  Checklist: "bg-yellow-100 text-yellow-700",
}

function ResourceItem({ res }: { res: Resource }) {
  const [open, setOpen] = useState(false)
  return (
    <li className="rounded-lg border border-border overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-3 p-3 hover:bg-muted/50 transition-colors text-left"
        aria-expanded={open}
      >
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-(--navy)">{res.title}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">{res.time}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Badge className={`${typeColor[res.type] ?? "bg-gray-100 text-gray-700"}`}>
            {res.type}
          </Badge>
          {open ? (
            <ChevronUp className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          )}
        </div>
      </button>
      {open && (
        <div className="px-4 pb-4 pt-2 bg-muted/30 border-t border-border space-y-2">
          {res.content.map((para, i) => {
            // Render bold markdown (**text**) as <strong>
            const parts = para.split(/(\*\*[^*]+\*\*)/g)
            return (
              <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                {parts.map((part, j) =>
                  part.startsWith("**") && part.endsWith("**") ? (
                    <strong key={j} className="text-(--navy) font-semibold">
                      {part.slice(2, -2)}
                    </strong>
                  ) : (
                    part
                  ),
                )}
              </p>
            )
          })}
        </div>
      )}
    </li>
  )
}

export default function TutorResourcesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-(--light-blue) to-background pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-(--navy) sm:text-5xl">
              Tutor Resources
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Everything you need to become an outstanding tutor on My Language Plug.
              From lesson planning to growing your business, we&apos;ve got you covered.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/become-tutor">
                  Become a Tutor <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/tutor-requirements">View Requirements</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {resourceCategories.map((cat) => {
              const Icon = cat.icon
              return (
                <Card key={cat.title} className="flex flex-col">
                  <CardHeader>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-(--navy)">{cat.title}</CardTitle>
                    <CardDescription>{cat.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {cat.resources.map((res) => (
                        <ResourceItem key={res.title} res={res} />
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-(--light-blue)/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-(--navy)">Ready to Start Teaching?</h2>
            <p className="mt-4 text-muted-foreground">
              Join hundreds of tutors already earning on My Language Plug. Apply today and start sharing your language skills with the world.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/become-tutor">
                  Apply to Teach <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
