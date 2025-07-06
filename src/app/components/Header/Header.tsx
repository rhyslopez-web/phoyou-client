'use client'
import React from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence, easeIn } from "motion/react"
import { RemoveScroll } from 'react-remove-scroll'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handeIsOpen = () => {
        setIsOpen(!isOpen)
    };

  return (
    <nav className='sticky top-0 right-0 z-10 bg-background backdrop-invert backdrop-saturate-150'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:px-10 px-3 py-5 relative'>
            <a>
                <img src="logo.png" alt="" className='object-fit h-10 lg:h-20' />
            </a>

            <ul className='text-text md:flex gap-5 justify-center hidden'>
                <li className='hover:text-primary transition ease duration-200'><Link href={'/menu'}>Menu</Link></li>
                <li className='hover:text-primary transition ease duration-200'><Link href={'/about'}>About</Link></li>
                <li className='hover:text-primary transition ease duration-200'><Link href={'/blog'}>Blog</Link></li>
                <li className='hover:text-primary transition ease duration-200'><Link href={'/contact'}>Contact</Link></li>
            </ul>

            <div className='md:flex hidden justify-end items-center'>
                <a href='/' className='bg-primary text-text px-7 py-3 rounded-full hover:bg-orange-500 transition duration-200'>
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
                        <li className='hover:text-primary transition ease duration-200 text-5xl font-bold uppercase'><Link href={'/menu'}>Menu</Link></li>
                        <li className='hover:text-primary transition ease duration-200 text-5xl font-bold uppercase'><Link href={'/about'}>About</Link></li>
                        <li className='hover:text-primary transition ease duration-200 text-5xl font-bold uppercase'><Link href={'/blog'}>Blog</Link></li>
                        <li className='hover:text-primary transition ease duration-200 text-5xl font-bold uppercase'><Link href={'/contact'}>Contact</Link></li>
                        <X onClick={handeIsOpen} className='absolute top-5 right-3'/>
                    </motion.ul>
                </RemoveScroll>
                )
            }
        </AnimatePresence>
    </nav>
  )
}

export default Header