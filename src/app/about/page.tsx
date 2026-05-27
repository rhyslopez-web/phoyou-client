import React from 'react'
import Image from 'next/image'
import { MapPin, ChefHat, Users, Clock } from 'lucide-react'
import SecondaryHeading from '../components/SecondaryHeading/SecondaryHeading'
import Paragraph from '../components/Paragraph/Paragraph'
import Button from '../components/Button/Button'
import BentoCard from '../components/BentoCard/BentoCard'

export const metadata = {
  title: 'About | Pho You',
  description:
    'Learn the story behind Pho You — a modern Vietnamese restaurant on East Hastings, Vancouver, opened in Summer 2025.',
}

// ── Hours data ───────────────────────────────────────────────

const HOURS = [
  { day: 'Monday',    open: '11 a.m.', close: '11 p.m.', late: false },
  { day: 'Tuesday',   open: '11 a.m.', close: '11 p.m.', late: false },
  { day: 'Wednesday', open: '11 a.m.', close: '11 p.m.', late: false },
  { day: 'Thursday',  open: '11 a.m.', close: '11 p.m.', late: false },
  { day: 'Friday',    open: '11 a.m.', close: '1 a.m.',  late: true  },
  { day: 'Saturday',  open: '11 a.m.', close: '1 a.m.',  late: true  },
  { day: 'Sunday',    open: '11 a.m.', close: '11 p.m.', late: false },
]

// ── Page ─────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/gallery2.jpg"
            alt="Pho You restaurant"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 lg:px-10 pt-[140px] lg:pt-[180px] pb-20">
          <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-5">
            Est. Summer 2025 · Vancouver, BC
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-text leading-tight max-w-4xl">
            Made with <span className="text-primary">passion</span>,<br />
            served with <span className="text-stroke">heart.</span>
          </h1>
          <p className="text-text/55 text-lg mt-6 max-w-lg">
            A modern Vietnamese restaurant on East Hastings — where tradition meets a bold new spirit.
          </p>
        </div>
      </section>

      {/* ── Our Story ─────────────────────────────────────── */}
      <section className="py-20 lg:py-40 px-4 lg:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden order-2 lg:order-1">
            <Image
              src="/homeabout.jpg"
              alt="Inside Pho You"
              fill
              className="object-cover"
            />
            {/* Floating year badge */}
            <div className="absolute bottom-6 left-6 bg-primary px-5 py-3 rounded-2xl">
              <p className="text-white font-bold text-2xl leading-none">2025</p>
              <p className="text-white/70 text-xs mt-0.5">Est.</p>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-8 order-1 lg:order-2">
            <div>
              <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-4">
                Our Story
              </p>
              <SecondaryHeading className="text-text">
                Where It All <span className="text-primary">Began</span>
              </SecondaryHeading>
            </div>

            <div className="flex flex-col gap-5">
              <Paragraph>
                Pho You opened its doors in the summer of 2025, born from the shared vision of two
                industry veterans — a seasoned chef and an experienced restaurant server — who both
                believed that great Vietnamese food should be honest, accessible, and made with genuine care.
              </Paragraph>
              <Paragraph>
                Together, they brought their decades of craft and hospitality to a single address on
                East Hastings, creating a space where the food does the talking. Every broth is
                slow-simmered. Every roll is made fresh. No shortcuts.
              </Paragraph>
              <Paragraph>
                Pho You is a modern take on Vietnamese cuisine — honouring the rich, aromatic
                traditions of Vietnam while reimagining them for today's diner. From fragrant phở
                and crispy spring rolls to tangy papaya salads, hearty bánh mì, and refreshing shakes,
                every dish tells a story.
              </Paragraph>
            </div>

            {/* Founder tags */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-2xl px-5 py-3">
                <ChefHat size={17} className="text-primary flex-shrink-0" />
                <span className="text-text/75 text-sm font-medium">Founded by a Chef</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-2xl px-5 py-3">
                <Users size={17} className="text-primary flex-shrink-0" />
                <span className="text-text/75 text-sm font-medium">&amp; a Restaurant Server</span>
              </div>
            </div>

            <Button href="/Menu" className="self-start">
              Explore Our Menu
            </Button>
          </div>
        </div>
      </section>

      {/* ── What We Stand For ─────────────────────────────── */}
      <section className="py-20 lg:py-40 px-4 lg:px-10 bg-primary">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-16">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <SecondaryHeading>
              What We <span className="text-stroke">Stand</span> For
            </SecondaryHeading>
            <p className="text-text/75 text-lg md:text-right md:ml-auto max-w-sm">
              Every bowl. Every bite. Made with intention.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <BentoCard title="Oil-Free Cooking">
              We cook without oil, letting fresh herbs, spices, and slow-simmered broths carry each dish — clean, honest flavour in every bite.
            </BentoCard>
            <BentoCard title="Seafood & Veggie-Forward">
              From our Seafood Phở to our Vegetarian Phở, we celebrate the best of land and sea — vibrant, carefully sourced, and always fresh.
            </BentoCard>
            <BentoCard title="Made From Scratch">
              Our broths simmer for hours. Our rolls are made fresh daily. No shortcuts — just the real thing, every single time.
            </BentoCard>
            <BentoCard title="Deliciously Affordable">
              Bold flavours and generous portions at prices that keep you coming back. Great food for the whole community.
            </BentoCard>
          </div>
        </div>
      </section>

      {/* ── Hours & Location ──────────────────────────────── */}
      <section className="py-20 lg:py-40 px-4 lg:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Hours */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-4">
                Hours
              </p>
              <SecondaryHeading className="text-text">
                We&apos;re <span className="text-primary">Open</span>
              </SecondaryHeading>
            </div>

            <div className="rounded-2xl border border-white/10 overflow-hidden divide-y divide-white/10">
              {HOURS.map(({ day, open, close, late }, i) => (
                <div
                  key={day}
                  className={`flex items-center justify-between px-6 py-4 ${
                    i % 2 === 1 ? 'bg-white/[0.025]' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {late && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    )}
                    <span className={`font-medium ${late ? 'text-text' : 'text-text/80'}`}>
                      {day}
                    </span>
                  </div>
                  <span className={`text-sm font-semibold tabular-nums ${late ? 'text-primary' : 'text-text/50'}`}>
                    {open} – {close}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-text/35 text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Late nights on Fridays &amp; Saturdays until 1 a.m.
            </p>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-4">
                Location
              </p>
              <SecondaryHeading className="text-text">
                Find <span className="text-primary">Us</span>
              </SecondaryHeading>
            </div>

            {/* Address card */}
            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-5">
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-text font-semibold text-lg leading-snug">2526 E Hastings St</p>
                <p className="text-text/55 mt-0.5">Vancouver, BC  V5K 1Z3</p>
                <a
                  href="https://maps.google.com/?q=2526+E+Hastings+St+Vancouver+BC+V5K+1Z3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-medium hover:underline mt-2 inline-block"
                >
                  Get directions →
                </a>
              </div>
            </div>

            {/* Map embed — dark-inverted so it matches the site */}
            <div className="rounded-2xl overflow-hidden border border-white/10 w-full aspect-video">
              <iframe
                src="https://maps.google.com/maps?q=2526+E+Hastings+St,+Vancouver,+BC+V5K+1Z3&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pho You on Google Maps"
              />
            </div>

            {/* Quick info strip */}
            <div className="flex gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-text/50 text-sm">
                <Clock size={15} className="text-primary" />
                Open 7 days a week
              </div>
              <div className="flex items-center gap-2 text-text/50 text-sm">
                <MapPin size={15} className="text-primary" />
                East Hastings, Vancouver
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-20 lg:py-32 px-4 lg:px-10 bg-primary">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <SecondaryHeading className="max-w-2xl">
            Ready to <span className="text-stroke">Taste</span> the Difference?
          </SecondaryHeading>
          <Button href="/Menu" className="!bg-background flex-shrink-0">
            View Our Menu
          </Button>
        </div>
      </section>

    </>
  )
}
