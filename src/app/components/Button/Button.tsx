import React, { ReactNode } from 'react'

const Button = ({children, href} : {children: ReactNode, href: string}) => {
  return (
    <a href='' className='bg-primary text-text px-7 py-3 rounded-full hover:bg-orange-500 transition duration-200'>
        {children}
    </a>
  )
}

export default Button