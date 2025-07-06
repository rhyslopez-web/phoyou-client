import React from 'react'
import SecondaryHeading from '../SecondaryHeading/SecondaryHeading'

const HomeReviews = () => {
  return (
    <section className='py-20 lg:py-40 px-3'>
        <div className='max-w-[1400px] mx-auto gap-20 grid grid-cols-1 md:grid-cols-2'>
            <div>
                <img src="transparentbowl.png" alt="" className='object-fit'/>
            </div>

            <article>
                <SecondaryHeading>What Our Customers Have To Say</SecondaryHeading>
            </article>
        </div>
    </section>
  )
}

export default HomeReviews