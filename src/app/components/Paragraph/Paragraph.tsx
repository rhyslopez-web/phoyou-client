import React, { ReactNode } from 'react'

const Paragraph = ({children, className} : {children: ReactNode, className?: string}) => {
  return (
    <p className={className + ' text-lg'}>
        {children}
    </p>
  )
}

export default Paragraph