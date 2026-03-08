"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Headphones, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "We'll respond within 24 hours",
    value: "support@mylanguageplug.com",
    href: "mailto:support@mylanguageplug.com",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Available Mon-Fri, 9am-6pm EST",
    value: "Start a conversation",
    href: "#chat",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri, 9am-6pm EST",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
]

const inquiryTypes = [
  { value: "general", label: "General Inquiry" },
  { value: "student", label: "Student Support" },
  { value: "tutor", label: "Tutor Support" },
  { value: "enterprise", label: "Enterprise / Business" },
  { value: "partnership", label: "Partnership Opportunities" },
  { value: "press", label: "Press & Media" },
  { value: "other", label: "Other" },
]

const faqs = [
  {
    q: "How do I reset my password?",
    a: "Click 'Forgot Password' on the login page and follow the instructions sent to your email.",
  },
  {
    q: "How do I cancel a lesson?",
    a: "Go to your dashboard, find the lesson, and click 'Cancel'. Free cancellation is available up to 24 hours before the lesson.",
  },
  {
    q: "How do I become a tutor?",
    a: "Visit our 'Become a Tutor' page and complete the application form. We review applications within 3-5 business days.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, PayPal, and Apple Pay. All payments are processed securely through Stripe.",
  },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[--light-blue] to-background pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-[--navy] sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Have a question or need help? We&apos;re here to assist you on your language learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {contactMethods.map((method) => (
              <Card key={method.title} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <method.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[--navy]">{method.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{method.description}</p>
                  <a
                    href={method.href}
                    className="mt-3 inline-block font-medium text-primary hover:underline"
                  >
                    {method.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[--navy]">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="py-8 text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <Send className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-[--navy]">
                        Message Sent!
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                      </p>
                      <Button
                        className="mt-6"
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <FieldGroup>
                          <Field>
                            <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                            <Input id="firstName" placeholder="John" required />
                          </Field>
                        </FieldGroup>
                        <FieldGroup>
                          <Field>
                            <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                            <Input id="lastName" placeholder="Doe" required />
                          </Field>
                        </FieldGroup>
                      </div>

                      <FieldGroup>
                        <Field>
                          <FieldLabel htmlFor="email">Email Address</FieldLabel>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                          />
                        </Field>
                      </FieldGroup>

                      <FieldGroup>
                        <Field>
                          <FieldLabel htmlFor="inquiryType">Inquiry Type</FieldLabel>
                          <Select required>
                            <SelectTrigger id="inquiryType">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                              {inquiryTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </Field>
                      </FieldGroup>

                      <FieldGroup>
                        <Field>
                          <FieldLabel htmlFor="subject">Subject</FieldLabel>
                          <Input
                            id="subject"
                            placeholder="How can we help you?"
                            required
                          />
                        </Field>
                      </FieldGroup>

                      <FieldGroup>
                        <Field>
                          <FieldLabel htmlFor="message">Message</FieldLabel>
                          <Textarea
                            id="message"
                            placeholder="Tell us more about your inquiry..."
                            rows={5}
                            required
                          />
                        </Field>
                      </FieldGroup>

                      <Button type="submit" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>Sending...</>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 lg:col-span-2">
              {/* Office Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-[--navy]">Office Location</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-[--navy]">Headquarters</p>
                      <p className="text-sm text-muted-foreground">
                        123 Language Lane<br />
                        San Francisco, CA 94102<br />
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-[--navy]">Business Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Monday - Friday: 9am - 6pm EST<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-[--navy]">Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link
                    href="/help"
                    className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted"
                  >
                    <HelpCircle className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-[--navy]">Help Center</p>
                      <p className="text-sm text-muted-foreground">
                        Browse our knowledge base
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/faq"
                    className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted"
                  >
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-[--navy]">FAQ</p>
                      <p className="text-sm text-muted-foreground">
                        Common questions answered
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/become-tutor"
                    className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted"
                  >
                    <Headphones className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-[--navy]">Tutor Support</p>
                      <p className="text-sm text-muted-foreground">
                        Resources for tutors
                      </p>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick FAQs */}
      <section className="bg-[--light-blue] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-[--navy] sm:text-3xl">
              Common Questions
            </h2>
            <p className="mt-4 text-muted-foreground">
              Quick answers to frequently asked questions
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg bg-background p-5 shadow-sm">
                <h3 className="font-semibold text-[--navy]">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link href="/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
