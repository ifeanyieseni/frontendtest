export type FilterType = "select" | "text" | "range"

export interface RangeValue {
  from?: string
  to?: string
}

export type FilterValue = string | RangeValue

export type FilterValues = Record<string, FilterValue>

export interface FilterConfig {
  id: string
  label: string
  type: FilterType
  options?: string[]
}
