import { BacklinksActions } from '@/components/link-building/backlinks-actions'
import { BacklinksFilters } from '@/components/link-building/backlinks-filters'
import { BacklinksHeader } from '@/components/link-building/backlinks-header'
import { BacklinksStats } from '@/components/link-building/backlinks-stats'
import { BacklinksDataTable } from '@/components/link-building/backlinks-table'
import BacklinksTabs from '@/components/link-building/backlinks-tabs'

import { BacklinksFilterProvider } from '@/context/backlinks-filter-context'

export default function LinkBuildingPage() {
  const DOMAIN = 'konvart.com'
  const TOTAL_BACKLINKS = 188880
  const PROVIDED_RESULTS = 100

  return (
    <BacklinksFilterProvider>
      <div className=' py-6'>
        <BacklinksHeader domain={DOMAIN} />
        <BacklinksTabs />
        <BacklinksStats totalBacklinks={TOTAL_BACKLINKS} providedResults={PROVIDED_RESULTS} />
        <BacklinksFilters />
        <BacklinksActions />
        <BacklinksDataTable />
      </div>
    </BacklinksFilterProvider>
  )
}
