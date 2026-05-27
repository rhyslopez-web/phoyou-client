'use client'
import React from 'react'
import Link from 'next/link'
import { Menu, X, UserCircle } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence} from "motion/react"
import { RemoveScroll } from 'react-remove-scroll'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [visible, setVisible] = useState(true)
    const [scrolled, setScrolled] = useState(false)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY
            setScrolled(currentY > 10)
            if (currentY < 10) {
                setVisible(true)
            } else {
                setVisible(currentY < lastScrollY.current)
            }
            lastScrollY.current = currentY
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handeIsOpen = () => {
        setIsOpen(!isOpen)
    };

  return (
    <motion.nav
      animate={{ y: visible ? 0 : '-100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`top-0 right-0 z-50 fixed w-full border-b transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-white/10'
          : 'bg-transparent backdrop-blur-none border-transparent'
      }`}
    >
        <div className='grid grid-cols-2 md:grid-cols-3 lg:px-10 px-3 py-5 relative'>
            <Link href='/'>
                <img src="/logo.png" alt="Pho You" className='object-fit h-10 lg:h-20' />
            </Link>

            <ul className='text-text md:flex gap-5 justify-center hidden items-center'>
                <li className='hover:text-primary transition ease duration-200'><Link href={'/Menu'}>Menu</Link></li>
                <li className='hover:text-primary transition ease duration-200'><Link href={'/about'}>About</Link></li>
                <li className='hover:text-primary transition ease duration-200'><Link href={'/contact'}>Contact</Link></li>
            </ul>

            <div className='md:flex hidden justify-end items-center gap-4'>
                <Link href='/admin' title='Admin dashboard'>
                    <UserCircle className='w-6 h-6 text-text/50 hover:text-text transition-colors duration-200' />
                </Link>
                <a href='https://www.zomi.menu/shop/phoyou/pick-up/menu' target='_blank' rel='noopener noreferrer' className='bg-primary text-text px-7 py-3 rounded-full hover:bg-orange-500 transition duration-200'>
                    Order Now
                </a>
            </div>

            <div className='flex justify-end items-center md:hidden' onClick={handeIsOpen}>
                <Menu/>
            </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
            {
                isOpen && (
                <RemoveScroll>
                    <motion.ul
                    className='h-screen flex flex-col items-center
                    justify-center bg-primary fixed w-full top-0
                    right-0 gap-5'
                    initial={{x: 500}}
                    animate={{x: 0}}
                    exit={{x:500}}
                    transition={{duration: 0.3, ease: 'easeInOut'}}
                    >
                        <li className='hover:text-primary transition ease duration-200 text-5xl font-bold uppercase'><Link href={'/Menu'} onClick={handeIsOpen}>Menu</Link></li>
                        <li className='hover:text-primary transition ease duration-200 text-5xl font-bold uppercase'><Link href={'/about'} onClick={handeIsOpen}>About</Link></li>
                        <li className='hover:text-primary transition ease duration-200 text-5xl font-bold uppercase'><Link href={'/contact'} onClick={handeIsOpen}>Contact</Link></li>
                        <X onClick={handeIsOpen} className='absolute top-5 right-3'/>
                        <li className='absolute bottom-8'>
                            <Link href={'/admin'} onClick={handeIsOpen} className='text-text/40 text-xs uppercase tracking-widest hover:text-text/70 transition-colors duration-200 flex items-center gap-1.5'>
                                <UserCircle size={13} />
                                Admin
                            </Link>
                        </li>
                    </motion.ul>
                </RemoveScroll>
                )
            }
        </AnimatePresence>
    </motion.nav>
  )
}

export default Header