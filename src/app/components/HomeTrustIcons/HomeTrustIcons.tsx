import React from 'react'

const HomeTrustIcons = () => {
  return (
<section className='py-20 lg:py-20 px-3 bg-primary'>
        <div className='max-w-[1400px] mx-auto flex flex-col gap-20'>
            <div className='flex flex-col items-center gap-5'>
              <h2 className='text-4xl font-semibold text-center'>Launching Soon on Your Favourite Delivery Apps!</h2>
            </div>
   
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
          {['ubereats.png', 'doordashlogo.png', 'skipthedisheslogo.png', 'fantuanlogo.png'].map((src, index) => (
            <div key={index} className="h-25 flex items-center justify-center bg-primary-shade rounded-3xl p-5">
              <img
                src={src}
                alt=""
                className="h-full object-contain"
              />
            </div>
          ))}
        </div>


        </div>
    </section>
  )
}

export default HomeTrustIcons