import React from 'react'
import PrimaryHeading from '../PrimaryHeading/PrimaryHeading'
import Button from '../Button/Button'
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary'
import DividerTop from '../DividerTop/DividerTop'

const Hero = () => {
  return (
    <section className='relative w-full h-screen flex flex-col items-center justify-center overflow-hidden'>
      {/* Background Video */}
      <video
        className='absolute top-0 left-0 w-full h-full object-cover'
        src='herovideo.mov' // change this path to your actual video file
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay (optional, for better text visibility) */}
      <div className='absolute inset-0 bg-black/40'></div>

      {/* Hero Content */}
      <div className='relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center gap-10 px-5 text-white'>
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
      </div>

      <div className='absolute bottom-0 right-0 left-0'>
        <DividerTop/>
      </div>
    </section>
  )
}

export default Hero
