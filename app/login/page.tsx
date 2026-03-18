"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function LoginPage() {
  const router = useRouter()
  const [mode, setMode] = useState<"login" | "signup">("login")
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  function switchMode(next: "login" | "signup") {
    setMode(next)
    setEmail("")
    setPassword("")
    setName("")
    setShowPassword(false)
  }

  return (
    <div className="flex min-h-[calc(100vh-7rem)]">
      {/* ── Left decorative panel (desktop only) ──────────────── */}
      <div
        className="relative hidden flex-col justify-between overflow-hidden bg-[#354d73] p-12 lg:flex lg:w-[45%]"
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

        {/* Spacer keeps middle content vertically centered with justify-between */}
        <div />

        {/* Middle content */}
        <div className="relative space-y-6">
          <h2 className="text-4xl font-bold leading-tight text-white xl:text-5xl">
            Connect with native<br />
            <span className="text-[#7BA3B8]">language tutors</span><br />
            worldwide
          </h2>
          <p className="text-lg leading-relaxed text-white/75">
            Personalized 1-on-1 lessons with vetted tutors.<br />
            Learn at your own pace, on your schedule.
          </p>

          {/* Language chips */}
          <div className="flex flex-wrap gap-2">
            {["🇪🇸 Spanish", "🇫🇷 French", "🇩🇪 German", "🇯🇵 Japanese", "🇨🇳 Chinese", "🇧🇷 Portuguese"].map((lang) => (
              <span
                key={lang}
                className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white/90"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom quote */}
        <div className="relative rounded-xl bg-white/10 p-5">
          <p className="text-sm italic text-white/80 leading-relaxed">
            &ldquo;My Language Plug helped me become conversational in Spanish in just 3 months.
            My tutor was amazing!&rdquo;
          </p>
          <p className="mt-2 text-xs font-semibold text-white/60">— Sarah K., verified student</p>
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
              onClick={() => router.push("/student")}
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
              onClick={() => router.push("/student")}
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
              // TODO: wire up authentication API (email/password login or signup)
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
                  <Link
                    href="/forgot-password"
                    className="text-xs font-medium text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
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
