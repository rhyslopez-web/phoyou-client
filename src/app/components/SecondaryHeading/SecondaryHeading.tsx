import React from 'react'

const SecondaryHeading = ({children, className} : {children: string, className?: string}) => {
  return (
    <h2 className={className + ' text-3xl lg:text-4xl font-bold'}>
        {children}
    </h2>
  )
}

export default SecondaryHeading