import type { FilterValues, RangeValue } from '@/types/filters'
import type { Backlink } from '@/types/backlinks'
import { filtersConfig } from '@/constants/filters-config'

export function filterBacklinks(
  backlinks: Backlink[],
  filterValues: FilterValues
): Backlink[] {
  return backlinks.filter(item => {
    return filtersConfig.every(filter => {
      const value = filterValues[filter.id]

      if (!value) return true

      const itemValue = item[filter.id as keyof Backlink]

      if (filter.type === 'range') {
        const range = value as RangeValue
        let numericValue = Number(itemValue)

        if (filter.id === 'spam_score') {
          const scoreStr = String(itemValue).replace('%', '')

          numericValue = parseInt(scoreStr, 10)
        }

        const fromNum = range.from ? parseInt(String(range.from).replace('%', ''), 10) : null
        const toNum = range.to ? parseInt(String(range.to).replace('%', ''), 10) : null

        if (fromNum !== null && numericValue < fromNum) return false
        if (toNum !== null && numericValue > toNum) return false
      }

      if (filter.type === 'select') {
        if (filter.id === 'do_follow') {
          const boolValue = value === 'true'
          
          return item.do_follow === boolValue
        }

        if (filter.id === 'status_code') {
          return String(item.status_code) === value
        }

        return String(itemValue) === value || value === 'All'
      }

      return true
    })
  })
}
