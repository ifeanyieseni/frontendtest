'use client'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BACKLINKS_TABMENU } from '@/constants/tabmenuItems'

const BacklinksTabs = () => {
  return (
    <Tabs defaultValue='backlinks' className='w-full pr-4'>
      <TabsList className='h-auto w-full justify-start gap-6 rounded-none border-b border-gray-400 bg-transparent p-0 px-3 text-start py-3' variant='line'>
        {BACKLINKS_TABMENU.map(tab => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className='-mb-px flex-none rounded-none bg-transparent px-5 py-3 text-slate-600 font-medium data-[state=active]:text-brand-blue '
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}

export default BacklinksTabs
