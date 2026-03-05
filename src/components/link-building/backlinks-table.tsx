'use client'

import { useState } from 'react'

import type { ColumnFiltersState, SortingState, VisibilityState } from '@tanstack/react-table'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'

import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'

import { columns } from './backlinks-columns'

import { useBacklinksFilter } from '@/context/backlinks-filter-context'

export function BacklinksDataTable() {
  const { filteredData } = useBacklinksFilter()

  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data: filteredData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    },
    initialState: {
      pagination: {
        pageSize: 20
      }
    }
  })

  return (
    <div className='space-y-4 px-8' data-table-container>
      <div className='rounded-md border border-slate-200 px-3 py-2'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id} className='bg-slate-50'>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead key={header.id} className='px-0 font-normal'>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className=''>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className={`border-b border-slate-100 hover:bg-slate-50 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                  } data-[state=selected]:bg-white data-[state=selected]:hover:bg-slate-50`}
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id} className='py-3 whitespace-normal'>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className='h-24 text-center'>
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className='flex items-center justify-end gap-4 px-8'>
        <div className='text-sm text-slate-600'>{table.getState().pagination.pageSize} result per page</div>
        <div className='text-sm text-slate-600'>
          {table.getState().pagination.pageIndex + 1} of{' '}
          {Math.ceil(filteredData.length / table.getState().pagination.pageSize)}
        </div>
        <Button
          variant='outline'
          size='sm'
          onClick={() => {
            table.previousPage()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft className='h-4 w-4' />
          Previous
        </Button>

        <Button
          variant='default'
          size='sm'
          onClick={() => {
            table.nextPage()
            document.querySelector('[data-table-container]')?.scrollIntoView({ behavior: 'smooth' })
          }}
          disabled={!table.getCanNextPage()}
        >
          Next
          <ChevronRight className='h-4 w-4' />
        </Button>
      </div>
    </div>
  )
}
