import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import { Heart } from 'lucide-react'

const BentoCard = ({children} : {children: string }) => {
  return (
    <article className='bg-primary-shade py-10 px-5 text-text rounded-3xl flex flex-col justify-between'>

        <div className='w-10 h-10 bg-primary flex justify-center items-center rounded-xl'>
            <Heart className='text-text'/>
        </div>

        <Paragraph>
            {children}
        </Paragraph>
        
    </article>
  )
}

export default BentoCard