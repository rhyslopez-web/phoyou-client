import React from 'react'
import MenuSection from '../components/MenuSection/MenuSection'
import DividerTop from '../components/DividerTop/DividerTop'

export const metadata = {
  title: 'Menu | Pho You',
  description: 'Explore our full menu of Vietnamese and Thai dishes.',
}

export default function MenuPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-[100px] lg:pt-[140px] pb-12 px-4 lg:px-10 max-w-[1400px] mx-auto">
        <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-3">
          What we serve
        </p>
        <h1 className="text-6xl lg:text-8xl font-bold text-text leading-tight">
          Our Menu
        </h1>
        <p className="text-text/50 text-lg mt-4 max-w-xl">
          Fresh flavors of Vietnam &amp; Thailand — made from scratch, every day.
        </p>
      </div>

      <MenuSection />
      <DividerTop />
    </>
  )
}
