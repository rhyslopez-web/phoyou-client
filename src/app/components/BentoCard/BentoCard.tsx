import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import { Heart } from 'lucide-react'

const BentoCard = ({children, title, className} : {children: string, title: string, className?: string }) => {
  return (
    <article className='bg-primary-shade py-10 px-5 text-text rounded-3xl flex flex-col justify-between gap-10'>

        <div className='flex gap-5 w-full'>
          <div className='w-10 h-10 bg-primary flex justify-center items-center rounded-xl'>
              <Heart className='text-text'/>
          </div>

          <h3 className={className + ' text-3xl lg:text-3xl font-bold'}>
            {title}
          </h3>
        </div>

        <Paragraph>
            {children}
        </Paragraph>
        
    </article>
  )
}

export default BentoCard