'use client'

import type { ColumnDef } from '@tanstack/react-table'
import { ChevronsUpDown , ExternalLink, Info, Triangle } from 'lucide-react'

import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

import type { Backlink } from '@/types/backlinks'
import { getStatusColor } from '@/utils/getStatusColor'

export const columns: ColumnDef<Backlink>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        className='data-[state=checked]:bg-transparent'
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all rows'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false
  },

  {
    accessorKey: 'referring_page',
    header: ({ column }) => (
      <Button
        variant='ghost'
        className='p-0!'
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}

      >
        Referring page
        <ChevronsUpDown className=' h-4 w-4' />
      </Button>
    ),
    cell: ({ row, table }) => {
      const url = row.getValue('referring_page') as string

      const isRowSelected = row.getIsSelected()
      const isAllSelected = table.getIsAllRowsSelected()

      const showViewBacklink = isRowSelected || isAllSelected

      return (
        <div className='flex flex-col gap-1'>
          <p className='flex items-start gap-1 leading-tight text-blue-600 hover:underline'>
            <span className='max-w-xs break-all'>{url}</span>

            <Triangle className='mt-1 h-2.5 w-2.5 shrink-0 text-[#A3A3A3F5] ' />
          </p>

          {showViewBacklink && (
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1 text-[15px] whitespace-nowrap hover:underline'
            >
              View backlink overview
              <ExternalLink className='h-3 w-3 shrink-0 text-[#A3A3A3F5]' />
            </a>
          )}
        </div>
      )
    }
  },

  {
    accessorKey: 'dr',
    header: ({ column }) => (
      <Button
        variant='ghost'
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}

      >
        DR
        <ChevronsUpDown className=' h-4 w-4' />
      </Button>
    ),
    cell: ({ row }) => <div className='text-center text-sm  text-slate-900'>{row.getValue('dr')}</div>
  },

  {
    accessorKey: 'pr',
    header: ({ column }) => (
      <Button
        variant='ghost'

        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}

      >
        PR
        <ChevronsUpDown className=' h-4 w-4' />
      </Button>
    ),
    cell: ({ row }) => <div className='text-center text-sm  text-slate-900'>{row.getValue('pr')}</div>
  },

  {
    accessorKey: 'spam_score',
    header: ({ column }) => (
      <Button
        variant='ghost'
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className='flex items-center '
      >
        Spam score
        <Info className='ml-1 h-4 w-4 text-slate-400' />
      </Button>
    ),
    cell: ({ row }) => {
      const score = row.getValue('spam_score') as string



      return (
        <div className='text-center text-sm '>
          <span >{score}</span>
        </div>
      )
    }
  },

  {
    accessorKey: 'target_url',
    header: ({ column }) => (
      <Button
        variant='ghost'
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}

      >
        Target URL
        <ChevronsUpDown className=' h-4 w-4' />
      </Button>
    ),
    cell: ({ row ,table}) => {
       const url = row.getValue('target_url') as string
       const statusCode = row.original.status_code

       const isRowSelected = row.getIsSelected()
       const isAllSelected = table.getIsAllRowsSelected()
       const showViewBacklink = isRowSelected || isAllSelected

       const statusColor = getStatusColor(statusCode)

       return (
         <div className='flex max-w-55 flex-col gap-1'>
           <p className='flex items-start gap-1 leading-tight text-blue-600 hover:underline'>
             <span className='max-w-xs break-all'>{url}</span>

             <Triangle className='mt-1 h-2.5 w-2.5 shrink-0 text-[#A3A3A3F5]' />
           </p>

           {showViewBacklink && (
             <a
               href={url}
               target='_blank'
               rel='noopener noreferrer'
               className='flex items-center gap-1 text-[15px] whitespace-nowrap hover:underline'
             >
               View backlink overview
               <ExternalLink className='h-3 w-3 shrink-0 text-[#A3A3A3F5]' />
             </a>
           )}

           <span className={`text-xs ${statusColor}`}>{statusCode}</span>
         </div>
       )
    }
  },

  {
    accessorKey: 'ip_address',
    header: ({ column }) => (
      <Button
        variant='ghost'
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}

      >
        IP Address
        <ChevronsUpDown className=' h-4 w-4' />
      </Button>
    ),
    cell: ({ row }) => <div className='text-center  text-xs text-brand-blue'>{row.getValue('ip_address')}</div>
  },

  {
    accessorKey: 'do_follow',
    header: ({ column }) => (
      <Button
        variant='ghost'
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}

      >
        Do follow
        <ChevronsUpDown className=' h-4 w-4' />
      </Button>
    ),
    cell: ({ row }) => {
      const doFollow = row.getValue('do_follow') as boolean

      return <div className=' text-sm text-center'>{doFollow ? 'Yes' : 'No'}</div>
    }
  },

  {
    accessorKey: 'live_status',
    header: ({ column }) => (
      <Button
        variant='ghost'
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}

      >
        Status
        <ChevronsUpDown className=' h-4 w-4' />
      </Button>
    ),
    cell: ({ row }) => {
      const status = row.getValue('live_status') as 'Live' | 'Dead'


      return (
        <div className='flex flex-col items-center gap-1'>

          <span>{status}</span>
        </div>
      )
    }
  },

  {
    accessorKey: 'no_of_links',
    header: ({ column }) => (
      <Button
        variant='ghost'
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className='flex items-center hover:bg-slate-100'
      >
        No of links
        <Info className=' h-4 w-4 text-slate-400' />
        <ChevronsUpDown className=' h-4 w-4' />
      </Button>
    ),
    cell: ({ row }) => (
      <div className='text-center text-sm  text-slate-900'>{row.getValue('no_of_links')}</div>
    )
  }
]
