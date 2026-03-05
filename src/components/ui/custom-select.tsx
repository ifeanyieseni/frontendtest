'use client'

import { useState, useRef, useEffect, createContext, useContext } from 'react'


import { ChevronDown } from 'lucide-react'

const CustomSelectContext = createContext<{ close: () => void } | null>(null)

interface CustomSelectProps {
  placeholder: string
  children: React.ReactNode
  value?: string
  contentWidth?: string | 'w-auto'
}

export function CustomSelect({ placeholder, children, value, contentWidth }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <CustomSelectContext.Provider value={{ close: () => setIsOpen(false) }}>
      <div ref={containerRef} className='relative inline-block'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex h-9 items-center justify-between gap-2 rounded-none border border-slate-200 bg-white px-3 text-sm whitespace-nowrap transition hover:bg-slate-50'
        >
          <span className='max-w-50 truncate'>{value || placeholder}</span>
          <ChevronDown className={`h-4 w-4 shrink-0 transition ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className={`absolute top-full left-0 z-50 mt-1 ${contentWidth} space-y-4 rounded-md bg-white shadow-lg`}>
            {children}
          </div>
        )}
      </div>
    </CustomSelectContext.Provider>
  )
}

interface CustomSelectContentProps {
  children: React.ReactNode
}

export function CustomSelectContent({ children }: CustomSelectContentProps) {
  return <div className='max-h-60 overflow-y-auto'>{children}</div>
}

interface CustomSelectItemProps {
  value: string
  children: React.ReactNode
  onClick: (value: string) => void
}

export function CustomSelectItem({ value, children, onClick }: CustomSelectItemProps) {
  const context = useContext(CustomSelectContext)

  const handleClick = () => {
    onClick(value)
    context?.close() // Close dropdown after selection
  }

  return (
    <button
      onClick={handleClick}
      className='w-full px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-slate-100'
    >
      {children}
    </button>
  )
}
