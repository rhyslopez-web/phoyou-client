'use client'

import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import { motion } from "motion/react"

const BentoFoodCard = ({ image, title, description }: { image: string; title: string; description: string }) => {
  return (
    <motion.article
      initial={{ rotate: 0, scale: 1 }}
      whileHover={{ rotate: 1, scale: 1.01 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className="relative aspect-[3/4] rounded-3xl overflow-hidden border-2 border-primary"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

      <div className="absolute bottom-0 w-full p-6 text-white flex flex-col gap-3">
        <h3 className="text-3xl font-bold leading-tight">{title}</h3>
        <Paragraph>{description}</Paragraph>
      </div>
    </motion.article>
  )
}

export default BentoFoodCard
