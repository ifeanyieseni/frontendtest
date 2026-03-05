import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import type { FilterConfig, RangeValue } from '@/types/filters'
import { CustomSelect } from '@/components/ui/custom-select'

interface RangeFilterProps {
  filter: FilterConfig
  value: RangeValue | undefined
  onChange: (from: string, to: string) => void
  onReset: () => void
}

export function RangeFilter({ filter, value, onChange, onReset }: RangeFilterProps) {
  const [tempFrom, setTempFrom] = useState(value?.from || '')
  const [tempTo, setTempTo] = useState(value?.to || '')

  const handleApply = () => {
    onChange(tempFrom, tempTo)
   
  }


  const handleReset = () => {
    setTempFrom('')
    setTempTo('')
    onReset()
  }

  const label = filter.id === 'spam_score' ? 'Spam Score' : filter.id === 'dr' ? 'Domain Rating' : filter.label

  return (
    <CustomSelect placeholder={filter.label} contentWidth='w-56'>
      <div className='space-y-3 px-2 py-4'>
        <label className='block p-0 text-base font-medium '>{label}</label>
        <div className='flex items-center gap-2'>
          <div className='flex flex-1 items-center gap-1'>
            <span className='text-xs'>From:</span>
            <Input
              type='text'
              placeholder='0'
              value={tempFrom}
              onChange={e => setTempFrom(e.target.value)}
              className='h-8 border-slate-200 text-sm'
            />
          </div>

          <div className='flex flex-1 items-center gap-1'>
            <span className='text-xs'>To:</span>
            <Input
              type='text'
              placeholder='100'
              value={tempTo}
              onChange={e => setTempTo(e.target.value)}
              className='h-8 border-slate-200 text-sm'
            />
          </div>
        </div>
        <div className='flex flex-col gap-2 pt-2'>
          <Button
            onClick={handleApply}
            className='bg-brand-blue hover:bg-brand-blue/90 h-8 flex-1 rounded-md text-sm text-white'
          >
            Apply
          </Button>
          <Button onClick={handleReset} variant='outline' className='h-8 flex-1 rounded-md border-slate-200 text-sm'>
            Reset
          </Button>
        </div>
      </div>
    </CustomSelect>
  )
}
