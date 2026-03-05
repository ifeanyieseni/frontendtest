'use client'
import React, { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'
 import { ChevronDown, HelpCircle, LogOut } from 'lucide-react'


 import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'

import { sidebarLinks } from '@/constants/sidebar-links'

const AppSidebar = () => {
   const [isExpanded, setIsExpanded] = useState(true)

  return (
    <aside className='flex h-screen w-62.5 shrink-0 flex-col overflow-y-auto bg-sidebar-primary text-slate-300'>
      <div className='flex items-center gap-2 p-6 text-xl font-bold tracking-tight text-white'>
        <Image src='/images/logo.svg' alt='BrandAlly Logo' width={100} height={40} className='' />
      </div>

      <div className='flex-1 px-4 py-2'>
        <div
          className='flex cursor-pointer items-center justify-between rounded-md px-2 py-2 font-medium text-white transition-colors hover:bg-white/5'
          onClick={() => setIsExpanded(!isExpanded)}
        >
          Link Building
          <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-0' : '-rotate-90'}`} />
        </div>

        {isExpanded && (
          <div className='mt-3 space-y-3'>
            {sidebarLinks.map(link => {
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`flex items-center gap-3 rounded-md px-3 py-2.5 transition-colors ${
                    link.isActive ? 'bg-accent text-primary' : 'text-white hover:bg-white/5'
                  }`}
                >
                  <Image
                    src={link.icon}
                    alt={link.title}
                    className={`h-5 w-5 ${link.isActive ? 'brightness-100 grayscale-0' : 'brightness-150 grayscale'}`}
                    width={20}
                    height={20}
                  />

                  <span>{link.title}</span>
                </Link>
              )
            })}
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className='mt-auto space-y-4 border-t border-white/10 p-4'>
        <Select defaultValue='facebook'>
          <SelectTrigger className='w-full border-white/10 bg-[#0311615C] text-white focus:ring-0 focus:ring-offset-0'>
            <SelectValue placeholder='Select project' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='facebook'>Facebook</SelectItem>
            <SelectItem value='google'>Google</SelectItem>
          </SelectContent>
        </Select>

        <div className='space-y-1'>
          <Link
            href='#'
            className='flex items-center gap-3 rounded-md px-3 py-2 text-slate-300 transition-colors hover:bg-white/5'
          >
            <HelpCircle className='h-4 w-4' />
            Help
          </Link>
          <Link
            href='#'
            className='flex items-center gap-3 rounded-md px-3 py-2 text-slate-300 transition-colors hover:bg-white/5'
          >
            <LogOut className='h-4 w-4 rotate-180' />
            Log out
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default AppSidebar
