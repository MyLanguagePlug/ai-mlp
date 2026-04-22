"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaqChatbox } from "@/components/faq-chatbox"

const faqSections = [
  {
    category: "Getting Started",
    faqs: [
      {
        question: "What is My Language Plug?",
        answer:
          "My Language Plug is an online language tutoring platform that connects students with qualified, native-speaking tutors from around the world. You can book one-on-one video lessons for any language, at any level, on a schedule that suits you.",
      },
      {
        question: "How do I sign up?",
        answer:
          "Simply click 'Sign Up' at the top of the page, choose whether you're a student or a tutor, and fill in your details. It takes less than 2 minutes to create your account.",
      },
      {
        question: "Is there a free trial?",
        answer:
          "Yes! Many of our tutors offer a free or discounted 20-minute trial lesson so you can get a feel for their teaching style before committing to a full package.",
      },
      {
        question: "How do I find the right tutor?",
        answer:
          "Use our tutor search to filter by language, availability, price, and teaching style. You can view each tutor's profile, watch their intro video, read student reviews, and book a trial lesson before deciding.",
      },
    ],
  },
  {
    category: "Lessons & Scheduling",
    faqs: [
      {
        question: "How do I book a lesson?",
        answer:
          "Visit a tutor's profile, select an available time slot from their calendar, and confirm your booking. You'll receive a confirmation email with the video call link.",
      },
      {
        question: "How do I join a video lesson?",
        answer:
          "When your lesson is about to start, go to your dashboard, navigate to 'My Lessons', and click 'Join Lesson' on the relevant upcoming lesson. You can also join from the link sent in your confirmation email.",
      },
      {
        question: "How do I reschedule a lesson?",
        answer:
          "You can reschedule a lesson from your 'My Lessons' tab in the student dashboard. Click 'Reschedule', select a new date and time, and confirm. You must reschedule at least 24 hours in advance.",
      },
      {
        question: "How do I cancel a lesson?",
        answer:
          "In your dashboard, go to 'My Lessons', find the lesson you want to cancel, and click 'Cancel'. Cancellations made more than 24 hours before the lesson are eligible for a credit refund.",
      },
      {
        question: "What if my tutor doesn't show up?",
        answer:
          "If your tutor doesn't join the lesson within 10 minutes of the start time, please contact our support team via the Contact page. We will investigate and provide a full lesson credit or refund.",
      },
    ],
  },
  {
    category: "Payments & Pricing",
    faqs: [
      {
        question: "How much do lessons cost?",
        answer:
          "Lesson prices vary by tutor and are set by the tutors themselves. Prices typically range from $15 to $60 per hour. You can also purchase lesson packages at a discount — see our Pricing page for details.",
      },
      {
        question: "What payment methods are accepted?",
        answer:
          "We accept all major credit and debit cards (Visa, Mastercard, American Express), as well as PayPal. All payments are securely processed and encrypted.",
      },
      {
        question: "Can I get a refund?",
        answer:
          "If you cancel a lesson more than 24 hours in advance, you'll receive a credit to your account. Cancellations within 24 hours are generally non-refundable unless the tutor cancels. If there are any technical issues preventing a lesson, please contact us and we'll make it right.",
      },
      {
        question: "What are lesson packages?",
        answer:
          "Lesson packages let you buy multiple lessons upfront at a discounted rate. The more lessons you buy, the bigger the discount — up to 15% off for a 20-lesson package. See our Pricing page for the full breakdown.",
      },
    ],
  },
  {
    category: "For Tutors",
    faqs: [
      {
        question: "How do I become a tutor on My Language Plug?",
        answer:
          "Visit our 'Become a Tutor' page and complete the application. We'll review your qualifications, schedule a short interview, and — if approved — help you set up your profile so you can start accepting students.",
      },
      {
        question: "How much can I earn as a tutor?",
        answer:
          "Tutors set their own rates. The average tutor on our platform earns between $1,500 and $3,500 per month. Your earnings depend on how many hours you teach and the rate you set.",
      },
      {
        question: "When do I get paid?",
        answer:
          "Tutors are paid weekly via bank transfer or PayPal, for all lessons completed in the previous week. You can track your earnings in your tutor dashboard.",
      },
      {
        question: "What commission does My Language Plug take?",
        answer:
          "We take a platform fee of 20% from each lesson. So if you charge $50/hour, you receive $40. As you complete more lessons, your platform fee decreases as part of our loyalty programme.",
      },
    ],
  },
  {
    category: "Technical Issues",
    faqs: [
      {
        question: "I can't connect to the video call. What should I do?",
        answer:
          "First, check your internet connection and make sure you're using a supported browser (Chrome or Firefox recommended). Ensure you've granted your browser permission to use your camera and microphone. If the problem persists, try refreshing the page or restarting your browser.",
      },
      {
        question: "The video/audio quality is poor. How can I improve it?",
        answer:
          "Poor quality is usually caused by a slow internet connection. Try closing other browser tabs, pausing any downloads, or moving closer to your Wi-Fi router. For the best experience, use a wired ethernet connection if possible.",
      },
      {
        question: "I forgot my password. How do I reset it?",
        answer:
          "Click 'Log In', then select 'Forgot Password'. Enter your email address and we'll send you a reset link. If you don't receive the email within a few minutes, check your spam folder.",
      },
    ],
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-medium text-(--navy)">{question}</span>
        {open ? (
          <ChevronUp className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground" />
        ) : (
          <ChevronDown className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground" />
        )}
      </button>
      {open && (
        <div className="pb-5 text-sm leading-relaxed text-muted-foreground">{answer}</div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-(--light-blue) to-background pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-(--navy) sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Find quick answers to the most common questions about My Language Plug.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            {faqSections.map((section) => (
              <div key={section.category}>
                <h2 className="mb-6 text-xl font-bold text-(--navy)">{section.category}</h2>
                <div className="rounded-xl border border-border bg-background px-6">
                  {section.faqs.map((faq) => (
                    <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* AI Chatbox */}
          <div className="mt-14">
            <FaqChatbox />
          </div>

          {/* Still need help */}
          <div className="mt-16 rounded-xl bg-(--light-blue)/40 p-8 text-center">
            <h2 className="text-2xl font-bold text-(--navy)">Still Have Questions?</h2>
            <p className="mt-3 text-muted-foreground">
              Our support team is here to help. Get in touch and we'll get back to you as quickly as possible.
            </p>
            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contact Support <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/help">Help Center</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
