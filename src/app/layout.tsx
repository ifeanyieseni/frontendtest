import type { ReactNode } from 'react'

import { Geist_Mono } from 'next/font/google'
import type { Metadata } from 'next'


import { TooltipProvider } from '@/components/ui/tooltip'

import { cn } from '@/lib/utils'

import './globals.css'
import AppLayout from '@/components/layout/app-layout'

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Konvart',
  description: 'Welcome to Konvart',
  robots: 'index,follow'
}

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html
      lang='en'
      className={cn(geistMono.variable, 'h-screen w-screen scroll-smooth antialiased')}
      suppressHydrationWarning
    >
      <body className='h-screen w-screen overflow-hidden'>
        <TooltipProvider>
          <AppLayout>{children}</AppLayout>
        </TooltipProvider>
      </body>
    </html>
  )
}

export default RootLayout
