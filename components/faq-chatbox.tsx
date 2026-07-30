"use client"

import { useState, useRef, useEffect } from "react"
import { Bot, Send, Sparkles } from "lucide-react"

// ── FAQ data (shared between the FAQ list and the AI chatbot) ─────────────
const FAQ_DATA = [
  {
    q: "How do I book a trial lesson?",
    a: "Find a tutor you like, click their profile and select \"Book a trial lesson\". Trial lessons are typically 25–30 minutes and discounted. Your first trial lesson always gets 30% off automatically.",
    keywords: ["book", "trial", "lesson", "schedule", "first", "new", "start"],
  },
  {
    q: "Can I cancel or reschedule a lesson?",
    a: "Yes. Go to My Lessons, find the upcoming lesson and click \"Reschedule\". Cancellations made more than 24 hours before the start time are free. Late cancellations may incur a fee as per the tutor's policy.",
    keywords: ["cancel", "reschedule", "change", "lesson", "upcoming", "refund", "policy", "late"],
  },
  {
    q: "How does the payment process work?",
    a: "You purchase lesson credits which are stored in your account. Credits are deducted when you book a lesson. Unused credits are fully refundable within 30 days.",
    keywords: ["payment", "pay", "credits", "billing", "refund", "charge", "money", "cost", "price"],
  },
  {
    q: "What if I'm unhappy with my tutor?",
    a: "We offer a satisfaction guarantee on trial lessons. If you're not happy, contact support within 72 hours and we'll issue a full credit. For regular lessons, credits are handled on a case-by-case basis.",
    keywords: ["unhappy", "unsatisfied", "tutor", "bad", "refund", "guarantee", "satisfaction", "complaint"],
  },
  {
    q: "How do I change my subscription plan?",
    a: "Go to Settings → Billing to view or upgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
    keywords: ["subscription", "plan", "upgrade", "downgrade", "billing", "settings", "change", "account"],
  },
  {
    q: "How do I find a tutor?",
    a: "Use the Home tab to browse tutors. You can filter by language, price, country, availability, and more. Click on any tutor card to view their full profile, video introduction, reviews, and pricing.",
    keywords: ["find", "search", "tutor", "browse", "filter", "language", "available"],
  },
  {
    q: "How do I message a tutor?",
    a: "Go to the Messages tab and click \"New message\" to start a conversation with any tutor. You can discuss your goals, schedule, and learning preferences before booking.",
    keywords: ["message", "chat", "contact", "tutor", "talk", "communicate", "inbox"],
  },
  {
    q: "Are lessons conducted via video call?",
    a: "Yes, all lessons are held via video call directly on the AI-MLP platform. You'll receive a link 15 minutes before your lesson starts. Ensure your camera and microphone are working beforehand.",
    keywords: ["video", "call", "online", "zoom", "platform", "link", "camera", "microphone", "how"],
  },
  {
    q: "How do I leave a review for my tutor?",
    a: "After a lesson is complete, you'll see a \"Leave a review\" prompt in your Past Lessons section. Ratings help other students find great tutors.",
    keywords: ["review", "rating", "rate", "feedback", "stars", "comment", "past"],
  },
  {
    q: "What languages can I learn?",
    a: "AI-MLP offers tutors for Spanish, French, German, Japanese, Mandarin Chinese, Portuguese, Italian, Arabic, Korean, and many more. Use the language filter on the Home tab to explore.",
    keywords: ["language", "learn", "spanish", "french", "german", "japanese", "mandarin", "chinese", "portuguese", "italian", "arabic", "korean"],
  },
  {
    q: "How do I refer a friend?",
    a: "Go to the Refer tab in your dashboard. Share your unique referral link and earn credits when friends sign up and book their first lesson.",
    keywords: ["refer", "referral", "friend", "invite", "share", "earn", "credits", "bonus"],
  },
  {
    q: "How do I update my profile?",
    a: "Click on your avatar in the top-right corner and select Settings. From there you can update your name, email, photo, language preferences, and notification settings.",
    keywords: ["profile", "update", "settings", "name", "email", "photo", "avatar", "edit", "account"],
  },
]

type FaqChatMessage = { role: "user" | "bot"; text: string }

// Scoring weights for FAQ keyword matching
const MIN_WORD_LENGTH = 2
const SCORE_CONTENT_MATCH = 1
const SCORE_QUESTION_MATCH = 1.5
const SCORE_KEYWORD_MATCH = 2
const MIN_MATCH_SCORE = 2

// Bot response delay range (ms) – slight variance feels more natural
const BOT_RESPONSE_DELAY_BASE = 900
const BOT_RESPONSE_DELAY_VARIANCE = 600

function getFaqBotResponse(question: string): string {
  const q = question.toLowerCase()
  const inputWords = q.split(/\W+/).filter(w => w.length > MIN_WORD_LENGTH)

  let bestScore = 0
  let bestAnswer = ""

  for (const faq of FAQ_DATA) {
    const targetText = (faq.q + " " + faq.a).toLowerCase()
    let score = 0

    for (const word of inputWords) {
      if (targetText.includes(word)) score += SCORE_CONTENT_MATCH
      if (faq.q.toLowerCase().includes(word)) score += SCORE_QUESTION_MATCH
      if (faq.keywords.includes(word)) score += SCORE_KEYWORD_MATCH
    }

    if (score > bestScore) {
      bestScore = score
      bestAnswer = faq.a
    }
  }

  if (bestScore >= MIN_MATCH_SCORE) return bestAnswer

  return "I'm sorry, I couldn't find a specific answer to that question. Please try rephrasing, or browse the help topics above. You can also reach our support team using the options below."
}

const SUGGESTED_QUESTIONS = [
  "How do I book a trial lesson?",
  "Can I cancel a lesson?",
  "How does payment work?",
  "How do I find a tutor?",
]

export function FaqChatbox() {
  const [messages, setMessages] = useState<FaqChatMessage[]>([
    { role: "bot", text: "Hi! I'm your AI assistant 👋 Ask me anything about My Language Plug — lessons, payments, tutors, scheduling, and more!" },
  ])
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, typing])

  function submitChat(text: string) {
    const trimmed = text.trim()
    if (!trimmed || typing) return
    setMessages(prev => [...prev, { role: "user", text: trimmed }])
    setInput("")
    setTyping(true)
    setTimeout(() => {
      const response = getFaqBotResponse(trimmed)
      setMessages(prev => [...prev, { role: "bot", text: response }])
      setTyping(false)
    }, BOT_RESPONSE_DELAY_BASE + Math.random() * BOT_RESPONSE_DELAY_VARIANCE)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    submitChat(input)
  }

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#354d73]">AI Support Assistant</h2>
        <span className="inline-flex items-center gap-1 rounded-full bg-[#354d73]/10 px-2 py-0.5 text-xs font-semibold text-[#354d73]">
          <Sparkles className="h-3 w-3" />
          AI-powered
        </span>
      </div>
      <div className="overflow-hidden rounded-2xl border border-[#354d73]/20 bg-white shadow-sm">
        {/* Chat header */}
        <div className="flex items-center gap-3 bg-gradient-to-r from-[#354d73] to-[#2a3d5e] px-5 py-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div className="min-w-0">
            <p className="font-bold text-white text-sm">Ask AI anything</p>
            <p className="text-xs text-white/70 truncate">Answers based on our FAQ &amp; help docs</p>
          </div>
          <div className="ml-auto flex shrink-0 items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-white/70">Online</span>
          </div>
        </div>

        {/* Messages area */}
        <div className="h-72 overflow-y-auto bg-[#F8FAFC] p-4 space-y-3">
          {messages.map((msg, i) => (
            <div key={i} className={`flex items-end gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
              {msg.role === "bot" && (
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#354d73]">
                  <Bot className="h-3.5 w-3.5 text-white" />
                </div>
              )}
              <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "rounded-br-sm bg-[#354d73] text-white"
                  : "rounded-bl-sm border border-[#354d73]/15 bg-white text-[#042230] shadow-sm"
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex items-end gap-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#354d73]">
                <Bot className="h-3.5 w-3.5 text-white" />
              </div>
              <div className="rounded-2xl rounded-bl-sm border border-[#354d73]/15 bg-white px-4 py-3 shadow-sm">
                <div className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-[#354d73]/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="h-2 w-2 rounded-full bg-[#354d73]/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="h-2 w-2 rounded-full bg-[#354d73]/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Suggested questions (only shown at the start) */}
        {messages.length === 1 && !typing && (
          <div className="border-t border-[#354d73]/10 bg-white px-4 py-3">
            <p className="mb-2 text-xs text-muted-foreground">Try asking:</p>
            <div className="flex flex-wrap gap-2">
              {SUGGESTED_QUESTIONS.map(q => (
                <button
                  key={q}
                  type="button"
                  onClick={() => submitChat(q)}
                  className="rounded-full border border-[#354d73]/25 bg-[#F0F6FA] px-3 py-1 text-xs text-[#354d73] transition-colors hover:bg-[#354d73]/10"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-[#354d73]/15 bg-white px-4 py-3">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask a question about My Language Plug…"
            disabled={typing}
            className="flex-1 rounded-xl border border-[#354d73]/20 bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#042230] outline-none placeholder:text-muted-foreground focus:border-[#354d73] focus:ring-2 focus:ring-[#354d73]/20 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!input.trim() || typing}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#354d73] text-white transition-colors hover:bg-[#2a3d5e] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  )
}
