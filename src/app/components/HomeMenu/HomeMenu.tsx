import React from 'react'
import SecondaryHeading from '../SecondaryHeading/SecondaryHeading'
import Paragraph from '../Paragraph/Paragraph'
import BentoFoodCard from '../BentoFoodCard/BentoFoodCard'
import Button from '../Button/Button'

const HomeMenu = () => {
  return (
    <section className='py-20 lg:py-40 px-3'>
        <div className='max-w-[1400px] mx-auto flex flex-col gap-20'>
          <div className='flex flex-col items-center gap-5'>
            <SecondaryHeading className='text-primary'>
              Try Our Personal  
              <span className='text-stroke'> Favourites</span>
            </SecondaryHeading>
            <Paragraph>Explore a taste of what we’re all about, then dive into the full menu for more.</Paragraph>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <BentoFoodCard title='Food Title' description='this will be the short description' image='fav1.jpg'/>
            <BentoFoodCard title='Food Title' description='this will be the short description' image='fav2.jpg'/>
            <BentoFoodCard title='Food Title' description='this will be the short description' image='fav3.jpg'/>
          </div>

          <div className='flex justify-center'>
            <Button href='/'>View Whole Menu</Button>
          </div>
        </div>
    </section>
  )
}

export default HomeMenu