'use client'

import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const ReactQueryProvider = ({children}: {children: ReactNode}) => {

    const client = new QueryClient()
    
  return (
    <QueryClientProvider client={client}>
        {children}
    </QueryClientProvider>
  )
}

export default ReactQueryProvider