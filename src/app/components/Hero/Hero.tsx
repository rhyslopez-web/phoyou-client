import React from 'react'
import PrimaryHeading from '../PrimaryHeading/PrimaryHeading'
import Button from '../Button/Button'
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary'

const Hero = () => {
  return (
    <section className='max-w-7xl h-[90vh] mx-auto flex flex-col items-center justify-center gap-10'>
        <div className='flex flex-col gap-5'>
            <PrimaryHeading className='text-center'>
                Fresh Flavors of​ Vietnam & Thailand
            </PrimaryHeading>

            <p className='text-center lg:text-lg'>
                A bold fusion of seafood and vegetarian dishes rooted in tradition, reimagined for today.
            </p>

        </div>

        <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
            <Button href='/menu'>View Menu</Button>
            <ButtonSecondary href='/about'>About Us</ButtonSecondary>
        </div>
    </section>
  )
}

export default Hero