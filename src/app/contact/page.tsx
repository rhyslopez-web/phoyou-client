'use client'

import React, { useState } from 'react'
import { MapPin, Phone, Clock, Send } from 'lucide-react'
import DividerTop from '../components/DividerTop/DividerTop'

// ── Contact info ─────────────────────────────────────────────

const INFO = [
  {
    icon: MapPin,
    label: 'Address',
    lines: ['2526 E Hastings St', 'Vancouver, BC  V5K 1Z3'],
    href: 'https://maps.google.com/?q=2526+E+Hastings+St+Vancouver+BC+V5K+1Z3',
    cta: 'Get directions →',
  },
  {
    icon: Phone,
    label: 'Phone',
    lines: ['(236) 999-1633'],
    href: 'tel:+12369991633',
    cta: 'Call us →',
  },
  {
    icon: Clock,
    label: 'Hours',
    lines: ['Mon – Thu  11 a.m. – 11 p.m.', 'Fri – Sat   11 a.m. – 1 a.m.', 'Sunday      11 a.m. – 11 p.m.'],
    href: null,
    cta: null,
  },
]

// ── Page ─────────────────────────────────────────────────────

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const patch = (field: string, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Supabase insert will be wired up here
    setSubmitted(true)
  }

  const inputCls =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-text text-sm ' +
    'placeholder:text-text/25 focus:outline-none focus:border-primary/60 transition-colors'

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="pt-[120px] lg:pt-[160px] pb-16 px-4 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-4">
            Get in touch
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-text leading-tight">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-text/50 text-lg mt-5 max-w-lg">
            Have a question, a reservation request, or just want to say hi? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* ── Main grid ─────────────────────────────────────── */}
      <section className="pb-24 px-4 lg:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* ── Left: contact info ── */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {INFO.map(({ icon: Icon, label, lines, href, cta }) => (
              <div
                key={label}
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-6 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <span className="text-text/40 text-xs uppercase tracking-widest font-medium">
                    {label}
                  </span>
                </div>

                <div className="flex flex-col gap-1 pl-12">
                  {lines.map((line, i) => (
                    <p key={i} className="text-text font-medium text-sm leading-relaxed">
                      {line}
                    </p>
                  ))}
                  {href && cta && (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-primary text-sm font-semibold hover:underline mt-1"
                    >
                      {cta}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── Right: contact form ── */}
          <div className="lg:col-span-3 bg-white/5 border border-white/10 rounded-2xl px-6 py-8 md:px-10 md:py-10">
            {submitted ? (
              /* Success state */
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] gap-5 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <Send size={28} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-text text-2xl font-bold mb-2">Message Sent!</h2>
                  <p className="text-text/50 text-sm max-w-xs">
                    Thanks for reaching out. We&apos;ll get back to you as soon as possible.
                  </p>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setForm({ firstName: '', lastName: '', phone: '', subject: '', message: '' }) }}
                  className="mt-2 text-primary text-sm font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <h2 className="text-text text-2xl font-bold mb-1">Send a Message</h2>
                  <p className="text-text/40 text-sm">Fill in the form and we&apos;ll be in touch.</p>
                </div>

                {/* First + Last name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-text/50 text-xs uppercase tracking-widest">
                      First Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane"
                      value={form.firstName}
                      onChange={e => patch('firstName', e.target.value)}
                      className={inputCls}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-text/50 text-xs uppercase tracking-widest">
                      Last Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Doe"
                      value={form.lastName}
                      onChange={e => patch('lastName', e.target.value)}
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-text/50 text-xs uppercase tracking-widest">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(604) 000-0000"
                    value={form.phone}
                    onChange={e => patch('phone', e.target.value)}
                    className={inputCls}
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-text/50 text-xs uppercase tracking-widest">
                    Subject <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Reservation, catering, general inquiry…"
                    value={form.subject}
                    onChange={e => patch('subject', e.target.value)}
                    className={inputCls}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-text/50 text-xs uppercase tracking-widest">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us how we can help…"
                    value={form.message}
                    onChange={e => patch('message', e.target.value)}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-shade transition-colors"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      <DividerTop />
    </>
  )
}
