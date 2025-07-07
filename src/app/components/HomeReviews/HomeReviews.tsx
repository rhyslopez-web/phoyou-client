'use client'

import React from 'react'
import SecondaryHeading from '../SecondaryHeading/SecondaryHeading'
import Paragraph from '../Paragraph/Paragraph'
import { easeInOut, motion} from "motion/react"


const HomeReviews = () => {
  return (
    <section className='py-20 lg:py-40 px-3'>
        <div className='max-w-[1400px] mx-auto gap-20 grid grid-cols-1 md:grid-cols-2'>
            <div>
                <motion.img 
                initial={{rotate: 90, x: -200, opacity:0.1}}
                whileInView={{rotate: 0, x: 0, opacity: 1}}
                transition={{ease: easeInOut, duration: 1.5}}
                src="transparentbowl.png" 
                alt="" 
                className='object-fit'
                />
            </div>

            <div className='flex flex-col'>
              <SecondaryHeading className='text-primary'>What Our <span className='text-stroke'>Customers</span> Have To Say</SecondaryHeading>
              
              {/* Review 1 */}
              <article className='flex flex-col gap-5 py-10 border-b'>
                  <h3 className='text-3xl font-bold'> 
                    “Tastes like home but better.”
                  </h3>

                  <Paragraph className='italic'>
                  The seafood options are super fresh, and you can tell the recipes come from real cultural roots. Highly recommend the chili lime prawns.
                  <br></br>
                  <br></br>
                  — Anita V.
                  </Paragraph>
              </article>

              {/* Review 2 */}
              <article className='flex flex-col gap-5 py-10 border-b'>
                  <h3 className='text-3xl font-bold'> 
                    “Light meals that still leave you satisfied.”
                  </h3>

                  <Paragraph className='italic'>
                  I always feel good after eating here. Perfect for lunch without the post meal crash.
                  <br></br>
                  <br></br>
                  — Kevin D.
                  </Paragraph>
              </article>
            </div>
        </div>
    </section>
  )
}

export default HomeReviews