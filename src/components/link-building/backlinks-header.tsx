'use client'

interface BacklinksHeaderProps {
  domain: string
}

export const BacklinksHeader = ({ domain }: BacklinksHeaderProps) => (
  <div className="mb-6 mx-auto max-w-7xl px-8">
    <h1 className="text-2xl font-bold flex items-center gap-2">
      Backlink: <span className="text-slate-500 font-normal">{domain}</span>
    </h1>
  </div>
)
