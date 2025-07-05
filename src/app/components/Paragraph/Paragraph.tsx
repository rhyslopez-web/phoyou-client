import React, { ReactNode } from 'react'

const Paragraph = ({children} : {children: ReactNode}) => {
  return (
    <p className='text-lg'>
        {children}
    </p>
  )
}

export default Paragraph