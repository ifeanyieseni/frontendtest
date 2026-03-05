'use client'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'


import { navItems } from '@/constants/navitems'
import { Button } from '@/components/ui/button'

const AppHeader = () => {
  return (
    <header className='border-border bg-background sticky top-0 z-50 flex shrink-0 items-center justify-between border-b px-8 pt-3'>
      <nav className='flex items-center gap-6 overflow-x-auto text-sm font-normal text-slate-500 [&::-webkit-scrollbar]:hidden'>
        {navItems.map(item => (
          <Link
            key={item}
            href='#'
            className='last:text-brand-blue last:after:bg-brand-blue relative py-3 whitespace-nowrap last:font-semibold last:after:absolute last:after:right-0 last:after:bottom-0 last:after:left-0 last:after:h-0.5 hover:text-slate-900'
          >
            {item}
          </Link>
        ))}
      </nav>

      <div className='flex items-center gap-3'>
        <Button variant='ghost' className='relative'>
          <Image src={'/images/bellIcon.svg'} alt='BellIcon' width={20} height={20} />
          <span className='absolute top-0 right-2 h-3 w-3 rounded-full border-2 border-white bg-red-500' />
        </Button>
        <div className='rounded-full'>
          <div className='flex cursor-pointer items-center gap-2 text-sm font-medium'>
            <span>Konvart Account</span>
            <ChevronDown className='h-4 w-4 text-slate-500' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
