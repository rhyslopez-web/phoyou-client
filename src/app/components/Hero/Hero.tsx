'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Button from '../Button/Button'
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary'
import { supabase } from '@/lib/supabase'

type TickerItem = {
  id: string
  name: string
  image_url: string
}

/* ─── Shared card ─── */
const TickerCard = ({ item, className = '' }: { item: TickerItem; className?: string }) => (
  <div className={`relative flex-shrink-0 rounded-2xl overflow-hidden ${className}`}>
    <img
      src={item.image_url}
      alt={item.name}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
    <div className="absolute bottom-0 p-4">
      <p className="text-white font-semibold text-sm leading-tight">{item.name}</p>
    </div>
  </div>
)

/* ─── Desktop: vertical column ─── */
const VerticalColumn = ({ items, delay = '0s', duration = '60s' }: { items: TickerItem[]; delay?: string; duration?: string }) => {
  const doubled = [...items, ...items]
  return (
    <div
      className="flex flex-col gap-4 will-change-transform"
      style={{ animation: `scrollUp ${duration} linear infinite`, animationDelay: delay }}
    >
      {doubled.map((item, i) => (
        <TickerCard key={`v-${item.id}-${i}`} item={item} className="w-full aspect-[3/4]" />
      ))}
    </div>
  )
}

/* ─── Mobile: horizontal row ─── */
const HorizontalTicker = ({ items }: { items: TickerItem[] }) => {
  const doubled = [...items, ...items]
  return (
    <div
      className="flex gap-3 h-full will-change-transform"
      style={{ animation: 'scrollLeft 50s linear infinite', width: 'max-content' }}
    >
      {doubled.map((item, i) => (
        <TickerCard key={`h-${item.id}-${i}`} item={item} className="h-full aspect-[3/4]" />
      ))}
    </div>
  )
}

/* ─── Hero ─── */
const Hero = () => {
  const { data: items = [] } = useQuery<TickerItem[]>({
    queryKey: ['hero-ticker'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('menu_with_category')
        .select('id, name, image_url')
        .not('image_url', 'is', null)
        .order('sort_order', { ascending: true })
      if (error) throw error
      return data ?? []
    },
  })

  const col1 = items.filter((_, i) => i % 2 === 0)
  const col2 = items.filter((_, i) => i % 2 === 1)

  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col lg:flex-row">

      {/* ── Content ──
          Mobile:  pt-20 clears the fixed header; justify-center then splits the
                   remaining height equally above and below the content block,
                   giving the same ~42 px gap as between content and ticker below.
          Desktop: spacer divs (hidden on mobile) do the centering instead.        */}
      <div className="flex-1 lg:flex-none lg:w-1/2 flex flex-col
                      justify-center pt-20 lg:pt-0 lg:justify-start
                      px-6 lg:px-16 relative z-10">

        {/* Desktop-only top spacer */}
        <div className="hidden lg:block flex-1 min-h-20" />

        <div className="flex flex-col gap-5 lg:gap-8">
          <div className="flex flex-col gap-3 lg:gap-4">
            <h1 className="text-text text-5xl lg:text-7xl font-bold leading-tight">
              Fresh Flavors of{' '}
              <span className="text-primary">Vietnam</span>
              {' '}&amp; Thailand
            </h1>
            <p className="text-text/60 text-base lg:text-lg max-w-md">
              A bold fusion of seafood and vegetarian dishes rooted in tradition, reimagined for today.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button href="/Menu">View Menu</Button>
            <ButtonSecondary href="/about">About Us</ButtonSecondary>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <img src="/ubereats.png" alt="UberEats"
              className="h-6 object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-200" />
            <img src="/skipthedisheslogo.png" alt="SkipTheDishes"
              className="h-6 object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-200" />
            <img src="/doordashlogo.png" alt="DoorDash"
              className="h-6 object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-200" />
            <div className="flex items-center gap-1.5">
              <span className="text-secondary text-sm font-semibold">★ 4.8</span>
              <span className="text-text/50 text-sm">on Google</span>
            </div>
          </div>
        </div>

        {/* Desktop-only bottom spacer */}
        <div className="hidden lg:block flex-1" />
      </div>

      {/* ── Mobile: horizontal ticker ──
          h-44  = 176 px of visible cards
          pb-[42px] = 42 px breathing room below the cards
          Together they consume 218 px from the section's 812 px, leaving
          594 px for the content div — which with pt-20 + justify-center
          produces equal ~42 px gaps above, between, and below.              */}
      {items.length > 0 && (
        <div className="lg:hidden flex-shrink-0 pb-[42px]">
          <div
            className="h-44 relative overflow-hidden"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
              maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            }}
          >
            <HorizontalTicker items={items} />
          </div>
        </div>
      )}

      {/* ── Desktop: vertical two-column ticker (right half) ── */}
      {items.length > 0 && (
        <div
          className="hidden lg:flex absolute right-0 top-0 bottom-0 w-1/2 gap-4 px-4 overflow-hidden pointer-events-none"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
          }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-background to-transparent z-10" />
          {col1.length > 0 && (
            <div className="flex-1 overflow-hidden">
              <VerticalColumn items={col1} delay="0s" duration="60s" />
            </div>
          )}
          {col2.length > 0 && (
            <div className="flex-1 overflow-hidden">
              <VerticalColumn items={col2} delay="-30s" duration="60s" />
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default Hero
