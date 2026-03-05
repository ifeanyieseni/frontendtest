'use client'

import { Plus, Download } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface BacklinksActionsProps {
  onOutreach?: () => void
  onExport?: () => void
}

export const BacklinksActions = ({ onOutreach, onExport }: BacklinksActionsProps) => (
  <div className='flex justify-end gap-3 py-2 px-8'>
    <Button className='bg-brand-blue text-white ' onClick={onOutreach}>
      <Plus className='mr-2 h-4 w-4' />
      Outreach Support
    </Button>
    <Button variant='outline' className='text-slate-700' onClick={onExport}>
      Export to CSV
      <Download className='ml-2 h-4 w-4' />
    </Button>
  </div>
)
