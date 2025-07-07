import React, { ReactNode } from 'react'

const Button = ({children, href, className} : {children: ReactNode, href?: string, className?: string}) => {
  return (
    <a href={href} className={className + ' bg-primary text-text px-7 py-3 rounded-full hover:bg-orange-500 transition duration-200'}>
        {children}
    </a>
  )
}

export default Button