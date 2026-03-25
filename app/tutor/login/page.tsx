"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, ArrowRight, ArrowLeft, User, Mail, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function TutorLoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", password: "" })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    router.push("/tutor")
  }

  const isValid = form.name.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) && form.password.length >= 6

  return (
    <div className="flex min-h-[calc(100vh-7rem)]">
      {/* ── Left decorative panel (desktop only) ──────────────── */}
      <div
        className="relative hidden flex-col justify-between overflow-hidden bg-[#042230] p-12 lg:flex lg:w-[45%]"
        aria-hidden="true"
      >
        {/* Background pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/5" />

        <div />

        {/* Middle content */}
        <div className="relative space-y-6">
          <h2 className="text-4xl font-bold leading-tight text-white xl:text-5xl">
            Teach the world<br />
            <span className="text-[#7BA3B8]">your language.</span><br />
            Your schedule.
          </h2>
          <p className="text-lg leading-relaxed text-white/75">
            Join thousands of tutors earning on their own terms.<br />
            Set your rate, choose your hours, grow your students.
          </p>

          {/* Benefit chips */}
          <div className="flex flex-wrap gap-2">
            {["💰 Set your own rate", "🕐 Flexible hours", "🌍 Global students", "📈 Grow your income", "🎓 Free resources"].map((b) => (
              <span
                key={b}
                className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white/90"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom testimonial */}
        <div className="relative rounded-xl bg-white/10 p-5">
          <p className="text-sm italic text-white/80 leading-relaxed">
            &ldquo;Teaching on My Language Plug has transformed my career. I now have a steady
            stream of students from around the world and earn twice what I made locally.&rdquo;
          </p>
          <p className="mt-2 text-xs font-semibold text-white/60">— Maria G., verified tutor</p>
        </div>
      </div>

      {/* ── Right form panel ───────────────────────────────────── */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 sm:px-10">
        <div className="w-full max-w-md">
          {/* Back link */}
          <Link
            href="/signup"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>

          {/* Progress indicator */}
          <div className="mb-8 flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#354d73] text-xs font-bold text-white">
              ✓
            </div>
            <div className="h-1 flex-1 rounded-full bg-[#354d73]" />
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#354d73] text-xs font-bold text-white">
              2
            </div>
            <div className="h-1 flex-1 rounded-full bg-border" />
            <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-border text-xs font-medium text-muted-foreground">
              3
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#042230]">Create your account</h1>
            <p className="mt-1 text-muted-foreground">Just a few details and you&apos;re in!</p>
          </div>

          {/* Social sign-up buttons */}
          <div className="mb-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-medium shadow-sm hover:bg-gray-50"
              onClick={() => router.push("/tutor")}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" aria-label="Google">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-border bg-[#1877F2] px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#166FE5]"
              onClick={() => router.push("/tutor")}
            >
              <svg className="h-4 w-4 fill-white" viewBox="0 0 24 24" aria-label="Facebook">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Continue with Facebook
            </button>
          </div>

          <div className="mb-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted-foreground">or sign up with email</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div className="space-y-1.5">
              <Label htmlFor="name">Full name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  className="pl-9"
                  required
                  autoComplete="name"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <Label htmlFor="email">Email address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="pl-9"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="At least 6 characters"
                  value={form.password}
                  onChange={handleChange}
                  className="pl-9 pr-10"
                  required
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <p className="text-xs text-muted-foreground">Minimum 6 characters</p>
            </div>

            {/* CTA */}
            <Button
              type="submit"
              size="lg"
              className="w-full h-12 text-base font-semibold bg-[#354d73] hover:bg-[#2a3d5e]"
              disabled={!isValid}
            >
              Create Account & Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            By signing up you agree to our{" "}
            <Link href="/terms" className="underline hover:text-foreground">Terms of Service</Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-foreground">Privacy Policy</Link>.
          </p>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-[#354d73] hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
