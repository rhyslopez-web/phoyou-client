import React from 'react'
import SecondaryHeading from '../SecondaryHeading/SecondaryHeading'
import Button from '../Button/Button'
import Paragraph from '../Paragraph/Paragraph'
import Image from 'next/image'

const HomeGallery = () => {
  return (
    <section className='py-20 lg:py-40 px-3 bg-primary'>
        <div className='max-w-[1400px] mx-auto flex flex-col gap-20'>
            <div className='flex flex-col md:flex-row justify-between md:items-center items-start gap-10'>
                <div className='lg:w-2/6 flex flex-col gap-5'>
                    <SecondaryHeading>
                        Get <span className='text-stroke'>Hungry</span> Just Looking
                    </SecondaryHeading>
                    <Paragraph>
                        A glimpse at some of our favourite dishes — no filters needed.
                    </Paragraph>
                </div>
                
                <Button className='!bg-background'>View Menu</Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">
                {['gallery1.jpg', 'gallery2.jpg', 'gallery3.jpg', 'gallery4.jpg', 'gallery5.jpg', 'gallery6.jpg'].map((src, index) => (
                <div key={index} className="aspect-square border-4 border-primary-shade rounded-3xl overflow-hidden relative">
                    <Image
                    src={`/${src}`} // ✅ Add leading slash here
                    alt=""
                    fill
                    className="object-cover"
                    />
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default HomeGallery