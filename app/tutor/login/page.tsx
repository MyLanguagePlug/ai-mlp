"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff, X, Mail, ArrowLeft, CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

// ── Forgot-password modal ─────────────────────────────────────────────────────

type ForgotStep = "email" | "sending" | "sent"

function ForgotPasswordModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<ForgotStep>("email")
  const [resetEmail, setResetEmail] = useState("")
  const [emailError, setEmailError] = useState("")

  function handleSend(e: React.FormEvent) {
    e.preventDefault()
    if (!resetEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resetEmail)) {
      setEmailError("Please enter a valid email address.")
      return
    }
    setEmailError("")
    setStep("sending")
    setTimeout(() => setStep("sent"), 1500)
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={step === "sent" ? "forgot-pw-title-sent" : "forgot-pw-title-email"}
        className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-8 shadow-2xl focus:outline-none"
      >
        {/* Close button */}
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-[#F0F6FA] hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        {(step === "email" || step === "sending") && (
          <>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#354d73]/10">
              <Mail className="h-7 w-7 text-[#354d73]" />
            </div>

            <h2 id="forgot-pw-title-email" className="text-xl font-bold text-[#042230]">
              Forgot your password?
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              No worries! Enter the email address linked to your account and we&apos;ll
              send you a link to reset your password.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSend} noValidate>
              <div className="space-y-2">
                <Label htmlFor="reset-email">Email address</Label>
                <Input
                  id="reset-email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  autoFocus
                  value={resetEmail}
                  onChange={(e) => { setResetEmail(e.target.value); setEmailError("") }}
                  className={`h-12 ${emailError ? "border-rose-500 focus-visible:ring-rose-500" : ""}`}
                />
                {emailError && (
                  <p className="text-xs text-rose-600">{emailError}</p>
                )}
              </div>

              <Button
                type="submit"
                className="h-12 w-full bg-[#354d73] text-base font-semibold hover:bg-[#2a3d5e]"
                disabled={step === "sending"}
              >
                {step === "sending" ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </span>
                ) : (
                  "Send reset link"
                )}
              </Button>
            </form>

            <button
              type="button"
              onClick={onClose}
              className="mt-4 flex w-full items-center justify-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to log in
            </button>
          </>
        )}

        {step === "sent" && (
          <div className="text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
              <CheckCircle2 className="h-9 w-9 text-emerald-500" />
            </div>

            <h2 id="forgot-pw-title-sent" className="text-xl font-bold text-[#042230]">
              Check your inbox
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We&apos;ve sent a password-reset link to{" "}
              <span className="font-semibold text-[#042230]">{resetEmail}</span>.
              It expires in 15 minutes.
            </p>

            <div className="mt-2 rounded-lg bg-[#F0F6FA] px-4 py-3 text-left text-xs text-muted-foreground">
              <span className="font-medium text-foreground">Didn&apos;t receive it?</span>{" "}
              Check your spam folder, or{" "}
              <button
                type="button"
                className="font-medium text-[#354d73] hover:underline"
                onClick={() => setStep("email")}
              >
                try a different email
              </button>
              .
            </div>

            <Button
              type="button"
              onClick={onClose}
              className="mt-6 h-12 w-full bg-[#354d73] text-base font-semibold hover:bg-[#2a3d5e]"
            >
              Back to log in
            </Button>
          </div>
        )}
      </div>
    </>
  )
}

// ── Main tutor login page ─────────────────────────────────────────────────────

export default function TutorLoginPage() {
  const router = useRouter()
  const [mode, setMode] = useState<"login" | "signup">("login")
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [forgotOpen, setForgotOpen] = useState(false)

  function switchMode(next: "login" | "signup") {
    setMode(next)
    setEmail("")
    setPassword("")
    setName("")
    setShowPassword(false)
  }

  return (
    <div className="flex min-h-[calc(100vh-7rem)]">
      {/* ── Forgot-password modal ──────────────────────────────── */}
      {forgotOpen && <ForgotPasswordModal onClose={() => setForgotOpen(false)} />}

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

      {/* ── Right: login / signup form ──────────────────────── */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 sm:px-12 lg:px-16">
        <div className="w-full max-w-md">

          {/* Heading */}
          <div className="mb-8 text-left">
            <h1 className="text-3xl font-bold text-foreground">
              {mode === "login" ? "Welcome back" : "Create your account"}
            </h1>
            <p className="mt-2 text-base text-muted-foreground">
              {mode === "login"
                ? "Log in to continue your language learning journey"
                : "Start learning with native speakers today — it's free"}
            </p>
          </div>

          {/* ── Social login buttons ──────────────────────── */}
          <div className="space-y-3">
            {/* Google */}
            <Button
              type="button"
              variant="outline"
              className="h-12 w-full gap-3 text-sm font-medium"
              onClick={() => router.push("/tutor")}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continue with Google
            </Button>

            {/* Facebook */}
            <Button
              type="button"
              variant="outline"
              className="h-12 w-full gap-3 text-sm font-medium"
              onClick={() => router.push("/tutor")}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
                <path
                  fill="#1877F2"
                  d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"
                />
              </svg>
              Continue with Facebook
            </Button>
          </div>

          {/* ── Divider ──────────────────────────────────── */}
          <div className="relative my-6 flex items-center">
            <Separator className="flex-1" />
            <span className="mx-4 shrink-0 text-xs text-muted-foreground">or continue with email</span>
            <Separator className="flex-1" />
          </div>

          {/* ── Email / password form ────────────────────── */}
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              // TODO: wire up authentication API; on success navigate to dashboard
              router.push("/tutor")
            }}
            noValidate
          >
            {mode === "signup" && (
              <div className="space-y-2">
                <Label htmlFor="login-full-name">Full name</Label>
                <Input
                  id="login-full-name"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12"
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="login-email">Email address</Label>
              <Input
                id="login-email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="login-password">Password</Label>
                {mode === "login" && (
                  <button
                    type="button"
                    onClick={() => setForgotOpen(true)}
                    className="text-xs font-medium text-primary hover:underline focus-visible:outline-none"
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder={mode === "login" ? "Enter your password" : "Create a password"}
                  autoComplete={mode === "login" ? "current-password" : "new-password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 pr-11"
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none"
                  onClick={() => setShowPassword((s) => !s)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <Button type="submit" className="h-12 w-full text-base font-semibold">
              {mode === "login" ? "Log In" : "Create Account"}
            </Button>
          </form>

          {/* ── Terms (signup only) ────────────────────────── */}
          {mode === "signup" && (
            <p className="mt-4 text-center text-xs text-muted-foreground">
              By creating an account you agree to our{" "}
              <Link href="/terms" className="underline hover:text-foreground">Terms of Service</Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline hover:text-foreground">Privacy Policy</Link>.
            </p>
          )}

          {/* ── Mode toggle ────────────────────────────────── */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            {mode === "login" ? (
              <>
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  className="font-semibold text-primary hover:underline focus-visible:outline-none"
                  onClick={() => switchMode("signup")}
                >
                  Sign up free
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  className="font-semibold text-primary hover:underline focus-visible:outline-none"
                  onClick={() => switchMode("login")}
                >
                  Log in
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
