import React from 'react'
import SecondaryHeading from '../SecondaryHeading/SecondaryHeading'
import Image from 'next/image'
import Paragraph from '../Paragraph/Paragraph'
import Button from '../Button/Button'
import {MapPin} from 'lucide-react'

const HomeFinalCall = () => {
  return (
    <section className='py-20 lg:py-40 px-3'>
        <div className='max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col gap-5'>
                <SecondaryHeading className='text-primary'>
                    Ready to <span className='text-stroke'>Taste</span> the Difference?
                </SecondaryHeading>

                <div className='flex gap-5'>
                  <MapPin color='#DA4C28'/>
                  <h3 className='font-bold text-2xl text-primary'>2526 East Hastings, Vancouver</h3>
                </div>

                <div className='lg:w-5/6'>                
                  <Paragraph>
                    Experience fresh, feel good Vietnamese and Thai dishes made with simple ingredients and 
                    bold flavours no oil, no fuss, just good food.
                  </Paragraph>
                </div>
              </div>

              <div>
                <Button>View Our Menu</Button>
              </div>
            </div>

            <div className='aspect-square rounded-3xl relative order-first lg:order-last'>
              <Image
              src='/transparentnoodle.png'
              alt=""
              fill
              className="w-full object-cover"
              />
            </div>
        </div>
    </section>
  )
}

export default HomeFinalCall