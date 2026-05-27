import React from 'react'
import { MapPin, Clock } from 'lucide-react'
import SecondaryHeading from '../SecondaryHeading/SecondaryHeading'

const HOURS = [
  { day: 'Monday',    open: '11 a.m.', close: '11 p.m.', late: false },
  { day: 'Tuesday',   open: '11 a.m.', close: '11 p.m.', late: false },
  { day: 'Wednesday', open: '11 a.m.', close: '11 p.m.', late: false },
  { day: 'Thursday',  open: '11 a.m.', close: '11 p.m.', late: false },
  { day: 'Friday',    open: '11 a.m.', close: '1 a.m.',  late: true  },
  { day: 'Saturday',  open: '11 a.m.', close: '1 a.m.',  late: true  },
  { day: 'Sunday',    open: '11 a.m.', close: '11 p.m.', late: false },
]

const HomeHoursLocation = () => {
  return (
    <section className='py-20 lg:py-40 px-4 lg:px-10'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16'>

        {/* ── Hours ───────────────────────────────────────── */}
        <div className='flex flex-col gap-8'>
          <div>
            <p className='text-primary font-semibold tracking-widest text-sm uppercase mb-4'>
              Opening Hours
            </p>
            <SecondaryHeading className='text-text'>
              We&apos;re <span className='text-primary'>Open</span>
            </SecondaryHeading>
          </div>

          <div className='rounded-2xl border border-white/10 overflow-hidden divide-y divide-white/10'>
            {HOURS.map(({ day, open, close, late }, i) => (
              <div
                key={day}
                className={`flex items-center justify-between px-6 py-4 ${
                  i % 2 === 1 ? 'bg-white/[0.025]' : ''
                }`}
              >
                <div className='flex items-center gap-3'>
                  {late && (
                    <span className='w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0' />
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

          <p className='text-text/35 text-xs flex items-center gap-2'>
            <span className='w-1.5 h-1.5 rounded-full bg-primary inline-block' />
            Late nights on Fridays &amp; Saturdays until 1 a.m.
          </p>
        </div>

        {/* ── Location ────────────────────────────────────── */}
        <div className='flex flex-col gap-8'>
          <div>
            <p className='text-primary font-semibold tracking-widest text-sm uppercase mb-4'>
              Location
            </p>
            <SecondaryHeading className='text-text'>
              Find <span className='text-primary'>Us</span>
            </SecondaryHeading>
          </div>

          {/* Address card */}
          <div className='flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-5'>
            <div className='w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5'>
              <MapPin size={18} className='text-primary' />
            </div>
            <div>
              <p className='text-text font-semibold text-lg leading-snug'>2526 E Hastings St</p>
              <p className='text-text/55 mt-0.5'>Vancouver, BC  V5K 1Z3</p>
              <a
                href='https://maps.google.com/?q=2526+E+Hastings+St+Vancouver+BC+V5K+1Z3'
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary text-sm font-medium hover:underline mt-2 inline-block'
              >
                Get directions →
              </a>
            </div>
          </div>

          {/* Map embed */}
          <div className='rounded-2xl overflow-hidden border border-white/10 w-full aspect-video'>
            <iframe
              src='https://maps.google.com/maps?q=2526+E+Hastings+St,+Vancouver,+BC+V5K+1Z3&t=&z=15&ie=UTF8&iwloc=&output=embed'
              width='100%'
              height='100%'
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Pho You on Google Maps'
            />
          </div>

          {/* Quick info strip */}
          <div className='flex gap-6 flex-wrap'>
            <div className='flex items-center gap-2 text-text/50 text-sm'>
              <Clock size={15} className='text-primary' />
              Open 7 days a week
            </div>
            <div className='flex items-center gap-2 text-text/50 text-sm'>
              <MapPin size={15} className='text-primary' />
              East Hastings, Vancouver
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HomeHoursLocation
