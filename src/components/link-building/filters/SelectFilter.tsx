import { CustomSelect, CustomSelectContent, CustomSelectItem } from '@/components/ui/custom-select'
import type { FilterConfig } from '@/types/filters'

interface SelectFilterProps {
  filter: FilterConfig
  value: string
  onChange: (value: string) => void
}

export function SelectFilter({ filter, value, onChange }: SelectFilterProps) {
  return (
    <CustomSelect placeholder={filter.label} value={value}>
      <CustomSelectContent>
        {filter.options?.map(option => (
          <CustomSelectItem key={option} value={option} onClick={() => onChange(option)}>
            {option}
          </CustomSelectItem>
        ))}
      </CustomSelectContent>
    </CustomSelect>
  )
}
