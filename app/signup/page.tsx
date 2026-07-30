"use client"

import { useState } from "react"
import Link from "next/link"
import { GraduationCap, BookOpen, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type Role = "student" | "tutor" | null

export default function SignupPage() {
  const [selected, setSelected] = useState<Role>(null)
  const [hovered, setHovered] = useState<Role>(null)

  return (
    <div className="flex min-h-[calc(100vh-7rem)] flex-col items-center justify-center bg-[#F0F6FA] px-4 py-12">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#354d73] sm:text-3xl">My Language Plug</h2>
      </div>
      <h1 className="mb-2 text-center text-3xl font-bold text-[#042230] sm:text-4xl">
        Welcome! Let&apos;s get you started 👋
      </h1>
      <p className="mb-10 text-center text-muted-foreground">
        First things first — are you here to <strong>learn</strong> or to <strong>teach</strong>?
      </p>

      {/* Role cards */}
      <div className="grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Student card */}
        <button
          type="button"
          onClick={() => setSelected("student")}
          onMouseEnter={() => setHovered("student")}
          onMouseLeave={() => setHovered(null)}
          className={`group relative flex flex-col items-center rounded-2xl border-2 p-8 text-left shadow-sm transition-all duration-200 focus:outline-none
            ${selected === "student"
              ? "border-[#354d73] bg-[#354d73] text-white shadow-lg scale-105"
              : "border-border bg-white hover:border-[#354d73] hover:shadow-md"
            }`}
          aria-pressed={selected === "student"}
        >
          {/* Animated emoji */}
          <span
            className={`mb-4 text-6xl transition-transform duration-300 ${
              hovered === "student" || selected === "student" ? "scale-125" : ""
            }`}
            role="img"
            aria-label="Student"
          >
            🎓
          </span>
          <div className="flex items-center gap-2">
            <BookOpen
              className={`h-5 w-5 ${selected === "student" ? "text-white" : "text-[#354d73]"}`}
            />
            <span
              className={`text-xl font-bold ${selected === "student" ? "text-white" : "text-[#042230]"}`}
            >
              I want to learn
            </span>
          </div>
          <p
            className={`mt-2 text-center text-sm ${
              selected === "student" ? "text-white/80" : "text-muted-foreground"
            }`}
          >
            Find expert tutors and book your first lesson today.
          </p>

          {selected === "student" && (
            <div className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-white">
              <span className="text-[#354d73] text-xs font-bold">✓</span>
            </div>
          )}

          {/* Fun language bubbles */}
          <div
            className={`mt-4 flex flex-wrap justify-center gap-1.5 transition-opacity duration-300 ${
              hovered === "student" || selected === "student" ? "opacity-100" : "opacity-60"
            }`}
          >
            {["🇪🇸 Spanish", "🇫🇷 French", "🇩🇪 German", "🇯🇵 Japanese"].map((l) => (
              <span
                key={l}
                className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                  selected === "student"
                    ? "bg-white/20 text-white"
                    : "bg-[#F0F6FA] text-[#354d73]"
                }`}
              >
                {l}
              </span>
            ))}
          </div>
        </button>

        {/* Tutor card */}
        <button
          type="button"
          onClick={() => setSelected("tutor")}
          onMouseEnter={() => setHovered("tutor")}
          onMouseLeave={() => setHovered(null)}
          className={`group relative flex flex-col items-center rounded-2xl border-2 p-8 text-left shadow-sm transition-all duration-200 focus:outline-none
            ${selected === "tutor"
              ? "border-[#5A8DA5] bg-[#5A8DA5] text-white shadow-lg scale-105"
              : "border-border bg-white hover:border-[#5A8DA5] hover:shadow-md"
            }`}
          aria-pressed={selected === "tutor"}
        >
          <span
            className={`mb-4 text-6xl transition-transform duration-300 ${
              hovered === "tutor" || selected === "tutor" ? "scale-125" : ""
            }`}
            role="img"
            aria-label="Tutor"
          >
            🧑‍🏫
          </span>
          <div className="flex items-center gap-2">
            <GraduationCap
              className={`h-5 w-5 ${selected === "tutor" ? "text-white" : "text-[#5A8DA5]"}`}
            />
            <span
              className={`text-xl font-bold ${selected === "tutor" ? "text-white" : "text-[#042230]"}`}
            >
              I want to teach
            </span>
          </div>
          <p
            className={`mt-2 text-center text-sm ${
              selected === "tutor" ? "text-white/80" : "text-muted-foreground"
            }`}
          >
            Share your skills and earn on your own schedule.
          </p>

          {selected === "tutor" && (
            <div className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-white">
              <span className="text-[#5A8DA5] text-xs font-bold">✓</span>
            </div>
          )}

          <div
            className={`mt-4 flex flex-wrap justify-center gap-1.5 transition-opacity duration-300 ${
              hovered === "tutor" || selected === "tutor" ? "opacity-100" : "opacity-60"
            }`}
          >
            {["💰 Earn online", "⏰ Flexible", "🌍 Global", "⭐ Top rated"].map((l) => (
              <span
                key={l}
                className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                  selected === "tutor"
                    ? "bg-white/20 text-white"
                    : "bg-[#F0F6FA] text-[#5A8DA5]"
                }`}
              >
                {l}
              </span>
            ))}
          </div>
        </button>
      </div>

      {/* Continue button */}
      <div className="mt-8 w-full max-w-2xl">
        {selected === "student" ? (
          <Button asChild size="lg" className="w-full h-12 text-base font-semibold bg-[#354d73] hover:bg-[#2a3d5e]">
            <Link href="/signup/student">
              Continue as Student
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        ) : selected === "tutor" ? (
          <Button asChild size="lg" className="w-full h-12 text-base font-semibold bg-[#5A8DA5] hover:bg-[#4a7d95]">
            <Link href="/tutor/login">
              Continue as Tutor
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <Button
            size="lg"
            disabled
            className="w-full h-12 text-base font-semibold"
          >
            Select a role to continue
          </Button>
        )}
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-[#354d73] hover:underline">
          Log in
        </Link>
      </p>
    </div>
  )
}
