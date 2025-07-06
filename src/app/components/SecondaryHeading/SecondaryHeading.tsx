'use client'

import React, { ReactNode } from 'react'
import { motion, AnimatePresence, easeIn } from "motion/react"

const SecondaryHeading = ({children, className} : {children: ReactNode, className?: string}) => {
  return (
    <motion.h2 
    initial={{opacity: 0}}
    whileInView={{opacity:100}}
    transition={{duration: 0.7}}
    className={className + ' text-3xl lg:text-6xl font-bold'}
    >
        {children}
    </motion.h2>
  )
}

export default SecondaryHeading