export interface Backlink {
  referring_page: string
  dr: number
  pr: number
  spam_score: string
  target_url: string
  status_code: number
  ip_address: string
  do_follow: boolean
  live_status: "Live" | "Dead"
  no_of_links: number
}
