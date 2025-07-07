'use client'

import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import { ArrowRight } from 'lucide-react'
import { motion } from "motion/react"


const BentoFoodCard = ({image, title, description} : {image:string, title:string, description:string}) => {
  return (
    <motion.article 
    initial={{rotate: 0, scale: 1}}
    whileHover={{rotate: 1, scale: 1.01}}
    transition={{duration: 0.2, ease: 'easeInOut'}}
    className="relative aspect-[3/4] rounded-3xl overflow-hidden border-2 border-primary"
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute bottom-0 w-full p-4 text-white flex flex-col gap-5 pb-10">
        <h3 className="text-3xl font-bold">{title}</h3>
        <Paragraph>{description}</Paragraph>
      </div>

      <a href='#' className='h-20 w-20 bg-primary absolute bottom-0 right-0 flex justify-center items-center rounded-tl-3xl'>
        <ArrowRight/>
      </a>
    </motion.article>
)
}

export default BentoFoodCard