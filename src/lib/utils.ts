import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { backlinks } from '@/data/frontendtestdata'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function scrollToSection(sectionId: string, headerHeight = 80) {
  if (typeof window === 'undefined' || !sectionId) return

  const element = document.getElementById(sectionId)

  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })


    try {
      history.replaceState(null, '', `#${sectionId}`)
    } catch {

      window.location.hash = `#${sectionId}`
    }
  }
}





export function extractFilterOptions() {

  const statusCodes = Array.from(
    new Set(backlinks.map(item => String(item.status_code)))
  ).sort()

  const liveStatuses = Array.from(
    new Set(backlinks.map(item => item.live_status))
  )


  const ipAddresses = Array.from(
    new Set(backlinks.map(item => item.ip_address))
  )


  const targetUrls = Array.from(
    new Set(backlinks.map(item => item.target_url))
  )

  const referringPages = Array.from(
    new Set(backlinks.map(item => item.referring_page))
  )

  return {
    status_code: statusCodes,
    live_status: liveStatuses,
    ip_address: ipAddresses,
    target_url: targetUrls,
    referring_page: referringPages
  }
}
