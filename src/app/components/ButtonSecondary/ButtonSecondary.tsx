import React, { ReactNode } from 'react'

const ButtonSecondary = ({children, href} : {children: ReactNode, href?: string}) => {
  return (
    <a href={href} className='text-text px-7 py-3 rounded-full border border-primary hover:bg-orange-500 transition duration-200'>
        {children}
    </a>
  )
}

export default ButtonSecondary