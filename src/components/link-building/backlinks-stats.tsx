'use client'

import { PlusCircle } from 'lucide-react'

interface BacklinksStatsProps {
  totalBacklinks: number
  providedResults: number
  onAddResults?: () => void
}

export const BacklinksStats = ({ totalBacklinks, providedResults, onAddResults }: BacklinksStatsProps) => (
  <div className='flex items-center justify-between px-8 py-5'>
    <div className='flex items-center gap-6 text-sm'>
      <h2 className='text-base font-bold'>All Backlinks</h2>

      <div className='flex items-center gap-1'>
        <span className='text-base font-bold'>Total Backlinks</span>
        <span className='text-slate-600'>{totalBacklinks.toLocaleString()}</span>
      </div>

      <div className='flex items-center gap-1'>
        <span className='text-base font-bold'>Provided result:</span>
        <span className='text-slate-600'>{providedResults}</span>
        <PlusCircle
          className='ml-1 h-4 w-4 cursor-pointer text-slate-400 hover:text-slate-600'
          onClick={onAddResults}
        />
      </div>
    </div>
  </div>
)
