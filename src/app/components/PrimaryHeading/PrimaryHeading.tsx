import React, { ReactNode } from 'react'

const PrimaryHeading = ({children, className} : {children: ReactNode, className?: string}) => {
  return (
    <h1 className={className + ' text-5xl lg:text-9xl font-bold'}>
        {children}
    </h1>
)
}

export default PrimaryHeading