import React from 'react'
import PrimaryHeading from '../PrimaryHeading/PrimaryHeading'
import Paragraph from '../Paragraph/Paragraph'
import SecondaryHeading from '../SecondaryHeading/SecondaryHeading'

const HomeAbout = () => {
  return (
    <section className='py-20 bg-primary'>
        <div className='max-w-[1400px] mx-auto px-3 flex flex-col gap-10'>
            <div className='gap-5 w-full grid grid-cols-1 md:grid-cols-2'>
                <SecondaryHeading>
                    Rooted in Culture, Crafted with Care
                </SecondaryHeading>

                <Paragraph>
                    Our restaurant brings together the soulful flavors of Vietnam and Taiwan, inspired by family recipes and street market favorites. With a menu focused on fresh seafood and plant based dishes, we offer a modern take on tradition flavorful, vibrant, and always made with intention.
                </Paragraph>
            </div>

            <div className="md:col-span-2 aspect-video relative w-full h-full order-first md:order-last">
            <img
                src="homeabout.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover rounded-4xl border-background border-4"
            />
            </div>
        </div>
    </section>
)
}

export default HomeAbout