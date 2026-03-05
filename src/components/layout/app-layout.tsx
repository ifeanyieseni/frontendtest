'use client'
import React from 'react'

import { SidebarProvider } from '@/components/ui/sidebar'
import AppSidebar from '@/components/layout/app-sidebar'
import AppHeader from '@/components/layout/app-header'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className='flex h-screen w-full bg-slate-50'>
        <AppSidebar />
        <div className='flex flex-1 flex-col overflow-hidden'>
          <AppHeader />
          <main className='flex-1 overflow-auto bg-white'>{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default AppLayout
