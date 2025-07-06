import React from 'react'
import SecondaryHeading from '../SecondaryHeading/SecondaryHeading'
import Button from '../Button/Button'
import BentoCard from '../BentoCard/BentoCard'
import './HomeAbout.css'

const HomeAbout = () => {
  return (
    <section className='py-20 lg:py-40 px-3 bg-primary'>
        <div className='max-w-[1400px] mx-auto'>
            <div className='grid grid-cols-1 gap-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-5'>                    
                    <SecondaryHeading>
                        Rooted in Culture <span className='text-stroke'>Crafted</span> with <span className='text-stroke'>Care</span>
                    </SecondaryHeading>

                    <div className='flex md:justify-end md:items-center'>
                        <Button href='/' className='!bg-background'>Read About Us</Button>
                    </div>
                </div>

                <div className='gap-5 grid lg:grid-cols-3'>
                    <div className="lg:col-span-1 border-5 border-primary-shade rounded-3xl h-full overflow-hidden">
                    <img 
                        src="homeabout.jpg" 
                        alt="" 
                        className="w-full h-full object-cover"
                    />
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:col-span-2'>
                        <BentoCard title='Wholesome & Oil-Free'>
                            Our dishes are crafted without oil, letting fresh herbs, spices, and natural flavors shine through — clean eating at its best.
                        </BentoCard>
                    
                        <BentoCard title='Seafood & Veggie-Focused'>
                            We celebrate the best of land and sea with vibrant vegetarian dishes and responsibly sourced seafood inspired by Vietnamese and Thai traditions.
                        </BentoCard>
                        
                        <BentoCard title='Health-Conscious Choices'>
                            From light broths to steamed plates, everything on our menu is made to nourish your body while satisfying your cravings.
                        </BentoCard>

                        <BentoCard title='Deliciously Affordable'>
                            Great food doesn’t have to break the bank — enjoy bold flavors, big portions, and friendly prices that keep you coming back.
                        </BentoCard>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default HomeAbout