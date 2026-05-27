import React from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Menu', href: '/Menu' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const HOURS = [
  { days: 'Mon – Thu', time: '11:00 am – 11:00 pm' },
  { days: 'Fri – Sat', time: '11:00 am – 1:00 am', highlight: true },
  { days: 'Sunday', time: '11:00 am – 11:00 pm' },
]

const Footer = () => {
  return (
    <footer className="bg-primary text-text">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo + tagline */}
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <Link href="/">
              <img src="/logo.png" alt="Pho You" className="h-16 object-contain object-left" />
            </Link>
            <p className="text-text/70 text-sm leading-relaxed max-w-xs">
              Fresh Vietnamese &amp; Thai flavours, rooted in tradition and made for today.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm uppercase tracking-widest text-text/50">Navigate</h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-text/80 hover:text-text transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm uppercase tracking-widest text-text/50">Contact</h3>
            <ul className="flex flex-col gap-3 text-text/80 text-sm">
              <li>
                <a
                  href="https://maps.google.com/?q=2526+E+Hastings+St,+Vancouver,+BC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text transition-colors duration-200 leading-relaxed"
                >
                  2526 E Hastings St<br />Vancouver, BC
                </a>
              </li>
              <li>
                <a href="tel:+12369991633" className="hover:text-text transition-colors duration-200">
                  (236) 999-1633
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm uppercase tracking-widest text-text/50">Hours</h3>
            <ul className="flex flex-col gap-2">
              {HOURS.map(({ days, time, highlight }) => (
                <li key={days} className={`text-sm ${highlight ? 'text-text font-semibold' : 'text-text/80'}`}>
                  <span className="block">{days}</span>
                  <span className="block">{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-12 pt-6 border-t border-text/20 flex flex-col sm:flex-row justify-between items-center gap-2 text-text/50 text-xs">
          <span>© {new Date().getFullYear()} Pho You. All rights reserved.</span>
          <a
            href="https://www.zomi.menu/shop/phoyou/pick-up/menu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text transition-colors duration-200"
          >
            Order Online →
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
