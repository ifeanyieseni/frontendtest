import { extractFilterOptions } from '@/lib/utils'
import type { FilterConfig } from '@/types/filters'

const options = extractFilterOptions()

export const filtersConfig: FilterConfig[] = [
  {
    id: 'status_code',
    label: 'Status of target url',
    type: 'select',
    options: ['200', '301', '302', '404', '500']
  },
  {
    id: 'live_status',
    label: 'Link Status',
    type: 'select',
    options: options.live_status
  },
  {
    id: 'spam_score',
    label: 'Backlink spam score',
    type: 'range'
  },
  {
    id: 'referring_page',
    label: 'Referring page',
    type: 'select',
    options: ['All']
  },
  {
    id: 'dr',
    label: 'DR',
    type: 'range'
  },
  {
    id: 'ip_address',
    label: 'IP',
    type: 'select',
    options: ['195.54.213.127']
  },
  {
    id: 'target_url',
    label: 'Target URL',
    type: 'select',
    options: ['https://www.example.com', 'https://www.example.org', 'https://www.example.net']
  }
]
