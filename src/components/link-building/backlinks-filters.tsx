'use client'

import { useBacklinksFilter } from '@/context/backlinks-filter-context'
import { SelectFilter, RangeFilter } from './filters'
import { filtersConfig } from '@/constants/filters-config'

import type { RangeValue } from '@/types/filters'
import { Button } from '../ui/button'

export function BacklinksFilters() {
  const { filterValues, setSelectFilter, setRangeFilter, resetRangeFilter } = useBacklinksFilter()

  return (
    <div className='flex flex-col space-y-4 px-8 py-3'>
      <div className='flex flex-wrap'>
        <Button className='bg-brand-blue rounded-none'>Filter</Button>
        {filtersConfig.map(filter => (
          <div key={filter.id}>
            {filter.type === 'select' && (
              <SelectFilter
                filter={filter}
                value={(filterValues[filter.id] as string) || ''}
                onChange={value => setSelectFilter(filter.id, value)}
              />
            )}

            {filter.type === 'range' && (
              <RangeFilter
                filter={filter}
                value={(filterValues[filter.id] as RangeValue) || undefined}
                onChange={(from, to) => {
                  setRangeFilter(filter.id, from || '', to || '')
                }}
                onReset={() => resetRangeFilter(filter.id)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
