'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { motion } from 'motion/react'
import { supabase } from '@/lib/supabase'

// ── Types ────────────────────────────────────────────────────

type MenuItem = {
  id: string
  category: string
  category_sort: number
  name: string
  description: string | null
  price: number
  currency: string
  image_url: string | null
  available: boolean
  sort_order: number
}

type GroupedCategory = {
  category: string
  items: MenuItem[]
}

// ── Menu Item Card ───────────────────────────────────────────

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const hasImage = !!item.image_url

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true, margin: '-60px' }}
      className="flex flex-col rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/8 transition-all duration-300 group"
    >
      {/* Image */}
      {hasImage && (
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-white/5">
          <Image
            src={item.image_url!}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col gap-2 p-5 flex-1">
        {/* Name */}
        <h3 className="text-base font-semibold text-text leading-snug">
          {item.name}
        </h3>

        {/* Description */}
        {item.description && (
          <p className="text-sm text-text/55 leading-relaxed flex-1">
            {item.description}
          </p>
        )}

        {/* Price */}
        <span className="text-primary font-bold text-lg mt-auto pt-3">
          ${Number(item.price).toFixed(2)}
          <span className="text-xs font-normal text-text/40 ml-1">CAD</span>
        </span>
      </div>
    </motion.article>
  )
}

// ── Main Section ─────────────────────────────────────────────

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>('')
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})
  const tabBarRef = useRef<HTMLDivElement>(null) // keeps horizontal scroll position

  // Fetch all menu items from Supabase
  const { data, error, isLoading } = useQuery<MenuItem[]>({
    queryKey: ['menu'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('menu_with_category')
        .select('*')
        .order('category_sort', { ascending: true })
        .order('sort_order', { ascending: true })

      if (error) throw error
      return data as MenuItem[]
    },
  })

  // Group items by category, preserving sort order
  const grouped = useMemo<GroupedCategory[]>(() => {
    if (!data) return []
    const map = new Map<string, MenuItem[]>()
    for (const item of data) {
      if (!map.has(item.category)) map.set(item.category, [])
      map.get(item.category)!.push(item)
    }
    return Array.from(map.entries()).map(([category, items]) => ({ category, items }))
  }, [data])

  // Set first category active on load
  useEffect(() => {
    if (grouped.length > 0 && !activeCategory) {
      setActiveCategory(grouped[0].category)
    }
  }, [grouped, activeCategory])

  // Track which section is in view and update the active tab
  useEffect(() => {
    if (grouped.length === 0) return

    const observers: IntersectionObserver[] = []

    grouped.forEach(({ category }) => {
      const el = sectionRefs.current[category]
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveCategory(category)
          }
        },
        { rootMargin: '-25% 0px -65% 0px', threshold: 0 }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [grouped])

  // Click a tab → smooth scroll to that section
  const scrollToSection = (category: string) => {
    sectionRefs.current[category]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // ── Render states ──────────────────────────────────────────

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-text/50 text-sm tracking-wide">Loading menu…</p>
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-primary/80">Failed to load menu — please refresh the page.</p>
      </div>
    )
  }

  // ── Main render ────────────────────────────────────────────

  return (
    <div>
      {/* ── Category tab bar ──────────────────────────────── */}
      <div className="border-b border-white/10">
        <div
          ref={tabBarRef}
          className="flex gap-2 overflow-x-auto px-4 lg:px-10 py-4 max-w-[1400px] mx-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {grouped.map(({ category }) => (
            <button
              key={category}
              data-tab={category}
              onClick={() => scrollToSection(category)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-white/8 text-text/60 hover:bg-white/15 hover:text-text'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* ── Category sections ─────────────────────────────── */}
      <div className="flex flex-col gap-24 px-4 lg:px-10 pt-16 pb-24 max-w-[1400px] mx-auto">
        {grouped.map(({ category, items }) => (
          <section
            key={category}
            ref={(el) => { sectionRefs.current[category] = el }}
            className="scroll-mt-[100px] lg:scroll-mt-[130px]"
          >
            {/* Section heading */}
            <div className="mb-6 flex items-end gap-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text leading-tight">
                {category}
              </h2>
              <span className="text-text/30 text-sm mb-1">
                {items.length} {items.length === 1 ? 'item' : 'items'}
              </span>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-primary/50 via-white/10 to-transparent mb-10" />

            {/* Items grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, index) => (
                <MenuCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
