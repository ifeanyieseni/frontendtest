import type { Backlink } from '@/types/backlinks'

const baseBacklinks: Backlink[] = [
  {
    referring_page: 'https://www.example.com/blog',
    dr: 70,
    pr: 93,
    spam_score: '30%',
    target_url: 'https://www.example.com',
    status_code: 200,
    ip_address: '195.54.213.127',
    do_follow: true,
    live_status: 'Live',
    no_of_links: 34
  },
  {
    referring_page: 'https://www.example.com/post-1',
    dr: 65,
    pr: 80,
    spam_score: '20%',
    target_url: 'https://www.example.org',
    status_code: 301,
    ip_address: '195.54.213.127',
    do_follow: false,
    live_status: 'Live',
    no_of_links: 12
  },
  {
    referring_page: 'https://www.sample.com/page',
    dr: 60,
    pr: 88,
    spam_score: '40%',
    target_url: 'https://www.example.net',
    status_code: 400,
    ip_address: '195.54.213.127',
    do_follow: true,
    live_status: 'Dead',
    no_of_links: 5
  }
]

export const backlinks = Array.from({ length: 50 }, (_, i) => {
  const baseItem = baseBacklinks[i % baseBacklinks.length]

  return {
    ...baseItem,
    referring_page: baseItem.referring_page,
    dr: baseItem.dr + (i % 10),
    pr: baseItem.pr - (i % 5),
    spam_score: `${Math.min(100, parseInt(baseItem.spam_score) + (i % 20))}%`,
    no_of_links: baseItem.no_of_links + (i % 15)
  }
})
