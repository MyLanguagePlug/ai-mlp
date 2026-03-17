"use client"

import { useState } from "react"
import Image from "next/image"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

interface LoginModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  /** Start in "signup" mode instead of the default "login" mode */
  initialMode?: "login" | "signup"
}

export function LoginModal({ open, onOpenChange, initialMode = "login" }: LoginModalProps) {
  const [mode, setMode] = useState<"login" | "signup">(initialMode)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  function handleClose(nextOpen: boolean) {
    onOpenChange(nextOpen)
    if (!nextOpen) {
      // Reset form and mode when modal closes
      setMode(initialMode)
      setEmail("")
      setPassword("")
      setName("")
      setShowPassword(false)
    }
  }

  function switchMode(next: "login" | "signup") {
    setMode(next)
    setEmail("")
    setPassword("")
    setName("")
    setShowPassword(false)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="overflow-hidden p-0 sm:max-w-md"
        aria-describedby={undefined}
      >
        {/* Accessible title (visually hidden) */}
        <DialogTitle className="sr-only">
          {mode === "login" ? "Log in to My Language Plug" : "Create your My Language Plug account"}
        </DialogTitle>

        {/* ── Modal header ─────────────────────────────── */}
        <div className="border-b border-border px-8 pb-5 pt-8 text-center">
          <div className="mb-4 flex justify-center">
            <Image
              src="/images/logo.png"
              alt="My Language Plug"
              width={444}
              height={182}
              className="h-9 w-auto"
              priority
            />
          </div>
          <h2 className="text-xl font-bold text-foreground">
            {mode === "login" ? "Welcome back" : "Create your account"}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {mode === "login"
              ? "Log in to continue your language learning journey"
              : "Start learning with native speakers today"}
          </p>
        </div>

        {/* ── Modal body ───────────────────────────────── */}
        <div className="space-y-4 px-8 pb-8 pt-6">

          {/* Google social button */}
          <Button
            type="button"
            variant="outline"
            className="h-11 w-full gap-3 font-medium"
          >
            {/* Google G logo */}
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </Button>

          {/* ── Divider ─────────────────────────────────── */}
          <div className="relative flex items-center">
            <Separator className="flex-1" />
            <span className="mx-3 shrink-0 text-xs text-muted-foreground">or</span>
            <Separator className="flex-1" />
          </div>

          {/* ── Email / password form ─────────────────── */}
          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault()
              // TODO: wire up authentication API (email/password login or signup)
            }}
            noValidate
          >
            {mode === "signup" && (
              <div className="space-y-1.5">
                <Label htmlFor="mlp-full-name">Full name</Label>
                <Input
                  id="mlp-full-name"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-11"
                />
              </div>
            )}

            <div className="space-y-1.5">
              <Label htmlFor="mlp-email">Email address</Label>
              <Input
                id="mlp-email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="mlp-password">Password</Label>
                {mode === "login" && (
                  <button
                    type="button"
                    className="text-xs font-medium text-primary hover:underline focus-visible:outline-none"
                    // TODO: implement forgot-password flow (e.g. open a reset-password modal or navigate to /forgot-password)
                    onClick={() => {
                      handleClose(false)
                    }}
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Input
                  id="mlp-password"
                  type={showPassword ? "text" : "password"}
                  placeholder={mode === "login" ? "Enter your password" : "Create a password"}
                  autoComplete={mode === "login" ? "current-password" : "new-password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11 pr-10"
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

            <Button type="submit" className="h-11 w-full font-semibold">
              {mode === "login" ? "Log In" : "Create Account"}
            </Button>
          </form>

          {/* ── Terms (signup only) ─────────────────────── */}
          {mode === "signup" && (
            <p className="text-center text-xs text-muted-foreground">
              By creating an account you agree to our{" "}
              <a href="/terms" className="underline hover:text-foreground">Terms of Service</a>{" "}
              and{" "}
              <a href="/privacy" className="underline hover:text-foreground">Privacy Policy</a>.
            </p>
          )}

          {/* ── Mode toggle ──────────────────────────────── */}
          <p className="text-center text-sm text-muted-foreground">
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
      </DialogContent>
    </Dialog>
  )
}
