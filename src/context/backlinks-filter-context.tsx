'use client'

import { createContext, useContext, useState, useCallback, useMemo } from 'react'

import type { FilterValues } from '@/types/filters'
import { backlinks } from '@/data/frontendtestdata'
import type { Backlink } from '@/types/backlinks'

import { filterBacklinks } from '@/utils/filterdata'

interface BacklinksFilterContextType {
  filterValues: FilterValues
  filteredData: Backlink[]
  setSelectFilter: (id: string, value: string) => void
  setRangeFilter: (id: string, from: string, to: string) => void
  resetRangeFilter: (id: string) => void
  resetAllFilters: () => void
}

const BacklinksFilterContext = createContext<BacklinksFilterContextType | undefined>(undefined)

export function BacklinksFilterProvider({ children }: { children: React.ReactNode }) {
  const [filterValues, setFilterValues] = useState<FilterValues>({})

  const setSelectFilter = useCallback((id: string, value: string) => {
    setFilterValues(prev => ({ ...prev, [id]: value }))
  }, [])

  const setRangeFilter = useCallback((id: string, from: string, to: string) => {
    setFilterValues(prev => ({
      ...prev,
      [id]: { from, to }
    }))
  }, [])

  const resetRangeFilter = useCallback((id: string) => {
    setFilterValues(prev => {
      const newValues = { ...prev }

      delete newValues[id]

      return newValues
    })
  }, [])

  const resetAllFilters = useCallback(() => {
    setFilterValues({})
  }, [])

  const filteredData = useMemo<Backlink[]>(() => {
    return filterBacklinks(backlinks, filterValues)
  }, [filterValues])

  const value: BacklinksFilterContextType = {
    filterValues,
    filteredData,
    setSelectFilter,
    setRangeFilter,
    resetRangeFilter,
    resetAllFilters
  }

  return <BacklinksFilterContext.Provider value={value}>{children}</BacklinksFilterContext.Provider>
}

export function useBacklinksFilter() {
  const context = useContext(BacklinksFilterContext)

  if (!context) {
    throw new Error('useBacklinksFilter must be used within BacklinksFilterProvider')
  }

  return context
}
